import { useState, useEffect, useRef, useContext } from 'react';
import { LanguageContext } from '../LanguageContext.jsx';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import logo from '../assets/footericon.png';
import instagramIcon from '../assets/instagram.png';
import facebookIcon from '../assets/whatsapp.png';
import youtubeIcon from '../assets/email.png';
import aboutImage from '../assets/about-image.png';
import photo1 from '../assets/photo1.png';
import photo2 from '../assets/photo2.png';
import photo3 from '../assets/photo3.png';

const About = () => {
  const { language, translations } = useContext(LanguageContext);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const sliderRef = useRef(null);
  
  const slides = [
    {
      image: photo1,
      text: translations[language].slide1,
    },
    {
      image: photo2,
      text: translations[language].slide2,
    },
    {
      image: photo3,
      text: translations[language].slide3,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveSlide((prev) => (prev + 1) % slides.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovering, slides.length]);

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="page-container">
        <div className="program-section">
          <div className="bottom-border"></div>
          
          <section className="about-section">
            <div className="about-content">
              <div className="about-image-container">
                <img 
                  src={aboutImage} 
                  alt={translations[language].aboutTitle} 
                  className="about-image" 
                />
              </div>
              <div className="about-text">
                <h2>{translations[language].aboutTitle}</h2>
                <p>{translations[language].aboutDescription}</p>
              </div>
            </div>
          </section>

          <section className="photo-slider-section">
            <h2>{translations[language].sliderTitle}</h2>
            <div 
              className="photo-slider-container"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div 
                className="slider-track"
                style={{ 
                  transform: `translateX(-${activeSlide * 100}%)`,
                  transition: isHovering ? 'none' : 'transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="slide">
                    <div className="image-container">
                      <img src={slide.image} alt={`Slide ${index + 1}`} />
                    </div>
                    <p>{slide.text}</p>
                  </div>
                ))}
              </div>

              <div className="slider-dots-container">
                <div className="slider-dots">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      className={activeSlide === index ? 'active' : ''}
                      onClick={() => {
                        setActiveSlide(index);
                        setIsHovering(true);
                        setTimeout(() => setIsHovering(false), 1500);
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
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

export default About;