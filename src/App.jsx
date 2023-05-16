
import Homepage from './components/Homepage';
import Contact from './components/Contact'
import Services from './components/Services'
import About from './components/About';
import { Routes,Route } from "react-router-dom"


function App() {
 
 return (
 
 <Routes>
 
<Route path="/about" element={<About />}/>
<Route path="/" element={<Homepage />} />
<Route path="/services" element={<Services/>} />
<Route path="/contact" element={<Contact/>} />

 </Routes>
 )
}


export default App;
 