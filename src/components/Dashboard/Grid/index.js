import React, { useState } from 'react';
import './styles.css';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import { convertNumbers } from '../../../functions/convertNumbers';
import { Link } from 'react-router-dom';
import { saveItemToWatchlist } from '../../../functions/saveItemToWatchlist';
import { removeItemToWatchlist } from '../../../functions/removeItemToWatchlist';

function Grid({ coin }) {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [isCoinAdded, setIsCoinAdded] = useState(watchlist?.includes(coin.id));

  return (
    <Link to={`/coin/${coin.id}`}>
      <div
        className={`grid-container 
        ${coin.price_change_percentage_24h.toFixed(2) < 0 && 'grid-container-red'
          }`}
      >
        <div className='info-flex'>
          <img src={coin.image} className='coin-logo' />
          <div className='name-col'>
            <p className='coin-symbol'>{coin.symbol}</p>
            <p className='coin-name'>{coin.name}</p>
          </div>
          <div
            className={`watchlist-icon ${
              coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
            }`}
            onClick={(e) => {
              if (isCoinAdded) {
                removeItemToWatchlist(e, coin.id, setIsCoinAdded);
              } else {
                setIsCoinAdded(true);
                saveItemToWatchlist(e, coin.id);
              }
            }}
          >
            {isCoinAdded ? <StarIcon /> : <StarOutlineIcon />}
          </div>
        </div>
        {coin.price_change_percentage_24h.toFixed(2) > 0 ? (
          <div className='chip-flex'>
            <div className='price-chip'>
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className='icon-chip'>
              <TrendingUpIcon />
            </div>
          </div>
        ) : (
          <div className='chip-flex'>
            <div className='price-chip chip-red'>
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className='icon-chip chip-red'>
              <TrendingDownIcon />
            </div>
          </div>
        )}
        <div className='info-container'>
          <h3
            className='coin-price'
            style={{
              color:
                coin.price_change_percentage_24h < 0
                  ? "var(--red)"
                  : "var(--green)"
            }}
          >
            {convertNumbers(coin.current_price)}
          </h3>
          <p className='total_volume'>
            총 거래량:
            {convertNumbers(coin.total_volume)}
          </p>
          <p className='total_volume'>
            시가총액:
            {convertNumbers(coin.market_cap)}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Grid;