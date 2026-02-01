
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Music from "./pages/music"
import Home from "./pages/home"
import Literature from './pages/literature'




function App() {

  return (
    <>
    <BrowserRouter>
    <div>
      <Routes>
      {/* handles the routing of page elements, remeber they dont to have the same name as the page so name them whatever you want */}      
      <Route path="/" element={<Home />} />
      <Route path="/music" element={<Music />} />
      <Route path="/literature" element={<Literature />} />
    </Routes>
    </div>
    </BrowserRouter>
    
</>
  )
}
export default App
