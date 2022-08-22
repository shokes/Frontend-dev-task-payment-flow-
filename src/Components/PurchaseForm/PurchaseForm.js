import { Link } from 'react-router-dom';
import './PurchaseForm.css';

const PurchaseForm = () => {
  return (
    <section className='purchase-form'>
      <div className='purchase'>
        <div className='main-heading'>
          <h3>Item Name</h3>
          <h3>₦ Price</h3>
        </div>
        <div className='heading-flex'>
          <h3>Data science and usability</h3>

          <span>50,000.00</span>
        </div>
        <div className='heading-flex'>
          <h3>Shipping</h3>
          <span className='shipping-price'>0.00</span>
        </div>
        <div className='purchase-underline'></div>
        <div className='total-heading-flex'>
          <h3 className='total'>Total</h3>
          <span>50,000.00</span>
        </div>
      </div>
      <div className='buttons'>
        <Link to='/pay' className='next-button'>
          Pay
        </Link>
        <div href='' className='cancel-payment'>
          Cancel Payment
        </div>
      </div>
    </section>
  );
};

export default PurchaseForm;
