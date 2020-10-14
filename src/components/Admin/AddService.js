import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

function AddService() {
    const { register, handleSubmit, watch, errors } = useForm();
const [file,setFile] = useState()
const onfilechange =(e) => {
const newfile = e.target.files[0]
setFile(newfile)
}

    const onSubmit = data =>{
      const formData = new FormData()
      formData.append('file',file)
      formData.append('name',data.servicename)
      formData.append('des',data.desciption)


fetch('http://localhost:5000/addservice',{
    method:"POST",
    body:formData
})
.then(response => response.json())
.then(data => {
    console.log(data)
})
.catch(error => {
    console.error(error)
})



     
      
      };
    return (
        <div className="container p-5" style={{backgroundColor:"#f4f7fc"}}>
              <form onSubmit={handleSubmit(onSubmit)}>
 <div className="form-group">
     <input type="text" name="servicename" className="form-control" ref={register({ required: true })}  placeholder="Service Name"/>
     {errors.servicename && <span style={{color:"red"}}>Name is required</span>}

 </div>
 <div className="form-group">
     <input type="text" name="desciption" className="form-control" ref={register({ required: true })} placeholder="Description"/>
     {errors.desciption && <span style={{color:"red"}}>Desciption is required</span>}

 </div>
 <div className="form-group">
     <input type="file" onChange={onfilechange} name="desciption" className="form-control-file" />
     {errors.file && <span style={{color:"red"}}>Desciption is required</span>}

 </div>

  
 


      
      <button className="btn btn-dark px-4" type="submit" >Add</button>
    </form>
        </div>
    )
}

export default AddService
