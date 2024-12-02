import axios from 'axios';

export const get100Coins = async () => {
    try {
        const response = await axios.get(
            'https://api.coingecko.com/api/v3/coins/markets',
            {
                params: {
                    vs_currency: 'krw',
                    order: 'market_cap_desc',
                    per_page: 100,
                    page: 1,
                    sparkline: false
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching coins:", error);
        return [];  // 오류 시 빈 배열 반환
    }
};