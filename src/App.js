import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ListEmploeeComponent from './Components/ListEmploeeComponent';
import NavbarEx from './Components/Navbar';
import Footer from './Components/Footer';
import AddEmployee from './Components/AddEmployee';
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavbarEx />
          <Routes>
            <Route path='/' Component={ListEmploeeComponent}></Route>
            <Route path='/employee' Component={ListEmploeeComponent}></Route>
            <Route path='/edit-employee/:eid' Component={AddEmployee}></Route>
            <Route path='/add-employee' Component={AddEmployee}></Route>
          </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
