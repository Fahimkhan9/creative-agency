import React from 'react'
import './Login.css'
import logo from '../../images/logos/logo.png'
import auth, { provider } from './firebase'
import { useContext } from 'react'
import { UserContext } from '../../App'
import { useHistory, useLocation } from 'react-router-dom'
function Login() {
const  [loggedinuser,setLoggedinuser] = useContext(UserContext)

let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

const signin =() => {
  auth.signInWithPopup(provider)
  .then(res  => {
    console.log(res.user.displayName)
    console.log(res.user.email)

  loggedinuser.name = res.user.displayName
  loggedinuser.email = res.user.email
  history.replace(from)
  })
  .catch(err => alert(err))
}

    return (
       <div className="login ">
 <div className="container m-5 "  >
                <img src={logo}  style={{height:"100px"}} alt=""/>
              
                <div class="card m-3" style={{width:'20rem'}} >
  <div class="card-body text-center ">
    <h5 class="card-title">Login to Continue</h5>
    <h6 class="card-subtitle mb-2 btn btn-dark text-whitespace" onClick={signin}>Continue With Google</h6>
  
  
  </div>
</div>
            </div>
       </div>
           
       
    )
}

export default Login
 