import React from 'react'
import { useForm } from 'react-hook-form';

function MakeAdmin() {
     const { register, handleSubmit,  errors } = useForm();
     
     const onSubmit = data =>{
      alert('success,added to admin')
  fetch("https://creative-agency-server-1c0w.onrender.com/makeadmin",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data)
    
  })
  .then(res => res.json())
  .then(data => console.log("suc"))


 
        
        };
    return (
        <div className="container p-5 m-3" style={{backgroundColor:"#f4f7fc"}}>
             <form onSubmit={handleSubmit(onSubmit)}>
 <div className="form-group">
     <input type="text" name="email" className="form-control" ref={register({ required: true })}  placeholder="Email address"/>
     {errors.email && <span style={{color:"red"}}>Email is required</span>}

 </div>
 

  
 


      
      <button className="btn btn-dark px-4" type="submit" >Make admin</button>
    </form>
        </div>
    )
}

export default MakeAdmin
