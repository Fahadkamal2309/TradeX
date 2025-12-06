import React from 'react';
function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,goolePlay,appStore}) {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-7 mb-5 '>
                    <img src={imageURL}/>
                </div>
                <div className='col-4 mt-5'>
                    <h2 className='text-muted'>{productName}</h2>
                    <p className='mt-3 fs-6' style={{fontSize:"1rem", lineHeight:"1.8",marginBottom:"15px"}}>{productDescription}</p>
                    <div>
                    <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa fa-long-arrow-right" arial="true"></i></a>
                    <a href={learnMore} style={{marginLeft:"60px",textDecoration:"none"}}>Learn More <i class="fa fa-long-arrow-right" arial="true"></i></a>
                    </div>
                    <div className='mt-4'> 
                         <a href={goolePlay}><img src="media/images/googlePlayBadge.svg"/></a>
                         <a href={appStore} style={{marginLeft:"40px"}}><img src='media/images/appstoreBadge.svg'/></a>
                    </div>
                   
                    

                </div>
            </div>
        </div>
     );
}

export default LeftSection;