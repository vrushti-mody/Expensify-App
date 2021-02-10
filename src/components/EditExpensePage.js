import ReactDOM from 'react-dom'
import React from 'react'



const EditExpensePage = (props)=>{
    console.log(props)
return(
    <div>
        <p>This is my edit expense page </p>
        {props.match.params.id}
    </div>
)}

export default EditExpensePage