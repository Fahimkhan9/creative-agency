import React from 'react'
import service1 from '../../images/icons/service1.png'
import service2 from '../../images/icons/service2.png'
import service3 from '../../images/icons/service3.png'
import ServicesCard from './ServicesCard'

const servicesdata = [ 

    {
        img:service1,
        title:'Web Development',
        des:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, quaerat. Mollitia voluptatem recusandae consectetur, minima animi commodi ad, consequuntur cumque, reiciendis architecto provident doloribus enim."
    },
    {
        img:service2,
        title:'Web & Mobile  Design',
        des:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, quaerat. Mollitia voluptatem recusandae consectetur, minima animi commodi ad, consequuntur cumque, reiciendis architecto provident doloribus enim."
    },
    {
        img:service3,
        title:"Graphics Design",
        des:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, quaerat. Mollitia voluptatem recusandae consectetur, minima animi commodi ad, consequuntur cumque, reiciendis architecto provident doloribus enim."
    },

]

function Services() {
    return (
        <div className="services  mb-5">
            <div className="container">
            <h2 className="text-brand text-center mb-3">Provide Awesome <span style={{color:"#97ac84"}}>services</span> </h2>
            <div className="row">
{
    servicesdata.map(servicedata => <ServicesCard  servicedata={servicedata}/>)
}
            </div>
            </div>
        
        </div>
    )
}

export default Services
