import './App.css';
import { BrowserRouter, BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Car from './pages/Car';


function App() {
  return (
    <div className="app">

        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/car" element={<Car/>}/>
          </Routes>
        </Router>

    </div>
  );
}

export default App;