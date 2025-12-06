import React from 'react';
function Hero() {
    return ( 
        <div className='container mt-5 border-bottom'>
            <div className='row mt-5 p-5 text-center '>
                <h1 className='fs-2' >Charges</h1>
                <h4 className='fs-4 text-muted mt-3'>List of all charges and taxes</h4>
            </div>
            <div className='row mt-5 p-5 text-center'>
                <div className='col-4'>
                    <img style={{width:"250px"}} src='media/images/pricing0.svg'/>
                    <h1 className='fs-2' >Free equity delivery</h1>
                <p className='fs-6 text-muted mt-3'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage</p>
                </div>
                <div className='col-4'>
                    <img  style={{width:"250px"}}src='media/images/other-trades.svg'/>
                    <h1 className='fs-2' >FIntraday and F&O trades</h1>
                <p className='fs-6 text-muted mt-3'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4'>
                    <img style={{width:"250px"}} src='media/images/pricingMF.svg'/>
                    <h1 className='fs-2' >Free direct MF</h1>
                <p className='fs-6 text-muted mt-3'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;