import React, { useEffect, useState } from 'react'
import FeedBackCard from './FeedBackCard'







function FeedBack() {
    const [allreview,setAllreview] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/getallreviews',)
        .then(res  => res.json())
        .then(data=> {
            
            console.log(data)
        setAllreview(data)
        })
    },[allreview])
    return (
        <div className="feedback mb-5"> 
            <div className="container">
                <h2 className="text-brand text-center mb-3">Clients <span style={{color:"#97ac84"}}>Feedback</span>
                </h2>
              
                <div className="row">

{
    allreview.map(feedbackdata => <FeedBackCard feedbackdata={feedbackdata} />)
}
                </div>
            </div>
        </div>
    )
}

export default FeedBack
