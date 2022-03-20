import axios from 'axios'
import { useState } from 'react'

export default function MeaningForm( { setShowForm, showForm, meaningId, renderMeaning }){

    const [meaning, setMeaning] = useState({
        meaning : '',
        example : ''
    })
    
    const handleShowForm = () => {
        setShowForm(!showForm)
    }    

    const handleAddMeaning = (e) => {        
        e.preventDefault()
           
        axios.put(`${process.env.REACT_APP_SERVER_URL}/expression/${meaningId}/meaning`, meaning)
        .then(response => {
            setMeaning({
                meaning:'',
                example:''
            })
            handleShowForm()
            renderMeaning()
            
        })
        .catch(err=> console.log(err))
    }

    return (
        <>
        <div className='flex-container'>
        <div></div>
        <div className='comment'>
            <form onSubmit={handleAddMeaning}>

            <textarea id='meaning' className='forms-comment' placeholder='Place other meaning here.' required value={meaning.meaning} onChange={(e)=> setMeaning({...meaning, meaning:e.target.value})}></textarea>
            <textarea id='example' className='forms-comment' placeholder='Example usage.' value={meaning.example} onChange={(e)=> setMeaning({...meaning, example:e.target.value})}/>
            <button type='submit'>Submit</button> 
            </form>            
        </div>
        <div> <button onClick={()=> handleShowForm()}>❌</button></div>
        </div>
        </>
    )
}