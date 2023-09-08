import React from "react";
import './Home.css'

const Home =() =>{
    return(
        <React.Fragment>
            <section className="intro">
                <h2>Dinao Business to Business</h2>
                <p>
                    This is our B2B site. To see out B2C site please visit <a href="https://www.dinao.store/">this link.</a>
                </p>
            </section>
            <section className="mission-statement">
                <h2>Our Mission</h2>
                <p>
                    We are driven by our desire to get South Africans active through the exciting sport of cycling!
                    By providing high quality, world-class equipment affordably.
                    
                </p>
                <img src="https://images.zapnito.com/cdn-cgi/image/metadata=copyright,fit=scale-down,format=auto,quality=95/https://images.zapnito.com/users/437596/posters/1600283129-58-2219/40dab507-fb9e-423e-bd14-3041cd4cbe7b_large.jpeg"></img>
            </section>
        </React.Fragment>
    )
}

export default Home;