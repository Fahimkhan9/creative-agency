import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App'

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
        <div>
            {
                allreview.map(reviewdata => <li key={reviewdata._id}>{reviewdata.name}</li>)
            }
        </div>
    )
}

export default ServiceList
