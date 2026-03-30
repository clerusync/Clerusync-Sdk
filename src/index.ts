import axios, { AxiosResponse } from "axios";

export interface ForexRequest {
  from: string;
  to: string;
}

export class ClerusyncAPI {
  private apiKey: string;
  private baseURL: string;

  /**
   * Create a new API client
   * @param apiKey 
   */
  constructor(apiKey: string) {
    if (!apiKey) throw new Error("API key is required");
    this.apiKey = apiKey;
    this.baseURL = "https://clerusyncinvestment.com/public/api";
  }

  // Helper for GET requests
  private async _get<T>(endpoint: string, params: Record<string, string> = {}): Promise<T> {
    const response: AxiosResponse<T> = await axios.get(`${this.baseURL}${endpoint}`, {
      headers: { "x-api-key": this.apiKey },
      params
    });
    return response.data;
  }

  // Helper for POST requests
  private async _post<T>(endpoint: string, body: Record<string, any> = {}): Promise<T> {
    const response: AxiosResponse<T> = await axios.post(`${this.baseURL}${endpoint}`, body, {
      headers: {
        "x-api-key": this.apiKey,
        "Content-Type": "application/json"
      }
    });
    return response.data;
  }

  /** Get stock data */
  async getStocks<T = any>(): Promise<T> {
    return this._get("/stocks");
  }

  /** Get Forex data with AI explanation */
  async getForex<T = any>({ from, to }: ForexRequest): Promise<T> {
    if (!from || !to) throw new Error("Both 'from' and 'to' currencies are required");
    return this._post("/forex", { from, to });
  }

  /** Get economic calendar for a currency pair */
  async getCalendar<T = any>({ from, to }: ForexRequest): Promise<T> {
    if (!from || !to) throw new Error("Both 'from' and 'to' currencies are required");
    return this._get("/calendar", { from, to });
  }

  /** Get financial news for a currency pair */
  async getNews<T = any>({ from, to }: ForexRequest): Promise<T> {
    if (!from || !to) throw new Error("Both 'from' and 'to' currencies are required");
    return this._get("/news", { from, to });
  }
}