import React from 'react'
import styles from './styles.css'
import { useState } from 'react';

function CoinInfo({ heading, desc }) {
    const shortDesc =
        desc.slice(0, 300) + "<span style='color:var(--grey)'> 더 읽기...</span>";
    const longDesc = desc + "<span style='color:var(--grey)'> 접기</span>";

    const [flag, setFlag] = useState(false);
    return (
        <div className='grey-wrapper' style={{ padding: '0rem 1rem' }}>
            <h2 className='coin-info-heading'>{heading}</h2>
            {desc.length > 300 ? (<p
                onClick={() => setFlag(!flag)}
                className='coin-info-desc'
                //react에서 html 문자열 직접 렌더링하기(문자열>html)
                dangerouslySetInnerHTML={{ __html: !flag ? shortDesc : longDesc }}
            />
            ) : (
                <p dangerouslySetInnerHTML={{ __html: desc }}
                />
            )}
        </div>
    );
}

export default CoinInfo;