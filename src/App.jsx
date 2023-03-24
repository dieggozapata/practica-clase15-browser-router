import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Beer from './Pages/Beer'
import Contacto from './Pages/Contacto'
import NotFound from './Pages/NotFound'
function App() {
  return (
   <div>
      <h1>Mas que solo bebidas, festejemos el encuentro.</h1> 
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />          
          <Route path='/contacto' element={<Contacto/>} />
          <Route path='/beer/:id' element={<Beer/>} />                                               
          <Route path='*' element={<NotFound/>} />                                               
        </Routes>
   </div>
  )
}

export default App
