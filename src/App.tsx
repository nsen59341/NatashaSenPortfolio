import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Linkedin, 
  Instagram, 
  Youtube, 
  Code, 
  Cpu, 
  TrendingUp, 
  Mail, 
  MapPin, 
  Phone,
  ChevronRight, 
  ExternalLink, 
  Github, 
  Award,
  Menu,
  X,
  Star,
  CheckCircle2
} from 'lucide-react';

// --- Types ---
interface Project {
  name: string;
  problem: string;
  image: string;
  github?: string;
  live?: string;
  video?: string;
}

interface Experience {
  role: string;
  company: string;
  duration: string;
  points: string[];
}

interface Certification {
  name: string;
  issuer: string;
  year: string;
  url: string;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    name: "24/7 AI Support Chatbot",
    problem: "Automated customer queries using SQRR framework, Chatling, and Make.com to provide instant, accurate AI replies.",
    image: "/src/assets/ai_chatbot.png",
    live: "https://share.chatling.ai/s/tab9e4fwh2bcAtE"
  },
  {
    name: "Freedom With AI Demo Bot",
    problem: "A comprehensive assistant for room bookings, policy searches, and training resource management using Airtable integration.",
    image: "/src/assets/fwai_bot.png",
    live: "https://share.chatling.ai/s/RXe6wCddnkuofMA"
  },
  {
    name: "AI Voice Automation Agent",
    problem: "Providing 24x7 call support through advanced voice synthesis and automation workflows.",
    image: "/src/assets/ai_voice_agent.png",
    live: "https://www.canva.com/design/DAHEf9t8GOY/I3eK47XRLmUX1D5b6iHh-Q/watch?utm_content=DAHEf9t8GOY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5d55087daa"
  },
  {
    name: "SuperCar model ad (Demo)",
    problem: "Advertisement created using AI for a imaginary Car brand.",
    image: "/src/assets/superCar.png",
    live: "https://www.canva.com/design/DAHEk6Y3NoM/gEmY4Jd-aAuZKZLIvLOX-Q/edit?utm_content=DAHEk6Y3NoM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  },
  {
    name: "When Old and New Legends Meet",
    problem: "A creative AI exploration blending historical figures with modern-day contexts.",
    image: "/src/assets/legends.png",
    live: "https://www.canva.com/design/DAHEk8KZnUA/dY9Pj2o21EegiPeuxuGEAQ/edit?utm_content=DAHEk8KZnUA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  },
  {
    name: "Time Travel of a Rider",
    problem: "A cinematic AI-driven narrative showcasing the evolution of riding through different eras.",
    image: "/src/assets/timetravel.png",
    live: "https://www.canva.com/design/DAHEk3bxq0Y/YalCSEESk30Be7uVhbtcBw/edit?utm_content=DAHEk3bxq0Y&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  }
];

const EXPERIENCES: Experience[] = [
  {
    role: "Associate Consultant",
    company: "Infosys",
    duration: "Nov 2024 - Present",
    points: [
      "Leading AI integration initiatives to improve system performance and reduce development bottlenecks.",
      "Strengthening architecture and enhancing delivery efficiency for engineering teams.",
      "Coaching developers to upgrade technical and problem-solving capabilities with AI."
    ]
  },
  {
    role: "Senior Web Developer",
    company: "CodeClouds",
    duration: "Nov 2017 - Nov 2024",
    points: [
      "Specialized in building end-to-end solutions using Python, JavaScript, PHP, React, and MySQL.",
      "Customized and integrated third-party platforms and APIs for e-commerce scalability.",
      "Mentored junior developers, fostering a collaborative and growth-oriented team environment."
    ]
  }
];

const CERTIFICATIONS: Certification[] = [
  { 
    name: "SQL Essential Training", 
    issuer: "LinkedIn", 
    year: "2019", 
    url: "https://www.linkedin.com/learning/certificates/565204ab4270c10dc3cb5f77dea5b8a9c34fa16e57a1605e9929f571ed20a5dc?trk=share_certificate" 
  },
  { 
    name: "Advance Python", 
    issuer: "LinkedIn", 
    year: "2018", 
    url: "https://www.linkedin.com/learning/certificates/abf6aa1921af952c6b6e3af49efe35238b4dc97280d0d08bc9755528655222e3" 
  },
  { 
    name: "Python Django Expert", 
    issuer: "Edureka", 
    year: "2023", 
    url: "https://www.edureka.co/my-certificate/0cfc21a101c024b55abf00d0d1f55aed" 
  },
  { 
    name: "Rest API Development with Node and Express", 
    issuer: "Infosys Lex", 
    year: "2024", 
    url: "https://media.licdn.com/dms/image/v2/D4D2DAQEzpHo1GJnU6A/profile-treasury-document-cover-images_480/B4DZrp.S4bIgBI-/0/1764862017029?e=1774695600&v=beta&t=idvOoa0TCcnqhNE2axrD2um_9Nqzm7DhE5LtOBl658o" 
  },
  { 
    name: "Essentials of Cloud Computing", 
    issuer: "Infosys Lex", 
    year: "2024", 
    url: "https://media.licdn.com/dms/image/v2/D4D2DAQHm5hNUcqn0oA/profile-treasury-document-cover-images_480/B4DZrp.tgPH4BI-/0/1764862126321?e=1774692000&v=beta&t=N_kpZT0pjGodzsz4tdHTc1KZUKC6takpa-3eXc0m_D0" 
  },
  { 
    name: "AWS Cloud Practitioner", 
    issuer: "Infosys Lex", 
    year: "2024", 
    url: "https://media.licdn.com/dms/image/v2/D4D2DAQENVNaIYX0HiQ/profile-treasury-document-cover-images_480/B4DZrp_KbIIABI-/0/1764862245238?e=1774692000&v=beta&t=kbDWQ-XDUL3XgLO2y-G3DT6fWiTd9YE45T3ltPsUJhA" 
  },
  { 
    name: "Prompt Engineering", 
    issuer: "Infosys Lex", 
    year: "2024", 
    url: "https://media.licdn.com/dms/image/v2/D4D2DAQEMuatUzE2ePg/profile-treasury-document-cover-images_480/B4DZrp_vUNGwBI-/0/1764862397725?e=1774692000&v=beta&t=H_Pt3hsJTtpNmWx5R_TYC3bEPf7HRwmeMnZkL4GUPe8" 
  },
  { 
    name: "Behaviour of LLM", 
    issuer: "Infosys", 
    year: "2024", 
    url: "https://media.licdn.com/dms/image/v2/D4D2DAQFgnjWflb5ovA/profile-treasury-image-shrink_160_160/B4DZ0P.fAyH4Ak-/0/1774089532468?e=1774695600&v=beta&t=1G6kwNnua33OyYXWEC71MstE8XsIw7SsCR0zVQiJ4ok" 
  }
];

const TESTIMONIALS = [
  {
    name: "Suraj Ray",
    role: "19th Oct, 2024",
    quote: "This mentor suggest me some sites to prepare my domain and boost my preparation and also how to highlight my profile in linkedin so that interview call is coming. It's very friendly mentor to listen my problem and resolve the query. Thank You Topmate give me valuable mentor really helpful in my career .",
    rating: 5
  },
  {
    name: "Soumya Majhi",
    role: "17th Aug, 2024",
    quote: "She helped me get a clear mind out of all the confusions I had related to learnings and career in tech. She also guided with helpful resources to follow. Overall, an insightful session.",
    rating: 5
  },
  {
    name: "Anonymous",
    role: "11th Aug, 2024",
    quote: "Great... she cleared all my doubts... also gave me lots of suggestions on how to become a good software developer",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "19th Feb, 2026",
    quote: "The AI Tools training was eye-opening. I learned how to use ChatGPT and Claude effectively as a pair programmer.",
    rating: 4.5
  }
];

const SKILLS = {
  tech: [
    { name: "HTML", level: 85, icon: "data:image/png;base64,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" },
    { name: "Python", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Flask", level: 60, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { name: "Django", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "JavaScript", level: 92, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "NodeJS", level: 60, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "ReactJS", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "PHP", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "MySQL", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
  ],
  ai: [
    { name: "ChatGPT", level: 97, icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
    { name: "Gemini", level: 95, icon: "data:image/jpeg;base64,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" },
    { name: "CoPilot", level: 94, icon: "https://res.public.onecdn.static.microsoft/midgard/versionless/officestartresources/copilot_20_light_and_dark.svg" },
    { name: "Claude ai", level: 90, icon: "data:image/png;base64,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" },
    { name: "Prompt Engineering", level: 95, icon: "data:image/png;base64,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" },
    { name: "Langchain", level: 70, icon: "data:image/png;base64,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" },
    { name: "Make.com", level: 90, icon: "https://www.make.com/en/favicon-16x16.png" },
    { name: "Chatbase", level: 85, icon: "https://www.chatbase.co/favicon.ico" },
    { name: "Chatling", level: 85, icon: "https://chatling.ai/favicon.ico" }
  ]
};

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Work', href: '#work' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <img 
            src="/src/assets/brandlogo.jpeg" 
            alt="SQRR Logo" 
            className="h-10 w-auto"
            referrerPolicy="no-referrer"
          />
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="nav-link text-slate-600 hover:text-primary">
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg py-6 flex flex-col items-center space-y-4 md:hidden"
          >
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-lg font-medium text-slate-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12 text-center md:text-left">
    <h2 className="text-4xl font-serif font-bold text-primary mb-4">{title}</h2>
    {subtitle && <p className="text-slate-500 max-w-2xl">{subtitle}</p>}
    <div className="w-20 h-1 bg-accent mt-4 mx-auto md:mx-0"></div>
  </div>
);

const VideoModal = ({ videoUrl, onClose }: { videoUrl: string, onClose: () => void }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
    onClick={onClose}
  >
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
      >
        <X size={24} />
      </button>
      <div className="aspect-video w-full">
        <video 
          src={videoUrl} 
          controls 
          autoPlay 
          className="w-full h-full object-contain bg-black"
        />
      </div>
    </motion.div>
  </motion.div>
);

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    console.log('App component mounted');
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <AnimatePresence>
        {selectedVideo && (
          <VideoModal videoUrl={selectedVideo} onClose={() => setSelectedVideo(null)} />
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center pt-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-accent-light text-primary font-semibold rounded-full text-sm mb-6">
              AI Tool Coach for Developers
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6 leading-tight">
              Natasha Sen
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Code 3X faster with AI tools without compromising code quality. 
              Master the <span className="text-primary font-bold">SQRR framework</span> and turn AI into your career differentiator.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                Work With Me
              </a>
              <a href="#work" className="px-8 py-4 bg-white text-secondary border-2 border-secondary font-bold rounded-lg hover:bg-secondary/5 transition-all">
                View My Work
              </a>
              <div className="flex items-center space-x-4 ml-4">
                <a href="https://linkedin.com/in/natashasen" target="_blank" className="p-3 bg-white text-primary rounded-full shadow-sm hover:shadow-md transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="https://instagram.com/nsen59341" target="_blank" className="p-3 bg-white text-primary rounded-full shadow-sm hover:shadow-md transition-all">
                  <Instagram size={20} />
                </a>
                <a href="https://www.youtube.com/@natashasen3548" target="_blank" className="p-3 bg-white text-primary rounded-full shadow-sm hover:shadow-md transition-all">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div id="profile-photo" className="w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="/src/assets/profilrimg.png" 
                alt="Natasha Sen" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Note: To use your own profile picture, upload it to the 'public' folder as 'input_file_1.png' and update the src above to '/input_file_1.png' */}
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden lg:block">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-accent-light rounded-lg text-accent">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary">8+ Years</p>
                  <p className="text-xs text-slate-500">Industry Experience</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading title="About Me" />
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  My mission is to build products and people that scale. With over 8 years of experience in full-stack development, 
                  I've transitioned from building complex systems at Infosys and CodeClouds to empowering the next generation of engineers.
                </p>
                <p>
                  I specialize in simplifying engineering complexity. In an era where AI is rapidly changing the landscape, 
                  I help junior developers (0-3 years) leverage AI tools not just as a shortcut, but as a strategic career differentiator.
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  {['Tech Mentor', 'Lifelong Learner', 'Yoga Enthusiast', 'Traveler'].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Code className="text-primary" size={40} />
                </div>
                <div className="h-64 bg-secondary/10 rounded-2xl flex items-center justify-center">
                  <Award className="text-secondary" size={40} />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-64 bg-slate-100 rounded-2xl flex items-center justify-center">
                  <Cpu className="text-slate-400" size={40} />
                </div>
                <div className="h-48 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <Star className="text-accent" size={40} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="What I Do" 
            subtitle="Specialized coaching and consulting to accelerate your career in the AI era."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Cpu size={32} />,
                title: "AI Tools Training",
                desc: "Master Cursor, Claude, and ChatGPT to write production-ready code 3X faster using my SQRR framework."
              },
              {
                icon: <Code size={32} />,
                title: "Workflow Automation",
                desc: "Consulting for teams to automate repetitive dev tasks using Make.com, LangChain, and custom AI agents."
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-2xl shadow-sm card-hover border border-slate-100"
              >
                <div className="w-16 h-16 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Skills & Expertise" />
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl font-bold text-primary mb-8 flex items-center">
                <Code className="mr-2" size={20} /> Tech Stack
              </h3>
              <div className="space-y-6">
                {SKILLS.tech.map((skill) => (
                  <div key={skill.name} className="flex items-center space-x-4">
                    <img src={skill.icon} alt={skill.name} className="w-8 h-8 object-contain" referrerPolicy="no-referrer" />
                    <div className="flex-grow">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-slate-700">{skill.name}</span>
                        <span className="text-slate-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-primary"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-8 flex items-center">
                <Cpu className="mr-2" size={20} /> AI & Automation Tools
              </h3>
              <div className="space-y-6">
                {SKILLS.ai.map((skill) => (
                  <div key={skill.name} className="flex items-center space-x-4">
                    <img src={skill.icon} alt={skill.name} className="w-8 h-8 object-contain" referrerPolicy="no-referrer" />
                    <div className="flex-grow">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-slate-700">{skill.name}</span>
                        <span className="text-slate-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-accent"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="AI Work & Projects" 
            subtitle="Real-world applications of AI automation and intelligent assistants."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover flex flex-col"
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4">{project.name}</h3>
                  <p className="text-slate-500 mb-6 flex-grow">{project.problem}</p>
                  <div className="flex space-x-4">
                    {project.live && (
                      <a href={project.live} target="_blank" className="flex items-center text-primary font-bold hover:text-accent transition-colors">
                        Live Demo <ExternalLink size={16} className="ml-1" />
                      </a>
                    )}
                    {project.video && (
                      <button 
                        onClick={() => setSelectedVideo(project.video!)}
                        className="flex items-center text-primary font-bold hover:text-accent transition-colors"
                      >
                        Live Demo <ExternalLink size={16} className="ml-1" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Professional Journey" />
          <div className="relative border-l-2 border-slate-100 ml-4 md:ml-0 md:pl-12 space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="absolute -left-[17px] md:-left-[61px] top-0 w-8 h-8 bg-white border-4 border-primary rounded-full z-10"></div>
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                  <div className="flex flex-wrap justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-primary">{exp.role}</h3>
                      <p className="text-lg text-accent font-medium">{exp.company}</p>
                    </div>
                    <span className="px-4 py-1 bg-white text-slate-500 rounded-full text-sm font-semibold shadow-sm mt-2 md:mt-0">
                      {exp.duration}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start text-slate-600">
                        <CheckCircle2 size={18} className="text-primary mt-1 mr-3 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Certifications" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <motion.a 
                key={idx}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-sm flex items-center space-x-4 border border-slate-100 hover:border-accent transition-colors cursor-pointer"
              >
                <div className="p-3 bg-accent/10 text-accent rounded-lg shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm leading-tight">{cert.name}</h4>
                  <p className="text-xs text-slate-400 mt-1">{cert.issuer} • {cert.year}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="What Mentees Say" />
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-slate-50 p-10 rounded-2xl relative"
              >
                <div className="flex text-accent mb-6">
                  {[...Array(Math.floor(t.rating))].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  {t.rating % 1 !== 0 && <Star size={16} className="opacity-50" />}
                </div>
                <p className="text-slate-600 italic mb-8 text-lg leading-relaxed">"{t.quote}"</p>
                <div>
                  <h4 className="font-bold text-primary">{t.name}</h4>
                  <p className="text-sm text-slate-400">{t.role}</p>
                </div>
                <div className="absolute top-10 right-10 text-primary/5">
                  <Star size={80} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-8">Let's Connect</h2>
          <p className="text-primary-foreground/70 text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
            Ready to accelerate your career with AI? Whether you're a junior developer looking for mentorship 
            or a team wanting to automate workflows, I'm here to help.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                <Mail size={28} />
              </div>
              <div>
                <p className="text-sm text-white/50 uppercase tracking-widest font-bold mb-1">Email Me</p>
                <a href="mailto:nsen59341@gmail.com" className="text-xl font-medium hover:text-accent transition-colors">
                  nsen59341@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                <Phone size={28} />
              </div>
              <div>
                <p className="text-sm text-white/50 uppercase tracking-widest font-bold mb-1">Call Me</p>
                <a href="tel:9007145941" className="text-xl font-medium hover:text-accent transition-colors">
                  9007145941
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                <MapPin size={28} />
              </div>
              <div>
                <p className="text-sm text-white/50 uppercase tracking-widest font-bold mb-1">Location</p>
                <p className="text-xl font-medium">Pune, India</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-8">
            <a href="https://linkedin.com/in/natashasen" target="_blank" className="hover:text-accent transition-colors"><Linkedin size={32} /></a>
            <a href="https://instagram.com/nsen59341" target="_blank" className="hover:text-accent transition-colors"><Instagram size={32} /></a>
            <a href="https://www.youtube.com/@natashasen3548" target="_blank" className="hover:text-accent transition-colors"><Youtube size={32} /></a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-white/50 text-center border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm">
            © {new Date().getFullYear()} Natasha Sen. All rights reserved.
          </p>
          <p className="text-xs mt-2">
            Built with Passion & AI Intelligence.
          </p>
        </div>
      </footer>
    </div>
  );
}
