import React from 'react';
function RightSection({productName,productDescription,learnMore,imageURL}) {
    return ( 
        <div className='container'>
            <div className='row 'style={{alignItems:"center",display:"flex"}}>
                <div className='col-4 mt-5' >
                <h2 className='mt-5 text-muted'>{productName}</h2>
                <p className='mt-3 fs-6' style={{fontSize:"1rem", lineHeight:"1.8",marginBottom:"15px"}}>{productDescription}</p>
                <a style={{textDecoration:"none"}} href={learnMore}>Learne more <i class="fa fa-long-arrow-right" arial="true"></i></a>
            </div>
            <div className='col-1'></div>
            <div className='col-7'>
                <img src={imageURL}/>
            </div>
            </div>
            
        </div>
     );
}

export default RightSection;