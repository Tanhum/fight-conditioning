import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext.jsx';
import { Link } from 'react-router-dom';
import heroImg from '../assets/heroimg.png';
import paypalLogo from '../assets/pplogo.png';
import techniqueImg from '../assets/technique.png';
import cardioImg from '../assets/cardio.png';
import coordinationImg from '../assets/coordination.png';
import trainingimg from '../assets/training-section.png';
import logo from '../assets/footericon.png';
import instagramIcon from '../assets/instagram.png';
import facebookIcon from '../assets/whatsapp.png';
import youtubeIcon from '../assets/email.png';
import Navbar from '../components/Navbar';

const Home = () => {
  const { language, translations } = useContext(LanguageContext);

  return (
    <div className="page-wrapper">
      <div className="page-container">
        <Navbar />
        <div className="hero-section">
          <div className="hero-text">
            <h1>{translations[language].heroTitle}</h1>
            <p>{translations[language].heroSubtitle}</p>
            <div className="button-group">
              <button className="cta-button">{translations[language].ctaButton}</button>
              <a 
                href="https://www.paypal.com/donate/?hosted_button_id=M7J2ZRP9GZAS4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="paypal-button"
              >
                <img src={paypalLogo} alt={translations[language].paypalButton} />
                <span>{translations[language].paypalButton}</span>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src={heroImg} alt={translations[language].heroTitle} />
          </div>
        </div>
        <div className="program-section">
          <div className="bottom-border"></div> 
          <div className="program-features">
            <div className="feature">
              <div className="icon-bg">
                <img src={techniqueImg} alt={translations[language].improveTechnique} />
              </div>
              <h3>{translations[language].improveTechnique}</h3>
              <p>{translations[language].techniqueDescription}</p>
            </div>
            <div className="feature">
              <div className="icon-bg">
                <img src={cardioImg} alt={translations[language].cardio} />
              </div>
              <h3>{translations[language].cardio}</h3>
              <p>{translations[language].cardioDescription}</p>
            </div>
            <div className="feature">
              <div className="icon-bg">
                <img src={coordinationImg} alt={translations[language].coordination} />
              </div>
              <h3>{translations[language].coordination}</h3>
              <p>{translations[language].coordinationDescription}</p>
            </div>
          </div>

          <div className="program-description">
            <div className="program-text">
              <h2>{translations[language].programTitle}</h2>
              <p>{translations[language].programDescription}</p>
            </div>
            <div className="program-image">
              <img src={trainingimg} alt={translations[language].programTitle} />
            </div>
          </div> 
        </div>
        <footer className="site-footer">
          <div className="footer-main-content">
            <div className="footer-brand">
              <img src={logo} alt={translations[language].logoText} className="footer-logo" />
            </div>
            
            <div className="footer-columns">
              <div className="footer-column">
                <h5>{translations[language].contact}</h5>
                <ul>
                  <li><a href="mailto:tanhum777@gmail.com">{translations[language].emailUs}</a></li>
                  <li><a href="tel:+4917661429045">+4917661429045</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h5>{translations[language].legal}</h5>
                <ul>
                  <li><Link to="/impressum">{translations[language].imprint}</Link></li>
                  <li><a href="/privacy">{translations[language].privacy}</a></li>
                  <li><a href="/terms">{translations[language].terms}</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h5>{translations[language].social}</h5>
                <div className="social-links">
                  <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
                  <a href="https://wa.me/+4917661429045"><img src={facebookIcon} alt="WhatsApp" /></a>
                  <a href="#"><img src={youtubeIcon} alt="YouTube" /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright-bar">
            <p>{translations[language].footerCopyright}</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;