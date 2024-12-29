import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home'; // Ensure Home is imported
import OrderPizza from './OrderPizza';
import reactLogo from './assets/react.svg';
import workintech from '/workintech.svg';
import './App.css';
import { ToastContainer } from 'react-toastify';
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
      <div>
        <a href="https://github.com/Workintech/fsweb-s7-challenge-pizza" target="_blank">
          <img src={workintech} className="logo" alt="Workintech logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Workintech + 🍕</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Absolute Acı Pizza sayısı {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
          {/* Minor change to trigger HMR */}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Workintech or Pizza logos to learn more
      </p>
      
      <Switch>
<Route path="/" exact component={Home} />
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
