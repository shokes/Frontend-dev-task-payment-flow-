import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import { IoIosArrowDown } from 'react-icons/io';
import './PersonalInfoForm.css';

const PersonalInfoForm = () => {
  const { setId, id } = useGlobalContext();

  return (
    <section>
      <form
        action='
   '
        className='form'
      >
        <div className='form-input'>
          <label htmlFor='' className='label'>
            Name
          </label>
          <input
            type='text'
            className='input-1'
            placeholder='Opara Linus Ahmed'
          />
        </div>
        <div className='form-input'>
          <label htmlFor='' className='email-label'>
            Email Address <span className='red-star'>*</span>
          </label>
          <p className='email-para'>
            This purchase receipt would be sent to this adddress
          </p>
          <input
            type='text'
            className='input-1'
            placeholder='OparaLinusAhmed@devmail.com'
          />
        </div>
        <div className='form-input'>
          <label htmlFor='' className='label'>
            Address 1
          </label>
          <input type='text' className='input-1' placeholder='Address 1' />
        </div>
        <div className='form-input'>
          <label htmlFor='' className='label'>
            Address 2
          </label>
          <input type='text' className='input-1' placeholder='Address 2' />
        </div>
        <div className='location'>
          <div className='form-input-local'>
            <label htmlFor='' className='label'>
              Local Government
            </label>
            <input type='text' className='input-1' placeholder='Surulere' />
          </div>
          <div className='form-input'>
            <label htmlFor='state' className='label'>
              State
            </label>

            <div className='select-wrapper'>
              <select id='select' name='select' className='input-1'>
                <option value='lagos'>Lagos</option>
                <option value='abuja'>Abuja</option>
                <option value='edo'>Edo</option>
                <option value='ogun'>Ogun</option>
              </select>
              <span className='arrow'>
                <IoIosArrowDown />
              </span>
            </div>
          </div>
        </div>
        <div className='buttons'>
          <Link
            to='/billingInfo'
            className='next-button'
            onClick={() => setId(2)}
          >
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

export default PersonalInfoForm;
