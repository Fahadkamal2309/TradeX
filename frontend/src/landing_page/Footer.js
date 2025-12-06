import React from 'react';
function Footer() {
    return (  
        <footer style={{backgroundColor:"rgb(250,250,250)"}}>
        <div className='container border-top mt-5'>
            <div className='row mt-5'>
                <div className='col'>
                    <img src="media/images/logo.svg" style={{width:"50%"}}/>
                    <p className='mt-4'>&copy; 2010 - 2025, Zerodha Broking Ltd.<br/>
                        All rights reserved.</p><br/>
                        
                        <a href="https://x.com/"style={{fontSize:"25px"}}><i class="fa-brands fa-x-twitter"></i></a>
                        <a href="https://www.facebook.com/"style={{marginLeft:"10px",fontSize:"25px"}}><i class="fa-brands fa-facebook"></i></a>
                        <a href="https://www.instagram.com/" style={{marginLeft:"10px",fontSize:"25px"}}><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/jobs/" style={{marginLeft:"10px",fontSize:"25px"}}><i class="fa-brands fa-linkedin"></i></a>
                        
                        
                        
                        
                              
                </div>
                <div className='col'>
                    <p>Company</p>
                    <a  className="footer-link" href=''>About</a>
                    <br/>
                    <a   className="footer-link"  href=''>Product</a>
                    <br/>
                    <a className="footer-link" href=''>Pricing</a>
                    <br/>
                    <a className="footer-link"  href=''>Referral programme</a>
                    <br/>
                    <a className="footer-link"  href=''>Careers</a>
                    <br/>
                    <a  className="footer-link" href=''>Zerodha.tech</a>
                    <br/>
                    <a className="footer-link"  href=''>Press & media</a>
                    <br/>
                    <a  className="footer-link" href=''>Zerodha cares (CSR)</a>
                    <br/>
                </div>
                <div className='col'>
                    <p >Support</p>
                    <a className="footer-link" href=''>Contact</a>
                    <br/>
                    <a className="footer-link" href=''>Support portal</a>
                    <br/>
                    <a  className="footer-link"href=''>Z-connect blog</a>
                    <br/>
                    <a  className="footer-link"href=''>List of charges</a>
                    <br/>
                    <a className="footer-link" style={{textDecoration:"none"}}href=''>Download & resources</a>
                    <br/>
                </div>
                <div className='col'>
                    <p>Account</p>
                    <a className="footer-link" href=''>Open an account</a>
                    <br/>
                    <a className="footer-link"href=''>Fund transfer</a>
                    <br/>
                    <a  className="footer-link"href=''>60 days challenge</a>
                    <br/>
                </div>
            </div>
            <div className='mt-5 text-muted' style={{fontSize:"14px"}}>
                <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL:
                 Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, 
                for DP related to dp@zerodha.com. Please ensure you carefully read the 
                Risk Disclosure Document as prescribed by SEBI | ICF</p>
                <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. 
                    In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
            </div>
            
                

        </div>
        </footer>
    );
}

export default Footer;