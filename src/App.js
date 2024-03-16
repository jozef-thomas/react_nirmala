import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import ViewData from './components/ViewData';
import AddData from './components/AddData';
import StateBasics from './components/StateBasics';
import Counter from './components/Counter';
import Statebasicseg from './components/Statebasicseg';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <StateBasics/>
      {/* <Counter/> */}
      {/* <Statebasicseg/> */}
      {/* <Routes>
        <Route path='/' element={<ViewData/>}/>
        <Route path='/add' element={<AddData/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
