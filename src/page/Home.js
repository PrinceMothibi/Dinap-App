import React from "react";

const Home =() =>{
    return(
        <React.Fragment>
            <section className="Intro">
                <h2>Dinao Business to Business</h2>
                <p>
                    This is our B2B site. To see out B2C site please visit <a href="https://www.dinao.store/">this link.</a>
                </p>
            </section>
            <section className="Mission Statement">
                <h2>Our Mission</h2>
                <p>
                    We are driven by our desire to get South Africans active through the exciting sport of cycling!
                    By providing high quality, world-class equipment affordably.
                    
                </p>
                <img src="src/page/Home.js"></img>
            </section>
        </React.Fragment>
    )
}

export default Home;