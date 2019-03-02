import React from 'react';
import './LandingPage.css';
import img from '../../img/hiddenlocalimg.jpeg';


function LandingPage () {
    
        return (
            <div className="background">
           
            <div className="pic">
                <img src={img} />
            </div>
            <div className="title">
            <div>Hidden Locales</div> 
            <p>lasjdflsadfjlasjdflsajfl;asjf;lasjfdsafd</p>
            <div className="landingWrapper">
         
            <button id="start">Start</button>
            </div>
            </div>
         
            </div>
        )


}

export default LandingPage;