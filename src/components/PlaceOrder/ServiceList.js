import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App'
import ServieListCard from './ServieListCard'

function ServiceList() {
    const [allreview,setAllreview] = useState([])
const  [loggedinuser,setLoggedinuser] = useContext(UserContext)

    useEffect(() => {
fetch(`http://localhost:5000/getorders?email=${loggedinuser.email}`)
.then(res => res.json())
.then(data => {
setAllreview(data)
})
    },[allreview])
    // console.log(allreview);
    return (
        <div className="container p-5" style={{backgroundColor:"#f4f7fc"}}>
            <div className="row m-3">
            {
                allreview.map(reviewdata => <ServieListCard reviewdata={reviewdata}/> )
            }
            {
                allreview.length === 0 && <p className="text-brand text-center">You have no orders </p>
            }
            </div>
         
        </div>
    )
}

export default ServiceList
