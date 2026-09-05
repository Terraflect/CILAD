import { ArrowRight, BookOpen, Landmark, FileText, Globe, Scale, Leaf, Shield, Heart, Ship, Gavel, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <main className="flex-grow">
        {/* Hero Section */}
        <section className="px-6 py-20 lg:py-28 max-w-5xl mx-auto w-full flex flex-col items-center text-center">
          <div className="mb-10 flex flex-col items-center w-full">
            <span className="eyebrow mb-4 text-heritage-accent">A Research Centre Of</span>
            <h2 className="font-serif text-xl md:text-2xl tracking-widest uppercase text-heritage-navy mb-8">
              Damodaram Sanjivayya National Law University
            </h2>
            <div className="w-3/4 max-w-md double-line"></div>
          </div>

          <h1 className="font-serif font-medium leading-[1.05] mb-10 text-heritage-navy"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}>
            Centre for International Law<br />
            <span className="italic font-normal text-heritage-muted/80">&</span> Allied Disciplines <span className="font-sans text-2xl tracking-widest font-normal text-heritage-accent align-top">(CILAD)</span>
          </h1>

          <div className="w-16 h-[2px] bg-heritage-accent mb-10"></div>

          <p className="font-serif italic text-2xl md:text-3xl leading-relaxed max-w-3xl mx-auto text-heritage-navy mb-12">
            Advancing research, dialogue, and practice in international law and its intersecting disciplines.
          </p>
        </section>

        {/* Highlighted Event Section */}
        <section id="event-highlights" className="bg-heritage-surface border-y border-heritage-navy/20">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
             <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center border-r border-heritage-navy/20">
               <div className="flex flex-wrap items-center gap-3 mb-6">
                 <span className="bg-heritage-navy text-white px-3 py-1 font-sans text-[10px] uppercase tracking-[0.2em] font-bold">Event Concluded</span>
                 <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-heritage-accent">International Workshop</span>
               </div>
               <h2 className="font-serif text-4xl md:text-5xl text-heritage-navy leading-tight mb-8">Beyond Borders 2.0: Careers and Trends in International Law</h2>
               <p className="font-serif text-lg text-heritage-muted leading-relaxed mb-8">
                 The workshop concluded successfully on August 31, 2026, providing students and professionals with profound insights into career opportunities, developments in international trade law, and contemporary issues in International Humanitarian Law.
               </p>
               <div className="space-y-4 mb-12">
                 <div className="flex items-center gap-4 border-b border-heritage-navy/10 pb-4">
                   <div className="w-24 font-sans text-[10px] uppercase tracking-widest font-bold text-heritage-accent">Date</div>
                   <div className="font-serif text-lg text-heritage-navy">31 August 2026 (Concluded)</div>
                 </div>
                 <div className="flex items-center gap-4 border-b border-heritage-navy/10 pb-4">
                   <div className="w-24 font-sans text-[10px] uppercase tracking-widest font-bold text-heritage-accent">Mode</div>
                   <div className="font-serif text-lg text-heritage-navy">Hybrid (Via Webex Link)</div>
                 </div>
                 <div className="flex items-center gap-4 border-b border-heritage-navy/10 pb-4">
                   <div className="w-24 font-sans text-[10px] uppercase tracking-widest font-bold text-heritage-accent">Venue</div>
                   <div className="font-serif text-lg text-heritage-navy">Moot Court Hall at DSNLU</div>
                 </div>
               </div>
               <div>
                  <Link to="/coming-soon" className="cta-button inline-flex items-center gap-2">
                    <span>View Workshop Proceedings & Highlights</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
               </div>
             </div>
             <div className="w-full lg:w-1/2 p-12 lg:p-24 bg-heritage-navy text-white flex flex-col justify-center">
               <div className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-heritage-accent mb-4">Chief Guest</div>
               <h3 className="font-serif text-3xl mb-6 bg-white text-heritage-navy p-3 inline-block self-start">Prof. (Dr.) R. Venkata Rao</h3>
               <p className="font-serif text-white/80 leading-relaxed text-lg mb-8">
                 Distinguished legal academic and Vice Chancellor (In-Charge) of IIULER, Goa. Previously served as Vice Chancellor of NLSIU, Bangalore for over a decade. With over 45 years of teaching and research experience, recipient of the Prof. N.R. Madhava Menon Best Law Teacher Award (2018).
               </p>
               <div className="h-px w-full bg-white/20 mb-8"></div>
               <div className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-heritage-accent mb-6">Guest Speakers</div>
               <ul className="space-y-6">
                 <li>
                   <div className="font-serif text-xl">Mr. Uma Shankar Yedla</div>
                   <div className="font-sans text-[10px] uppercase tracking-widest text-white/50">Former Director (Legal & Treaties), Ministry of External Affairs</div>
                 </li>
                 <li>
                   <div className="font-serif text-xl">Dr. Sukhwinder Kaur Virk</div>
                   <div className="font-sans text-[10px] uppercase tracking-widest text-white/50">Assistant Professor of Law, RGNUL, Punjab</div>
                 </li>
                 <li>
                   <div className="font-serif text-xl">Ms. Vanshika Sulaniya</div>
                   <div className="font-sans text-[10px] uppercase tracking-widest text-white/50">Young Professional, Centre for Trade and Investment Law (CTIL)</div>
                 </li>
                 <li>
                   <div className="font-serif text-xl">Ms. Surbhi Gupta</div>
                   <div className="font-sans text-[10px] uppercase tracking-widest text-white/50">Associate at Trilegal & Founder of CILAD</div>
                 </li>
               </ul>
             </div>
          </div>
        </section>

        {/* About Section */}
        <section className="px-6 py-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <div className="font-serif text-[1.1rem] leading-[2.2] text-[#333] text-justify">
              <span className="float-left text-[6.5rem] font-serif text-heritage-navy leading-[0.75] pt-2 pr-4">
                T
              </span>
              he Centre for International Law and Allied Disciplines operates at the forefront of global legal scholarship. Founded within the Damodaram Sanjivayya National Law University, our mission is to rigorously examine the frameworks that govern state and non-state actors in an increasingly complex global arena. We bring together scholars, practitioners, and policymakers to debate, challenge, and advance the understanding of international law.
            </div>
            
            <div className="font-serif text-[1.1rem] leading-[2.2] text-[#333] text-justify flex flex-col justify-between">
              <p className="mb-12">
                By fostering interdisciplinary inquiry, CILAD addresses contemporary challenges ranging from global economic governance and environmental sustainability to human rights and armed conflict. Through our publications, symposia, and dedicated fellowships, we cultivate the next generation of legal minds prepared to navigate and shape the international legal order.
              </p>
              
              <Link to="/coming-soon" className="flex items-center gap-6 group mt-auto w-fit">
                <div className="w-12 h-px bg-heritage-navy group-hover:w-16 transition-all duration-300"></div>
                <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-heritage-navy">
                  Discover Our Mission
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Patrons */}
        <section className="bg-heritage-surface border-y border-heritage-navy/20 px-6 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl text-heritage-navy mb-6">Patrons & Leadership</h2>
              <div className="w-24 h-[2px] bg-heritage-accent mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <Link to="/coming-soon" className="block text-center p-8 border border-heritage-navy/10 hover:shadow-xl transition-shadow bg-white">
                <h3 className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-heritage-accent mb-4">Visitor, DSNLU</h3>
                <h4 className="font-serif text-2xl text-heritage-navy mb-4">Hon'ble Mr. Justice P. Narasimha</h4>
                <p className="font-serif text-sm text-heritage-muted italic">Judge, Supreme Court of India</p>
              </Link>
              <Link to="/coming-soon" className="block text-center p-8 border border-heritage-navy/10 hover:shadow-xl transition-shadow bg-white">
                <h3 className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-heritage-accent mb-4">Chief Patron & Chancellor</h3>
                <h4 className="font-serif text-2xl text-heritage-navy mb-4">Hon'ble Smt. Justice Lisa Gill</h4>
                <p className="font-serif text-sm text-heritage-muted italic">Chief Justice, Andhra Pradesh High Court</p>
              </Link>
              <Link to="/coming-soon" className="block text-center p-8 border border-heritage-navy/10 hover:shadow-xl transition-shadow bg-white">
                <h3 className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-heritage-accent mb-4">Patron & Vice Chancellor</h3>
                <h4 className="font-serif text-2xl text-heritage-navy mb-4">Prof. (Dr.) D. Surya Prakasa Rao</h4>
                <p className="font-serif text-sm text-heritage-muted italic">Vice Chancellor, DSNLU</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CILAD Monthly Section */}
        <section className="bg-heritage-surface border-y border-heritage-navy/20 px-6 py-24 w-full">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
              <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <div className="h-[1px] w-8 bg-heritage-accent/60"></div>
                  <span className="font-sans text-[11px] uppercase tracking-[0.25em] font-bold text-heritage-accent">
                    Centre Periodical
                  </span>
                </div>
                
                <h2 className="font-serif text-4xl md:text-5xl text-heritage-navy leading-tight">
                  CILAD Monthly
                </h2>
                
                <p className="font-serif italic text-xl md:text-2xl text-heritage-muted leading-relaxed">
                  A monthly analytical bulletin covering critical developments in international jurisprudence, state treaties, and emerging global legal doctrines.
                </p>
                
                <p className="font-sans text-heritage-muted/90 text-base leading-relaxed">
                  Published under the aegis of the Centre for International Law and Allied Disciplines at DSNLU, CILAD Monthly features expert commentaries, landmark case briefs from international tribunals, and contributions from leading legal scholars and student researchers.
                </p>

                <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <Link
                    to="/cilad-monthly"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-heritage-navy text-white font-sans text-xs uppercase tracking-widest font-bold hover:bg-heritage-accent transition-colors shadow-sm"
                  >
                    <span>Read CILAD Monthly</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="https://dsnlu.ac.in/centre-for-international-law-and-allied-disciplines-cilad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 border border-heritage-navy text-heritage-navy font-sans text-xs uppercase tracking-widest font-bold hover:bg-heritage-navy hover:text-white transition-colors"
                  >
                    <span>View On DSNLU Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Visual Card / Highlights */}
              <div className="w-full lg:w-2/5">
                <div className="bg-white border border-heritage-navy/15 p-8 md:p-10 shadow-lg relative">
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-heritage-accent text-white px-3 py-1 font-sans text-[9px] uppercase tracking-widest font-bold">
                    Latest Issues
                  </div>
                  <div className="w-12 h-12 rounded bg-heritage-navy/5 flex items-center justify-center text-heritage-accent mb-6">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl text-heritage-navy mb-3">Digest & Commentary</h3>
                  <ul className="space-y-3 font-sans text-sm text-heritage-muted border-t border-heritage-navy/10 pt-4 mb-6">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-heritage-accent"></span>
                      International Tribunal Case Summaries
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-heritage-accent"></span>
                      Global Treaty & Policy Analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-heritage-accent"></span>
                      Peer Review Columns & Op-Eds
                    </li>
                  </ul>
                  <Link
                    to="/cilad-monthly"
                    className="inline-block text-xs font-sans uppercase tracking-widest font-bold text-heritage-accent hover:underline"
                  >
                    Explore Archive & Submissions &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="bg-heritage-bg px-6 py-24 w-full border-y border-heritage-navy/10">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-heritage-accent/40"></div>
              <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-heritage-accent">Focus</span>
              <div className="h-[1px] w-12 bg-heritage-accent/40"></div>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-center text-heritage-navy mb-16">Research Areas</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "International Trade Law", desc: "Analyzing the legal architecture of the global economy and cross-border trade disputes.", icon: Scale },
                { title: "International Environmental Law", desc: "Addressing climate change, biodiversity, and sustainable development treaties.", icon: Leaf },
                { title: "Refugee Law", desc: "Examining legal protections and international frameworks for displaced persons.", icon: Shield },
                { title: "International Humanitarian Law", desc: "Investigating the protection of individuals in peacetime and armed conflict.", icon: Heart },
                { title: "Global Governance & Policy", desc: "Studying institutional frameworks and policies shaping state interactions.", icon: Landmark },
                { title: "Human Rights Law", desc: "Addressing contemporary human rights crises and international legal protections.", icon: Globe },
                { title: "Law of the Sea", desc: "Exploring legal frameworks governing maritime jurisdictions and oceanic resources.", icon: Ship },
                { title: "Dispute Settlement", desc: "Examining mechanisms for resolving conflicts between states and non-state actors.", icon: Gavel }
              ].map((area, idx) => (
                <Link to="/coming-soon" key={idx} className="block bg-heritage-surface border border-heritage-navy/5 p-10 hover:shadow-lg transition-shadow group">
                  <div className="w-12 h-12 rounded-lg bg-heritage-accent/10 flex items-center justify-center mb-8 group-hover:bg-heritage-accent/20 transition-colors">
                    <area.icon className="w-6 h-6 text-heritage-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-2xl text-heritage-navy mb-4 group-hover:text-heritage-accent transition-colors">{area.title}</h3>
                  <p className="font-sans text-heritage-muted leading-relaxed text-[15px]">{area.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="px-6 py-24 bg-black text-white w-full border-y-[6px] border-heritage-accent my-12">
          <div className="max-w-6xl mx-auto pb-12">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">The Team</h2>
              <div className="w-24 h-px bg-heritage-accent mx-auto"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
              {/* Honorary Chairperson */}
              <div className="w-full md:w-1/3 text-center md:text-left">
                <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-heritage-accent mb-4">Honorary Chairperson</h3>
                <div className="font-serif text-3xl md:text-4xl text-white mb-4">Dr. Ch. Lakshmi</div>
              </div>

              {/* Faculty Members */}
              <div className="w-full md:w-2/3">
                <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-heritage-accent mb-6 text-center md:text-left border-b border-white/10 pb-4">
                  Faculty Members
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
                  {[
                    "Prof. Kondaiah Jonnalagadda",
                    "Dr. Sanu Rani Paul",
                    "Dr. Neelima B.",
                    "Ms. Gali Parivarthana",
                    "Dr. Sherley Hepsiba D."
                  ].map((name, idx) => (
                    <div key={idx} className="flex flex-col items-center md:items-start">
                      <div className="font-serif text-xl text-white mb-1">{name}</div>
                      <div className="font-sans text-[10px] uppercase tracking-widest text-white/50 font-semibold">Faculty Member</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>


          </div>
        </section>
      </main>
  );
}

