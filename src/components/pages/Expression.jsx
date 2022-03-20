import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Comment } from '../Comment'
import Meaning from '../Meaning'


export default function Expression ({ expressions }) {
  const { id } = useParams()
  const [expr, setExpr] = useState({})
  const [meanings, setMeanings] = useState([])
  const [comments, setComments] = useState([])


  const fetchComment = () => {    
    (async () => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/expression/${id}`)
      const json = await res.json()
      setExpr(json)      
      setMeanings(json.meanings)
      setComments(json.comments)
    })()
  }

  

  useEffect(fetchComment,[id])  

  return (
    <>
      <div className='card-expression'>
        <div className='flex-container'>

          <div className='meaning'>
          <h2>{expr.expression}</h2>

          <p>{expr.language}</p>
            <em>"{expr.translation}"</em>
            <Meaning meanings={meanings} meaningId={id} renderMeaning={fetchComment}/>        
          </div>  
          
        </div>  
        
      </div>
      <div className='card-expression'>
        <Comment comments={comments} renderComments={fetchComment}/>
      </div>
    </>
  )
}
