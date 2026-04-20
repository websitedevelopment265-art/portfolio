import { motion } from 'motion/react';
import { ExternalLink, Github, Code2, Globe, Mail } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  github?: string;
  tags: string[];
  image: string;
  category: string;
}

const projects: Project[] = [
  {
    id: '01',
    title: 'BizFlow',
    description: 'Modern business workflow automation and management platform for streamlined operations.',
    url: 'https://bizflow-eight.vercel.app/',
    tags: ['React', 'Workflow', 'Tailwind', 'Automation'],
    image: 'https://picsum.photos/seed/business/800/600',
    category: 'BUSINESS TOOL'
  },
  {
    id: '02',
    title: 'Nexus Store',
    description: 'Custom Next.js engine with real-time inventory management.',
    url: 'https://example.com/shop',
    github: 'https://github.com/user/shop',
    tags: ['React', 'Node.js', 'Stripe', 'Tailwind'],
    image: 'https://picsum.photos/seed/shop/800/600',
    category: 'E-COMMERCE'
  },
  {
    id: '03',
    title: 'Vortex CRM',
    description: 'Enterprise-grade analytics dashboard for tech teams.',
    url: 'https://example.com/ai-gen',
    tags: ['Next.js', 'Python', 'OpenAI', 'Framer Motion'],
    image: 'https://picsum.photos/seed/ai/800/600',
    category: 'SAAS PLATFORM'
  },
  {
    id: '04',
    title: 'Hire Me',
    description: 'Got a project in mind? Let\'s collaborate and build something extraordinary.',
    url: 'mailto:hello@mohsin.dev',
    tags: ['HIRE', 'REMOTE', 'CONSULT'],
    image: '',
    category: 'CONTACT'
  }
];

