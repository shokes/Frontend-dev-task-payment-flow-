import React from 'react';
import GoToTop from '../GoToTop';
import PersonalInfoForm from '../Components/PersonalInfoForm/PersonalInfoForm';
import { useGlobalContext } from '../context';
import BillingInfoForm from '../Components/BillingInfoForm/BillingInfoForm';
import PurchaseForm from '../Components/PurchaseForm/PurchaseForm';

const Home = () => {
  const { setId, id } = useGlobalContext();
  if (id === 2) {
    return <BillingInfoForm />;
  } else if (id === 3) {
    return <PurchaseForm />;
  }
  return (
    <section className='container'>
      <PersonalInfoForm />
      <GoToTop />
    </section>
  );
};

export default Home;
