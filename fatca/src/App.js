
import './App.css';
import {BrowserRouter , Routes, Route} from "react-router-dom";
import Search from './components/Search';
import Contain from './components/Contain';
import Login from './components/Login';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Login />} />
      <Route path='/search' element={<Search />} />
      <Route path='/contain' element={<Contain />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
