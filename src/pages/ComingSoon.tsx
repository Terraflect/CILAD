import { Link } from "react-router-dom";

export function ComingSoon() {
  return (
    <main className="flex-grow flex items-center justify-center py-32 px-6">
      <div className="text-center max-w-2xl mx-auto border border-heritage-navy/10 p-12 lg:p-20 bg-heritage-surface relative shadow-xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-heritage-bg px-6 font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-heritage-accent border border-heritage-navy/10">
          CILAD
        </div>
        <h1 className="font-serif text-4xl md:text-5xl text-heritage-navy mb-6">Coming Soon</h1>
        <div className="w-16 h-[2px] bg-heritage-accent mx-auto mb-8"></div>
        <p className="font-serif text-lg leading-relaxed text-heritage-muted mb-12">
          This section of the Centre for International Law and Allied Disciplines website is currently under development. Please check back later for updates.
        </p>
        <Link to="/" className="cta-button">
          Return Home
        </Link>
      </div>
    </main>
  );
}
