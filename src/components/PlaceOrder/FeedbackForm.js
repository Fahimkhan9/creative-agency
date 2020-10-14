import React from 'react'
import { useForm } from 'react-hook-form';

function FeedbackForm() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data =>{

  fetch("http://localhost:5000/addreview",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(data)
  })
  .then(res => res.json())
  .then(succees => console.log("successfully posted"))
  };
    return (
        <div className="container p-5" style={{backgroundColor:"#f4f7fc"}}>
                 <form onSubmit={handleSubmit(onSubmit)}>
 <div className="form-group">
     <input type="text" name="name" className="form-control" ref={register({ required: true })}  placeholder="your Name"/>
     {errors.name && <span style={{color:"red"}}>Name is required</span>}

 </div>
 <div className="form-group">
     <input type="text" name="position" className="form-control" ref={register({ required: true })} placeholder="your Company's Name,Designation"/>
     {errors.positions && <span style={{color:"red"}}>Compnay's name,Designation is required</span>}

 </div>
 <div className="form-group">
     <input type="text" name="des" className="form-control" ref={register({ required: true })} placeholder="des"/>
     {errors.des && <span style={{color:"red"}}>Service is required</span>}

 </div>
 






      
      <button className="btn btn-dark px-4" type="submit" >Add Review</button>
    </form>
        </div>
    )
}

export default FeedbackForm
