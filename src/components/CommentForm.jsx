import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"

export default function CommentForm ({ refreshComments }) {
    const { id } = useParams()
    const [commentForm, setCommentForm] = useState({
        name: '',
        comment: ''
    })

    const handleSubmit = (e) => {        
        e.preventDefault()
        console.log(commentForm)
        axios.put(`${process.env.REACT_APP_SERVER_URL}/expression/${id}/comment`, commentForm)
        .then(response => {
            setCommentForm({
                name:'',
                comment:''
            })
            refreshComments()
        })
        .catch(err=> console.log(err))
    }
  return (
    <>
      <div className='flex-container'>
          <div className='user-info'>&nbsp;</div>
          <div className="comment">
              <form onSubmit={handleSubmit}>
                  <label htmlFor='name'></label>
                  <input type='text' id='name' value={commentForm.name} placeholder='Your name' className="forms-comment" onChange={(e) => setCommentForm({...commentForm, name:e.target.value})} required/>
                  <label htmlFor='comment'></label>
                  <textarea id='comment' placeholder='Your comment' value={commentForm.comment} className="forms-comment" onChange={(e)=> setCommentForm({...commentForm, comment:e.target.value})} required/>
                  <button type="submit">Submit</button>
              </form>
          </div>          
      </div>
    </>
  )
}
