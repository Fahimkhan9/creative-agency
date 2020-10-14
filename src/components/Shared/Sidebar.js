import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../App'
import logo from '../../images/logos/logo.png'
function Sidebar() {
    const [navclass,setNavClass] = useState("collapse navbar-collapse ")
    const [navactive,setNavActive] = useState(false)
    const togglenavbar =() => {
        setNavActive(pre => navactive ? false : true)
    
          setNavClass(navactive ? "collapse navbar-collapse " : 'collapse navbar-collapse show ')
    
    }
    const [loggedinuser,setLoggedinuser] = useContext(UserContext)
    const [isAdmin,setISAdmin] = useState(false)

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink class="navbar-brand" to="/">
<img src={logo} style={{height:"50px"}} alt=""/>
  </NavLink>
  <button onClick={togglenavbar} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class={navclass} id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <NavLink class="nav-link ml-5" to="/placeorder">Order </NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link ml-5" to="/servicelist">Service List</NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link ml-5" to="/review">Review</NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link ml-5" to="/allservice">All Service</NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link ml-5" to="/review">Add Service</NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link ml-5" to="/review">Make Admin</NavLink>
      </li>
     
    </ul>

  </div>
</nav>
        </div>
    )
}

export default Sidebar
