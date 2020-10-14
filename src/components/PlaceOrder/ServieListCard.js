import React from 'react'

function ServieListCard({reviewdata}) {
    return (
        <div class="card col-md-4" >
        <div class="card-body text-center">
    <h5 class="card-title">{reviewdata.service}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Price:{reviewdata.price}</h6>
    <p class="card-text" style={{lineHeight:"2rem"}}>Detail:{reviewdata.detail}</p>
       
        </div>
      </div>
    )
}

export default ServieListCard
