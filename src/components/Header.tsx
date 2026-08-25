import { Menu, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { DsnluLogo, CiladLogo } from "./Logos";

export function Header() {
  return (
    <header className="w-full bg-heritage-navy text-white">
      {/* Top Utility Bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-2 flex justify-between items-center text-[9px] font-sans tracking-[0.2em] uppercase text-white/70">
          <div>Damodaram Sanjivayya National Law University</div>
          <div className="hidden md:flex gap-6">
            <Link to="/coming-soon" className="hover:text-white transition-colors">Alumni</Link>
            <Link to="/coming-soon" className="hover:text-white transition-colors">Library</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 md:py-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4 md:gap-5 hover:opacity-90 transition-opacity group">
          {/* Dual Logos: 1st DSNLU, 2nd CILAD */}
          <div className="flex items-center gap-3">
            <DsnluLogo className="w-12 h-12 md:w-14 md:h-14 shrink-0 transition-transform group-hover:scale-105" />
            <div className="w-px h-8 bg-white/20"></div>
            <CiladLogo className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full ring-1 ring-heritage-accent/40 transition-transform group-hover:scale-105" />
          </div>

          <div className="flex flex-col">
            <div className="text-[10px] md:text-[11px] font-sans tracking-[0.25em] uppercase text-white/70">
              DSNLU
            </div>
            <div className="font-serif text-2xl md:text-4xl font-medium tracking-wider text-white">
              CILAD
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex gap-8 lg:gap-10 items-center">
          <Link to="/coming-soon" className="nav-link">The Centre</Link>
          <Link to="/coming-soon" className="nav-link">Research & Impact</Link>
          <Link to="/coming-soon" className="nav-link">Publications</Link>
          <Link to="/coming-soon" className="nav-link">Fellowships</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/coming-soon" className="text-white hover:text-heritage-accent transition-colors p-2">
            <Search className="w-5 h-5" />
            <span className="sr-only">Search</span>
          </Link>
          <Link to="/coming-soon" className="text-white hover:text-heritage-accent transition-colors p-2 -mr-2 md:hidden">
            <Menu className="w-6 h-6" />
            <span className="sr-only">Menu</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
