#  Clerusync SDK

Official Node.js SDK for accessing the Clerusync Investment API including stocks, forex trends with AI insights, economic calendar data and financial news. 

---

##  Installation

```bash
npm install clerusync-sdk
```

---

##  Authentication

You must provide your API key when initialising the SDK.

#  JavaScript

```js
const ClerusyncSDK = require("clerusync-sdk");

const api = new ClerusyncSDK("YOUR_API_KEY");
```

#  TypeScript

```js
import { ClerusyncAPI } from "clerusync-sdk";

const api = new ClerusyncAPI("YOUR_API_KEY");
```

---

##  Usage

### Get Stocks

```js
const stocks = await api.getStocks();
console.log(stocks);
```

---

###  Get Forex + AI Insight

```js
const forex = await api.getForex("currency_code_1", "currency_code_2");
console.log(forex);
```
 
---

###  Get Economic Calendar

```js
const calendar = await api.getCalendar("currency_code_1", "currency_code_2");
console.log(calendar);
```

---

###  Get Financial News

```js
const news = await api.getNews("currency_code_1", "currency_code_2");
console.log(news);
```

---

## Functional Example

```js
import { ClerusyncAPI } from "clerusync-sdk";

const api = new ClerusyncAPI("YOUR_API_KEY");

(async () => {
  try {
    const stocks = await api.getStocks();
    console.log("Stocks:", stocks);

    const forex = await api.getForex("currency_code_1", "currency_code_2");
    console.log("Forex:", forex);

    const calendar = await api.getCalendar("currency_code_1", "currency_code_2");
    console.log("Calendar:", calendar);

    const news = await api.getNews("currency_code_1", "currency_code_2");
    console.log("News:", news);
  } catch (err) {
    console.error("Error:", err.message);
  }
})();
```
  

##  Base URL

``` 
https://clerusyncinvestment.com/public/api
```

---

## Using Environment Variables

### You can store your API key in an environment variable.
 
### Unix / macOS / Linux:

```bash
export CLERUSYNC_INVESTMENT_API_KEY=your_key_here
```

### Windows (PowerShell):
```js
setx CLERUSYNC_INVESTMENT_API_KEY "your_key_here"
```
# Usage:
```js
import { ClerusyncAPI } from "clerusync-sdk";

const api = new ClerusyncAPI(process.env.CLERUSYNC_INVESTMENT_API_KEY!);
```
---
## Creating .env file

```.env
CLERUSYNC_INVESTMENT_API_KEY=your_key_here
```
### You can use packages like [dotenv](https://www.npmjs.com/package/dotenv) to load this in your project:

#  JavaScript
```
require("dotenv").config();
```
#  TypeScript
```
import dotenv from "dotenv";
dotenv.config();

import { ClerusyncAPI } from "clerusync-sdk";

const api = new ClerusyncAPI(process.env.CLERUSYNC_INVESTMENT_API_KEY!);
```
---

##  License

MIT

---

##  Contributing

Pull requests are welcome. If you would like to recommend new changes, please open an issue to discuss what you would like to added.

---

##  Support

If you run into issues, open an issue on [GitHub](https://www.npmjs.com/package/clerusync-sdk)  or contact info@clerusync.com
