import React from 'react'

function ServicesCard({servicedata}) {
    return (
        <div class="card col-md-4  border-0" >
        <div class="card-body text-center ">
        
           <img src={servicedata.img} alt="" style={{height:"100px"}}/>
    <h5 class="card-title">{servicedata.title}</h5>
          
        
    <p class="card-text" style={{lineHeight:"2rem"}}>{servicedata.des}</p>
          
        </div>
      </div>
    )
}

export default ServicesCard
