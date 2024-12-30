import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import OrderPizza from './OrderPizza';
import Success from './Success'; // Success sayfasını ekledik
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [name, setName] = useState('');
  const [size, setSize] = useState('');
  const [toppings, setToppings] = useState([]);
  const [notes, setNotes] = useState('');

  return (
    <Router>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/order" 
          element={
            <OrderPizza 
              name={name} 
              setName={setName} 
              size={size} 
              setSize={setSize} 
              toppings={toppings} 
              setToppings={setToppings} 
              notes={notes} 
              setNotes={setNotes} 
            />
          } 
        />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
