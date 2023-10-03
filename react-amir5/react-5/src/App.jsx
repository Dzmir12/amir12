import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SearchPage from './pages/SearchPage/Searchpage';


import './App.css'

function App() {
  

  return (
    <div >
     
     <BrowserRouter>
      
      <Routes>
        
        <Route index element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/search' element={<SearchPage/>} />

      </Routes>

     </BrowserRouter>

    </div>
  )
}

export default App
