import { useState } from 'react'
import MeaningForm from './MeaningForm'

export default function Meaning ({ meanings, meaningId, renderMeaning }) {
  
  const [showForm, setShowForm] = useState(false)
    
  const meaningList = meanings.map((m, idx) => {
    return (
      <>      
        <small><li>{m.meaning}</li></small>
        {m.example === '' ? m.example : <small>
          <em>Example : <q>{m.example}</q></em>
        </small>
        }
      </>
    )
  })

  return (
    <>
      <p>
        <small>Meanings:</small>
      </p>
      <blockquote>
          <ol>{meaningList}</ol>
      </blockquote>
      {
        showForm ? 
          <MeaningForm setShowForm={setShowForm} showForm={showForm} meaningId={meaningId} renderMeaning={renderMeaning} />
          :
          <span className='add-new-meaning' onClick={() => setShowForm(!showForm)}>Do you know any other meaning for this? Click here!</span>
      }

    </>
  )
}
