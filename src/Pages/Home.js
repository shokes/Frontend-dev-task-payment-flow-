import React from 'react';
import GoToTop from '../GoToTop';
import PersonalInfoForm from '../Components/Form/PersonalInfoForm';

const Home = () => {
  return (
    <section className='container'>
      {/* <Header /> */}
      <PersonalInfoForm />
      <GoToTop />
    </section>
  );
};

export default Home;
