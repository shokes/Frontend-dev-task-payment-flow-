import { Outlet } from 'react-router-dom';
import React from 'react';

const PaymentLayout = () => {
  return (
    <section className='container'>
      <Outlet />
    </section>
  );
};

export default PaymentLayout;
