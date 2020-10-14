import React from 'react'
import { Link } from 'react-router-dom'
import './ServicesCard.css'
function ServicesCard({servicedata}) {
    return (
  
        <div className="card col-md-4  border-0 services" >
        
        <div className="card-body text-center " >
        
          {
          servicedata.image ?
     <img src={`data:image/png;base64,${servicedata.image.img}`} alt="" style={{height:"100px"}}/>
          :
          <img src={servicedata.img} alt="" style={{height:"100px"}}/>}
    <h5 className="card-title" style={{textDecoration:"none"}}>{servicedata.name}</h5>
          
        
    <p className="card-text" style={{lineHeight:"2rem"}}>{servicedata.des}</p>
          

        </div>
      
      </div>
     
    )
}

export default ServicesCard
