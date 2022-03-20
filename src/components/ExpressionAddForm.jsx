import axios from "axios"
import { useState } from "react"

export default function ExpressionAddForm({ showForm, setShowForm, refresh }) {
    const [expr, setExpr] = useState({
        language: '',
        expression: '',
        translation: ''
        // meanings: [{
        //     meaning:'',
        //     example:''
        // }]

    }) 
    const handleShowForm = () => {
        setShowForm(!showForm)
    }
    
    function handleNewExpression(e) {
        e.preventDefault()
        try {
            axios.post(`${process.env.REACT_APP_SERVER_URL}/expression`, expr)
            .then(response => refresh())                     
            handleShowForm()        
        } catch(err){
            console.log(err)
        }
        
    }

    return (
        <>
        <div className="box stack-top">
          <div className="new-expr-form">
                  <form onSubmit={handleNewExpression}>
                  <h3>New expression/idiom</h3>
                  <label htmlFor='language'></label>
                  <input type='text' id='language' value={expr.language} placeholder='Language' className="forms-comment" onChange={(e) => setExpr({...expr, language:e.target.value})}required/>
                  <label htmlFor='expression'></label>
                  <textarea id='expression' value={expr.expression} placeholder='What is the expression/idiom?'className="forms-comment" onChange={(e) => setExpr({...expr, expression:e.target.value})}required/>
                  <label htmlFor='translation'></label>
                  <textarea id='translation' value={expr.translation} placeholder='What is the transalation in English(if not in English)?' className="forms-comment" onChange={(e) => setExpr({...expr, translation:e.target.value})}required/>
                  {/* <label htmlFor='meaning'></label>
                  <textarea id='meaning' value={expr.meanings[0].meaning} placeholder='What does it mean?'className="forms-comment" onChange={(e) => setExpr({...expr, meaning:e.target.value})}required/>
                  <label htmlFor='example'></label>
                  <textarea id='example' value={expr.meanings[0].example} placeholder='How is it used?' className="forms-comment" onChange={(e) => setExpr({...expr, example:e.target.value})} />                                    */}
                  <button type="submit">Submit</button> <button onClick={()=> handleShowForm()}> Cancel</button>
                  </form>
          </div>
        </div>
        </>
    )
}