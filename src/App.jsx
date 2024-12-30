import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home'; // Ensure Home is imported
import OrderPizza from './OrderPizza';
import './App.css';
import Navbar from './components/NavBar/NavBar'; // Importing Navbar component
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer/Footer'; // Importing Footer component
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0);
  
  // State for order details
  const [name, setName] = useState('');
  const [size, setSize] = useState('');
  const [toppings, setToppings] = useState([]);
  const [notes, setNotes] = useState('');

  return (
    <Router>
      <ToastContainer />
      <Navbar /> {/* NavBar visible on all pages */}
      <Switch>
        <Route path="/" exact>
          <Home />
          <Footer /> {/* Footer visible only on the homepage */}
        </Route>
        <Route path="/order" render={() => (
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
        )} />
      </Switch>
    </Router>
  );
}

export default App;
