## For Developers:

Clone the source locally:

```bash
$ git clone https://github.com/swarnabgarang/foodict-backend.git
$ cd foodict-backend
```

Install project dependencies:

```bash
$ npm install
```

Create environment variables:

```bash
$ mkdir config
$ cd ./config
$ touch dev.env
```

Enter the env variables in the `dev.env` file

```
FOODICT_MONGO_URL="<database url>"
FOODICT_JWT_SECRET="<your JWT secret>"
FOODICT_RZPAY_KEYID="<key id from Razorpay APIs>"
FOODICT_RZPAY_KEYSECRET="<keySecret from Razorpay APIs>"
```

Start the app:

```bash
$ npm run start
```

---

## Built with

-   [NodeJS](https://nodejs.org/en/ "NodeJS")
-   [ExpressJS](https://expressjs.com/ "ExpressJS")

---
