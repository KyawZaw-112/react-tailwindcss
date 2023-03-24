import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Service from './pages/Service'
import Content from './pages/Content'
import Meal from './components/Meal'
import Detail from './components/Detail'
import Search from './components/Search'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Meal/>} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='/search/:name' element={<Search />} />
      </Routes>
    </div>
  )
}

export default App
