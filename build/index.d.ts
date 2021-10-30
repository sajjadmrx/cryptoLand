declare type cryptoData = string | undefined;
declare type crypto = {
    name: string;
    names: {
        eng: cryptoData;
        fa: cryptoData;
    };
    last: cryptoData;
    prices: {
        usd: cryptoData;
        ril: cryptoData;
    };
    highest_price_day: cryptoData;
    lowest_price_day: cryptoData;
    yesterday_rate: cryptoData;
    market_reopening_rate: cryptoData;
    max_Fluctuation: cryptoData;
    percentage_yesterday: cryptoData;
    rate_compared_yesterday: cryptoData;
    icon: cryptoData;
    getUrlFullDetails: () => string;
};
declare class cryptoLand {
    getCrypto(name: string): Promise<crypto>;
}
declare const _default: cryptoLand;
export = _default;
//# sourceMappingURL=index.d.ts.map