import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes, Route} from "react-router-dom";
import ReactDom from 'react-dom/client';
import Search from './components/Search';
import Contain from './components/Contain';
import Login from './components/Login';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
    //<Login></Login>


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