export default function App() {
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen selection:bg-[#CCFF00] selection:text-black">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-8 py-6 flex justify-between items-center border-b border-white/10">
          <div className="text-2xl font-[950] tracking-tighter uppercase">Mohsin.Dev</div>
          <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
            <a href="#projects" className="hover:text-[#CCFF00] transition-all">Selected Works</a>
            <a href="#about" className="hover:text-[#CCFF00] transition-all">About</a>
            <a href="#stack" className="hover:text-[#CCFF00] transition-all">Stack</a>
            <a href="#contact" className="text-white bg-white/10 px-6 py-2 rounded-full hover:bg-[#CCFF00] hover:text-black transition-all">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-[1440px] mx-auto px-8 overflow-hidden">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex flex-col justify-center py-20 border-b border-white/10">
          <div className="relative">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="title-massive"
            >
              Mohsin <span className="text-[#CCFF00]">Abbas</span><br/>
              Futur<span className="italic font-serif font-light text-zinc-600 underline decoration-1">es</span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-0 right-0 w-80 text-right hidden lg:block"
            >
              <p className="text-zinc-500 text-xs uppercase tracking-[0.2em] leading-relaxed mb-6">
                Syed Mohsin Abbas — 21 Year Old Developer building the next generation of web interfaces with precision and speed.
              </p>
              <div className="flex justify-end gap-3">
                <span className="px-3 py-1 bg-[#CCFF00] text-black text-[10px] font-black uppercase tracking-widest">Available</span>
                <span className="px-3 py-1 border border-white/20 text-white text-[10px] font-black uppercase tracking-widest leading-none flex items-center">6 Months Experience</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bio / About Section */}
        <section id="about" className="py-20 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <span className="mono-label text-[#CCFF00] mb-4">PROFILE_SUMMARY://</span>
              <h2 className="text-4xl font-black uppercase tracking-tight mb-8 leading-tight">
                MISSION: DEPLOYING 10 WORLD-CLASS <br/> SOLUTIONS BY Q3 2026.
              </h2>
            </div>
            <div className="text-zinc-400 text-lg leading-relaxed">
              I am focused on a strict roadmap to master the modern web. My current objective is to complete 10 high-quality projects within a 2-month deadline, demonstrating mastery over performance, accessibility, and high-tech aesthetics.
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-6">
            <h2 className="text-4xl font-black uppercase tracking-tight">Gallery</h2>
            <div className="text-[10px] mono-label tracking-[0.4em]">SCROLL_TO_EXPLORE.EXE</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((project, i) => (
              <div key={project.id}>
                <ProjectCard project={project} index={i} />
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack / Arsenal */}
        <section id="stack" className="py-20 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-6 flex items-center gap-3">
                <div className="w-8 h-[1px] bg-zinc-800"></div>
                Technology Stack
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[11px] tracking-widest leading-relaxed">
                 {['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Node.js', 'Vite', 'Git'].map((tech, i, arr) => (
                   <span key={tech} className="flex items-center gap-4">
                     <span className="text-zinc-300 hover:text-[#CCFF00] cursor-default transition-colors">{tech}</span>
                     {i < arr.length - 1 && <span className="text-zinc-800 font-light">/</span>}
                   </span>
                 ))}
              </div>
            </div>
            
            <div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-6 flex items-center gap-3">
                <div className="w-8 h-[1px] bg-zinc-800"></div>
                Location & Availability
              </div>
              <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-300 leading-relaxed">
                <span className="text-[#CCFF00] font-bold">MILLAT TOWN, FAISALABAD, PAKISTAN.</span><br/>
                <span className="opacity-50">AVAILABLE FOR GLOBAL REMOTE PROJECTS & FREELANCE COLLABORATION.</span>
              </div>
            </div>

            <div>
               <div className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-6 flex items-center gap-3">
                 <div className="w-8 h-[1px] bg-zinc-800"></div>
                 Social Protocol
               </div>
               <div className="flex gap-4">
                 <a href="https://github.com/mhsn-dev" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 rounded-full text-zinc-500 hover:text-[#CCFF00] hover:border-[#CCFF00]/50 transition-all duration-300"><Github size={18} strokeWidth={1.5} /></a>
                 <a href="https://mohsin.dev" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 rounded-full text-zinc-500 hover:text-[#CCFF00] hover:border-[#CCFF00]/50 transition-all duration-300"><Globe size={18} strokeWidth={1.5} /></a>
                 <a href="mailto:hello@mohsin.dev" className="p-3 border border-white/10 rounded-full text-zinc-500 hover:text-[#CCFF00] hover:border-[#CCFF00]/50 transition-all duration-300"><Mail size={18} strokeWidth={1.5} /></a>
               </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-[1440px] mx-auto px-8 py-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
          © {new Date().getFullYear()} SYED_MOHSIN_ABBAS
        </div>
        <div className="text-[10px] text-[#CCFF00] font-mono font-bold tracking-[0.3em] uppercase">
          Build For The Next Generation
        </div>
      </footer>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const isCta = project.id === '04';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative h-[380px] p-8 flex flex-col justify-between transition-all duration-500 ${
        isCta 
        ? 'bg-[#CCFF00] text-black' 
        : 'border border-white/10 bg-zinc-900/30 hover:border-[#CCFF00]'
      }`}
    >
      <div className="flex justify-between items-start">
        <span className={`text-[10px] font-mono tracking-[0.3em] uppercase ${isCta ? 'text-black/60' : 'text-zinc-500'}`}>
          {project.id} // {project.category}
        </span>
      </div>

      <div>
        <h3 className={`text-3xl font-black uppercase tracking-tight leading-none mb-4 ${isCta ? 'text-black' : 'group-hover:text-[#CCFF00] transition-colors'}`}>
          {project.title}
        </h3>
        <p className={`text-xs leading-relaxed max-w-[200px] ${isCta ? 'text-black/80' : 'text-zinc-500'}`}>
          {project.description}
        </p>
      </div>

      <a 
        href={project.url} 
        target={isCta ? '_self' : '_blank'} 
        rel="noopener noreferrer"
        className={`text-[10px] font-bold uppercase tracking-[0.2em] border-b pb-1 w-fit transition-all ${
          isCta ? 'border-black text-black hover:pb-2' : 'border-[#CCFF00] text-[#CCFF00] hover:text-white hover:border-white'
        }`}
      >
        {isCta ? 'Contact Me' : 'View Project'}
      </a>

      {/* Decorative hover element for non-cta */}
      {!isCta && project.image && (
        <div className="absolute inset-0 z-[-1] opacity-0 group-hover:opacity-10 transition-opacity">
          <img src={project.image} alt="" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
        </div>
      )}
    </motion.div>
  );
}
