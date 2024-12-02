import React, { useState, useEffect } from 'react'
import Header from '../components/Common/Header';
import SelectCoin from '../components/Compare/SelectCoin';
import SelectDays from '../components/Coin/SelectDays';
import List from '../components/Dashboard/List';
import CoinInfo from '../components/Coin/CoinInfo';
import Loader from '../components/Common/Loader';
import { coinObject } from '../functions/convertObject';
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrices';
import { settingChartData } from '../functions/settingChartData';
import LineChart from '../components/Coin/LineChart';
import TogglePriceType from '../components/Coin/PriceType';


function ComparePage() {
    const [crypto1, setCrypto1] = useState('bitcoin');
    const [crypto2, setCrypto2] = useState('ethereum');
    const [crypto1Data, setCrypto1Data] = useState({});
    const [crypto2Data, setCrypto2Data] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [days, setDays] = useState(30);
    const [priceType, setPriceType] = useState('prices');
    const [chartData, setChartData] = useState({});
    


    async function handleDaysChange(event) {
        setIsLoading(true);
        setDays(event.target.value);
        const prices1 = await getCoinPrices(crypto1, event.target.value, priceType);
        const prices2 = await getCoinPrices(crypto2, event.target.value, priceType);
        settingChartData(setChartData, prices1, prices2);
        setIsLoading(false);
    }

    const handlePriceTypeChange = async (event, newType) => {
        setIsLoading(true);
        setPriceType(newType);
        const prices1 = await getCoinPrices(crypto1, days, newType);
        const prices2 = await getCoinPrices(crypto2, days, newType);
        settingChartData(setChartData, prices1, prices2);
        setIsLoading(false);
    };

    useEffect(() => {
        getData();
    }, [crypto1, crypto2]);

    async function getData() {
        setIsLoading(true);
        try {
            const [data1, data2] = await Promise.all([
                getCoinData(crypto1),
                getCoinData(crypto2)
            ]);

            if (data1 && data2) {
                coinObject(setCrypto1Data, data1);
                coinObject(setCrypto2Data, data2);

                const [prices1, prices2] = await Promise.all([
                    getCoinPrices(crypto1, days, priceType),
                    getCoinPrices(crypto2, days, priceType)
                ]);

                if (prices1 && prices2) {
                    settingChartData(
                        setChartData, 
                        prices1, 
                        prices2, 
                        data1.name, 
                        data2.name
                    );
                }
            }
        } catch (error) {
            console.error("데이터 로딩 중 오류 발생:", error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleCoinChange = async (event, isCrypto2) => {
        if (isCrypto2) {
            setCrypto2(event.target.value);
        } else {
            setCrypto1(event.target.value);
        }
    };

    return (
        <div>
            <Header />
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <div className='coins-days-flex'>
                        <SelectCoin
                            crypto1={crypto1}
                            handleCoinChange={handleCoinChange}
                            crypto2={crypto2}
                        />
                        <SelectDays
                            days={days}
                            handleDaysChange={handleDaysChange}
                            noPTag={true}
                        />
                    </div>
                    <div className='grey-wrapper' style={{ padding: '0rem 1rem' }}>
                        <List coin={crypto1Data} />
                    </div>
                    <div className='grey-wrapper' style={{ padding: '0rem 1rem' }}>
                        <List coin={crypto2Data} />
                    </div>
                    <div className='grey-wrapper'>
                    <TogglePriceType
                            priceType={priceType}
                            handlePriceTypeChange={handlePriceTypeChange}
                        />
                        <LineChart 
                        chartData={chartData} 
                        priceType={priceType} 
                        multiAxis={true} 
                        />
                    </div>
                    <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
                    <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
                </>
            )}
        </div>
    )
};

export default ComparePage;
