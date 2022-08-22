import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BillingInfo from './Pages/BillingInfo';
import Home from './Pages/Home';
import MainLayout from './Components/MainLayout/MainLayout';
import Payment from './Pages/Payment';
import PaymentSuccess from './Pages/PaymentSuccess';
import PaymentLayout from './Components/PaymentLayout/PaymentLayout';
import Error from './Pages/Error';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/billingInfo' element={<BillingInfo />} />
          <Route path='/next2' element={<Payment />} />
          <Route path='/confirmPayment' element={<Payment />} />
          <Route path='*' element={<Error />} />
        </Route>
        <Route element={<PaymentLayout />}>
          <Route path='/pay' element={<PaymentSuccess />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
