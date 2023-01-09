import logo from './logo.svg';
import './App.css';
import Navbar from './Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Livetv from './Components/Livetv';
import Radio from './Components/Radio';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/livetv'element={<Livetv/>}/>
        <Route path='/radio'element={<Radio/>}/>
      </Routes>
    </div>
  );
}

export default App;
