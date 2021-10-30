"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = __importDefault(require("cheerio"));
class cryptoLand {
    async getCrypto(name) {
        name = name.replace(' ', '-').toLocaleLowerCase();

        const url = `https://www.tgju.org/profile/crypto-${name}`;
        const response = await axios_1.default.get(url);
        let $ = cheerio_1.default.load(response.data);
        const priceParent = $('.value');
        let last = priceParent.children().first().text();
        const usd = priceParent.children().first().text();
        let ril = $($(':contains("قیمت ریالی")')[14]).parent().children().last().text();
        let nameEng = $($("[data-target='profile-tour-step-1']")[0]).parent().parent().text().trim().split('\n')[4];
        let namePr = $($("[data-target='profile-tour-step-1']")[0]).parent().parent().text().trim().split('\n')[0];
        let highest_price_day = $($(':contains("بالاترین قیمت روز")')[14]).parent().children().last().text();
        let lowest_price_day = $($(':contains("پایین ترین قیمت روز")')[14]).parent().children().last().text();
        let yesterday_rate = $($(':contains("نرخ روز گذشته")')[14]).parent().children().last().text();
        let market_reopening_rate = $($(':contains("نرخ بازگشایی بازار")')[14]).parent().children().last().text();
        let max_Fluctuation = $($(':contains("بیشترین مقدار نوسان روز")')[14]).parent().children().last().text();
        let percentage_yesterday = $($(':contains("درصد تغییر نسبت به روز گذشته")')[14]).parent().children().last().text();
        let rate_compared_yesterday = $($(':contains("میزان تغییر نسبت به روز گذشته")')[14]).parent().children().last().text();
        let icon = $('.m-avatar-question-box').css('background-image');
        if (typeof icon == 'string')
            icon = icon.replace(/url\(|\)/g, '');
        let items = {
            name: nameEng,
            names: {
                eng: nameEng,
                fa: namePr
            },
            last,
            prices: {
                usd,
                ril,
            },
            highest_price_day,
            lowest_price_day,
            yesterday_rate,
            market_reopening_rate,
            max_Fluctuation,
            percentage_yesterday,
            rate_compared_yesterday,
            icon,
            getUrlFullDetails: () => {
                return url;
            }
        };
        return items;
    }
}
module.exports = new cryptoLand();
// export = new cryptoLand()
//# sourceMappingURL=index.js.map