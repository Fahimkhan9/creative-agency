import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../images/logos/logo.png'
function Nav() {
    const [navclass,setNavClass] = useState("collapse navbar-collapse ")
    const [navactive,setNavActive] = useState(false)
// console.log(navactive);
// console.log(navclass);
const togglenavbar =() => {
    setNavActive(pre => navactive ? false : true)

      setNavClass(navactive ? "collapse navbar-collapse " : 'collapse navbar-collapse show ')

}
   console.log(navactive);
    return (
        <nav class="navbar navbar-expand-lg navbar-light  mb-5 container">
        <NavLink class="navbar-brand" to="/">
            <img src={logo} style={{height:"50px"}} alt=""/>
        </NavLink>
        <button onClick={togglenavbar} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class={navclass} id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto ">
            <li class="nav-item ml-5 active">
              <NavLink class="nav-link " to="/">Home <span class="sr-only">(current)</span></NavLink>
            </li>
            <li class="nav-item ml-5">
              <NavLink class="nav-link" to="/">Our Portfolio</NavLink>
            </li>
            <li class="nav-item ml-5">
              <NavLink class="nav-link" to="/">Our Team</NavLink>
            </li>
            <li class="nav-item ml-5">
              <NavLink class="nav-link" to="/">Contact Us</NavLink>
            </li>
            <li class="nav-item ml-5">
              <NavLink class="nav-link btn btn-dark text-white px-4" to="/">Login</NavLink>
            </li>
           
          </ul>
          
        </div>
      </nav>
    )
}

export default Nav
