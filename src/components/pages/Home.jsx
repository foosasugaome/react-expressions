import axios from "axios"
import { Link } from "react-router-dom"
import ExpressionAddForm from "../ExpressionAddForm"
import { useState } from "react"

export default function Home({ expressions, refresh }){

  const [showForm, setShowForm] = useState(false)

  function removeExpression(id) {
    try {
      axios.delete(`${process.env.REACT_APP_SERVER_URL}/expression/${id}`)
      .then(response => refresh())
    } catch(err) {
      console.log(err)
    }
  }
    const expressionsList = expressions.map((exp, idx) => {
      return (
          <>
          
            <div key={`exp-id${idx}`} className='card'>
            <div className='remove add-new-meaning' onClick={()=> removeExpression(exp._id)}>❌</div>
            <Link to={`/expression/${exp._id}`} >
            <span>
              <p><u>{exp.language}</u></p>
               <h2>{exp.expression}</h2>                                
                <em>"{exp.translation}"</em>            
              </span>
              </Link>            
            </div>            
            
          </>
      )  
    })
    return (
        <>
        {
          showForm ? 
          <ExpressionAddForm showForm={showForm} setShowForm={setShowForm} />
          :
          <div class=' add-new-meaning show-home-form' onClick={() => setShowForm(!showForm)}>Do you know any expression/idiom? Click here to add one.</div>
        }
        
        <div className='flex-container'>
        
        {expressionsList}        
        </div>        
        
        
        </>
    )
}