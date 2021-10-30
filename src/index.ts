import axios from 'axios';
import cheerio from 'cheerio';

type cryptoData = string | undefined

type crypto = {

    name: string,
    names: {
        eng: cryptoData,
        fa: cryptoData,
    }
    last: cryptoData,
    prices: {
        usd: cryptoData,
        ril: cryptoData,
    }
    highest_price_day: cryptoData,
    lowest_price_day: cryptoData,
    yesterday_rate: cryptoData,
    market_reopening_rate: cryptoData,
    max_Fluctuation: cryptoData,
    percentage_yesterday: cryptoData,
    rate_compared_yesterday: cryptoData,
    icon: cryptoData,
    getUrlFullDetails: () => string

};




class cryptoLand {




    async getCrypto(name: string): Promise<crypto> {

        name = name.replace(' ', '-').toLocaleLowerCase()

        const url = `https://www.tgju.org/profile/crypto-${name}`;

        const response = await axios.get(url)
        let $ = cheerio.load(response.data);
        const priceParent = $('.value')

        let last: cryptoData = priceParent.children().first().text()

        const usd: cryptoData = priceParent.children().first().text()
        let ril: cryptoData = $($(':contains("قیمت ریالی")')[14]).parent().children().last().text()

        let nameEng: cryptoData = $($("[data-target='profile-tour-step-1']")[0]).parent().parent().text().trim().split('\n')[4];
        let namePr: cryptoData = $($("[data-target='profile-tour-step-1']")[0]).parent().parent().text().trim().split('\n')[0];

        let highest_price_day: cryptoData = $($(':contains("بالاترین قیمت روز")')[14]).parent().children().last().text()

        let lowest_price_day: cryptoData = $($(':contains("پایین ترین قیمت روز")')[14]).parent().children().last().text()
        let yesterday_rate: cryptoData = $($(':contains("نرخ روز گذشته")')[14]).parent().children().last().text()

        let market_reopening_rate: cryptoData = $($(':contains("نرخ بازگشایی بازار")')[14]).parent().children().last().text()
        let max_Fluctuation: cryptoData = $($(':contains("بیشترین مقدار نوسان روز")')[14]).parent().children().last().text()

        let percentage_yesterday: cryptoData = $($(':contains("درصد تغییر نسبت به روز گذشته")')[14]).parent().children().last().text()
        let rate_compared_yesterday: cryptoData = $($(':contains("میزان تغییر نسبت به روز گذشته")')[14]).parent().children().last().text()

        let icon: cryptoData = $('.m-avatar-question-box').css('background-image')
        if (typeof icon == 'string')
            icon = icon.replace(/url\(|\)/g, '');




        let items: crypto = {
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
                return url
            }

        };



        return items;


    }




}


export = new cryptoLand()



// export = new cryptoLand()