import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaUser } from 'react-icons/fa';
import { personalInfo } from '../data/portfolio';

const BOT_NAME = "Adu's Assistant";

const knowledgeBase = {
  greetings: ['hi', 'hello', 'hey', 'namaste', 'hii', 'helo'],
  skills: ['skill', 'tech', 'technology', 'stack', 'know', 'work with', 'language', 'framework'],
  projects: ['project', 'work', 'built', 'made', 'app', 'website', 'civic', 'zenith', 'tiptop', 'saptec'],
  experience: ['experience', 'intern', 'job', 'company', 'work', 'gotosio', 'nielit'],
  education: ['education', 'college', 'university', 'degree', 'study', 'studied'],
  contact: ['contact', 'hire', 'reach', 'email', 'connect', 'available'],
  certifications: ['cert', 'certificate', 'nptel', 'infosys', 'java'],
  about: ['who', 'about', 'yourself', 'aditi', 'tell me'],
  location: ['location', 'where', 'city', 'lucknow'],
  resume: ['resume', 'cv', 'download'],
  github: ['github', 'code', 'repo', 'repository'],
  linkedin: ['linkedin', 'profile', 'social'],
};

const getResponse = (input) => {
  const msg = input.toLowerCase().trim();

  if (knowledgeBase.greetings.some(w => msg.includes(w))) {
    return `Hey there! 👋 I'm ${BOT_NAME}. I can tell you all about Aditi — her skills, projects, experience, and more. What would you like to know?`;
  }
  if (knowledgeBase.about.some(w => msg.includes(w))) {
    return `Aditi Srivastava is a passionate Software Developer from Lucknow, India 🇮🇳. She specializes in the MERN Stack, React Native, and Firebase. She's currently pursuing her B.E. in Computer Science from IET, Dr. B.A. University (2022–2026) and is open to new opportunities!`;
  }
  if (knowledgeBase.skills.some(w => msg.includes(w))) {
    return `Aditi's tech stack includes:\n\n⚡ **Frontend**: React.js, React Native, HTML5, CSS3, JavaScript\n🔧 **Backend**: Node.js, Express.js, Java\n🗄️ **Database**: MongoDB, Firebase, SQL\n🛠️ **Tools**: Git, VS Code, Postman, Expo`;
  }
  if (knowledgeBase.projects.some(w => msg.includes(w))) {
    return `Aditi has built some cool projects! 🚀\n\n1. **Civic Connect** — Civic issue reporting platform (React + Node.js)\n2. **Zenith Cabs** — Ride-booking app on Play Store (React Native + Firebase)\n3. **TipTop Dresses** — Live e-commerce fashion site\n4. **Saptecdrc** — Mining workforce solutions platform\n5. **Gandhinagar Green Heroes** — Civic recycling initiative\n\nScroll to the Projects section to see them all!`;
  }
  if (knowledgeBase.experience.some(w => msg.includes(w))) {
    return `Aditi's work experience:\n\n💼 **SDE Trainee** at GoToSIOC Technologies Pvt. Ltd. (Jan–Apr 2025)\n→ Worked on SAI Intra for Khelo India Beach Games 2025\n\n💼 **Web Design Intern** at NIELIT, Haridwar (Apr–Jun 2023)\n→ Trained in HTML, CSS & JavaScript`;
  }
  if (knowledgeBase.education.some(w => msg.includes(w))) {
    return `🎓 Aditi is pursuing a **B.E. in Computer Science & Engineering** from IET, Dr. Bhimrao Ambedkar University, Agra (2022–2026).`;
  }
  if (knowledgeBase.certifications.some(w => msg.includes(w))) {
    return `📜 Aditi's certifications:\n\n1. **Programming in Java** — NPTEL (2024)\n2. **Programming in Java** — Infosys Springboard (2023)\n\nClick "Verify Certificate" on any card to view the original!`;
  }
  if (knowledgeBase.contact.some(w => msg.includes(w))) {
    return `Want to reach Aditi? 📬\n\n📧 Email: ${personalInfo.email}\n💼 LinkedIn: linkedin.com/in/aditi-srivastava-345805257\n🐙 GitHub: github.com/aditisriva\n\nOr just scroll to the Contact section and send a message!`;
  }
  if (knowledgeBase.location.some(w => msg.includes(w))) {
    return `📍 Aditi is based in **Lucknow, Uttar Pradesh, India**.`;
  }
  if (knowledgeBase.resume.some(w => msg.includes(w))) {
    return `📄 You can download Aditi's resume from the **Download CV** button in the hero section, or click this link:\n${personalInfo.resumeUrl}`;
  }
  if (knowledgeBase.github.some(w => msg.includes(w))) {
    return `🐙 Aditi's GitHub: **github.com/aditisriva**\n\nCheck out her repositories for Civic Connect, the Full Stack app, and more!`;
  }
  if (knowledgeBase.linkedin.some(w => msg.includes(w))) {
    return `💼 Aditi's LinkedIn: **linkedin.com/in/aditi-srivastava-345805257**\n\nFeel free to connect with her!`;
  }
  if (msg.includes('thank') || msg.includes('thanks') || msg.includes('shukriya')) {
    return `You're welcome! 😊 Feel free to ask anything else about Aditi. If you'd like to work with her, just head to the Contact section!`;
  }
  if (msg.includes('bye') || msg.includes('goodbye') || msg.includes('alvida')) {
    return `Goodbye! 👋 Don't forget to check out Aditi's projects and get in touch if you're interested in working together!`;
  }

  return `Hmm, I'm not sure about that. 🤔 Here's what I can help with:\n\n• **Skills** — What tech does Aditi use?\n• **Projects** — What has she built?\n• **Experience** — Where has she worked?\n• **Education** — Where did she study?\n• **Contact** — How to reach her?\n• **Certifications** — Her credentials\n\nJust ask anything!`;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: 'bot',
      text: `Hi! 👋 I'm ${BOT_NAME}. Ask me anything about Aditi — her skills, projects, experience, or how to contact her!`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = {
      id: Date.now(),
      from: 'user',
      text: input.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setTyping(true);

    await new Promise((r) => setTimeout(r, 700 + Math.random() * 500));
    const response = getResponse(userMsg.text);
    setTyping(false);
    setMessages((m) => [...m, {
      id: Date.now() + 1,
      from: 'bot',
      text: response,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }]);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  const quickReplies = ['Tell me about Aditi', 'Her skills', 'Her projects', 'Contact info'];

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen((o) => !o)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-xl shadow-blue-500/30 text-white"
        aria-label="Open chatbot"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <FaTimes size={18} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <FaRobot size={20} />
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-[#0A0A0A] animate-pulse" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 glass-dark rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col"
            style={{ maxHeight: '520px' }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <FaRobot className="text-white text-sm" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">{BOT_NAME}</div>
                <div className="flex items-center gap-1.5 text-xs text-green-400">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  Online
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="ml-auto text-gray-600 hover:text-white transition-colors">
                <FaTimes size={14} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-2 ${msg.from === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                    msg.from === 'bot' ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-white/10'
                  }`}>
                    {msg.from === 'bot' ? <FaRobot size={12} className="text-white" /> : <FaUser size={11} className="text-gray-400" />}
                  </div>
                  <div className={`max-w-[80%] ${msg.from === 'user' ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
                    <div className={`px-3 py-2 rounded-2xl text-xs leading-relaxed whitespace-pre-line ${
                      msg.from === 'bot'
                        ? 'bg-white/5 border border-white/10 text-gray-200 rounded-tl-sm'
                        : 'bg-blue-600 text-white rounded-tr-sm'
                    }`}>
                      {msg.text}
                    </div>
                    <span className="text-gray-700 text-[10px]">{msg.time}</span>
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <FaRobot size={12} className="text-white" />
                  </div>
                  <div className="px-3 py-3 bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm flex items-center gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                        animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }} />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                {quickReplies.map((r) => (
                  <button key={r} onClick={() => { setInput(r); }}
                    className="text-xs px-2.5 py-1 glass rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-blue-400/40 transition-all">
                    {r}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="flex items-center gap-2 px-3 py-3 border-t border-white/10">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask me anything..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-xs placeholder-gray-600 outline-none focus:border-blue-500/50 transition-colors"
              />
              <motion.button
                onClick={sendMessage}
                disabled={!input.trim()}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center text-white transition-colors flex-shrink-0"
              >
                <FaPaperPlane size={12} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
