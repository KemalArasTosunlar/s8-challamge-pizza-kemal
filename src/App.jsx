import { useState } from 'react';
import Home from './Home';
import OrderPizza from './OrderPizza';
import Success from './Success';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [name, setName] = useState('');
  const [size, setSize] = useState('');
  const [toppings, setToppings] = useState([]);
  const [notes, setNotes] = useState('');
  const [orderDetails, setOrderDetails] = useState(null);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home goToOrder={() => setCurrentPage('order')} />;
      case 'order':
        return (
          <OrderPizza
            name={name}
            setName={setName}
            size={size}
            setSize={setSize}
            toppings={toppings}
            setToppings={setToppings}
            notes={notes}
            setNotes={setNotes}
            goToSuccess={(orderDetails) => {
              setCurrentPage('success');
              setOrderDetails(orderDetails);
            }}
          />
        );
      case 'success':
        return <Success 
          pizzaName={orderDetails?.pizzaName}
          selectedToppings={orderDetails?.selectedToppings}
          totalPrice={orderDetails?.totalPrice}
          goToHome={() => setCurrentPage('home')} 
        />;
      default:
        return <Home goToOrder={() => setCurrentPage('order')} />;
    }
  };

  return (
    <>
      <ToastContainer />
      <Navbar />
      {renderPage()}
      <Footer />
    </>
  );
}

export default App;
