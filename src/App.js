import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Education from './Components/Education';
import Project from './Components/Project';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="">
     

<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Education' element={<Education/>}/>
  <Route path='/Projects' element={<Project/>}/>
  <Route path='/Skills' element={<Skills/>}/>
  <Route path='/Contact' element={<Contact/>}/>



</Routes>
</BrowserRouter>













    </div>
  );
}

export default App;
