import React from "react";
import QuotesItem from "./QuotesItem";
import EditQuote from "./EditQuote";

const QuotesList=(props)=>{
    const {quotes,removeItem,editItem}=props 
    return(
        <div>
            {/* {quotes.length==0?<p>no quotes found add your first quote</p>:<h1>Quotes -{quotes.length}</h1>} */}
            {
                quotes.length===0?(
                    <div>
                        <h1>No quotes found</h1>
                        <p>Add your first quote</p>
                    </div>
                ):(
                    <div>
                        <h1>My Quotes -{quotes.length}</h1>
                        
                        {quotes.map((quote)=>{
                            return <QuotesItem key={quote.id} {...quote} removeItem={removeItem} editItem={editItem}/>
                        })}
                        
                    </div>

                )
            }
            
            
            
        </div>
    )
}
export default QuotesList