import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BillingInfo from './Pages/BillingInfo';
import Home from './Pages/Home';
import Layout from './Components/Layout/Layout';
import Payment from './Pages/Payment';
import PaymentComplete from './Pages/PaymentComplete';
import PaymentLayout from './Components/Layout/PaymentLayout';
import Error from './Pages/Error';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/billingInfo' element={<BillingInfo />} />
          <Route path='/next2' element={<Payment />} />
          <Route path='/confirmPayment' element={<Payment />} />
          <Route path='*' element={<Error />} />
        </Route>
        <Route element={<PaymentLayout />}>
          <Route path='/pay' element={<PaymentComplete />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

{
  /* <Routes>
        <Route element={<PaymentLayout />}>
          <Route path='/pay' element={<PaymentComplete />} />
        </Route>
      </Routes> */
}
<Route element={<PaymentLayout />}>
  <Route path='/' element={<PaymentComplete />} />
</Route>;
