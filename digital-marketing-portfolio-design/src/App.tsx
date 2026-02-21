import { useState } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  Target,
  TrendingUp,
  Video,
  Users,
  BarChart3,
  Sparkles,
  Mail,
  MapPin,
  Linkedin,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Megaphone,
  Palette,
  Share2,
  Zap,
  CheckCircle2,
  Quote,
  MessageCircle
} from 'lucide-react';

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openCaseStudy, setOpenCaseStudy] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FDEFF4] text-[#524A4E] overflow-x-hidden">
      {/* CSS Animations - Enhanced */}
      <style>{`
        @keyframes beam {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(1000%); opacity: 0; }
        }
        @keyframes beam-fast {
          0% { transform: translateY(-100%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(800%); opacity: 0; }
        }
        @keyframes beam-horizontal {
          0% { transform: translateX(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(1000%); opacity: 0; }
        }
        @keyframes beam-glow {
          0%, 100% { 
            box-shadow: 0 0 10px rgba(255, 92, 141, 0.5), 0 0 20px rgba(255, 92, 141, 0.3);
            opacity: 0.5;
          }
          50% { 
            box-shadow: 0 0 20px rgba(255, 92, 141, 0.8), 0 0 40px rgba(255, 92, 141, 0.5);
            opacity: 1;
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(255, 92, 141, 0.3); }
          50% { box-shadow: 0 0 25px rgba(255, 92, 141, 0.6); }
        }
        @keyframes pulse-border {
          0%, 100% { border-color: rgba(255, 192, 211, 0.3); }
          50% { border-color: rgba(255, 92, 141, 0.6); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes number-pulse {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.02); }
        }
        @keyframes dot-pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.5); opacity: 1; }
        }
        @keyframes line-grow {
          0% { height: 0; opacity: 0; }
          100% { height: 100%; opacity: 1; }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-beam {
          animation: beam 4s ease-in-out infinite;
        }
        .animate-beam-fast {
          animation: beam-fast 2.5s ease-in-out infinite;
        }
        .animate-beam-horizontal {
          animation: beam-horizontal 5s ease-in-out infinite;
        }
        .animate-beam-glow {
          animation: beam-glow 2s ease-in-out infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .animate-pulse-border {
          animation: pulse-border 3s ease-in-out infinite;
        }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255, 192, 211, 0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s ease-in-out infinite;
        }
        .animate-number-pulse {
          animation: number-pulse 4s ease-in-out infinite;
        }
        .animate-dot-pulse {
          animation: dot-pulse 2s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
        .section-number {
          font-size: 12rem;
          font-weight: 800;
          line-height: 1;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 192, 211, 0.4);
          text-shadow: 0 0 40px rgba(255, 92, 141, 0.1);
        }
        .section-number-filled {
          font-size: 10rem;
          font-weight: 800;
          line-height: 1;
          background: linear-gradient(180deg, rgba(255, 192, 211, 0.3) 0%, rgba(255, 192, 211, 0.05) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Decorative Vertical Lines - Enhanced */}
      <div className="fixed inset-0 pointer-events-none z-0 hidden lg:block">
        <div className="max-w-7xl mx-auto h-full relative px-4">
          {/* Left Container Line */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-[#FFC0D3]/10 via-[#FFC0D3]/30 to-[#FFC0D3]/10">
            {/* Beam traveling down */}
            <div className="absolute inset-0 w-full overflow-hidden">
              <div className="w-full h-32 bg-gradient-to-b from-transparent via-[#FF5C8D] to-transparent animate-beam opacity-80" style={{ filter: 'blur(1px)' }}></div>
            </div>
            {/* Glowing dots along the line */}
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#FF5C8D] animate-dot-pulse"></div>
            <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#FF5C8D] animate-dot-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-[80%] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#FF5C8D] animate-dot-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          {/* Right Container Line */}
          <div className="absolute right-4 top-0 h-full w-[2px] bg-gradient-to-b from-[#FFC0D3]/10 via-[#FFC0D3]/30 to-[#FFC0D3]/10">
            {/* Beam traveling down */}
            <div className="absolute inset-0 w-full overflow-hidden">
              <div className="w-full h-32 bg-gradient-to-b from-transparent via-[#FF5C8D] to-transparent animate-beam opacity-80" style={{ animationDelay: '2s', filter: 'blur(1px)' }}></div>
            </div>
            {/* Glowing dots along the line */}
            <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#FFC0D3] animate-dot-pulse" style={{ animationDelay: '0.3s' }}></div>
            <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#FFC0D3] animate-dot-pulse" style={{ animationDelay: '0.8s' }}></div>
            <div className="absolute top-[90%] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#FFC0D3] animate-dot-pulse" style={{ animationDelay: '1.3s' }}></div>
          </div>

          {/* Center decorative line (subtle) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#FFC0D3]/15 to-transparent">
            <div className="absolute inset-0 w-full overflow-hidden">
              <div className="w-full h-24 bg-gradient-to-b from-transparent via-[#FFC0D3]/50 to-transparent animate-beam-fast" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#FDEFF4]/95 backdrop-blur-sm z-50 border-b border-[#FFC0D3]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="font-bold text-xl text-[#524A4E]">Ayobami<span className="text-[#FF5C8D]">.</span></span>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Services', 'Experience', 'Case Studies', 'Portfolio', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-[#524A4E]/70 hover:text-[#FF5C8D] transition-colors text-sm font-medium"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-[#524A4E] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#3a3539] transition-colors animate-pulse-glow"
              >
                Hire Me
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FDEFF4] border-t border-[#FFC0D3]/30 py-4 px-4">
            {['About', 'Services', 'Experience', 'Case Studies', 'Portfolio', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="block w-full text-left py-3 text-[#524A4E]/70 hover:text-[#FF5C8D] transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FDEFF4] via-[#FDEFF4] to-[#FFC0D3]/20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FFC0D3]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FF5C8D]/10 rounded-full blur-3xl"></div>
        
        {/* Horizontal Beam Line */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FFC0D3]/40 to-transparent overflow-hidden">
          <div className="h-full w-32 bg-gradient-to-r from-transparent via-[#FF5C8D]/50 to-transparent animate-beam-horizontal"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 relative">
              {/* Section Number - Enhanced */}
              <div className="absolute -left-8 lg:-left-24 -top-8 hidden lg:block">
                <span className="section-number-filled animate-number-pulse">01</span>
              </div>
              {/* Decorative vertical accent line */}
              <div className="absolute -left-4 top-0 h-full hidden lg:block">
                <div className="w-[3px] h-full bg-gradient-to-b from-[#FF5C8D] via-[#FFC0D3]/50 to-transparent rounded-full">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#FF5C8D] rounded-full animate-beam-glow"></div>
                </div>
              </div>
              
              <div className="inline-flex items-center bg-[#FFC0D3]/30 text-[#524A4E] px-4 py-2 rounded-full text-sm font-medium border border-[#FFC0D3]/50 animate-shimmer">
                <Sparkles size={16} className="mr-2 text-[#FF5C8D]" />
                Available for new opportunities
              </div>
              <p className="text-xl md:text-2xl font-medium text-[#FF5C8D] mb-2">Hi, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#524A4E] mb-2">
                Ayobami Folorunso
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-[#524A4E]/80">
                I Turn Ad Spend Into
                <span className="text-[#FF5C8D]"> Revenue Growth</span>
              </h2>
              <p className="text-xl text-[#524A4E]/70 leading-relaxed">
                Digital Marketing Specialist & Media Buyer helping brands across Africa and beyond generating quality leads, scale campaigns profitably, and build audiences that converts. 4+ years of driving real business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('case-studies')}
                  className="inline-flex items-center justify-center bg-[#524A4E] text-white px-8 py-4 rounded-full font-medium hover:bg-[#3a3539] transition-colors group animate-pulse-glow"
                >
                  View My Work
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center justify-center border border-[#524A4E]/30 text-[#524A4E] px-8 py-4 rounded-full font-medium hover:bg-[#524A4E] hover:text-white transition-colors"
                >
                  Let's Work Together
                </button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-[#524A4E]">₦8M+</p>
                  <p className="text-sm text-[#524A4E]/60">Ad Spend Managed</p>
                </div>
                <div className="w-px h-12 bg-[#FFC0D3]"></div>
                <div>
                  <p className="text-3xl font-bold text-[#524A4E]">4+</p>
                  <p className="text-sm text-[#524A4E]/60">Years Experience</p>
                </div>
                <div className="w-px h-12 bg-[#FFC0D3]"></div>
                <div>
                  <p className="text-3xl font-bold text-[#524A4E]">7+</p>
                  <p className="text-sm text-[#524A4E]/60">Industries Served</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-[#FFC0D3] rounded-3xl overflow-hidden shadow-xl animate-float">
                <img 
                  src="https://i.ibb.co/Q7VK1KrR/1000490457-1.png" 
                  alt="Ayobami Folorunso" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#524A4E]/90 to-transparent p-8">
                  <p className="text-xl font-medium text-white">Ayobami Folorunso</p>
                  <p className="text-white/80">Digital Marketing Specialist</p>
                </div>
              </div>
              {/* Floating Stats Cards */}
              <div className="absolute -left-4 top-1/4 bg-white rounded-2xl shadow-lg p-4 hidden lg:block border border-[#FFC0D3]/30 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#FF5C8D]/10 rounded-full flex items-center justify-center">
                    <TrendingUp size={20} className="text-[#FF5C8D]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#524A4E]/60">Lead Growth</p>
                    <p className="font-bold text-[#524A4E]">+340%</p>
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 bottom-1/4 bg-white rounded-2xl shadow-lg p-4 hidden lg:block border border-[#FFC0D3]/30 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#524A4E]/10 rounded-full flex items-center justify-center">
                    <Target size={20} className="text-[#524A4E]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#524A4E]/60">ROAS Average</p>
                    <p className="font-bold text-[#524A4E]">4.2x</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Multiple Vertical Line Decorations */}
        <div className="absolute left-[15%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#FFC0D3]/20 to-transparent hidden lg:block">
          <div className="absolute inset-0 w-full overflow-hidden">
            <div className="w-full h-40 bg-gradient-to-b from-transparent via-[#FF5C8D]/40 to-transparent animate-beam" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
        <div className="absolute left-[85%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#FFC0D3]/20 to-transparent hidden lg:block">
          <div className="absolute inset-0 w-full overflow-hidden">
            <div className="w-full h-40 bg-gradient-to-b from-transparent via-[#FF5C8D]/40 to-transparent animate-beam" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Section Number - Enhanced */}
          <div className="absolute -left-4 lg:-left-8 -top-4 hidden lg:block" style={{ marginLeft: '-100px' }}>
            <span className="section-number-filled animate-number-pulse">02</span>
            {/* Connecting line from number */}
            <div className="absolute top-1/2 right-0 w-16 h-[2px] bg-gradient-to-r from-[#FFC0D3]/40 to-transparent"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-[#FF5C8D] rounded-3xl overflow-hidden">
                <img 
                  src="https://i.ibb.co/Q7VK1KrR/1000490457-1.png" 
                  alt="Ayobami Folorunso" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF5C8D]/5 to-[#524A4E]/5"></div>
                <div className="absolute inset-0 flex items-end p-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 w-full border border-[#FFC0D3]/30">
                    <p className="text-[#524A4E] font-medium">"Marketing without data is just guessing. I combine creativity with analytics to create campaigns that actually move the needle."</p>
                    <p className="text-[#FF5C8D] font-medium mt-2">Ayobami</p>
                  </div>
                </div>
              </div>
              {/* Decorative Corner Lines */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-l border-t border-[#FFC0D3]/50 rounded-tl-3xl"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r border-b border-[#FFC0D3]/50 rounded-br-3xl"></div>
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center bg-[#FFC0D3]/30 text-[#524A4E] px-4 py-2 rounded-full text-sm font-medium">
                About Me
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#524A4E]">
                From Communications to Conversions: My Journey
              </h2>
              <div className="space-y-4 text-[#524A4E]/70 leading-relaxed">
                <p>
                  My path to digital marketing was not linear, and I think that's what makes me good at it. 
                  I started in communications and project management, where I learned how to understand 
                  audiences, craft messages that resonate, and manage complex projects with multiple moving parts.
                </p>
                <p>
                  When I transitioned into digital marketing, I brought those skills with me. But I also 
                  discovered something new: I genuinely love the puzzle of performance marketing. Finding 
                  the right audience, testing creatives, optimizing for conversions is strategic thinking 
                  meeting creative problem-solving. And when the numbers move in the right direction, that feeling never gets old.
                </p>
                <p>
                  Today, I lead creative and media teams, helping businesses across technology, education, 
                  fashion, beauty, and more turn their ad budgets into real growth. I'm not just someone 
                  who runs ads, I'm a strategist who happens to be hands-on with execution. I mentor junior 
                  marketers, stay curious about new platforms and AI tools, and believe that the best campaigns 
                  come from understanding people, not just pixels.
                </p>
                <p>
                  Based in Nigeria, working with clients across Africa and beyond.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2 text-[#524A4E]">
                  <CheckCircle2 size={20} className="text-[#FF5C8D]" />
                  <span>Strategy + Creativity + Data</span>
                </div>
                <div className="flex items-center space-x-2 text-[#524A4E]">
                  <CheckCircle2 size={20} className="text-[#FF5C8D]" />
                  <span>Team Leadership</span>
                </div>
                <div className="flex items-center space-x-2 text-[#524A4E]">
                  <CheckCircle2 size={20} className="text-[#FF5C8D]" />
                  <span>Continuous Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FDEFF4] relative overflow-hidden">
        {/* Decorative Background Lines with Beams */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[20%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#FFC0D3]/30 to-transparent">
            <div className="absolute inset-0 overflow-hidden">
              <div className="w-full h-32 bg-gradient-to-b from-transparent via-[#FF5C8D]/30 to-transparent animate-beam" style={{ animationDelay: '0s' }}></div>
            </div>
          </div>
          <div className="absolute left-[40%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#FFC0D3]/30 to-transparent">
            <div className="absolute inset-0 overflow-hidden">
              <div className="w-full h-32 bg-gradient-to-b from-transparent via-[#FF5C8D]/30 to-transparent animate-beam" style={{ animationDelay: '0.8s' }}></div>
            </div>
          </div>
          <div className="absolute left-[60%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#FFC0D3]/30 to-transparent">
            <div className="absolute inset-0 overflow-hidden">
              <div className="w-full h-32 bg-gradient-to-b from-transparent via-[#FF5C8D]/30 to-transparent animate-beam" style={{ animationDelay: '1.6s' }}></div>
            </div>
          </div>
          <div className="absolute left-[80%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#FFC0D3]/30 to-transparent">
            <div className="absolute inset-0 overflow-hidden">
              <div className="w-full h-32 bg-gradient-to-b from-transparent via-[#FF5C8D]/30 to-transparent animate-beam" style={{ animationDelay: '2.4s' }}></div>
            </div>
          </div>
          {/* Horizontal connecting beam */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FFC0D3]/20 to-transparent">
            <div className="absolute inset-0 overflow-hidden">
              <div className="h-full w-40 bg-gradient-to-r from-transparent via-[#FF5C8D]/40 to-transparent animate-beam-horizontal"></div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Section Number - Enhanced */}
          <div className="absolute -left-4 lg:-left-8 -top-4 hidden lg:block" style={{ marginLeft: '-100px' }}>
            <span className="section-number-filled animate-number-pulse" style={{ animationDelay: '0.5s' }}>03</span>
          </div>

          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#FF5C8D]/10 text-[#FF5C8D] px-4 py-2 rounded-full text-sm font-medium border border-[#FF5C8D]/20 mb-4">
              What I Do
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#524A4E] mb-4">
              Services That Drive Growth
            </h2>
            <p className="text-xl text-[#524A4E]/70 max-w-2xl mx-auto">
              From strategy to execution, I help brands build marketing systems that generate leads, 
              sales, and sustainable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-[#FFC0D3]/20 group hover:-translate-y-1">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-[#FF5C8D]/10 rounded-2xl flex items-center justify-center border border-[#FF5C8D]/20 group-hover:scale-110 transition-transform">
                  <Megaphone size={28} className="text-[#FF5C8D]" />
                </div>
                <span className="text-4xl font-bold text-[#FFC0D3]/50 group-hover:text-[#FF5C8D]/30 transition-colors">01</span>
              </div>
              <h3 className="text-xl font-bold text-[#524A4E] mb-3">Media Buying & Paid Ads</h3>
              <p className="text-[#524A4E]/70 mb-4">
                Strategic ad campaigns that maximize your budget and deliver measurable ROI. 
                I handle everything from audience research to creative testing to scaling what works.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-[#FDEFF4] text-[#524A4E]/70 px-3 py-1 rounded-full border border-[#FFC0D3]/30">Meta Ads</span>
                <span className="text-xs bg-[#FDEFF4] text-[#524A4E]/70 px-3 py-1 rounded-full border border-[#FFC0D3]/30">TikTok Ads</span>
                <span className="text-xs bg-[#FDEFF4] text-[#524A4E]/70 px-3 py-1 rounded-full border border-[#FFC0D3]/30">LinkedIn Ads</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-[#FFC0D3]/20 group hover:-translate-y-1">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-[#524A4E]/10 rounded-2xl flex items-center justify-center border border-[#524A4E]/20 group-hover:scale-110 transition-transform">
                  <Target size={28} className="text-[#524A4E]" />
                </div>
                <span className="text-4xl font-bold text-[#FFC0D3]/50 group-hover:text-[#FF5C8D]/30 transition-colors">02</span>
              </div>
              <h3 className="text-xl font-bold text-[#524A4E] mb-3">Lead Generation Funnels</h3>
              <p className="text-[#524A4E]/70 mb-4">
                End-to-end lead generation systems for B2B and B2C. From capturing attention to 
                nurturing prospects, I build funnels that turn strangers into qualified leads.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-[#FDEFF4] text-[#524A4E]/70 px-3 py-1 rounded-full border border-[#FFC0D3]/30">Landing Pages</span>
                <span className="text-xs bg-[#FDEFF4] text-[#524A4E]/70 px-3 py-1 rounded-full border border-[#FFC0D3]/30">Lead Magnets</span>
                <span className="text-xs bg-[#FDEFF4] text-[#524A4E]/70 px-3 py-1 rounded-full border border-[#FFC0D3]/30">CRM Integration</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-[#FFC0D3]/20 group hover:-translate-y-1">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-[#FFC0D3]/30 rounded-2xl flex items-center justify-center border border-[#FFC0D3]/50 group-hover:scale-110 transition-transform">
                  <Video size={28} className="text-[#524A4E]" />
                </div>
                <span className="text-4xl font-bold text-[#FFC0D3]/50 group-hover:text-[#FF5C8D]/30 transition-colors">03</span>
              </div>
              <h3 className="text-xl font-bold text-[#524A4E] mb-3">Content Creation & Video Ads</h3>
              <p className="text-[#524A4E]/70 mb-4">
                Scroll-stopping content that captures attention and drives action. I create video ads, 
                short-form content, and ad creatives designed for performance.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-[#FDEFF4] text-[#524A4E]/70 px-3 py-1 rounded-full border border-[#FFC0D3]/30">Video Production</span>
                <span className="text-xs bg-[#FDEFF4] text-[#524A4E]/70 px-3 py-1 rounded-full border border-[#FFC0D3]/30">Short-form</span>
                <span className="text-xs bg-[#FDEFF4] text-[#524A4E]/70 px-3 py-1 rounded-full border border-[#FFC0D3]/30">Ad Creatives</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-[#FFC0D3]/20 group hover:-translate-y-1">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-[#FF5C8D]/10 rounded-2xl flex items-center justify-center border border-[#FF5C8D]/20 group-hover:scale-110 transition-transform">
                  <Share2 size={28} className="text-[#FF5C8D]" />
                </div>
                <span className="text-4xl font-bold text-[#FFC0D3]/50 group-hover:text-[#FF5C8D]/30 transition-colors">04</span>
              </div>
              <h3 className="text-xl font-bold text-[#524A4E] mb-3">Social Media Management</h3>
              <p className="text-[#524A4E]/70 mb-4">
                Building and engaging communities that love your brand. I handle content planning, 
                posting, community management, and growth strategies across platforms.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-[#FDEFF4] text-[#524A4E]/70 px-3 py-1 rounded-full border border-[#FFC0D3]/30">Instagram</span>
                <span className="text-xs bg-[#FDEFF4] text-[#524A4E]/70 px-3 py-1 rounded-full border border-[#FFC0D3]/30">TikTok</span>
                <span className="text-xs bg-[#FDEFF4] text-[#524A4E]/70 px-3 py-1 rounded-full border border-[#FFC0D3]/30">LinkedIn</span>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-[#FFC0D3]/20 group hover:-translate-y-1">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-[#524A4E]/10 rounded-2xl flex items-center justify-center border border-[#524A4E]/20 group-hover:scale-110 transition-transform">
                  <BarChart3 size={28} className="text-[#524A4E]" />
                </div>
                <span className="text-4xl font-bold text-[#FFC0D3]/50 group-hover:text-[#FF5C8D]/30 transition-colors">05</span>
              </div>
              <h3 className="text-xl font-bold text-[#524A4E] mb-3">Campaign Strategy & Optimization</h3>
              <p className="text-[#524A4E]/70 mb-4">
                Data-driven strategy that turns good campaigns into great ones. I analyze, test, 
                and optimize continuously to improve performance and reduce wasted spend.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-[#FDEFF4] text-[#524A4E]/70 px-3 py-1 rounded-full border border-[#FFC0D3]/30">A/B Testing</span>
                <span className="text-xs bg-[#FDEFF4] text-[#524A4E]/70 px-3 py-1 rounded-full border border-[#FFC0D3]/30">Analytics</span>
                <span className="text-xs bg-[#FDEFF4] text-[#524A4E]/70 px-3 py-1 rounded-full border border-[#FFC0D3]/30">Optimization</span>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-[#FFC0D3]/20 group hover:-translate-y-1">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-[#FFC0D3]/30 rounded-2xl flex items-center justify-center border border-[#FFC0D3]/50 group-hover:scale-110 transition-transform">
                  <Zap size={28} className="text-[#FF5C8D]" />
                </div>
                <span className="text-4xl font-bold text-[#FFC0D3]/50 group-hover:text-[#FF5C8D]/30 transition-colors">06</span>
              </div>
              <h3 className="text-xl font-bold text-[#524A4E] mb-3">AI-Powered Marketing Support</h3>
              <p className="text-[#524A4E]/70 mb-4">
                Leveraging AI tools to create content faster, generate ideas, and scale creative 
                production without sacrificing quality. Smart automation meets human strategy.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-[#FDEFF4] text-[#524A4E]/70 px-3 py-1 rounded-full border border-[#FFC0D3]/30">AI Content</span>
                <span className="text-xs bg-[#FDEFF4] text-[#524A4E]/70 px-3 py-1 rounded-full border border-[#FFC0D3]/30">ChatGPT</span>
                <span className="text-xs bg-[#FDEFF4] text-[#524A4E]/70 px-3 py-1 rounded-full border border-[#FFC0D3]/30">Automation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Decorative Lines */}
        <div className="absolute left-[10%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#FFC0D3]/20 to-transparent hidden lg:block">
          <div className="absolute inset-0 overflow-hidden">
            <div className="w-full h-28 bg-gradient-to-b from-transparent via-[#FF5C8D]/30 to-transparent animate-beam" style={{ animationDelay: '0.3s' }}></div>
          </div>
        </div>
        <div className="absolute right-[10%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#FFC0D3]/20 to-transparent hidden lg:block">
          <div className="absolute inset-0 overflow-hidden">
            <div className="w-full h-28 bg-gradient-to-b from-transparent via-[#FF5C8D]/30 to-transparent animate-beam" style={{ animationDelay: '1.8s' }}></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Section Number - Enhanced */}
          <div className="absolute -left-4 lg:-left-8 -top-4 hidden lg:block" style={{ marginLeft: '-100px' }}>
            <span className="section-number-filled animate-number-pulse" style={{ animationDelay: '1s' }}>04</span>
          </div>

          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#FFC0D3]/30 text-[#524A4E] px-4 py-2 rounded-full text-sm font-medium mb-4">
              Skills & Tools
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#524A4E] mb-4">
              The Toolkit Behind the Results
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Core Skills */}
            <div className="bg-[#FDEFF4] rounded-3xl p-8 border border-[#FFC0D3]/30 relative overflow-hidden">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FF5C8D]/10 to-transparent"></div>
              
              <h3 className="text-xl font-bold text-[#524A4E] mb-6 flex items-center relative">
                <Palette size={24} className="text-[#FF5C8D] mr-3" />
                Core Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Paid Media Strategy',
                  'Performance Marketing',
                  'Lead Generation',
                  'Audience Research',
                  'Creative Direction',
                  'Copywriting',
                  'Video Content Creation',
                  'Campaign Optimization',
                  'Data Analysis',
                  'A/B Testing',
                  'Budget Management',
                  'Team Leadership',
                  'Client Communication',
                  'Project Management',
                  'Content Strategy',
                  'Community Building'
                ].map((skill) => (
                  <div key={skill} className="flex items-center space-x-2 group">
                    <CheckCircle2 size={16} className="text-[#FF5C8D] flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-[#524A4E]/80 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Platforms */}
            <div className="bg-[#FDEFF4] rounded-3xl p-8 border border-[#FFC0D3]/30 relative overflow-hidden">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FFC0D3]/30 to-transparent"></div>
              
              <h3 className="text-xl font-bold text-[#524A4E] mb-6 flex items-center relative">
                <Zap size={24} className="text-[#524A4E] mr-3" />
                Tools & Platforms
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-medium text-[#524A4E]/60 mb-3">ADVERTISING PLATFORMS</p>
                  <div className="flex flex-wrap gap-2">
                    {['Meta Ads Manager', 'TikTok Ads', 'LinkedIn Campaign Manager', 'Google Ads'].map((tool) => (
                      <span key={tool} className="bg-white text-[#524A4E]/80 px-4 py-2 rounded-full text-sm border border-[#FFC0D3]/30 hover:border-[#FF5C8D]/50 hover:shadow-sm transition-all">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#524A4E]/60 mb-3">ANALYTICS & TRACKING</p>
                  <div className="flex flex-wrap gap-2">
                    {['Meta Pixel', 'Google Analytics', 'Facebook Insights', 'TikTok Analytics'].map((tool) => (
                      <span key={tool} className="bg-white text-[#524A4E]/80 px-4 py-2 rounded-full text-sm border border-[#FFC0D3]/30 hover:border-[#FF5C8D]/50 hover:shadow-sm transition-all">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#524A4E]/60 mb-3">CREATIVE & CONTENT</p>
                  <div className="flex flex-wrap gap-2">
                    {['Canva', 'CapCut', 'Adobe Suite', 'ChatGPT', 'Midjourney'].map((tool) => (
                      <span key={tool} className="bg-white text-[#524A4E]/80 px-4 py-2 rounded-full text-sm border border-[#FFC0D3]/30 hover:border-[#FF5C8D]/50 hover:shadow-sm transition-all">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#524A4E]/60 mb-3">PRODUCTIVITY & COLLABORATION</p>
                  <div className="flex flex-wrap gap-2">
                    {['Notion', 'Slack', 'Trello', 'Google Workspace', 'Zoom'].map((tool) => (
                      <span key={tool} className="bg-white text-[#524A4E]/80 px-4 py-2 rounded-full text-sm border border-[#FFC0D3]/30 hover:border-[#FF5C8D]/50 hover:shadow-sm transition-all">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#524A4E] text-white relative overflow-hidden">
        {/* Animated Background Lines - Enhanced */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[15%] top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#FFC0D3]/30 to-transparent">
            <div className="absolute inset-0 w-full overflow-hidden">
              <div className="w-full h-48 bg-gradient-to-b from-transparent via-[#FF5C8D] to-transparent animate-beam opacity-60"></div>
            </div>
            <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#FF5C8D]/50 animate-dot-pulse"></div>
            <div className="absolute top-[75%] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#FF5C8D]/50 animate-dot-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          <div className="absolute left-[50%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#FFC0D3]/20 to-transparent">
            <div className="absolute inset-0 w-full overflow-hidden">
              <div className="w-full h-48 bg-gradient-to-b from-transparent via-[#FFC0D3] to-transparent animate-beam opacity-40" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
          <div className="absolute left-[85%] top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#FFC0D3]/30 to-transparent">
            <div className="absolute inset-0 w-full overflow-hidden">
              <div className="w-full h-48 bg-gradient-to-b from-transparent via-[#FF5C8D] to-transparent animate-beam opacity-60" style={{ animationDelay: '2s' }}></div>
            </div>
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#FFC0D3]/50 animate-dot-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
          {/* Horizontal beams */}
          <div className="absolute top-[30%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FFC0D3]/15 to-transparent">
            <div className="absolute inset-0 overflow-hidden">
              <div className="h-full w-32 bg-gradient-to-r from-transparent via-[#FF5C8D]/40 to-transparent animate-beam-horizontal"></div>
            </div>
          </div>
          <div className="absolute top-[70%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FFC0D3]/15 to-transparent">
            <div className="absolute inset-0 overflow-hidden">
              <div className="h-full w-32 bg-gradient-to-r from-transparent via-[#FF5C8D]/40 to-transparent animate-beam-horizontal" style={{ animationDelay: '2.5s' }}></div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Section Number - Enhanced */}
          <div className="absolute -left-4 lg:-left-8 -top-4 hidden lg:block" style={{ marginLeft: '-100px' }}>
            <span className="section-number animate-number-pulse" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.15)' }}>05</span>
          </div>

          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#FF5C8D]/20 text-[#FFC0D3] px-4 py-2 rounded-full text-sm font-medium mb-4 border border-[#FF5C8D]/30">
              Experience & Impact
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Where I've Made an Impact
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              From leading creative teams to driving growth for startups, here is where my work has moved the needle.
            </p>
          </div>

          <div className="space-y-8">
            {/* Smash Technology */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 relative group hover:border-[#FF5C8D]/50 transition-colors">
              <div className="absolute top-8 right-8 text-6xl font-bold text-white/10 group-hover:text-[#FF5C8D]/20 transition-colors">01</div>
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Head of Creativity / Digital Marketer</h3>
                  <p className="text-[#FFC0D3] font-medium">Smash Technology</p>
                </div>
                <span className="text-white/60 mt-2 lg:mt-0">2021 – Present</span>
              </div>
              <p className="text-white/80 mb-6">
                Leading the creative and media buying functions for a technology company, managing campaigns 
                across multiple African markets and mentoring a team of junior marketers.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Managed ₦8M+ in ad spend across Meta, TikTok, and LinkedIn platforms',
                  'Grew lead generation by 340% through strategic campaign restructuring',
                  'Built and led a creative team of 4, establishing content workflows and quality standards',
                  'Reduced cost-per-lead by 45% through systematic A/B testing and audience optimization',
                  'Launched campaigns across Nigeria, Ghana, Kenya, and South Africa'
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 size={20} className="text-[#FF5C8D] flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* INFEP */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 relative group hover:border-[#FF5C8D]/50 transition-colors">
              <div className="absolute top-8 right-8 text-6xl font-bold text-white/10 group-hover:text-[#FF5C8D]/20 transition-colors">02</div>
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Content Creator</h3>
                  <p className="text-[#FFC0D3] font-medium">INFEP (Educational Organization)</p>
                </div>
                <span className="text-white/60 mt-2 lg:mt-0">2020 – 2021</span>
              </div>
              <p className="text-white/80 mb-6">
                Developed educational content and managed digital presence for an organization focused 
                on non-formal education and community development.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Created video content that increased social media engagement by 180%',
                  'Developed content strategy that grew follower base from 2K to 12K in 8 months',
                  'Produced educational short-form videos reaching 500K+ cumulative views',
                  'Established brand voice and visual identity across all digital channels'
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 size={20} className="text-[#FF5C8D] flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Roles */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Fashion Start-up Tribe */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 group hover:border-[#FF5C8D]/50 transition-colors relative">
                <div className="absolute top-4 right-4 text-4xl font-bold text-white/10 group-hover:text-[#FF5C8D]/20 transition-colors">03</div>
                <h3 className="text-lg font-bold text-white mb-1">Digital Marketer</h3>
                <p className="text-[#FFC0D3] font-medium text-sm mb-3">Fashion Start-up Tribe</p>
                <p className="text-white/60 text-sm mb-4">
                  Managed paid campaigns and social media for fashion e-commerce startup.
                </p>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>• Achieved 4.5x ROAS on Meta campaigns</li>
                  <li>• Grew Instagram following by 200%</li>
                  <li>• Created user-generated content strategy</li>
                </ul>
              </div>

              {/* Clean Skin Body Treatment */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 group hover:border-[#FF5C8D]/50 transition-colors relative">
                <div className="absolute top-4 right-4 text-4xl font-bold text-white/10 group-hover:text-[#FF5C8D]/20 transition-colors">04</div>
                <h3 className="text-lg font-bold text-white mb-1">Social Media Manager</h3>
                <p className="text-[#FFC0D3] font-medium text-sm mb-3">Clean Skin Body Treatment</p>
                <p className="text-white/60 text-sm mb-4">
                  Built digital presence and lead generation for beauty & skincare brand.
                </p>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>• Generated 150+ qualified leads monthly</li>
                  <li>• Created before/after content campaigns</li>
                  <li>• Managed WhatsApp business automation</li>
                </ul>
              </div>

              {/* ELOI International */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 group hover:border-[#FF5C8D]/50 transition-colors relative">
                <div className="absolute top-4 right-4 text-4xl font-bold text-white/10 group-hover:text-[#FF5C8D]/20 transition-colors">05</div>
                <h3 className="text-lg font-bold text-white mb-1">Media & Content Lead</h3>
                <p className="text-[#FFC0D3] font-medium text-sm mb-3">ELOI International Christian Centre</p>
                <p className="text-white/60 text-sm mb-4">
                  Led digital transformation and media production for faith-based organization.
                </p>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>• Grew online community by 300%</li>
                  <li>• Produced weekly video content</li>
                  <li>• Managed livestream & digital outreach</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Decorative Lines */}
        <div className="absolute left-[5%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#FFC0D3]/25 to-transparent hidden lg:block">
          <div className="absolute inset-0 overflow-hidden">
            <div className="w-full h-36 bg-gradient-to-b from-transparent via-[#FF5C8D]/40 to-transparent animate-beam"></div>
          </div>
        </div>
        <div className="absolute right-[5%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#FFC0D3]/25 to-transparent hidden lg:block">
          <div className="absolute inset-0 overflow-hidden">
            <div className="w-full h-36 bg-gradient-to-b from-transparent via-[#FF5C8D]/40 to-transparent animate-beam" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Section Number - Enhanced */}
          <div className="absolute -left-4 lg:-left-8 -top-4 hidden lg:block" style={{ marginLeft: '-100px' }}>
            <span className="section-number-filled animate-number-pulse" style={{ animationDelay: '1.5s' }}>06</span>
          </div>

          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#FF5C8D]/10 text-[#FF5C8D] px-4 py-2 rounded-full text-sm font-medium mb-4 border border-[#FF5C8D]/20">
              Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#524A4E] mb-4">
              Real Results, Real Impact
            </h2>
            <p className="text-xl text-[#524A4E]/70 max-w-2xl mx-auto">
              A closer look at how I've helped brands overcome challenges and achieve measurable growth.
            </p>
          </div>

          <div className="space-y-6">
            {/* Case Study 1 */}
            <div className="bg-[#FDEFF4] rounded-3xl overflow-hidden border border-[#FFC0D3]/30 group">
              <button
                onClick={() => setOpenCaseStudy(openCaseStudy === 0 ? null : 0)}
                className="w-full p-8 flex items-center justify-between text-left hover:bg-[#FFC0D3]/20 transition-colors"
              >
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-[#FF5C8D]/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-[#FF5C8D]/20">
                      <Target size={32} className="text-[#FF5C8D]" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-[#524A4E] text-white rounded-full text-xs flex items-center justify-center font-bold">01</span>
                  </div>
                  <div>
                    <span className="text-sm text-[#FF5C8D] font-medium">Technology / B2B</span>
                    <h3 className="text-xl font-bold text-[#524A4E]">Scaling Lead Generation for a Tech Company</h3>
                    <p className="text-[#524A4E]/70 mt-1">340% increase in qualified leads with 45% lower cost-per-lead</p>
                  </div>
                </div>
                {openCaseStudy === 0 ? <ChevronUp size={24} className="text-[#524A4E]/50" /> : <ChevronDown size={24} className="text-[#524A4E]/50" />}
              </button>
              {openCaseStudy === 0 && (
                <div className="px-8 pb-8 pt-0">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-bold text-[#524A4E] mb-2">The Challenge</h4>
                        <p className="text-[#524A4E]/70">
                          A Nigerian tech company was struggling to generate consistent B2B leads. Their previous campaigns 
                          had high costs and low conversion rates, with most leads being unqualified prospects who never converted.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#524A4E] mb-2">The Strategy</h4>
                        <p className="text-[#524A4E]/70">
                          I restructured their entire approach: built detailed buyer personas, created a lead scoring system, 
                          and developed a multi-touch funnel using LinkedIn for awareness and Meta for retargeting. We also 
                          created educational content that positioned the company as thought leaders.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#524A4E] mb-2">Execution</h4>
                        <ul className="text-[#524A4E]/70 space-y-1">
                          <li>• LinkedIn Ads targeting decision-makers in specific industries</li>
                          <li>• Lead magnet campaign with gated industry reports</li>
                          <li>• Video testimonials and case study content</li>
                          <li>• Automated email nurture sequences</li>
                          <li>• Retargeting warm audiences on Meta</li>
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="bg-white rounded-2xl p-6 border border-[#FFC0D3]/30">
                        <h4 className="font-bold text-[#524A4E] mb-4">Results</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-3xl font-bold text-[#FF5C8D]">340%</p>
                            <p className="text-sm text-[#524A4E]/70">Lead Increase</p>
                          </div>
                          <div>
                            <p className="text-3xl font-bold text-[#FF5C8D]">-45%</p>
                            <p className="text-sm text-[#524A4E]/70">Cost Per Lead</p>
                          </div>
                          <div>
                            <p className="text-3xl font-bold text-[#524A4E]">4.2x</p>
                            <p className="text-sm text-[#524A4E]/70">ROAS</p>
                          </div>
                          <div>
                            <p className="text-3xl font-bold text-[#524A4E]">68%</p>
                            <p className="text-sm text-[#524A4E]/70">Lead Quality Score</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#FF5C8D]/10 rounded-2xl p-6 border border-[#FF5C8D]/20">
                        <h4 className="font-bold text-[#524A4E] mb-2">Key Takeaway</h4>
                        <p className="text-[#524A4E]/80">
                          Lead generation isn't about volume—it's about quality. By focusing on attracting the right 
                          prospects with valuable content and strategic targeting, we didn't just get more leads; 
                          we got better ones that actually converted into paying customers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Case Study 2 */}
            <div className="bg-[#FDEFF4] rounded-3xl overflow-hidden border border-[#FFC0D3]/30">
              <button
                onClick={() => setOpenCaseStudy(openCaseStudy === 1 ? null : 1)}
                className="w-full p-8 flex items-center justify-between text-left hover:bg-[#FFC0D3]/20 transition-colors"
              >
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-[#524A4E]/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-[#524A4E]/20">
                      <Video size={32} className="text-[#524A4E]" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-[#524A4E] text-white rounded-full text-xs flex items-center justify-center font-bold">02</span>
                  </div>
                  <div>
                    <span className="text-sm text-[#524A4E] font-medium">Fashion / E-commerce</span>
                    <h3 className="text-xl font-bold text-[#524A4E]">Viral Content Strategy for Fashion Brand</h3>
                    <p className="text-[#524A4E]/70 mt-1">4.5x ROAS and 200% Instagram growth in 3 months</p>
                  </div>
                </div>
                {openCaseStudy === 1 ? <ChevronUp size={24} className="text-[#524A4E]/50" /> : <ChevronDown size={24} className="text-[#524A4E]/50" />}
              </button>
              {openCaseStudy === 1 && (
                <div className="px-8 pb-8 pt-0">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-bold text-[#524A4E] mb-2">The Challenge</h4>
                        <p className="text-[#524A4E]/70">
                          A fashion startup was burning through ad budget with inconsistent results. Their content felt 
                          generic, and they couldn't compete with larger brands for attention. Sales were flat despite 
                          increasing ad spend.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#524A4E] mb-2">The Strategy</h4>
                        <p className="text-[#524A4E]/70">
                          Shifted from polished, brand-heavy content to authentic, relatable short-form videos. Built a 
                          UGC-style content system, partnered with micro-influencers, and created a TikTok-first approach 
                          that was repurposed across Instagram Reels and Meta ads.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#524A4E] mb-2">Execution</h4>
                        <ul className="text-[#524A4E]/70 space-y-1">
                          <li>• 15-second styling and outfit transition videos</li>
                          <li>• Behind-the-scenes production content</li>
                          <li>• Customer unboxing and review campaigns</li>
                          <li>• Trend-jacking with relevant audio</li>
                          <li>• Lookalike audiences from engaged viewers</li>
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="bg-white rounded-2xl p-6 border border-[#FFC0D3]/30">
                        <h4 className="font-bold text-[#524A4E] mb-4">Results</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-3xl font-bold text-[#524A4E]">4.5x</p>
                            <p className="text-sm text-[#524A4E]/70">ROAS</p>
                          </div>
                          <div>
                            <p className="text-3xl font-bold text-[#524A4E]">200%</p>
                            <p className="text-sm text-[#524A4E]/70">Instagram Growth</p>
                          </div>
                          <div>
                            <p className="text-3xl font-bold text-[#FF5C8D]">2.3M</p>
                            <p className="text-sm text-[#524A4E]/70">Video Views</p>
                          </div>
                          <div>
                            <p className="text-3xl font-bold text-[#FF5C8D]">156%</p>
                            <p className="text-sm text-[#524A4E]/70">Sales Increase</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#FFC0D3]/30 rounded-2xl p-6 border border-[#FFC0D3]/50">
                        <h4 className="font-bold text-[#524A4E] mb-2">Key Takeaway</h4>
                        <p className="text-[#524A4E]/80">
                          In fashion, authenticity beats polish. When we stopped trying to look like a big brand and 
                          started creating content that felt real and relatable, engagement skyrocketed—and sales followed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Case Study 3 */}
            <div className="bg-[#FDEFF4] rounded-3xl overflow-hidden border border-[#FFC0D3]/30">
              <button
                onClick={() => setOpenCaseStudy(openCaseStudy === 2 ? null : 2)}
                className="w-full p-8 flex items-center justify-between text-left hover:bg-[#FFC0D3]/20 transition-colors"
              >
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-[#FFC0D3]/30 rounded-2xl flex items-center justify-center flex-shrink-0 border border-[#FFC0D3]/50">
                      <Users size={32} className="text-[#524A4E]" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-[#FF5C8D] text-white rounded-full text-xs flex items-center justify-center font-bold">03</span>
                  </div>
                  <div>
                    <span className="text-sm text-[#FF5C8D] font-medium">Beauty & Skincare</span>
                    <h3 className="text-xl font-bold text-[#524A4E]">Building a Lead Generation Machine for Skincare Brand</h3>
                    <p className="text-[#524A4E]/70 mt-1">150+ monthly qualified leads with WhatsApp automation</p>
                  </div>
                </div>
                {openCaseStudy === 2 ? <ChevronUp size={24} className="text-[#524A4E]/50" /> : <ChevronDown size={24} className="text-[#524A4E]/50" />}
              </button>
              {openCaseStudy === 2 && (
                <div className="px-8 pb-8 pt-0">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-bold text-[#524A4E] mb-2">The Challenge</h4>
                        <p className="text-[#524A4E]/70">
                          A skincare treatment brand needed a consistent flow of clients for their in-person services. 
                          They had no digital presence and relied entirely on word-of-mouth, limiting their growth 
                          potential in a competitive market.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#524A4E] mb-2">The Strategy</h4>
                        <p className="text-[#524A4E]/70">
                          Built a complete digital lead generation system from scratch. Created before/after content 
                          showcasing results, set up WhatsApp Business for automated lead capture and booking, and 
                          ran targeted Meta ads to women in the local area interested in skincare.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#524A4E] mb-2">Execution</h4>
                        <ul className="text-[#524A4E]/70 space-y-1">
                          <li>• Before/after transformation photos and videos</li>
                          <li>• Educational content about skincare routines</li>
                          <li>• WhatsApp click-to-chat ads with automated welcome</li>
                          <li>• Location-based targeting within 25km radius</li>
                          <li>• Testimonial videos from satisfied clients</li>
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="bg-white rounded-2xl p-6 border border-[#FFC0D3]/30">
                        <h4 className="font-bold text-[#524A4E] mb-4">Results</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-3xl font-bold text-[#FF5C8D]">150+</p>
                            <p className="text-sm text-[#524A4E]/70">Monthly Leads</p>
                          </div>
                          <div>
                            <p className="text-3xl font-bold text-[#FF5C8D]">42%</p>
                            <p className="text-sm text-[#524A4E]/70">Booking Rate</p>
                          </div>
                          <div>
                            <p className="text-3xl font-bold text-[#524A4E]">₦380</p>
                            <p className="text-sm text-[#524A4E]/70">Cost Per Lead</p>
                          </div>
                          <div>
                            <p className="text-3xl font-bold text-[#524A4E]">8x</p>
                            <p className="text-sm text-[#524A4E]/70">Revenue Growth</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#FFC0D3]/30 rounded-2xl p-6 border border-[#FFC0D3]/50">
                        <h4 className="font-bold text-[#524A4E] mb-2">Key Takeaway</h4>
                        <p className="text-[#524A4E]/80">
                          For service businesses, proof of results is everything. Authentic before/after content combined 
                          with easy WhatsApp booking created a frictionless path from discovery to appointment—turning 
                          social media browsers into paying clients.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FDEFF4] relative overflow-hidden">
        {/* Decorative Lines with Beams */}
        <div className="absolute left-[12%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#FFC0D3]/30 to-transparent hidden lg:block">
          <div className="absolute inset-0 overflow-hidden">
            <div className="w-full h-40 bg-gradient-to-b from-transparent via-[#FF5C8D]/50 to-transparent animate-beam-fast" style={{ animationDelay: '0s' }}></div>
          </div>
        </div>
        <div className="absolute left-[50%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#FFC0D3]/20 to-transparent hidden lg:block">
          <div className="absolute inset-0 overflow-hidden">
            <div className="w-full h-40 bg-gradient-to-b from-transparent via-[#FFC0D3]/60 to-transparent animate-beam" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
        <div className="absolute right-[12%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#FFC0D3]/30 to-transparent hidden lg:block">
          <div className="absolute inset-0 overflow-hidden">
            <div className="w-full h-40 bg-gradient-to-b from-transparent via-[#FF5C8D]/50 to-transparent animate-beam-fast" style={{ animationDelay: '3s' }}></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Section Number - Enhanced */}
          <div className="absolute -left-4 lg:-left-8 -top-4 hidden lg:block" style={{ marginLeft: '-100px' }}>
            <span className="section-number-filled animate-number-pulse" style={{ animationDelay: '2s' }}>07</span>
          </div>

          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#524A4E]/10 text-[#524A4E] px-4 py-2 rounded-full text-sm font-medium mb-4 border border-[#524A4E]/20">
              My Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#524A4E] mb-4">
              Portfolio Gallery
            </h2>
            <p className="text-xl text-[#524A4E]/70 max-w-2xl mx-auto">
              A showcase of campaigns, creatives, and results from my work across various platforms and industries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Image 1 */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#FFC0D3]/30 hover:-translate-y-1">
              <div className="absolute top-3 left-3 z-10 w-8 h-8 bg-[#524A4E] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">1</div>
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://i.ibb.co/KzNCxBH7/1007680562.jpg" 
                  alt="Campaign Dashboard" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#524A4E]/80 via-[#524A4E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <span className="text-xs bg-[#FF5C8D] px-2 py-1 rounded-full">Meta Ads</span>
                  <p className="font-semibold mt-2">Campaign Performance</p>
                </div>
              </div>
            </div>

            {/* Image 2 */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#FFC0D3]/30 hover:-translate-y-1">
              <div className="absolute top-3 left-3 z-10 w-8 h-8 bg-[#524A4E] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">2</div>
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://i.ibb.co/FqdSRBqz/1007680557.jpg" 
                  alt="Ad Creative" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#524A4E]/80 via-[#524A4E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <span className="text-xs bg-[#FFC0D3] text-[#524A4E] px-2 py-1 rounded-full">Content Creation</span>
                  <p className="font-semibold mt-2">Ad Creative Design</p>
                </div>
              </div>
            </div>

            {/* Image 3 */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#FFC0D3]/30 hover:-translate-y-1">
              <div className="absolute top-3 left-3 z-10 w-8 h-8 bg-[#524A4E] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">3</div>
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://i.ibb.co/1Gr5Pyk2/1007680521.jpg" 
                  alt="Campaign Analytics" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#524A4E]/80 via-[#524A4E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <span className="text-xs bg-[#FDEFF4] text-[#524A4E] px-2 py-1 rounded-full">Analytics</span>
                  <p className="font-semibold mt-2">Performance Metrics</p>
                </div>
              </div>
            </div>

            {/* Image 4 */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#FFC0D3]/30 hover:-translate-y-1">
              <div className="absolute top-3 left-3 z-10 w-8 h-8 bg-[#524A4E] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">4</div>
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://i.ibb.co/YFzKCB9r/1007680535.jpg" 
                  alt="Social Media Campaign" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#524A4E]/80 via-[#524A4E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <span className="text-xs bg-[#FFC0D3] text-[#524A4E] px-2 py-1 rounded-full">Social Media</span>
                  <p className="font-semibold mt-2">Engagement Campaign</p>
                </div>
              </div>
            </div>

            {/* Image 5 */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#FFC0D3]/30 hover:-translate-y-1">
              <div className="absolute top-3 left-3 z-10 w-8 h-8 bg-[#524A4E] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">5</div>
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://i.ibb.co/sJ3B3GqN/1007680520.jpg" 
                  alt="Lead Generation" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#524A4E]/80 via-[#524A4E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <span className="text-xs bg-[#FDEFF4] text-[#524A4E] px-2 py-1 rounded-full">Lead Gen</span>
                  <p className="font-semibold mt-2">Lead Generation Results</p>
                </div>
              </div>
            </div>

            {/* Image 6 */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#FFC0D3]/30 hover:-translate-y-1">
              <div className="absolute top-3 left-3 z-10 w-8 h-8 bg-[#524A4E] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">6</div>
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://i.ibb.co/kVcxKV7V/1007680519.jpg" 
                  alt="Campaign Strategy" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#524A4E]/80 via-[#524A4E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <span className="text-xs bg-[#FF5C8D] px-2 py-1 rounded-full">Meta Ads</span>
                  <p className="font-semibold mt-2">Campaign Strategy</p>
                </div>
              </div>
            </div>

            {/* Image 7 */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#FFC0D3]/30 hover:-translate-y-1">
              <div className="absolute top-3 left-3 z-10 w-8 h-8 bg-[#524A4E] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">7</div>
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://i.ibb.co/DHj4DZh3/1007680502.jpg" 
                  alt="Meta Ads Campaign" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#524A4E]/80 via-[#524A4E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <span className="text-xs bg-[#FF5C8D] px-2 py-1 rounded-full">Meta Ads</span>
                  <p className="font-semibold mt-2">Meta Ads Campaign</p>
                </div>
              </div>
            </div>

            {/* Image 8 */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#FFC0D3]/30 hover:-translate-y-1">
              <div className="absolute top-3 left-3 z-10 w-8 h-8 bg-[#524A4E] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">8</div>
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://i.ibb.co/hJw9xR0J/1007680515-1.jpg" 
                  alt="Meta Ads Dashboard" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#524A4E]/80 via-[#524A4E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <span className="text-xs bg-[#FF5C8D] px-2 py-1 rounded-full">Meta Ads</span>
                  <p className="font-semibold mt-2">Meta Ads Dashboard</p>
                </div>
              </div>
            </div>

            {/* Image 9 */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#FFC0D3]/30 hover:-translate-y-1">
              <div className="absolute top-3 left-3 z-10 w-8 h-8 bg-[#524A4E] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">9</div>
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://i.ibb.co/HDbChz40/1007680493.jpg" 
                  alt="Meta Ads ROAS Results" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#524A4E]/80 via-[#524A4E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <span className="text-xs bg-[#FF5C8D] px-2 py-1 rounded-full">Meta Ads</span>
                  <p className="font-semibold mt-2">Meta Ads ROAS</p>
                </div>
              </div>
            </div>

            {/* Image 10 */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#FFC0D3]/30 hover:-translate-y-1">
              <div className="absolute top-3 left-3 z-10 w-8 h-8 bg-[#524A4E] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">10</div>
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://i.ibb.co/r2g63dvH/1007680516.jpg" 
                  alt="Meta Ads Insights" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#524A4E]/80 via-[#524A4E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <span className="text-xs bg-[#FF5C8D] px-2 py-1 rounded-full">Meta Ads</span>
                  <p className="font-semibold mt-2">Meta Ads Insights</p>
                </div>
              </div>
            </div>

            {/* Image 11 */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#FFC0D3]/30 hover:-translate-y-1">
              <div className="absolute top-3 left-3 z-10 w-8 h-8 bg-[#524A4E] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">11</div>
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://i.ibb.co/KjH2SYPk/1007680499.jpg" 
                  alt="Meta Ads Metrics" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#524A4E]/80 via-[#524A4E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <span className="text-xs bg-[#FF5C8D] px-2 py-1 rounded-full">Meta Ads</span>
                  <p className="font-semibold mt-2">Meta Ads Metrics</p>
                </div>
              </div>
            </div>

            {/* Image 12 */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#FFC0D3]/30 hover:-translate-y-1">
              <div className="absolute top-3 left-3 z-10 w-8 h-8 bg-[#524A4E] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">12</div>
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://i.ibb.co/yFWH5nz7/1007680503.jpg" 
                  alt="Meta Ads Performance" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#524A4E]/80 via-[#524A4E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <span className="text-xs bg-[#FF5C8D] px-2 py-1 rounded-full">Meta Ads</span>
                  <p className="font-semibold mt-2">Meta Ads Performance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Video Portfolio Section */}
          <div className="mt-16">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-[#524A4E] mb-2">Video Content</h3>
              <p className="text-[#524A4E]/70">Viral videos and creative content that captures attention</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Video 1 - Viral Content */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#FFC0D3]/30 hover:shadow-lg transition-shadow">
                <div className="relative">
                  <div className="absolute top-3 left-3 z-10 px-3 py-1 bg-[#FF5C8D] text-white rounded-full text-xs font-medium flex items-center">
                    <Video size={14} className="mr-1" />
                    Viral Content
                  </div>
                  <div className="aspect-video">
                    <iframe 
                      src="https://drive.google.com/file/d/1Zo3JosLjRPUXXrR5dgpsRtQJxP4E9RUh/preview" 
                      width="100%" 
                      height="100%" 
                      allow="autoplay"
                      className="w-full h-full"
                      title="Viral Video Content"
                    ></iframe>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-[#524A4E] mb-2">Viral Video Content</h4>
                  <p className="text-[#524A4E]/70 text-sm">Engaging short-form video created to drive organic reach and audience engagement.</p>
                </div>
              </div>

              {/* Placeholder for more videos */}
              <div className="bg-[#FFC0D3]/20 rounded-2xl overflow-hidden border border-[#FFC0D3]/30 border-dashed flex items-center justify-center aspect-video md:aspect-auto md:min-h-[280px]">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-[#FFC0D3]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Video size={32} className="text-[#524A4E]" />
                  </div>
                  <p className="text-[#524A4E] font-medium">More Videos Coming Soon</p>
                  <p className="text-[#524A4E]/60 text-sm mt-1">TikTok Ads & Campaigns</p>
                </div>
              </div>

              <div className="bg-[#FFC0D3]/20 rounded-2xl overflow-hidden border border-[#FFC0D3]/30 border-dashed flex items-center justify-center aspect-video md:aspect-auto md:min-h-[280px]">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-[#FFC0D3]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Video size={32} className="text-[#524A4E]" />
                  </div>
                  <p className="text-[#524A4E] font-medium">More Videos Coming Soon</p>
                  <p className="text-[#524A4E]/60 text-sm mt-1">Brand Campaigns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content & Creative Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Decorative Lines */}
        <div className="absolute left-[8%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#FFC0D3]/25 to-transparent hidden lg:block">
          <div className="absolute inset-0 overflow-hidden">
            <div className="w-full h-32 bg-gradient-to-b from-transparent via-[#FF5C8D]/35 to-transparent animate-beam" style={{ animationDelay: '0.7s' }}></div>
          </div>
        </div>
        <div className="absolute right-[8%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#FFC0D3]/25 to-transparent hidden lg:block">
          <div className="absolute inset-0 overflow-hidden">
            <div className="w-full h-32 bg-gradient-to-b from-transparent via-[#FF5C8D]/35 to-transparent animate-beam" style={{ animationDelay: '2.2s' }}></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Section Number - Enhanced */}
          <div className="absolute -left-4 lg:-left-8 -top-4 hidden lg:block" style={{ marginLeft: '-100px' }}>
            <span className="section-number-filled animate-number-pulse" style={{ animationDelay: '2.5s' }}>08</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-[#FFC0D3]/30 text-[#524A4E] px-4 py-2 rounded-full text-sm font-medium">
                Content & Creative
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#524A4E]">
                Where Strategy Meets Creativity
              </h2>
              <div className="space-y-4 text-[#524A4E]/70 leading-relaxed">
                <p>
                  Great marketing is both science and art. I believe the best campaigns start with deep 
                  strategy—understanding the audience, the goal, and the platform—and come to life through 
                  creative execution that captures attention and moves people to act.
                </p>
                <p>
                  My creative work spans video content, short-form ads, educational content, and AI-assisted 
                  visuals. Whether it's a 15-second TikTok that hooks in the first frame or a thought-leadership 
                  piece for LinkedIn, I approach every piece with the same question: "Will this make someone stop scrolling?"
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-[#524A4E]">My Creative Process</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#FDEFF4] rounded-xl p-4 border border-[#FFC0D3]/30 group hover:border-[#FF5C8D]/50 transition-colors">
                    <span className="text-2xl font-bold text-[#FF5C8D]">01</span>
                    <p className="text-sm text-[#524A4E]/80 mt-2">Research & understand the target audience</p>
                  </div>
                  <div className="bg-[#FDEFF4] rounded-xl p-4 border border-[#FFC0D3]/30 group hover:border-[#FF5C8D]/50 transition-colors">
                    <span className="text-2xl font-bold text-[#FF5C8D]">02</span>
                    <p className="text-sm text-[#524A4E]/80 mt-2">Develop messaging that resonates</p>
                  </div>
                  <div className="bg-[#FDEFF4] rounded-xl p-4 border border-[#FFC0D3]/30 group hover:border-[#FF5C8D]/50 transition-colors">
                    <span className="text-2xl font-bold text-[#FF5C8D]">03</span>
                    <p className="text-sm text-[#524A4E]/80 mt-2">Create platform-native content</p>
                  </div>
                  <div className="bg-[#FDEFF4] rounded-xl p-4 border border-[#FFC0D3]/30 group hover:border-[#FF5C8D]/50 transition-colors">
                    <span className="text-2xl font-bold text-[#FF5C8D]">04</span>
                    <p className="text-sm text-[#524A4E]/80 mt-2">Test, learn, and iterate</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-[#FF5C8D] to-[#e04976] rounded-2xl p-6 text-white hover:scale-105 transition-transform">
                  <Video size={32} className="mb-4" />
                  <h4 className="font-bold">Video Content</h4>
                  <p className="text-sm text-white/80 mt-2">Short-form videos, ads, testimonials, educational content</p>
                </div>
                <div className="bg-gradient-to-br from-[#524A4E] to-[#3a3539] rounded-2xl p-6 text-white hover:scale-105 transition-transform">
                  <Sparkles size={32} className="mb-4" />
                  <h4 className="font-bold">AI-Assisted Design</h4>
                  <p className="text-sm text-white/80 mt-2">Midjourney visuals, ChatGPT copywriting, rapid prototyping</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gradient-to-br from-[#FFC0D3] to-[#e8a8bd] rounded-2xl p-6 text-[#524A4E] hover:scale-105 transition-transform">
                  <Megaphone size={32} className="mb-4" />
                  <h4 className="font-bold">Ad Creatives</h4>
                  <p className="text-sm text-[#524A4E]/80 mt-2">Static ads, carousel campaigns, story formats</p>
                </div>
                <div className="bg-gradient-to-br from-[#FDEFF4] to-[#f5dce3] rounded-2xl p-6 text-[#524A4E] border border-[#FFC0D3]/30 hover:scale-105 transition-transform">
                  <TrendingUp size={32} className="mb-4" />
                  <h4 className="font-bold">Educational Content</h4>
                  <p className="text-sm text-[#524A4E]/70 mt-2">How-to guides, tutorials, thought leadership</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FDEFF4] relative overflow-hidden">
        {/* Decorative Lines */}
        <div className="absolute left-[20%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#FFC0D3]/30 to-transparent hidden lg:block">
          <div className="absolute inset-0 overflow-hidden">
            <div className="w-full h-36 bg-gradient-to-b from-transparent via-[#FF5C8D]/40 to-transparent animate-beam" style={{ animationDelay: '0.3s' }}></div>
          </div>
        </div>
        <div className="absolute left-[50%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#FFC0D3]/20 to-transparent hidden lg:block">
          <div className="absolute inset-0 overflow-hidden">
            <div className="w-full h-36 bg-gradient-to-b from-transparent via-[#FFC0D3]/50 to-transparent animate-beam-fast" style={{ animationDelay: '1.2s' }}></div>
          </div>
        </div>
        <div className="absolute right-[20%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#FFC0D3]/30 to-transparent hidden lg:block">
          <div className="absolute inset-0 overflow-hidden">
            <div className="w-full h-36 bg-gradient-to-b from-transparent via-[#FF5C8D]/40 to-transparent animate-beam" style={{ animationDelay: '2.1s' }}></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Section Number - Enhanced */}
          <div className="absolute -left-4 lg:-left-8 -top-4 hidden lg:block" style={{ marginLeft: '-100px' }}>
            <span className="section-number-filled animate-number-pulse" style={{ animationDelay: '3s' }}>09</span>
          </div>

          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#FF5C8D]/10 text-[#FF5C8D] px-4 py-2 rounded-full text-sm font-medium mb-4 border border-[#FF5C8D]/20">
              Testimonials
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#524A4E] mb-4">
              What People Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 - Founder */}
            <div className="bg-white rounded-3xl p-8 relative border border-[#FFC0D3]/30 hover:shadow-lg transition-shadow group">
              <div className="absolute top-4 right-4 text-4xl font-bold text-[#FFC0D3]/30 group-hover:text-[#FF5C8D]/30 transition-colors">01</div>
              <Quote size={48} className="text-[#FFC0D3]/30 absolute top-6 right-6" />
              <div className="relative">
                <p className="text-[#524A4E]/80 mb-6 leading-relaxed">
                  "Ayobami transformed our marketing from guesswork into a real growth engine. She didn't just 
                  run ads, she understood our business, built systems, and delivered results we could actually 
                  measure. Our lead quality improved dramatically, and we finally had clarity on what was working."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#FF5C8D]/10 rounded-full flex items-center justify-center">
                    <span className="font-bold text-[#FF5C8D]">CO</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#524A4E]">Chukwuemeka O.</p>
                    <p className="text-sm text-[#524A4E]/60">Founder, Tech Startup</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 - Team Member */}
            <div className="bg-white rounded-3xl p-8 relative border border-[#FFC0D3]/30 hover:shadow-lg transition-shadow group">
              <div className="absolute top-4 right-4 text-4xl font-bold text-[#FFC0D3]/30 group-hover:text-[#FF5C8D]/30 transition-colors">02</div>
              <Quote size={48} className="text-[#FFC0D3]/30 absolute top-6 right-6" />
              <div className="relative">
                <p className="text-[#524A4E]/80 mb-6 leading-relaxed">
                  "Working with Ayo taught me more about digital marketing than any course could. She's patient, 
                  incredibly knowledgeable, and always explains the 'why' behind every decision. She creates an 
                  environment where you're not afraid to ask questions or try new ideas."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#524A4E]/10 rounded-full flex items-center justify-center">
                    <span className="font-bold text-[#524A4E]">FA</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#524A4E]">Fatimah A.</p>
                    <p className="text-sm text-[#524A4E]/60">Junior Marketing Associate</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 - Client */}
            <div className="bg-white rounded-3xl p-8 relative border border-[#FFC0D3]/30 hover:shadow-lg transition-shadow group">
              <div className="absolute top-4 right-4 text-4xl font-bold text-[#FFC0D3]/30 group-hover:text-[#FF5C8D]/30 transition-colors">03</div>
              <Quote size={48} className="text-[#FFC0D3]/30 absolute top-6 right-6" />
              <div className="relative">
                <p className="text-[#524A4E]/80 mb-6 leading-relaxed">
                  "Before Ayobami, we had zero online presence. Now we get consistent inquiries through WhatsApp 
                  and Instagram every single day. She set everything up, created content that actually looked 
                  professional, and taught my team how to maintain it. Best investment we made."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#FFC0D3]/30 rounded-full flex items-center justify-center">
                    <span className="font-bold text-[#524A4E]">NN</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#524A4E]">Nneka N.</p>
                    <p className="text-sm text-[#524A4E]/60">Owner, Beauty Treatment Center</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#524A4E] text-white relative overflow-hidden">
        {/* Animated Background - Enhanced */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[25%] top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#FFC0D3]/25 to-transparent">
            <div className="absolute inset-0 w-full overflow-hidden">
              <div className="w-full h-40 bg-gradient-to-b from-transparent via-[#FF5C8D] to-transparent animate-beam opacity-50"></div>
            </div>
            <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#FF5C8D]/40 animate-dot-pulse"></div>
          </div>
          <div className="absolute left-[50%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#FFC0D3]/15 to-transparent">
            <div className="absolute inset-0 w-full overflow-hidden">
              <div className="w-full h-32 bg-gradient-to-b from-transparent via-[#FFC0D3]/60 to-transparent animate-beam-fast" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
          <div className="absolute left-[75%] top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#FFC0D3]/25 to-transparent">
            <div className="absolute inset-0 w-full overflow-hidden">
              <div className="w-full h-40 bg-gradient-to-b from-transparent via-[#FF5C8D] to-transparent animate-beam opacity-50" style={{ animationDelay: '2s' }}></div>
            </div>
            <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#FFC0D3]/40 animate-dot-pulse" style={{ animationDelay: '0.7s' }}></div>
          </div>
          {/* Horizontal beam */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FFC0D3]/10 to-transparent">
            <div className="absolute inset-0 overflow-hidden">
              <div className="h-full w-28 bg-gradient-to-r from-transparent via-[#FF5C8D]/30 to-transparent animate-beam-horizontal" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          {/* Section Number - Enhanced */}
          <div className="absolute -left-8 lg:-left-28 -top-8 hidden lg:block">
            <span className="section-number animate-number-pulse" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.12)' }}>10</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Let's Create Something Great Together
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Whether you need help scaling your paid campaigns, building a lead generation system, or creating content that converts, I'd love to hear about your project.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-[#FF5C8D]/50 transition-colors group overflow-hidden">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <h3 className="font-bold mb-2">Email Me</h3>
              <a 
                href="mailto:folorunsoayobami3@gmail.com" 
                className="text-white/70 hover:text-white transition-colors text-sm block truncate max-w-full"
                title="folorunsoayobami3@gmail.com"
              >
                folorunsoayobami3@gmail.com
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-[#25D366]/50 transition-colors group">
              <div className="w-12 h-12 bg-[#25D366]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle size={24} className="text-[#25D366]" />
              </div>
              <h3 className="font-bold mb-2">WhatsApp</h3>
              <a href="https://wa.me/2347036701062" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#25D366] transition-colors inline-flex items-center text-sm">
                Chat with me <ExternalLink size={14} className="ml-2" />
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-[#FF5C8D]/50 transition-colors group">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <h3 className="font-bold mb-2">Location</h3>
              <p className="text-white/70">
                Nigeria
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-[#FF5C8D]/50 transition-colors group">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Linkedin size={24} />
              </div>
              <h3 className="font-bold mb-2">Let's Connect</h3>
              <a href="https://linkedin.com/in/ayobami-folorunso-5267801ab" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors inline-flex items-center text-sm">
                LinkedIn Profile <ExternalLink size={14} className="ml-2" />
              </a>
            </div>
          </div>

          <button
            onClick={() => window.location.href = 'mailto:folorunsoayobami3@gmail.com'}
            className="inline-flex items-center bg-[#FF5C8D] text-white px-8 py-4 rounded-full font-bold hover:bg-[#e04976] transition-colors group animate-pulse-glow"
          >
            Start a Conversation
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-[#3a3539] text-white/60">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © 2026 Ayobami Folorunso. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="https://linkedin.com/in/ayobami-folorunso-5267801ab" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF5C8D] transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://wa.me/2347036701062" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">
              <MessageCircle size={20} />
            </a>
            <a href="mailto:folorunsoayobami3@gmail.com" className="hover:text-[#FF5C8D] transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
