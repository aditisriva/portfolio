import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    nav: {
      about: 'About', skills: 'Skills', projects: 'Projects',
      experience: 'Experience', certifications: 'Certifications',
      contact: 'Contact', hire: 'Hire Me',
    },
    hero: {
      available: 'Available for new opportunities',
      viewProjects: 'View Projects',
      downloadCV: 'Download CV',
      contactMe: 'Contact Me',
      connect: "Let's connect",
    },
    about: {
      eyebrow: 'About Me', title: 'My Background',
      subtitle: 'A passionate developer dedicated to crafting exceptional digital experiences',
      summary: 'Professional Summary', quickInfo: 'Quick Info',
      education: 'Education', location: 'Location', email: 'Email',
    },
    skills: {
      eyebrow: 'Technical Skills', title: 'What I Work With',
      subtitle: 'A curated stack of technologies I use to build modern, scalable applications',
    },
    projects: {
      eyebrow: 'My Work', title: 'Featured Projects',
      subtitle: "A selection of projects I'm proud of — from civic platforms to mobile apps",
      liveDemo: 'Live Demo', code: 'Code', viewAll: 'View all projects on GitHub',
    },
    experience: {
      eyebrow: 'Work History', title: 'My Experience',
      subtitle: 'Roles and achievements that shaped me as an engineer',
    },
    certifications: {
      eyebrow: 'Credentials', title: 'Certifications',
      subtitle: 'Industry-recognized certifications validating my expertise',
      verify: 'Verify Certificate',
    },
    contact: {
      eyebrow: 'Get In Touch', title: "Let's Work Together",
      subtitle: "Have a project in mind? I'd love to hear about it.",
      details: 'Contact Details', available: 'Available for hire',
      availableText: "I'm currently open to freelance work and full-time opportunities.",
      name: 'Full Name', email: 'Email Address', subject: 'Subject',
      message: 'Message', send: 'Send Message', sending: 'Sending...',
      success: 'Message Sent!', successText: "Thanks for reaching out. I'll get back to you within 24 hours.",
      sendAnother: 'Send Another Message',
    },
    testimonials: {
      eyebrow: 'Kind Words', title: 'What People Say',
      subtitle: 'Feedback from colleagues, mentors, and clients',
    },
    blog: {
      eyebrow: 'My Articles', title: 'Blog & Writing',
      subtitle: 'Thoughts on development, design, and the tech industry',
      readMore: 'Read More', minRead: 'min read',
    },
    footer: {
      quickLinks: 'Quick Links', contact: 'Contact',
      backToTop: 'Back to top', built: 'Built with',
    },
  },
  hi: {
    nav: {
      about: 'परिचय', skills: 'कौशल', projects: 'प्रोजेक्ट',
      experience: 'अनुभव', certifications: 'प्रमाणपत्र',
      contact: 'संपर्क', hire: 'हायर करें',
    },
    hero: {
      available: 'नए अवसरों के लिए उपलब्ध',
      viewProjects: 'प्रोजेक्ट देखें',
      downloadCV: 'CV डाउनलोड करें',
      contactMe: 'संपर्क करें',
      connect: 'जुड़ें',
    },
    about: {
      eyebrow: 'मेरे बारे में', title: 'मेरी पृष्ठभूमि',
      subtitle: 'एक उत्साही डेवलपर जो असाधारण डिजिटल अनुभव बनाने के लिए समर्पित है',
      summary: 'पेशेवर सारांश', quickInfo: 'त्वरित जानकारी',
      education: 'शिक्षा', location: 'स्थान', email: 'ईमेल',
    },
    skills: {
      eyebrow: 'तकनीकी कौशल', title: 'मैं किससे काम करती हूं',
      subtitle: 'आधुनिक, स्केलेबल एप्लिकेशन बनाने के लिए उपयोग की जाने वाली तकनीकें',
    },
    projects: {
      eyebrow: 'मेरा काम', title: 'मुख्य प्रोजेक्ट',
      subtitle: 'वे प्रोजेक्ट जिन पर मुझे गर्व है',
      liveDemo: 'लाइव डेमो', code: 'कोड', viewAll: 'GitHub पर सभी प्रोजेक्ट देखें',
    },
    experience: {
      eyebrow: 'कार्य इतिहास', title: 'मेरा अनुभव',
      subtitle: 'वे भूमिकाएं जिन्होंने मुझे एक इंजीनियर के रूप में आकार दिया',
    },
    certifications: {
      eyebrow: 'प्रमाण-पत्र', title: 'सर्टिफिकेशन',
      subtitle: 'उद्योग-मान्यता प्राप्त प्रमाणपत्र',
      verify: 'प्रमाणपत्र सत्यापित करें',
    },
    contact: {
      eyebrow: 'संपर्क करें', title: 'मिलकर काम करें',
      subtitle: 'कोई प्रोजेक्ट है? मुझे बताएं।',
      details: 'संपर्क विवरण', available: 'काम के लिए उपलब्ध',
      availableText: 'मैं फ्रीलांस और फुल-टाइम अवसरों के लिए खुली हूं।',
      name: 'पूरा नाम', email: 'ईमेल पता', subject: 'विषय',
      message: 'संदेश', send: 'संदेश भेजें', sending: 'भेजा जा रहा है...',
      success: 'संदेश भेजा गया!', successText: '24 घंटे में जवाब दूंगी।',
      sendAnother: 'एक और संदेश भेजें',
    },
    testimonials: {
      eyebrow: 'प्रतिक्रियाएं', title: 'लोग क्या कहते हैं',
      subtitle: 'सहकर्मियों और ग्राहकों की राय',
    },
    blog: {
      eyebrow: 'मेरे लेख', title: 'ब्लॉग और लेखन',
      subtitle: 'विकास, डिज़ाइन और तकनीक पर विचार',
      readMore: 'और पढ़ें', minRead: 'मिनट पढ़ें',
    },
    footer: {
      quickLinks: 'त्वरित लिंक', contact: 'संपर्क',
      backToTop: 'ऊपर जाएं', built: 'के साथ बनाया',
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en');

  const setLanguage = (l) => {
    setLang(l);
    localStorage.setItem('lang', l);
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
