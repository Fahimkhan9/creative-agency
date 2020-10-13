import React from 'react'
import HeaderMain from './HeaderMain'
import Nav from './Nav'
import './Home.css'
import Companies from './Companies'
import Services from './Services'
import OurWork from './OurWork'
import FeedBack from './FeedBack'
import Footer from './Footer'
function Home() {
    return (
        <div>
            <div className="hero-section">
            <Nav/>
            <HeaderMain/>
            </div>
        <Companies/>
        <Services/>
        {/* <OurWork/>
         */}
         <FeedBack/>
         <div className="footer">
         <Footer/>
         </div>
        
        </div>
    )
}

export default Home
