import { Link } from 'react-router-dom';
import './MobileMenu.css';

const MobileMenu = ({ className, onClose }) => {

  return (
    <nav className={className}>
      <svg className='mobile-close' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClose}>
        <path d="M18 6L6 18" stroke="#0F172A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 6L18 18" stroke="#0F172A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <ul className='mobile-list'>
        <li className='mobile-list__item'>
          <a href="#about-us" className="mobile-list__link">
            Sobre Nosotros
          </a>
        </li>
        <li className='mobile-list__item'>
          <a href="#about-us" className="mobile-list__link">
            Sobre Nosotros
          </a>
        </li>
        <li className='mobile-list__item'>
          <a href="#about-us" className="mobile-list__link">
            Sobre Nosotros
          </a>
        </li>
        <li className='mobile-list__item'>
          <a href="#about-us" className="mobile-list__link">
            Sobre Nosotros
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;