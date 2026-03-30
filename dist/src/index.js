"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClerusyncAPI = void 0;
const axios_1 = __importDefault(require("axios"));
class ClerusyncAPI {
    /**
     * Create a new API client
     * @param apiKey
     */
    constructor(apiKey) {
        if (!apiKey)
            throw new Error("API key is required");
        this.apiKey = apiKey;
        this.baseURL = "https://clerusyncinvestment.com/public/api";
    }
    // Helper for GET requests
    async _get(endpoint, params = {}) {
        const response = await axios_1.default.get(`${this.baseURL}${endpoint}`, {
            headers: { "x-api-key": this.apiKey },
            params
        });
        return response.data;
    }
    // Helper for POST requests
    async _post(endpoint, body = {}) {
        const response = await axios_1.default.post(`${this.baseURL}${endpoint}`, body, {
            headers: {
                "x-api-key": this.apiKey,
                "Content-Type": "application/json"
            }
        });
        return response.data;
    }
    /** Get stock data */
    async getStocks() {
        return this._get("/stocks");
    }
    /** Get Forex data with AI explanation */
    async getForex({ from, to }) {
        if (!from || !to)
            throw new Error("Both 'from' and 'to' currencies are required");
        return this._post("/forex", { from, to });
    }
    /** Get economic calendar for a currency pair */
    async getCalendar({ from, to }) {
        if (!from || !to)
            throw new Error("Both 'from' and 'to' currencies are required");
        return this._get("/calendar", { from, to });
    }
    /** Get financial news for a currency pair */
    async getNews({ from, to }) {
        if (!from || !to)
            throw new Error("Both 'from' and 'to' currencies are required");
        return this._get("/news", { from, to });
    }
}
exports.ClerusyncAPI = ClerusyncAPI;
