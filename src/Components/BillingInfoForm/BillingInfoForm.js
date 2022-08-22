import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import './BillingInfoForm.css';

const BillingInfoForm = () => {
  return (
    <section>
      <form
        action='
   '
        className='form'
      >
        <div className='form-input'>
          <label htmlFor='' className='position label'>
            Name on Card <span className='red-star'>*</span>
          </label>
          <input
            type='text'
            className='input-1'
            placeholder='Opara Linus Ahmed'
          />
        </div>
        <div className='form-input'>
          <label htmlFor='' className='position label'>
            Card type <span className='card-red-star'>*</span>
          </label>
          <div className='card-position'>
            <select name='card-type' className='input-1'>
              <option value='visa'>Visa</option>
              <option value='masetercard'>Mastercard</option>
              <option value='xxx'>Xxx</option>
            </select>
            <span className='arrow-billing'>
              <IoIosArrowDown />
            </span>
          </div>
        </div>

        <div className='card'>
          <div className='card-details'>
            <label htmlFor='' className='position label'>
              Card details <span className='card-details-star'>*</span>
            </label>
            <input
              type='text'
              className='input-11'
              placeholder='5555  5555  5555  5555  5555'
            />
          </div>
          <div className='form-input-loca'>
            <label htmlFor='' className='position label'>
              Expiry date <span className='expiry-date-star'>*</span>
            </label>
            <input type='text' className='input-13' placeholder='04 /  23' />
          </div>
          <div className='form-input-locl'>
            <label htmlFor='' className='position label'>
              CVV <span className=' cvv-star'>*</span>
            </label>
            <input type='text' className='input-13' placeholder='' />
          </div>{' '}
        </div>
        <div className='buttons'>
          <Link className='next-button' to='/next2'>
            Next
          </Link>
          <div href='' className='cancel-payment'>
            Cancel Payment
          </div>
        </div>
      </form>
    </section>
  );
};

export default BillingInfoForm;
