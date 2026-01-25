
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Music from "./pages/music"
import Home from "./pages/home"




function App() {

  return (
    <>
    <BrowserRouter>
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/music" element={<Music />} />
    </Routes>
    </div>
    </BrowserRouter>
    
</>
  )
}
export default App
