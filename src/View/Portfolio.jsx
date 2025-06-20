import React from 'react';

// Icon
import github from '../assets/icon/github.png';
import linkedin from '../assets/icon/linkedin.svg';
import igicon from '../assets/icon/igicon.png';
import gmail from '../assets/icon/gmail.png';
import discord from '../assets/icon/discord.png';
import whatsapp from '../assets/icon/whatsapp.png';
import browser from '../assets/icon/browser.png';

import person from '../assets/picture/RayyanGanteng1.png';
import RayyanGanteng2 from '../assets/picture/RayyanGanteng2.jpg';

// Skills icon
import AdobePremiere from '../assets/skills/AdobePremiere.png';
import C from '../assets/skills/C.png';
import Cs from '../assets/skills/Cs.png';
import CSS from '../assets/skills/CSS.png';
import Figma from '../assets/skills/Figma.png';
import HTML from '../assets/skills/HTML.png';
import Java from '../assets/skills/Java.png';
import JavaScript from '../assets/skills/Javascript.png';
import MySQL from '../assets/skills/MySQL.png';
import MongoDB from '../assets/skills/Mongodb.png';
import ReactLogo from '../assets/skills/React.png';
import TailwindLogo from '../assets/skills/TailwindCSS.png';

// Certificate
import BNCC from '../assets/certificate/BNCC_Activist.jpg';
import TPM1 from '../assets/certificate/Certificate of Completion Rayyan Zafier Leksono.jpg';
import TPM2 from '../assets/certificate/Certificate of Participation Rayyan Zafier Leksono.jpg';
import BNMC from '../assets/certificate/PRE STARTER 学生.png';


// Project Videos
import AsphatVideo from '../assets/projects/Asphatl.mp4';
import BConnectVideo from '../assets/projects/B-Connect Trailer.mp4';
import LibraryVideo from '../assets/projects/Library Management.mp4';
import MenuVideo from '../assets/projects/Menu Management.mp4';

