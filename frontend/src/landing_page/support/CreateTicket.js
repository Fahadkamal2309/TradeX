import React from 'react';
function CreateTicket() {
    return ( 
       <div className='container'>
        <div className='row p-3'>
            <h1 className='fs-2'>To create a ticket, select a relevant topic</h1>
                <div className='col-4 mb-2 mt-2 p-5'>
                <h4><i class="fa-solid fa-circle-plus"></i> Account Opening</h4>
                <a  style={{textDecoration:"none" ,lineHeight:"2.5"}}href="">Resident individual</a><br/>
                <a  style={{textDecoration:"none" ,lineHeight:"2.5"}}href="">Minor</a><br/>
                <a  style={{textDecoration:"none" ,lineHeight:"2.5"}}href="">Non Resident Indian (NRI)</a><br/>
                <a  style={{textDecoration:"none" ,lineHeight:"2.5"}}href="">NRI Account Opening</a><br/>
                <a  style={{textDecoration:"none" ,lineHeight:"2.5"}}href="">Company,Partnership, HUF and LLP</a><br/>
                <a  style={{textDecoration:"none" ,lineHeight:"2.5"}}href="">Glossary</a>
            </div>
            <div className='col-4 mb-2 mt-2 p-5'>
                <h4><i class="fa-solid fa-user"></i> Your Zerodha Account</h4>
                <a  style={{textDecoration:"none" ,lineHeight:"2.5"}}href="">Your Profile</a><br/>
                <a  style={{textDecoration:"none" ,lineHeight:"2.5"}}href="">Account Modification</a><br/>
                <a  style={{textDecoration:"none" ,lineHeight:"2.5"}}href="">Client Master Report (CMR) and Depository Participant (DP)</a><br/>
                <a  style={{textDecoration:"none" ,lineHeight:"2.5"}}href="">Nomination</a><br/>
                <a  style={{textDecoration:"none" ,lineHeight:"2.5"}}href="">Transfer and Conversions Of Securities</a>
            </div>
            <div className='col-4 mb-2 mt-2 p-5'>
                <h4><i class="fa-solid fa-diamond"></i> Kite</h4>
                <a  style={{textDecoration:"none" ,lineHeight:"2.5"}}href="">IPO</a><br/>
                <a  style={{textDecoration:"none" ,lineHeight:"2.5"}}href="">Trading FAQs</a><br/>
                <a  style={{textDecoration:"none" ,lineHeight:"2.5"}}href="">Margins Trading Facility (MTF) and Margins</a><br/>
                <a  style={{textDecoration:"none" ,lineHeight:"2.5"}}href="">Charts and Orders</a><br/>
                <a  style={{textDecoration:"none" ,lineHeight:"2.5"}}href="">Alerts and Nudges</a><br/>
                <a  style={{textDecoration:"none" ,lineHeight:"2.5"}}href="">General</a>
            </div>
             </div>
             <div className='row p-3'>
                <div className='col-4 mb-2 mt-2 p-5'>
                <h4><i class="fa-solid fa-indian-rupee-sign"></i> Funds</h4>
                <a  style={{textDecoration:"none" ,lineHeight:"2.5"}}href="">Add Money</a><br/>
                <a  style={{textDecoration:"none" ,lineHeight:"2.5"}}href="">Withdraw Money</a><br/>
                <a  style={{textDecoration:"none" ,lineHeight:"2.5"}}href="">Add Bank Account</a><br/>
                <a  style={{textDecoration:"none" ,lineHeight:"2.5"}}href="">eMandates</a>
            </div>
            <div className='col-4 mb-2 mt-2 p-5'>
                <h4><i class="fa-brands fa-uikit"></i> Console</h4>
                <a  style={{textDecoration:"none" ,lineHeight:"2.5"}}href="">Portfolio</a><br/>
                <a  style={{textDecoration:"none" ,lineHeight:"2.5"}}href="">Corporate Actions</a><br/>
                <a  style={{textDecoration:"none" ,lineHeight:"2.5"}}href="">Fund Statement</a><br/>
                <a  style={{textDecoration:"none" ,lineHeight:"2.5"}}href="">Reports</a><br/>
                <a  style={{textDecoration:"none" ,lineHeight:"2.5"}}href="">Profile</a><br/>
                <a  style={{textDecoration:"none" ,lineHeight:"2.5"}}href="">Segments</a>
            </div>
            <div className='col-4 mb-2 mt-2 p-5'>
                <h4><i class="fa-solid fa-coins"></i> Coin</h4>
                <a  style={{textDecoration:"none" ,lineHeight:"2.5"}}href="">Mutual Funds</a><br/>
                <a  style={{textDecoration:"none" ,lineHeight:"2.5"}}href="">National Pension Scheme</a><br/>
                <a  style={{textDecoration:"none" ,lineHeight:"2.5"}}href="">Features on Coin</a><br/>
                <a  style={{textDecoration:"none" ,lineHeight:"2.5"}}href="">Payment and Orders</a><br/>
                <a  style={{textDecoration:"none" ,lineHeight:"2.5"}}href="">General</a>
            </div>
             </div>
       </div>
     );
}

export default CreateTicket;