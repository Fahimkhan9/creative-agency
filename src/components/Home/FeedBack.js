import React from 'react'
import customer1 from '../../images/customer-1.png'
import customer2 from '../../images/customer-2.png'
import customer3 from '../../images/customer-3.png'
import FeedBackCard from './FeedBackCard'


const feedbackdata = [
    {
        img:customer1,
        name:'Nash Patrik',
        position:"CEO,Monpol",
        des:  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur commodi ullam ea libero eum dolorem nulla provident maxime corporis quia!",
    },
    {
        img:customer2,
        name:'Miriam Barron',
        position:"CEO,Monpol",
        des:  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur commodi ullam ea libero eum dolorem nulla provident maxime corporis quia!",
    },
    {
        img:customer3,
        name:'Bria Malone',
        position:"CEO,Monpol",
        des:  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur commodi ullam ea libero eum dolorem nulla provident maxime corporis quia!",
    },
]

function FeedBack() {
    return (
        <div className="feedback"> 
            <div className="container">
                <h2 className="text-brand text-center mb-3">Clients <span style={{color:"#97ac84"}}>Feedback</span>
                </h2>
                <div className="row">
{
feedbackdata.map(feedbackdata => <FeedBackCard feedbackdata={feedbackdata}/>)
}
                </div>
            </div>
        </div>
    )
}

export default FeedBack
