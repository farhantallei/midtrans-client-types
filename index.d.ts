declare module "midtrans-client" {
  export type StatusCode = "200" | "407"

  export type Currency = "IDR"

  export type Unit = "minute"

  export type TransactionType = "on-us"

  export type TransactionStatus =
    | "capture"
    | "settlement"
    | "deny"
    | "cancel"
    | "expire"
    | "pending"

  export type FraudStatus = "accept"

  export type PaymentType = "qris" | "bank_transfer"

  export type Acquirer = "" | "gopay" | "BCA"
  export type Issuer = "gopay"

  export interface MidtransClientOptions {
    isProduction: boolean
    serverKey: string
    clientKey: string
  }

  export interface SnapPayload {
    transaction_details: {
      order_id: string
      currency?: Currency
      gross_amount: number
    }
    customer_details?: {
      first_name?: string
      last_name?: string
      email?: string
      phone?: string
    }
    item_details?: {
      id: string
      name: string
      price: number
      quantity: number
    }[]
    expiry?: {
      duration: number
      unit: Unit
    }
    callbacks?: {
      finish: string
    }
    credit_card?: {
      secure: boolean
    }
    enabled_payments?: string[]
    gopay?: {
      enable_callback: boolean
      callback_url: string
    }
  }

  export interface CreateTransactionResponse {
    token: string
    redirect_url: string
  }

  export interface CancelTransactionResponse {
    status_code: StatusCode
    status_message: string
    transaction_id: string
    order_id: string
    merchant_id: string
    gross_amount: string
    currency: Currency
    payment_type: PaymentType
    transaction_time: string
    transaction_status: TransactionStatus
    fraud_status: FraudStatus
  }

  export interface ExpireTransactionResponse {
    status_code: StatusCode
    status_message: string
    transaction_id: string
    order_id: string
    merchant_id: string
    gross_amount: string
    currency: Currency
    payment_type: PaymentType
    transaction_time: string
    transaction_status: TransactionStatus
    fraud_status: FraudStatus
    acquirer: Acquirer
  }

  export interface GetTransactionStatusResponse {
    status_code: StatusCode
    transaction_id: string
    gross_amount: string
    currency: Currency
    order_id: string
    payment_type: PaymentType
    signature_key: string
    transaction_status: TransactionStatus
    fraud_status: FraudStatus
    status_message: string
    merchant_id: string
    transaction_time: string
    expiry_time: string
  }

  export interface GetTransactionStatusb2bResponse {
    status_code: StatusCode
    status_message: string
    transactions: GetTransactionStatusResponse[]
  }

  export interface TransactionWebhookPayload {
    transaction_type: TransactionType
    transaction_time: string
    transaction_status: TransactionStatus
    transaction_id: string
    status_message: string
    status_code: StatusCode
    signature_key: string
    settlement_time: string
    payment_type: PaymentType
    order_id: string
    merchant_id: string
    issuer: Issuer
    gross_amount: string
    fraud_status: FraudStatus
    expiry_time: string
    currency: Currency
    acquirer: Acquirer
  }

  class CoreApi {
    constructor(options: MidtransClientOptions)
  }

  class Transaction {
    status(transactionId: string): Promise<GetTransactionStatusResponse>
    statusb2b(transactionId: string): Promise<GetTransactionStatusb2bResponse>
    cancel(transactionId: string): Promise<CancelTransactionResponse>
    expire(transactionId: string): Promise<ExpireTransactionResponse>
  }

  class Snap {
    constructor(options: MidtransClientOptions)

    createTransaction(
      parameter: SnapPayload
    ): Promise<CreateTransactionResponse>

    transaction: Transaction
  }

  class MidtransError extends Error {
    httpStatusCode: number | null
    ApiResponse: any
    rawHttpClientData: any

    constructor(
      message: string,
      httpStatusCode?: number | null,
      ApiResponse?: any,
      rawHttpClientData?: any
    )
  }
}
