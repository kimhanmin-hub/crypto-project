import axios from "axios"

export const getCoinPrices =  (id, days, priceType) => {
        const prices = axios
        .get
        (`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=krw&days=${days}&interval=daily`,
        { crossDomain: true }
        )
    .then((response) => {
        console.log('prices>>',response.data);
        return response.data[priceType];
    })
    .catch((error) => {
        console.error('API 오류>>>', error);
    });
    return prices;
};
