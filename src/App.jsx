import { useState } from 'react'
import Header from './Pages/Header'
import Main from './Pages/Main'
import Search from './Pages/Search'
import Statistics from './Pages/Statistics'
import Footer from './Pages/Footer'
import './App.css'

function App() {
  const[isOpen, setisOpen] = useState(false)


  return ( 
    <>
      <Header isOpen={isOpen} setisOpen={setisOpen} />

      <Main isOpen={isOpen} />

      <div className='OtherColour'>
        <div className='Search'>
          <Search />
        </div>

      <Statistics />

      <Footer />
      </div>

    </>
  )
}

export default App
