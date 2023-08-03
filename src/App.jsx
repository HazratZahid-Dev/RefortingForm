import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import viteLogo from '/vite.svg'
import './App.css'
// import Login from './Pages/Login'
import ReportAnAssue from './Pages/ReportAnAssue'
import NavBar from './Components/NavBar';
import Addresses from './Pages/Addresses';
import Form from './Pages/Form';
import YourDetail from './Pages/YourDetail';
import DescribeProblem from './Pages/DescribeProblem';
import UploadImage from './Pages/UploadImage';
import Submit from './Pages/Submit';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <NavBar/>
      <Routes>
      <Route path="/" element={<ReportAnAssue />} />
      <Route path="/address" element={<Addresses />} />
      <Route path="/form" element={<Form />} />
      <Route path="/detail" element={<YourDetail />} />
      <Route path="/describe" element={<DescribeProblem />} />
      <Route path="/upload" element={<UploadImage />} />
      <Route path="/submit" element={<Submit />} />






      </Routes>
    </Router>
      
    </>
  )
}

export default App
