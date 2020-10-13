import axios from 'axios'
import React from 'react'
import { useState } from 'react'

function Add() {
const [file,setFile] = useState('')
const [fileName,setFileNAme] = useState('')
const [uploadedfile,setUploadedFile] = useState({})


const onChange =(e) => {
setFile(e.target.files[0])
setFileNAme(e.target.files[0].name)
}
const submit = async (e) => {
e.preventDefault()

const formData = new FormData()
formData.append('file',file)


try {
    // fetch('http://localhost:5000/add',{
    //     method:"POST",
    
    // headers:{"Content-Type":'mulitpart/form-data'},
    // body:formData
    // })
    // .then(res => res.json())
    // .then(success => console.log("suc"))
    const res  = await axios.post("http://localhost:5000/add", formData,{
        headers:{"Content-Type":'mulitpart/form-data'},
    }
    
    )
    
    const {fileName,filePath} = res.data 
    setUploadedFile({fileName,filePath})   
} catch (error) {
    if(error){
        console.log("server problem");
    }else{
        console.log(error.response.data.msg);
    }
}


}
    return (
        <div>
           <form  onSubmit={submit}>
               {/* <input type="text" name="" id=""/> */}
               <input type="file" name="" id="" onChange={onChange} />
               <button className="btn btn-dark" type="submit">Upload</button>
           </form>
        </div>
    )
}

export default Add
