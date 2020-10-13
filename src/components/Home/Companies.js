import React from 'react'
import google from '../../images/logos/google.png'
import airbnb from '../../images/logos/airbnb.png'
import netflix from '../../images/logos/netflix.png'
import slack from '../../images/logos/slack.png'
import uber from  '../../images/logos/uber.png'

function Companies() {
    return (
        <div className="companies  mb-5">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-2 ">
                    <img src={google} alt="" style={{height:"50px"}}/>
                    </div>
                    <div className="col-md-2 ">
                    <img src={airbnb} alt="" style={{height:"50px"}}/>


                    </div>
                    <div className="col-md-2 ">
                    <img src={netflix} alt="" style={{height:"50px"}}/>

                    </div>
                    <div className="col-md-2 ">
                    <img src={uber} alt="" style={{height:"50px"}}/>

                    </div>
                    <div className="col-md-2 ">
                    <img src={slack} alt="" style={{height:"50px"}}/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Companies
