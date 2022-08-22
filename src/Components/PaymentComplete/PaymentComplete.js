import React from 'react';
import { Link } from 'react-router-dom';
import success from '../../Images/success.png';
import GoToTop from '../../GoToTop';
import { useGlobalContext } from '../../context';
import './PaymentComplete.css';

const PaymentComplete = () => {
  const { setId } = useGlobalContext();
  return (
    <section>
      <div className='payment-complete'>
        <div className='mark'>
          <img src={success} alt='success' className='success' />
        </div>

        <div className='payment-container'>
          <h3 className='purchase-heading'>Purchase Completed</h3>
          <p className='purchase-para'>
            Please check your email for details concerning this transaction
          </p>
          <Link to='/' className='return' onClick={() => setId(1)}>
            Return Home
          </Link>
        </div>
      </div>
      <GoToTop />
    </section>
  );
};

export default PaymentComplete;
