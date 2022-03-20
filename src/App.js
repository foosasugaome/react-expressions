import './App.css'
import Home from './components/pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import { useState, useEffect} from 'react'
import Expression from './components/pages/Expression'

function App () {
  const [ expression, setExpression ] = useState([])
  

  useEffect(()=> {
    (async() => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/expression`)
      const json = await res.json()
      setExpression(json)
    })()
  },[])

  function refreshDisplay(){
      (async() => {
        const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/expression`)
      const json = await res.json()
      setExpression(json)
      })()      
  }

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home expressions={expression} refresh={refreshDisplay}/>} />
            <Route path='/expression/:id' element={<Expression expressions={expression} />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
