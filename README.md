# @types/midtrans-client

TypeScript declarations for [`midtrans-client`](https://github.com/Midtrans/midtrans-nodejs-client).  
This package is intended to provide type safety when using Midtrans SDK in a TypeScript project.

> ⚠️ Not an official package. Created and maintained by the community.

---

## 📦 Installation

You can install this package directly from GitHub:

### Using Bun
```bash
bun add -D github:farhantallei/midtrans-client-types
```

### Using npm
```bash
npm install -D github:farhantallei/midtrans-client-types
```

### Using Yarn
```bash
yarn add -D github:farhantallei/midtrans-client-types
```

### Using pnpm
```bash
pnpm add -D github:farhantallei/midtrans-client-types
```

---

## ⚙️ Usage

Since this package only provides type declarations, you still need to install the actual midtrans-client package:

```bash
npm install midtrans-client
# or
yarn add midtrans-client
# or
pnpm add midtrans-client
# or
bun add midtrans-client
```

Then just use it in your TypeScript code as usual:

```ts
import midtrans from "midtrans-client"

const snap = new midtrans.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY!,
  clientKey: process.env.MIDTRANS_CLIENT_KEY!,
})
```

No additional config is needed in your tsconfig.json since it follows standard TypeScript declaration structure.

---

## 📄 License

This project is licensed under the MIT License.
