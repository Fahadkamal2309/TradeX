import React from 'react';
function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
            <div className='p-5' id='supportWrapper'>
                <h4>Support Portal</h4>
                <a href="">Track Tickets</a>
            </div>
            <div className='row p-3 m-5'>
                <div className='col-6 p-5 '>
                    <h1 className='fs-3 p-3'>Search for an answer or browse help topics to create a ticket</h1>
                    <input className="mb-3"style={{padding:"20px 30px",width:"100%",fontSize:"20px",borderRadius:"10px",border:"none"}} placeholder='Eg. how do i activate F&O why is my order getting rejected.'/><br/>
                    <a style={{marginLeft:"10px"}} href=''>Track account opening</a>
                    <a style={{marginLeft:"10px"}} href=''>Track segment activation</a>
                    <a style={{marginLeft:"10px"}} href=''>Intraday</a><br/>
                    <a style={{marginLeft:"10px"}} href=''>Margins</a>
                    <a style={{marginLeft:"10px"}} href=''>Kite user manual</a>
                </div>
                <div className='col-6 p-5'>
                    <h1 className='fs-3'>Featured</h1><br/>
                    <ol style={{lineHeight:"40px"}}>
                        <li><a href=''>Current Takeover and Delisting January 2025</a></li>
                        <li><a href=''>Latest Intraday-MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;