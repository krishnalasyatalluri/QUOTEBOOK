import React,{useState} from "react";
import EditQuote from "./EditQuote";
const QuotesItem=(props)=>{
    const {id,name,body,removeItem,editItem}=props
    const [toggle,setToggle]=useState(false)//false means not clicked on edit
    // const handleEdit=()=>{
    //     const result=!toggle
    //     setToggle(result)
    // }
    // const handleCancel=()=>{
    //     const result=!toggle 
    //     setToggle(result)
    // }
    const handleToggle=()=>{
        const result=!toggle 
        setToggle(result)
    }

    return(
        <div>
            {/* <b>{body}</b><br></br>
            <b>{name}</b> */} 
            {toggle?(
                <div>
                    <EditQuote 
                    id={id} 
                    name={name} 
                    body={body}
                    editItem={editItem}
                    handleToggle={handleToggle}
                    />
                    <button onClick={handleToggle}>cancel</button>
                </div>

            ):(
                <div>
                    <blockquote>{body} - {name}</blockquote>
                    <button onClick={handleToggle}>edit</button>
                    <button onClick={()=>{

                        const confirmRemove=window.confirm('are you sure?')
                        if(confirmRemove){ 
                            removeItem(id) 
                        }
                
                    }}>remove</button>
                </div>
            


            )}
            
            
        </div>
    )
}
export default QuotesItem