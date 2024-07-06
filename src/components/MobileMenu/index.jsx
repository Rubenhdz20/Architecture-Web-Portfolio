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
          <a className="mobile-list__link" onClick={() => {
              onClose();
              const aboutUsSection = document.getElementById('about-us');
              if (aboutUsSection) {
                aboutUsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
            Sobre Nosotros
          </a>
        </li>
        <li className='mobile-list__item'>
          <a className="mobile-list__link" onClick={() => {
              onClose();
              const weDoSection = document.getElementById('whatwedo');
              if ( weDoSection) {
                weDoSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
            Lo que hacemos
          </a>
        </li>
        <li className='mobile-list__item'>
          <a className="mobile-list__link" onClick={() => {
                onClose();
                const ourWorkSection = document.getElementById('our-work');
                if (ourWorkSection) {
                  ourWorkSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
            Nuestro Trabajo
          </a>
        </li>
        <li className='mobile-list__item'>
          <a className="mobile-list__link" onClick={() => {
              onClose();
              const contactSection = document.getElementById('contact-section');
              if ( contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;