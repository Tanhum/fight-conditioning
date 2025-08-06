import { useState, useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import logo from '../assets/footericon.png';
import instagramIcon from '../assets/instagram.png';
import facebookIcon from '../assets/whatsapp.png';
import youtubeIcon from '../assets/email.png';

const TrainingPlan = () => {
  const { language, translations } = useContext(LanguageContext);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const videoLinks = [
    "https://www.youtube.com/embed/8Z_K-UFRZTE",
    "https://www.youtube.com/embed/8Z_K-UFRZTE",
    "https://www.youtube.com/embed/8Z_K-UFRZTE",
    "https://www.youtube.com/embed/8Z_K-UFRZTE",
  ];

  const weekTitles = [
    translations[language].week1,
    translations[language].week2,
    translations[language].week3,
    translations[language].week4,
  ];

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="page-container">
        <section className="training-section">
          <h2>{translations[language].trainingSectionTitle}</h2>
          <div className="week-dropdowns">
            {[0, 1, 2, 3].map((index) => (
              <div className="week-dropdown" key={index}>
                <button 
                  className="dropdown-header"
                  onClick={() => toggleDropdown(index)}
                >
                  {weekTitles[index]}
                  <span className={`dropdown-arrow ${openDropdown === index ? 'open' : ''}`}>
                    ▼
                  </span>
                </button>
                
                {openDropdown === index && (
                  <div className="dropdown-content">
                    <div className="video-container">
                      <iframe
                        width="100%"
                        height="400"
                        src={videoLinks[index]}
                        title={`${weekTitles[index]} Training Video`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="video-description">
                      <p>{translations[language].videoDescription(weekTitles[index])}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        
        <section className="progress-section">
          <h2>{translations[language].progressSectionTitle}</h2>
        </section>
      </main>
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
  );
};

export default TrainingPlan;