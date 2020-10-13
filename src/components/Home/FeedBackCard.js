import React from 'react'

function FeedBackCard({feedbackdata}) {
    return (
        <div class="card col-md-4 " >
        <div class="card-body ">
        <div className="d-flex align-items-center">
            <div>
            <img src={feedbackdata.img}style={{height:"80px"}} alt=""/>

            </div>
            <div className="ml-3">
    <h5>{feedbackdata.name}</h5>
    <h6>{feedbackdata.position}</h6>
            </div>
        </div>
    <p className="card-text" style={{lineHeight:"2rem"}}>{feedbackdata.des}</p>
           {/* <img src={servicedata.img} alt="" style={{height:"100px"}}/>
    <h5 class="card-title">{servicedata.title}</h5>
          
        
    <p class="card-text">{servicedata.des}</p> */}
          
        </div>
      </div>
    )
}

export default FeedBackCard