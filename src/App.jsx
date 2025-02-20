import Header from './Pages/Header'
import Main from './Pages/main'
import Search from './Pages/Search'
import Statistics from './Pages/Statistics'
import Footer from './Pages/Footer'
import './App.css'

function App() {


  return ( 
    <>
      <Header />

      <Main />

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
