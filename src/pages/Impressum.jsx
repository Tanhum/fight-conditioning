import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Impressum = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="page-container">
        <div className="program-section">
          <div className="bottom-border"></div>
          <section className="about-section">
            <div className="about-text">
              <h2>Impressum</h2>
              <p>
                <strong>Verantwortlich für den Inhalt:</strong><br />
                Tanhum Slutskin<br />
                Hohe Weide 34<br />
                20259 Hamburg, Deutschland<br />
                <br />
                <strong>Kontakt:</strong><br />
                E-Mail: tanhum777@gmail.com<br />
                <br />
                <strong>Hinweis:</strong><br />
                Diese Website wird als persönliches Projekt betrieben. Es werden keine kommerziellen Dienstleistungen angeboten. Für weitere Informationen wenden Sie sich bitte per E-Mail an den Verantwortlichen.<br />
                <br />
                <strong>Haftungsausschluss:</strong><br />
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Impressum;