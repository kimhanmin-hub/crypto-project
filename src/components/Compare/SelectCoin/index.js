import React, { useState, useEffect } from "react";
import { get100Coins } from "../../../pages/get100Coins";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './styles.css';

function SelectCoins({ crypto1, crypto2, handleCoinChange }) {

    const [allCoins, setAllCoins] = useState([]);

    const styles = {
        height: "2.5rem",
        color: "var(--white)",
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
        },
        "& .MuiSvgIcon-root": {
            color: "var(--white)",
        },
        "&:hover": {
            "&& fieldset": {
                borderColor: "#3a80e9",
            },
        },
    };



    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const myCoins = await get100Coins();
        if (myCoins) {
            setAllCoins(myCoins);
        }
    };

    return (
        <div className="coin-flex">
            <p> 코인 선택 </p>
            <Select
                sx={styles}
                value={crypto1}
                label="Crypto 1"
                onChange={(event) => handleCoinChange(event, false)}
            >
                {Array.isArray(allCoins) && allCoins
                    .filter((item) => item.id !== crypto2)
                    .map((coin, i) => (
                        <MenuItem
                            key={i}
                            value={coin.id}
                        >
                            {coin.name}
                        </MenuItem>
                    ))}
            </Select>
            <p> 코인 선택 2 </p>
            <Select
                sx={styles}
                value={crypto2}
                label="Crypto 2"
                onChange={(event) => handleCoinChange(event, true)}
            >
                {Array.isArray(allCoins) && allCoins
                    .filter((item) => item.id !== crypto1)
                    .map((coin, i) => (
                        <MenuItem
                            key={i}
                            value={coin.id}>
                            {coin.name}
                        </MenuItem>
                    ))}

            </Select>
        </div>
    );
}


export default SelectCoins;
