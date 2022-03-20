import dayjs from "dayjs"
import CommentForm from "./CommentForm"
import profile from './profile.png'
import axios from 'axios'

export function Comment ({ comments, renderComments }) {

function removeComment(id) {  
  axios.delete(`${process.env.REACT_APP_SERVER_URL}/comment/${id}`)
  .then(response => renderComments())
}

  const comms = comments.map((c, idx) => {
    return (
      <>
        <div className='flex-container' key={`comment-id${idx}`}>
          <div className='user-info'>            
            <img src={profile} alt='' className='profile-img' />
            <p>
              <small>{c.name}</small>
            <br />
              <small>{dayjs(c.createdAt).format('MM/DD/YYYY')}</small>
            </p>
          </div>
          <div className='comment'>
            <p>
              <small>{c.comment}</small>
            </p>            
          </div>          
          <div className="remove add-new-meaning" onClick={()=> removeComment(c._id)}>
            ❌
          </div>
        </div>
        <hr />
      </>
    )
  })
  return (
    <>
      <h3>Comments :</h3>
      {comms}
      <CommentForm refreshComments={renderComments}/>
    </>
  )
}
