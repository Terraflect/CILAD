import { Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DsnluLogo, CiladLogo } from './Logos';

export function Footer() {
  return (
    <footer className="w-full bg-heritage-navy text-white pt-20 pb-10 border-t-4 border-heritage-accent">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5 space-y-6 pr-8">
            <div className="flex items-center gap-4 mb-4">
              <DsnluLogo className="w-14 h-14 shrink-0 drop-shadow-md" />
              <div className="w-px h-8 bg-white/20"></div>
              <CiladLogo className="w-14 h-14 shrink-0 rounded-full ring-1 ring-heritage-accent/40 drop-shadow-md" />
            </div>
            <div className="font-serif text-3xl font-medium tracking-wide">CILAD</div>
            <p className="text-lg italic text-white/80 leading-relaxed font-serif">
              Centre for International Law and Allied Disciplines.<br />
              Damodaram Sanjivayya National Law University.
            </p>
            <div className="h-px bg-white/20 w-full my-6"></div>
            <p className="text-sm text-white/60 font-serif leading-relaxed">
              Advancing rigorous academic research, facilitating global dialogue, and shaping practice in international law and its intersecting disciplines since 2024.
            </p>
          </div>
          
          <div className="md:col-span-2 space-y-6">
            <h3 className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-heritage-accent">Institute</h3>
            <ul className="space-y-4">
              <li><Link to="/coming-soon" className="font-serif text-white/70 hover:text-white transition-colors">About the Centre</Link></li>
              <li><Link to="/coming-soon" className="font-serif text-white/70 hover:text-white transition-colors">Director's Welcome</Link></li>
              <li><Link to="/coming-soon" className="font-serif text-white/70 hover:text-white transition-colors">Faculty & Fellows</Link></li>
              <li><Link to="/coming-soon" className="font-serif text-white/70 hover:text-white transition-colors">Contact Information</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-6">
            <h3 className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-heritage-accent">Academics</h3>
            <ul className="space-y-4">
              <li><Link to="/coming-soon" className="font-serif text-white/70 hover:text-white transition-colors">Research Programmes</Link></li>
              <li><Link to="/cilad-monthly" className="font-serif text-white/70 hover:text-white transition-colors">CILAD Monthly</Link></li>
              <li><Link to="/coming-soon" className="font-serif text-white/70 hover:text-white transition-colors">Events & Symposia</Link></li>
              <li><Link to="/coming-soon" className="font-serif text-white/70 hover:text-white transition-colors">Visiting Scholars</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-6">
            <h3 className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-heritage-accent">Connect</h3>
            <p className="font-serif text-sm text-white/70">
              Sabbavaram, Visakhapatnam<br />
              Andhra Pradesh 531035, India
            </p>
            <div className="flex flex-col space-y-4">
              <a href="mailto:cilad@dsnlu.ac.in" className="inline-block border-b border-heritage-accent font-serif italic text-white hover:text-heritage-accent transition-colors pb-0.5 w-fit">
                cilad@dsnlu.ac.in
              </a>
              <div className="flex gap-4 pt-2">
                <a href="https://www.linkedin.com/in/centre-for-international-law-and-allied-disciplines-60462a31a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BWskOdnQRTBa2FSEGCO5j7A%3D%3D" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-heritage-accent transition-colors">
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="https://www.instagram.com/cilad_dsnlu/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-heritage-accent transition-colors">
                  <Instagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-px bg-white/10 w-full mb-8"></div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-[10px] uppercase tracking-[0.2em] text-white/40">
          <div>
            &copy; {new Date().getFullYear()} CILAD, DSNLU. All rights reserved.
          </div>
          <div className="flex gap-8">
            <Link to="/coming-soon" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/coming-soon" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/coming-soon" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
