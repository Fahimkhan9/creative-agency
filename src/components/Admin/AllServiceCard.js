import React from 'react'

function AllServiceCard({orderdata}) {
    return (
        <div>
   <table class="table table-hover">

  <tbody>
    <tr>
<th scope="row"></th>
<td>{orderdata.name}</td>
<td>{orderdata.email}</td>
<td>{orderdata.service}</td>

<td>{orderdata.detail}</td>

    </tr>
  
  </tbody>
</table>
        </div>
    )
}

export default AllServiceCard
