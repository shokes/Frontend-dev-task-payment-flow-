import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import './MainLayout.css';
const MainLayout = () => {
  const { id, setId } = useGlobalContext();

  const nav = [
    {
      id: 1,
      title: 'Personal Info',
      url: '/',
    },
    {
      id: 2,
      title: 'Billing Info',
      url: '/billingInfo',
    },
    {
      id: 3,
      title: 'Confirm Payment',
      url: '/confirmPayment',
    },
  ];

  return (
    <section className='container'>
      <h3 className='heading'>Complete your Purchase</h3>
      <nav>
        <ul className='nav-items'>
          {nav.map((item) => {
            return (
              <li
                className='nav-item '
                key={item.id}
                onClick={() => setId(item.id)}
              >
                <Link
                  to={item.url}
                  className={` ${item.id === id ? 'btn-active' : 'nav-item'}`}
                >
                  {item.title}
                </Link>
                <div
                  className={`${item.id === id ? 'link-underline' : null}`}
                ></div>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className='underline'></div>

      <Outlet />
    </section>
  );
};

export default MainLayout;
