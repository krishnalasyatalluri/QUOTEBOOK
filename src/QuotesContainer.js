import React,{useEffect,useState} from "react";
import QuotesList from "./QuotesList";
import AddQuote from "./AddQuote";
// import QuoteForm from "./QuoteForm";
// import res from "express/lib/response";
const QuotesContainer=(props)=>{
    const [quotes,setQuotes]=useState([])
    //ls read operation
    useEffect(()=>{
        const result=JSON.parse(localStorage.getItem('quotes'))||[]
        setQuotes(result) 
    },[])
    //only call this ue when state var changes
    useEffect(()=>{
        localStorage.setItem('quotes',JSON.stringify(quotes))

    },[quotes])// whenver state var quote changes execute this callback fun 
    const addItem=(quote)=>{
        const result=[quote,...quotes]
        setQuotes(result)


    }
    const removeItem=(id)=>{
        const result=quotes.filter((quote)=>{
            return quote.id!==id 

        })
        setQuotes(result)
    }
    const editItem=(quote)=>{
        const result=quotes.map((q)=>{
            if(q.id==quote.id){
                return {...q,...quote}

            }else{
                return {...q}
            }

        })
        setQuotes(result)
    }
    return(
        <div>
            
            <QuotesList quotes={quotes} removeItem={removeItem} editItem={editItem}/>
            <AddQuote addItem={addItem}/>
            {/* <QuoteForm addItem={addItem}/> */}
        </div>
    )
}
export default QuotesContainer