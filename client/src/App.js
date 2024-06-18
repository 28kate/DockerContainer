import './App.css';
import Ai from './pages/Ai';
import WebDev from './pages/WebDev';
import MobileDev from './pages/MobileDev';
import Navbar from './components/Navbar';
import Skills from './pages/skills/Skills';
import AboutMe from './pages/about/AboutMe';
import ContactMe from './pages/contact/ContactMe';
import Projects from './pages/projects/Projects';
import Header from './components/Header';
import Portfolio from './pages/portfolio/Portfolio';


import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
         <Navbar/>
           <Routes>

            <Route path='/webdev' element={<WebDev/>}/>
            <Route path='/mobiledev' element={<MobileDev/>}/>
            <Route path='/ai' element={<Ai/>}/>     
            <Route path='/about' element={<AboutMe/>}/>  
            <Route path='/contact' element={<ContactMe/>}/>  
            <Route path='/skills' element={<Skills/>}/>     
            <Route path='/projects' element={<Projects/>}/>   
            <Route path='/' element={<Header/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
   
           </Routes>
       
       </BrowserRouter>   
    </div>
  );
}

export default App;
