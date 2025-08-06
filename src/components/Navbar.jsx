import './Navbar.css';
import { useLocation, Link } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext.jsx';
import logo from '../assets/logo.png';


const Navbar = () => {
  const { pathname } = useLocation();
  const { language, translations, toggleLanguage } = useContext(LanguageContext);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-container">
          <img 
            src={logo} 
            alt="Fight Conditioning Logo"
            className="logo-img"
          />
          <span className="logo-text">{translations[language].logoText}</span>
        </div>
        <div className="nav-links">
          <Link to="/" className={pathname === '/' ? 'active' : ''}>
            {translations[language].home}
          </Link>
          <Link to="/training" className={pathname === '/training' ? 'active' : ''}>
            {translations[language].trainingPlan}
          </Link>
          <Link to="/about" className={pathname === '/about' ? 'active' : ''}>
            {translations[language].about}
          </Link>
          <button onClick={toggleLanguage} className="language-toggle">
            {language === 'en' ? 'DE' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;