import React from 'react';
import { useNavigate } from "react-router-dom";

function Universe() {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup");
  };
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h3>The Zerodha Universe</h3>
        <p className="mt-3">
          Extend your trading and investment experience even further with our partner platforms
        </p>
      </div>

      {/* Row 1 */}
      <div className="row text-center mt-5 text-muted ">
        <div className="col-4 p-3">
          <img style={{ width: "180px" }} src="media/images/zerodhaFundhouse.png" />
          <p style={{lineHeight:"18px",marginTop:"10px",fontSize:"0.75rem"}}>Our asset management venture<br/> that is creating simple and transparent index<br/>
  funds to help you save for your goals.</p>
        </div>

        <div className="col-4 p-3">
          <img style={{ width: "180px" }} src="media/images/sensibullLogo.svg" />
          <p style={{lineHeight:"18px",marginTop:"10px",fontSize:"0.75rem"}}>Options trading platform that lets you<br/> create strategies, analyze positions,
  and examine<br/> data points like open interest, FII/DII, and more</p>
        </div>

        <div className="col-4 p-3">
          <img style={{ width: "180px" }} src="media/images/smallcaseLogo.png" />
          <p style={{lineHeight:"18px",marginTop:"10px",fontSize:"0.75rem"}}>Thematic investing platform<br/> that helps you invest in diversified<br/>
  baskets of stocks or ETFs.</p>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row text-center mt-4 text-muted fs-6">
        <div className="col-4 p-3">
          <img style={{ width: "180px" }} src="media/images/goldenpiLogo.png" />
          <p style={{lineHeight:"18px",marginTop:"10px",fontSize:"0.75rem"}}>Investment research platform<br/> that offers detailed insights on stocks,<br/>
  sectors, supply chains, and more.</p>
        </div>

        <div className="col-4 p-3">
          <img style={{ width: "180px" }} src="media/images/streakLogo.png" />
          <p style={{lineHeight:"18px",marginTop:"10px",fontSize:"0.75rem"}}>Systematic trading platform<br/> that allows you to create and backtest<br/>
  strategies without coding.</p>
        </div>

        <div className="col-4 p-3">
          <img style={{ width: "180px" }} src="media/images/dittoLogo.png" />
          <p style={{lineHeight:"18px",marginTop:"10px",fontSize:"0.75rem"}}> Personalized advice on life<br/> and health insurance.<br/> No spam and no mis-selling.</p>
        </div>

      </div>
      <div className='text-center'>
        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto"}}onClick={handleSignupClick}>Signup Now</button>
      </div>
    </div>
  );
}

export default Universe;
