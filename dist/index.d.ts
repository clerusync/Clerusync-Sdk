export interface ForexRequest {
    from: string;
    to: string;
}
export declare class ClerusyncAPI {
    private apiKey;
    private baseURL;
    /**
     * Create a new API client
     * @param apiKey
     */
    constructor(apiKey: string);
    private _get;
    private _post;
    /** Get stock data */
    getStocks<T = any>(): Promise<T>;
    /** Get Forex data with AI explanation */
    getForex<T = any>({ from, to }: ForexRequest): Promise<T>;
    /** Get economic calendar for a currency pair */
    getCalendar<T = any>({ from, to }: ForexRequest): Promise<T>;
    /** Get financial news for a currency pair */
    getNews<T = any>({ from, to }: ForexRequest): Promise<T>;
}
