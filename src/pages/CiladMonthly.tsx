import { BookOpen, ArrowRight, ExternalLink, Calendar, FileText, Download, Sparkles, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export function CiladMonthly() {
  return (
    <main className="flex-grow">
      {/* Top Banner */}
      <div className="bg-heritage-navy text-white text-center py-3 border-b border-heritage-accent">
        <p className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold">
          <span className="text-heritage-accent">Centre Publication:</span> CILAD Monthly Digest & Law Journal
        </p>
      </div>

      {/* Hero Section */}
      <section className="px-6 py-20 lg:py-28 max-w-5xl mx-auto w-full flex flex-col items-center text-center">
        <div className="mb-8 flex flex-col items-center w-full">
          <span className="eyebrow mb-4 text-heritage-accent">Flagship Research Bulletin</span>
          <h1 className="font-serif text-4xl md:text-6xl font-medium text-heritage-navy leading-tight mb-6">
            CILAD Monthly
          </h1>
          <div className="w-16 h-[2px] bg-heritage-accent mb-8"></div>
          <p className="font-serif italic text-xl md:text-2xl text-heritage-muted leading-relaxed max-w-3xl">
            A curated monthly periodical chronicling pivotal developments in public and private international law, scholarly commentaries, treaty ratifications, and international dispute adjudications.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <a
            href="https://dsnlu.ac.in/centre-for-international-law-and-allied-disciplines-cilad/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-heritage-navy text-white font-sans text-xs uppercase tracking-widest font-bold hover:bg-heritage-accent transition-colors shadow-sm"
          >
            <span>Visit DSNLU CILAD Portal</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-heritage-navy/30 text-heritage-navy font-sans text-xs uppercase tracking-widest font-bold hover:bg-heritage-surface transition-colors"
          >
            <span>Back to Home</span>
          </Link>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="bg-heritage-surface border-y border-heritage-navy/20 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-heritage-navy mb-4">Inside Every Issue</h2>
            <p className="font-serif italic text-heritage-muted text-base max-w-2xl mx-auto">
              Synthesizing critical international jurisprudence, regional policy frameworks, and student-faculty discourse into a rigorous digest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white border border-heritage-navy/10 space-y-4">
              <div className="w-10 h-10 rounded bg-heritage-accent/10 flex items-center justify-center text-heritage-accent">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-heritage-navy">Global Jurisprudence</h3>
              <p className="font-sans text-sm text-heritage-muted leading-relaxed">
                Concise case summaries and critical analysis of recent decisions by the ICJ, ICC, ITLOS, WTO Appellate Body, and regional tribunals.
              </p>
            </div>

            <div className="p-8 bg-white border border-heritage-navy/10 space-y-4">
              <div className="w-10 h-10 rounded bg-heritage-accent/10 flex items-center justify-center text-heritage-accent">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-heritage-navy">Scholarly Essays</h3>
              <p className="font-sans text-sm text-heritage-muted leading-relaxed">
                Perspectives authored by distinguished scholars, practitioners, and student researchers addressing emerging challenges in international law.
              </p>
            </div>

            <div className="p-8 bg-white border border-heritage-navy/10 space-y-4">
              <div className="w-10 h-10 rounded bg-heritage-accent/10 flex items-center justify-center text-heritage-accent">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-heritage-navy">Treaty Monitor</h3>
              <p className="font-sans text-sm text-heritage-muted leading-relaxed">
                Updates on multilateral treaties, state ratifications, environmental protocols, and bilateral investment agreements across jurisdictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Archives / Call for Submissions */}
      <section className="px-6 py-20 max-w-5xl mx-auto text-center">
        <div className="border border-heritage-navy/15 p-10 md:p-14 bg-heritage-surface">
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-heritage-accent block mb-3">
            Contributions & Submissions
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-heritage-navy mb-4">
            Call for Monthly Columns & Articles
          </h2>
          <p className="font-serif italic text-lg text-heritage-muted leading-relaxed max-w-2xl mx-auto mb-8">
            CILAD invites manuscripts, case briefs, and op-eds on a rolling monthly basis from law students, researchers, and legal practitioners.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:cilad@dsnlu.ac.in?subject=Submission%20for%20CILAD%20Monthly"
              className="cta-button text-xs px-8 py-3.5"
            >
              Submit Manuscript
            </a>
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
      </section>
    </main>
  );
}
