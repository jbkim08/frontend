import './App.css';
import Nabvar from './layout/Nabvar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUser from './users/AddUser';

function App() {
  return (
    <BrowserRouter>
      <Nabvar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adduser" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
