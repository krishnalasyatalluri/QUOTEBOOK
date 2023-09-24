import React,{useState} from "react";
import {v4 as uuidv4} from 'uuid'
const QuoteForm=(props)=>{
    const {formSubmission,id:slNo,name:author,body:quote,handleToggle}=props 
    const [name,setName]=useState(author?author:'')
    const [body,setBody]=useState(quote?quote:'')
    const [id,setId]=useState(slNo?slNo:uuidv4())
    // const {addItem}=props 
    const handleNameChange=(e)=>{
        setName(e.target.value )
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            id:id,
            name:name, //name - property name : name- variable 
            body:body 
        }
        // addItem(formData)
        //reset the form after adding
        formSubmission(formData)
        if(handleToggle){
            handleToggle()
        }
        setName('')
        setBody('')
    }
    const handleBodyChange=(e)=>{
        setBody(e.target.value )
    }
    return(
        <div>
            <h1>Add Quote</h1>
            <form onSubmit={handleSubmit}>

                <label>name</label><br></br>
                <input type="text" value={name} onChange={handleNameChange}/><br></br>
                <label>Body</label><br></br>
                <textarea value={body} onChange={handleBodyChange}/><br></br>
                <input type="submit" value="save"/>

            </form>
            

        </div>
    )
}
export default QuoteForm