const Portfolio = () => {
  // Animation states
  const [isPageLoaded, setIsPageLoaded] = React.useState(false);
  const [visibleSections, setVisibleSections] = React.useState(new Set());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Skills data array
  const skills = [
    { name: 'Java', icon: Java, animation: 'float-animation' },
    { name: 'HTML', icon: HTML, animation: 'float-animation-delayed' },
    { name: 'CSS', icon: CSS, animation: 'float-animation-slow' },
    { name: 'JavaScript', icon: JavaScript, animation: 'float-animation' },
    { name: 'React', icon: ReactLogo, animation: 'float-animation-delayed' },
    { name: 'C#', icon: Cs, animation: 'float-animation-slow' },
    { name: 'C', icon: C, animation: 'float-animation' },
    { name: 'MySQL', icon: MySQL, animation: 'float-animation-delayed' },
    { name: 'MongoDB', icon: MongoDB, animation: 'float-animation-slow' },
    { name: 'Figma', icon: Figma, animation: 'float-animation' },
    { name: 'Adobe Premiere', icon: AdobePremiere, animation: 'float-animation-delayed' },
    { name: 'Tailwind CSS', icon: TailwindLogo, animation: 'float-animation-slow' }
  ];
  // Certificates data array
  const certificates = [
    { 
      id: 1, 
      title: 'BNCC Activist Certificate', 
      image: BNCC,
      description: 'Certificate of Achievement for becoming as Bina Nusantara Computer Club (BNCC) Activist'
    },
    { 
      id: 2, 
      title: 'TPM Completion Certificate', 
      image: TPM1,
      description: 'Certificate of Completion for Training Program Management at Bina Nusantara Coomputer Club (BNCC)'
    },
    { 
      id: 3, 
      title: 'TPM Participation Certificate', 
      image: TPM2,
      description: 'Certificate of Participation for Training Program Management at Bina Nusantara Computer Club (BNCC)'
    },    { 
      id: 4, 
      title: 'BNMC Pre Starter Certificate', 
      image: BNMC,
      description: 'Certificate for completing Pre Starter Level Achievement of Mandarin Class'
    }
  ];  
  
  // Projects data array
  const projects = [
    {
      id: 1,
      title: 'B-Connect Platform',      
      description: 'B-Connect is a group project consisting of four people for the final project of the Software Engineering course. B-Connect is a freelancer platform designed specifically for Binus University students.',
      video: BConnectVideo,
      technologies: [ReactLogo, TailwindLogo, JavaScript, MongoDB],
      githubUrl: 'https://github.com/Swook1/b-connect',
      websiteUrl: 'https://b-connect-nu.vercel.app/'
    },
    {
      id: 2,
      title: 'Asphatl 9: Rejends',      
      description: 'As an individual final project for the Human Centered Design (HCI) course, Apshatl 9: Rejends was created as a remake of the Asphalt 9: Legends game website.',
      video: AsphatVideo,
      technologies: [HTML, CSS, JavaScript],
      githubUrl: 'https://github.com/Swook1/Asphatl-9-Rejends',
      websiteUrl: 'https://swook1.github.io/Asphatl-9-Rejends/'
    },
    {
      id: 3,
      title: 'Library Management System',      
      description: 'Library Management System is a simple system for adding, displaying lists, searching, and deleting books. This Library Management System was created as one of the basic menu project exercises in Java.',
      video: LibraryVideo,
      technologies: [Java],
      githubUrl: 'https://github.com/Swook1/Simple_Library-Management',
    },
    {
      id: 4,
      title: 'Menu Management System',      
      description: 'The Menu Management System was created as the final project of BNCC Learning and Training. This system functions as a customization menu and inventory management with a user interface (UI) and database operations.',
      video: MenuVideo,
      technologies: [Java, MySQL],
      githubUrl: 'https://github.com/Swook1/Menu-Management_JavaFX',
    }  ];
  
  // Certificate carousel constants
  const CAROUSEL_CONFIG = {
    AUTO_ROTATE_INTERVAL: 8000, 
    ANIMATION_DURATION: 1000, 
    CENTER_SIZE: { 
      width: 'w-[280px] sm:w-[400px] lg:w-[600px]', 
      height: 'h-[200px] sm:h-[280px] lg:h-[420px]' 
    },
    SIDE_SIZE: { 
      width: 'w-[240px] sm:w-[320px] lg:w-[480px]', 
      height: 'h-[170px] sm:h-[230px] lg:h-[340px]' 
    },
    SCALE: {
      CENTER: 'scale-100',
      SIDE: 'scale-85'
    }
  };
  const [currentCertIndex, setCurrentCertIndex] = React.useState(0);
  const [selectedCertificate, setSelectedCertificate] = React.useState(null);
  const [imageOrientations, setImageOrientations] = React.useState({});
  const [videoStates, setVideoStates] = React.useState({});

  // Function to detect image orientation
  const detectImageOrientation = (imageSrc, certId) => {
    const img = new Image();
    img.onload = () => {
      const isLandscape = img.width > img.height;
      setImageOrientations(prev => ({
        ...prev,
        [certId]: isLandscape ? 'landscape' : 'portrait'
      }));
    };
    img.src = imageSrc;
  };

  React.useEffect(() => {
    certificates.forEach(cert => {
      detectImageOrientation(cert.image, cert.id);
    });
  }, [certificates]);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCertIndex((prevIndex) => 
        (prevIndex + 1) % certificates.length
      );
    }, CAROUSEL_CONFIG.AUTO_ROTATE_INTERVAL);

    return () => clearInterval(interval);
  }, [certificates.length]);

  const nextCertificate = () => {
    setCurrentCertIndex((prevIndex) => 
      (prevIndex + 1) % certificates.length
    );
  };

  const previousCertificate = () => {
    setCurrentCertIndex((prevIndex) => 
      (prevIndex - 1 + certificates.length) % certificates.length
    );
  };

  const getVisibleCertificates = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentCertIndex + i + certificates.length) % certificates.length;
      visible.push({
        ...certificates[index],
        position: i 
      });
    }
    return visible;
  };

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  // Video control functions
  const toggleMute = (videoId) => {
    const video = document.getElementById(`video-${videoId}`);
    if (video) {
      video.muted = !video.muted;
      setVideoStates(prev => ({
        ...prev,
        [videoId]: { ...prev[videoId], muted: video.muted }
      }));
    }
  };

  const toggleFullscreen = (videoId) => {
    const video = document.getElementById(`video-${videoId}`);
    if (video) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        video.requestFullscreen().catch(err => {
          console.log('Error attempting to enable fullscreen:', err);
        });
      }    }
  };

  // Page load animation effect
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetId === 'home' ? 0 : targetElement.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  React.useEffect(() => {
    const initialStates = {};
    projects.forEach(project => {
      initialStates[project.id] = { muted: true };
    });
    setVideoStates(initialStates);
  }, []);  return (
    <div className={`transition-opacity duration-1000 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>        
      {/* Navbar */}
      <nav className="w-full bg-white px-4 sm:px-6 py-4 shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-between items-center">
          <button 
            onClick={(e) => handleNavClick(e, 'home')}
            className="font-poppins font-semibold text-gray-700 text-[16px] sm:text-[18px] hover:text-gray-600 transition-all duration-200 cursor-pointer"
          >
            Rayyan
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 font-poppins font-medium text-gray-700 text-[16px] lg:text-[18px]">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')}
              className="px-2 lg:px-3 py-2 hover:text-gray-600 hover:scale-110 transition-all duration-200 transform"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')}
              className="px-2 lg:px-3 py-2 hover:text-gray-600 hover:scale-110 transition-all duration-200 transform"
            >
              About
            </a>
            <a 
              href="#skills" 
              onClick={(e) => handleNavClick(e, 'skills')}
              className="px-2 lg:px-3 py-2 hover:text-gray-600 hover:scale-110 transition-all duration-200 transform"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              onClick={(e) => handleNavClick(e, 'projects')}
              className="px-2 lg:px-3 py-2 hover:text-gray-600 hover:scale-110 transition-all duration-200 transform"
            >
              Projects
            </a>
            <a 
              href="#certificate" 
              onClick={(e) => handleNavClick(e, 'certificate')}
              className="px-2 lg:px-3 py-2 hover:text-gray-600 hover:scale-110 transition-all duration-200 transform"
            >
              Certificate
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-6 h-6 focus:outline-none"
          >
            <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 my-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="pt-4 pb-2 space-y-2">
            <a 
              href="#home" 
              onClick={(e) => {handleNavClick(e, 'home'); setIsMobileMenuOpen(false);}}
              className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-600 transition-colors duration-200 font-poppins font-medium rounded-lg"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => {handleNavClick(e, 'about'); setIsMobileMenuOpen(false);}}
              className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-600 transition-colors duration-200 font-poppins font-medium rounded-lg"
            >
              About
            </a>
            <a 
              href="#skills" 
              onClick={(e) => {handleNavClick(e, 'skills'); setIsMobileMenuOpen(false);}}
              className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-600 transition-colors duration-200 font-poppins font-medium rounded-lg"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              onClick={(e) => {handleNavClick(e, 'projects'); setIsMobileMenuOpen(false);}}
              className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-600 transition-colors duration-200 font-poppins font-medium rounded-lg"
            >
              Projects
            </a>
            <a 
              href="#certificate" 
              onClick={(e) => {handleNavClick(e, 'certificate'); setIsMobileMenuOpen(false);}}
              className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-600 transition-colors duration-200 font-poppins font-medium rounded-lg"
            >
              Certificate
            </a>
          </div>
        </div>
      </nav>
        {/* Home Section */}
      <section id="home" className={`min-h-screen flex items-center justify-center bg-[#F9FAFB] pt-16 sm:pt-20 transition-all duration-1000 ${visibleSections.has('home') || isPageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="px-4 sm:px-6 lg:px-2 lg:mx-56 h-full w-full max-w-7xl lg:max-w-none">          
          <div className="flex flex-col lg:flex-row items-center min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)]">
            {/* Left Content */}
            <div className={`flex-1 lg:flex-[3] space-y-4 sm:space-y-6 flex flex-col justify-center h-full pr-0 lg:pr-12 text-center lg:text-left transition-all duration-1000 delay-200 ${visibleSections.has('home') || isPageLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-900 font-poppins mb-3 sm:mb-4">
                  Hi There,
                </h1>
                <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-900 font-poppins mb-4 sm:mb-6">
                  I'm Rayyan Zafier Leksono
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-poppins mb-2 max-w-lg mx-auto lg:mx-0">
                  Student at Bina Nusantara University majoring in Computer Science with a stream in Software Engineering
                </p>
              </div>
              {/* Social Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a 
                  href="https://github.com/Swook1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#24292e] text-white hover:bg-[#1b1f23] px-5 py-3 rounded-lg font-medium font-poppins transition-colors duration-200"
                >
                  <img src={github} alt="GitHub" className="w-5 h-5" />
                  Github
                </a>
                <a 
                  href="https://www.linkedin.com/in/rayyanleksono/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#0A66C2] text-white hover:bg-[#004182] px-5 py-3 rounded-lg font-medium font-poppins transition-colors duration-200"
                >
                  <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
                  Linkedin
                </a>
              </div>
            </div>            {/* Right Content - Image */}
            <div className={`flex-1 lg:flex-[2] flex justify-end h-full mt-6 lg:mt-0 transition-all duration-1000 delay-400 ${visibleSections.has('home') || isPageLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative h-full w-full flex items-end justify-end">
                <img 
                  src={person} 
                  alt="Rayyan Ganteng (1)" 
                  className="h-[calc(100vh-5rem)] w-auto object-cover object-bottom max-w-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>      
          {/* About Section */}
      <section id="about" className={`min-h-screen flex items-center justify-center bg-[#E5E7EB] py-16 sm:py-20 transition-all duration-1000 ${visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Content - Text */}
            <div className={`flex-1 lg:flex-[1] space-y-4 sm:space-y-6 text-center lg:text-left transition-all duration-1000 delay-200 ${visibleSections.has('about') ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins mb-6 sm:mb-8" style={{ color: '#374151' }}>
                  About Me
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-sm sm:text-base lg:text-lg font-poppins leading-relaxed" style={{ color: '#374151' }}>
                    I'm an Indonesian, born in Jakarta with three younger siblings. I believe that I can achieve my goal as a software engineer. I am committed to learning and accepting others' input.
                  </p>
                  <p className="text-lg font-poppins leading-relaxed" style={{ color: '#374151' }}>
                    My interests so far are related to Computer, Sports, Gym, Movie, and Comics.
                  </p>
                </div>
              </div>
            </div>
              {/* Right Content - Image */}
            <div className={`flex-1 lg:flex-[1] flex justify-center lg:justify-end mt-6 lg:mt-0 transition-all duration-1000 delay-400 ${visibleSections.has('about') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <img 
                  src={RayyanGanteng2} 
                  alt="Rayyan Ganteng (2)" 
                  className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className={`min-h-screen flex items-center justify-center bg-[#F9FAFB] py-16 sm:py-20 transition-all duration-1000 ${visibleSections.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[#374151] font-poppins mb-4 transition-all duration-1000 delay-200 ${visibleSections.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>Skills</h2>
          <p className={`text-sm sm:text-base lg:text-lg text-[#6B7280] font-poppins mb-8 sm:mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${visibleSections.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Programming languages and softwares I work with
          </p>          
          {/* Skills Grid - Centered */}          <div className="flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 max-w-7xl">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className={`group flex flex-col items-center transition-all duration-700 transform hover:scale-110 ${skill.animation} ${
                    visibleSections.has('skills') 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ 
                    transitionDelay: visibleSections.has('skills') ? `${600 + (index * 100)}ms` : '0ms' 
                  }}
                >
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300 object-contain" 
                  />
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-[#374151] font-poppins text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>        {/* Projects Section */}
      <section id="projects" className={`min-h-screen bg-[#E5E7EB] py-16 sm:py-20 transition-all duration-1000 ${visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className={`text-center mt-4 sm:mt-8 mb-12 sm:mb-16 transition-all duration-1000 delay-200 ${visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#374151] font-poppins mb-4">My Projects</h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#6B7280] font-poppins max-w-2xl mx-auto">
              Showcase of my development projects and technical achievements
            </p>
          </div>

          {/* Projects List */}
          <div className="space-y-12 sm:space-y-16 lg:space-y-24">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={project.id} 
                  className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${isEven ? '' : 'lg:flex-row-reverse'} transition-all duration-1000 ${
                    visibleSections.has('projects') 
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ 
                    transitionDelay: visibleSections.has('projects') ? `${400 + (index * 200)}ms` : '0ms' 
                  }}
                >
                {/* Video Container */}
                  <div className="flex-1 lg:flex-[1]">                    
                    <div className="relative bg-[#D1D5DB] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                      <div className="aspect-video">
                        <video 
                          id={`video-${project.id}`}
                          className="w-full h-full object-cover"
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                        >
                          <source src={project.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      
                      {/* Video Controls Overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300">
                        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {/* Mute/Unmute Button */}
                          <button
                            onClick={() => toggleMute(project.id)}
                            className="bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
                            title={videoStates[project.id]?.muted ? "Unmute" : "Mute"}
                          >
                            {videoStates[project.id]?.muted ? (
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.776L4.216 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.216l4.167-3.776zm2.91 3.138a1 1 0 011.414 0L15 7.586l1.293-1.293a1 1 0 111.414 1.414L16.414 9l1.293 1.293a1 1 0 01-1.414 1.414L15 10.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 9l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.776L4.216 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.216l4.167-3.776zm7.824 5.216a1 1 0 01.093 1.32c-.155.251-.373.48-.65.661a1 1 0 11-1.114-1.662c.058-.04.11-.083.157-.13a1 1 0 011.514.81zm-2.176-2.176a1 1 0 01.093 1.32c-.802 1.048-1.895 1.684-3.132 1.684a1 1 0 110-2c.64 0 1.194-.404 1.414-.973a1 1 0 011.625-.031z" clipRule="evenodd" />
                              </svg>
                            )}
                          </button>
                          
                          {/* Fullscreen Button */}
                          <button
                            onClick={() => toggleFullscreen(project.id)}
                            className="bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
                            title="Fullscreen"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="flex-1 lg:flex-[1] space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-[#374151] font-poppins mb-4">
                        {project.title}
                      </h3>
                      <p className="text-base lg:text-lg text-[#6B7280] font-poppins leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Language Used */}
                    <div>
                      <h4 className="text-lg font-semibold text-[#374151] font-poppins mb-3">Language Used:</h4>
                      <div className="flex flex-wrap gap-4">
                        {project.technologies.map((tech, techIndex) => (
                          <div key={techIndex} className="flex items-center justify-center">
                            <img 
                              src={tech} 
                              alt={`Technology ${techIndex + 1}`}
                              className="w-8 h-8 lg:w-10 lg:h-10 object-contain hover:scale-110 transition-transform duration-200" 
                            />
                          </div>
                        ))}
                      </div>
                    </div>                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-[#24292e] text-white hover:bg-[#1b1f23] px-6 py-3 rounded-lg font-medium font-poppins transition-colors duration-200 shadow-md hover:shadow-lg"
                      >
                        <img src={github} alt="GitHub" className="w-5 h-5" />
                        View on GitHub
                      </a>
                      
                      {project.websiteUrl && (
                        <a 
                          href={project.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-3 bg-[#0A66C2] text-white hover:bg-[#004182] px-6 py-3 rounded-lg font-medium font-poppins transition-colors duration-200 shadow-md hover:shadow-lg"
                        >
                          <img src={browser} alt="Browser" className="w-5 h-5" />
                          View Website
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>        {/* Certificate Section */}
      <section id="certificate" className={`min-h-screen flex items-center justify-center bg-[#F9FAFB] py-16 sm:py-20 transition-all duration-1000 ${visibleSections.has('certificate') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[#374151] font-poppins mb-4 transition-all duration-1000 delay-200 ${visibleSections.has('certificate') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>Certificates</h2>
          <p className={`text-sm sm:text-base lg:text-lg text-[#6B7280] font-poppins mb-8 sm:mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${visibleSections.has('certificate') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Achievements and certifications I have earned
          </p>
          {/* Certificate Carousel */}
          <div className="relative flex justify-center items-center min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] mx-auto">
            {/* Previous Button */}
            <button
              onClick={previousCertificate}
              className="absolute left-2 sm:-left-16 lg:-left-80 top-1/2 transform -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-[#374151] rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Certificates Display */}
            <div className="flex items-center justify-center space-x-4 sm:space-x-8 lg:space-x-16">
              {getVisibleCertificates().map((cert, index) => {
                const isCenter = cert.position === 0;
                const isLeft = cert.position === -1;
                const isRight = cert.position === 1;
                  return (                  <div
                    key={`${cert.id}-${currentCertIndex}`}
                    className={`
                      relative transition-all duration-1000 ease-out cursor-pointer transform-gpu
                      ${isCenter 
                        ? `${CAROUSEL_CONFIG.SCALE.CENTER} z-20 opacity-100` 
                        : `${CAROUSEL_CONFIG.SCALE.SIDE} z-10 opacity-70 hover:opacity-90`
                      }
                      ${isLeft ? 'transform -translate-x-6' : ''}
                      ${isRight ? 'transform translate-x-6' : ''}
                    `}
                    style={{
                      transition: 'all 1000ms cubic-bezier(0.4, 0, 0.2, 1), transform 1000ms cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    onClick={() => handleCertificateClick(cert)}
                  >{/* Image Container */}
                    <div className={`
                      overflow-hidden rounded-lg shadow-2xl
                      ${(() => {
                        const orientation = imageOrientations[cert.id];
                        if (orientation === 'landscape') {
                          return isCenter ? `${CAROUSEL_CONFIG.CENTER_SIZE.width} ${CAROUSEL_CONFIG.CENTER_SIZE.height}` : `${CAROUSEL_CONFIG.SIDE_SIZE.width} ${CAROUSEL_CONFIG.SIDE_SIZE.height}`;                        } else {
                          return isCenter ? 'w-[480px] h-[500px]' : 'w-[380px] h-[400px]';
                        }
                      })()}
                      hover:shadow-3xl transition-shadow duration-300
                    `}
                    style={{backgroundColor: 'transparent'}}
                    >                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover transition-all duration-700 ease-out hover:scale-105"
                        style={{backgroundColor: 'transparent'}}
                      />
                    </div>
                    
                    {/* Text outside image */}
                    <div className="mt-6 px-2">
                      <h3 className={`font-bold font-poppins mb-2 text-[#374151] ${isCenter ? 'text-xl' : 'text-lg'}`}>
                        {cert.title}
                      </h3>
                      {isCenter && (
                        <p className="text-[#6B7280] text-sm leading-relaxed max-w-xs mx-auto">
                          {cert.description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>              {/* Next Button */}
            <button
              onClick={nextCertificate}
              className="absolute right-2 sm:-right-16 lg:-right-80 top-1/2 transform -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-[#374151] rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>        

        {/* Modal for enlarged certificate */}
        {selectedCertificate && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div 
              className="relative max-w-5xl max-h-[95vh] bg-transparent rounded-xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-70 transition-colors z-10 text-xl"
                onClick={closeModal}
              >
                ✕
              </button>
              
              {/* Image Container */}
              <div className="flex-1 flex items-center justify-center bg-gray-50">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="max-w-full max-h-[70vh] object-contain"
                />
              </div>
              
              {/* Title and Description Below Image */}
              {/* <div className="bg-white p-6 border-t">
                <h3 className="text-3xl font-bold text-[#374151] text-center font-poppins mb-3">
                  {selectedCertificate.title}
                </h3>
                <p className="text-[#6B7280] text-center text-lg">
                  {selectedCertificate.description}
                </p>
              </div> */}
            </div>
          </div>
        )}
      </section>        
      
      {/* Footer */}
      <footer id="footer" className="bg-[#E5E7EB] pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="flex flex-row lg:flex-row justify-between items-start gap-8 mb-8">
              {/* Left Side - Site Credits */}
            <div className="flex-1 lg:flex-[1]">
              <h3 className="text-[18px] font-bold text-[#374151] font-poppins mb-4">Site Credits</h3>
              <div className="space-y-2 text-[#6B7280] font-poppins">
                <p className="text-[18px]">Built with 🔥 using modern web technologies</p>
                <div className="flex flex-wrap gap-4 text-[18px]">
                  <span className="flex items-center gap-1">
                    <img src={ReactLogo} alt="React" className="w-4 h-4" />
                    React.js
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={TailwindLogo} alt="Tailwind" className="w-4 h-4" />
                    Tailwind CSS
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={JavaScript} alt="JavaScript" className="w-4 h-4" />
                    JavaScript
                  </span>
                </div>
                <p className="text-[18px] mt-3 text-[#9CA3AF]">
                  Designed and developed by Rayyan Zafier Leksono
                </p>
              </div>
            </div>

            {/* Right Side - Contacts */}
            <div className="flex-1 lg:flex-[1] lg:text-right">
              <h3 className="text-[18px] font-bold text-[#374151] font-poppins mb-4">Contacts</h3>                
              <div className="space-y-3">                
                {/* Contact Links Container */}
                <div className="space-y-2">
                  {/* Email */}
                  <a 
                    href="mailto:rayyanzl296@gmail.com" 
                    className="flex items-center gap-3 lg:justify-end text-[#6B7280] hover:text-[#374151] transition-colors duration-200"
                  >
                    <img src={gmail} alt="Email" className="w-8 h-8 flex-shrink-0" />
                    <span className="font-poppins text-[18px]">rayyanzl296@gmail.com</span>
                  </a>
                  
                  {/* WhatsApp */}
                  <a 
                    href="https://wa.me/6281513666044" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 lg:justify-end text-[#6B7280] hover:text-[#25D366] transition-colors duration-200"
                  >
                    <img src={whatsapp} alt="WhatsApp" className="w-8 h-8 flex-shrink-0" />
                    <span className="font-poppins text-[18px]">+62 815-1366-6044</span>
                  </a>

                  {/* Instagram */}
                  <a 
                    href="https://instagram.com/rayyanzgg" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 lg:justify-end text-[#6B7280] hover:text-[#E4405F] transition-colors duration-200"
                  >
                    <img src={igicon} alt="Ig" className="w-8 h-8 flex-shrink-0" />
                    <span className="font-poppins text-[18px]">@rayyanzgg</span>
                  </a>

                  {/* Discord */}
                  <a 
                    href="https://discord.com/users/350557324752191490" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 lg:justify-end text-[#6B7280] hover:text-[#5865F2] transition-colors duration-200"
                  >
                    <img src={discord} alt="Discord" className="w-8 h-8 flex-shrink-0" />
                    <span className="font-poppins text-[18px]">swook_</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#D1D5DB] my-6"></div>          
          {/* Bottom - Copyright */}
          <div className="text-center">
            <p className="text-[#6B7280] font-poppins text-[18px]">
              © {new Date().getFullYear()} Rayyan Zafier Leksono. All rights reserved.
            </p>
            <p className="text-[#9CA3AF] font-poppins text-[18px] mt-1">
              Made with passion for web development and clean design
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;