import React from 'react'
import { Link } from 'react-router-dom'
import './ServicesCard.css'
function ServicesCard({servicedata}) {
    return (
  
        <div class="card col-md-4  border-0 services" >
        
        <div class="card-body text-center " >
        
          {
          servicedata.image ?
     <img src={`data:image/png;base64,${servicedata.image.img}`} alt="" style={{height:"100px"}}/>
          :
          <img src={servicedata.img} alt="" style={{height:"100px"}}/>}
    <h5 class="card-title" style={{textDecoration:"none"}}>{servicedata.name}</h5>
          
        
    <p class="card-text" style={{lineHeight:"2rem"}}>{servicedata.des}</p>
          

        </div>
      
      </div>
     
    )
}

export default ServicesCard
