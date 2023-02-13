import React from 'react'
import '../Styles.css'

 const ShowCase = () => {
  return (
    <div>
     <ul className="ShowCase">
       <li>
         <span className="seat" /> <small>N/A</small>
       </li>
       <li>
         <span className="seat selected" /> <small>Selected</small>
       </li>
       <li>
         <span className="seat occupied" /> <small>Occupied</small>
       </li>
     </ul>
    </div>
  )
}
export default ShowCase
