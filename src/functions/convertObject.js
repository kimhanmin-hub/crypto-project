export const coinObject = (setState, data) => {
    setState({
        id: data.id,
        name: data.name,
        symbol: data.symbol,
        image: data.image.large,
        desc: data.description.ko,
        price_change_percentage_24h: data.market_data.price_change_percentage_24h,
        total_volume: data.market_data.total_volume.krw,
        current_price: data.market_data.current_price.krw,
        market_cap: data.market_data.market_cap.krw,
    })  ;
}
