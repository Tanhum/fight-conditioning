import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('de');

  const translations = {
    en: {
      // Navbar
      home: 'Home',
      trainingPlan: 'Training Plan',
      about: 'About',
      logoText: 'Fight Conditioning',

      // Home.jsx
      heroTitle: 'Welcome to Our Beginner Training Program',
      heroSubtitle: 'Start your fitness journey today',
      ctaButton: 'Get Started',
      paypalButton: 'For Payments',
      improveTechnique: 'Improve Technique',
      techniqueDescription: 'Master proper form and movement fundamentals',
      cardio: 'Cardio',
      cardioDescription: 'Build fighter’s endurance and stamina',
      coordination: 'Coordination',
      coordinationDescription: 'Develop razor-sharp reflexes',
      programTitle: 'Our Training Program',
      programDescription: 'I’m working on a program that could help beginners understand fighting skills better, while also improving certain parameters of their fitness. I love martial arts, so I believe one should always fight to stay fit.',
      contact: 'CONTACT',
      legal: 'LEGAL',
      imprint: 'Impressum',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      social: 'SOCIAL',
      emailUs: 'Email Us',
      footerCopyright: `© ${new Date().getFullYear()} Fight Conditioning. All rights reserved.`,

      // About.jsx
      aboutTitle: 'About Me',
      aboutDescription: 'I’m Tanhum Slutskin, a dedicated martial artist with a purple belt in Brazilian Jiu-Jitsu and a blue belt in Muay Thai. I’ve been training my entire life and have competed in both disciplines, honing my skills under the guidance of renowned coaches Robert Gralfs and Dima Mourovani. As a certified trainer and former competitive athlete, I understand the dedication required to excel. My programs are tailored to individual needs, ensuring each client receives personalized attention and training to achieve their fitness and martial arts goals.',
      sliderTitle: 'Check out these images of my journey',
      slide1: 'With @feizimma, my friend who’s an MMA fighter',
      slide2: 'AGF Championship 2019',
      slide3: 'Coaching students - 2021',

      // TrainingPlan.jsx
      trainingSectionTitle: 'I’m currently working on a free 4-week program',
      week1: 'Week 1: Fundamentals',
      week2: 'Week 2: Building Strength',
      week3: 'Week 3: Advanced Techniques',
      week4: 'Week 4: Full Routine',
      videoDescription: (week) => `This is the training video for ${week.toLowerCase()}. Follow along with the instructions.`,
      progressSectionTitle: 'For private trainings',
    },
    de: {
      // Navbar
      home: 'Startseite',
      trainingPlan: 'Trainingsplan',
      about: 'Über mich',
      logoText: 'Kampfkonditionierung',

      // Home.jsx
      heroTitle: 'Willkommen zu unserem Anfänger-Trainingsprogramm',
      heroSubtitle: 'Beginne deine Fitnessreise heute',
      ctaButton: 'Loslegen',
      paypalButton: 'Für Zahlungen',
      improveTechnique: 'Technik verbessern',
      techniqueDescription: 'Beherrsche die richtige Form und grundlegende Bewegungen',
      cardio: 'Kardio',
      cardioDescription: 'Baue die Ausdauer und Kondition eines Kämpfers auf',
      coordination: 'Koordination',
      coordinationDescription: 'Entwickle messerscharfe Reflexe',
      programTitle: 'Unser Trainingsprogramm',
      programDescription: 'Ich arbeite an einem Programm, das Anfängern hilft, Kampffertigkeiten besser zu verstehen und gleichzeitig bestimmte Aspekte ihrer Fitness zu verbessern. Ich liebe Kampfsport, deshalb glaube ich, dass man immer kämpfen sollte, um fit zu bleiben.',
      contact: 'KONTAKT',
      legal: 'RECHTLICHES',
      imprint: 'Impressum',
      privacy: 'Datenschutzrichtlinie',
      terms: 'Nutzungsbedingungen',
      social: 'SOZIALE MEDIEN',
      emailUs: 'E-Mail senden',
      footerCopyright: `© ${new Date().getFullYear()} Kampfkonditionierung. Alle Rechte vorbehalten.`,

      // About.jsx
      aboutTitle: 'Über mich',
      aboutDescription: 'Ich bin Tanhum Slutskin, ein engagierter Kampfsportler mit einem lila Gürtel in Brasilianischem Jiu-Jitsu und einem blauen Gürtel in Muay Thai. Ich trainiere seit meinem ganzen Leben und habe in beiden Disziplinen Wettkämpfe bestritten, wobei ich meine Fähigkeiten unter der Anleitung der renommierten Trainer Robert Gralfs und Dima Mourovani verfeinert habe. Als zertifizierter Trainer und ehemaliger Wettkampfathlet verstehe ich die Hingabe, die nötig ist, um herausragende Leistungen zu erbringen. Meine Programme sind auf individuelle Bedürfnisse zugeschnitten und gewährleisten, dass jeder Kunde persönliche Betreuung und Training erhält, um seine Fitness- und Kampfsportziele zu erreichen.',
      sliderTitle: 'Schau dir diese Bilder meiner Reise an',
      slide1: 'Mit @feizimma, meinem Freund, der MMA-Kämpfer ist',
      slide2: 'AGF-Meisterschaft 2019',
      slide3: 'Training von Schülern - 2021',

      // TrainingPlan.jsx
      trainingSectionTitle: 'Ich arbeite derzeit an einem kostenlosen 4-Wochen-Programm',
      week1: 'Woche 1: Grundlagen',
      week2: 'Woche 2: Kraftaufbau',
      week3: 'Woche 3: Fortgeschrittene Techniken',
      week4: 'Woche 4: Vollständige Routine',
      videoDescription: (week) => `Dies ist das Trainingsvideo für ${week.toLowerCase()}. Folge den Anweisungen.`,
      progressSectionTitle: 'Für private Trainings',
    },
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'de' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, translations, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);