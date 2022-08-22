import React from 'react';
import GoToTop from '../GoToTop';
import PersonalInfoForm from '../Components/PersonalInfoForm/PersonalInfoForm';

const Home = () => {
  return (
    <section className='container'>
      <PersonalInfoForm />
      <GoToTop />
    </section>
  );
};
export default Home;
