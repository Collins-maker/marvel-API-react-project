
import './App.css';
import Character from './components/Character';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './components/Home';
import Comics from './components/comics';
import Series from './components/series';
import Stories from './components/stories';

function App() {
  return (
    <div className="App">
      <Header/>
    <Router>
      <Routes>
        <Route path='Home' element={<Home/>}/>
        <Route path='Character' element={<Character/>}/>
        <Route path='Comics' element={<Comics/>}/>
        <Route path='Series' element={<Series/>}/>
        <Route path='Stories' element={<Stories/>}/>
        <Route/>
        <Route/>
        <Route/>
      </Routes>
    </Router>

    <Home/>
    </div>
  );
}

export default App;
