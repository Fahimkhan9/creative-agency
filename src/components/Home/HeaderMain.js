import React from 'react'
import { Link } from 'react-router-dom'
import heroimg  from '../../images/logos/Frame.png'
function HeaderMain() {
    return (
        <div className="header-main pb-5 mb-5" >
            <div className="container">
                <div className="row d-flex align-items-center">
                 
                    <div className="col-md-6  order-md-2">
                        <img style={{width:"100%"}} src={heroimg} alt=""/>
                    </div>
                    <div className="col-md-6">
                        <h1 className="text-brand">Let's Grow your Brand to the Next Level</h1>
                        <p style={{lineHeight:"2rem"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, mollitia. Facilis eum qui debitis vero. Atque consequatur minima, nulla iure reiciendis corrupti aperiam impedit quasi fugiat, ab voluptas est quis.</p>
                        <button className="btn btn-dark "><Link to="/placeorder">Hire Us</Link> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMain
