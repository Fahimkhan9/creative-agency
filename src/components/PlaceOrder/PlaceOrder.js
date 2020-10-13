import React from 'react'
import FeedbackForm from './FeedbackForm'

import OrderForm from './OrderForm'
import ServiceList from './ServiceList'
function PlaceOrder() {
    return (
        <div>
          
<nav class="navbar navbar-light bg-light">
  <span class="navbar-brand mb-0 h1">Navbar</span>
</nav>
<OrderForm/>
<h5>servicelist</h5>
<ServiceList/>
<h5>Feed form</h5>
<FeedbackForm/>

        </div>
    )
}

export default PlaceOrder
