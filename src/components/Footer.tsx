import Link from "next/link";
import Logo from "./Logo";
import PageContainer from "./PageContainer";

// Premium coded social icons in slate gray with navy hover transitions
function InstagramIcon() {
  return (
    <svg className="w-5 h-5 text-slate-gray hover:text-navy transition-colors duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-5 h-5 text-slate-gray hover:text-navy transition-colors duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5 text-slate-gray hover:text-navy transition-colors duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-5 h-5 text-slate-gray hover:text-navy transition-colors duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-paper border-t border-steel-blue/20 mt-auto">
      <PageContainer className="py-12 flex flex-col gap-8">
        {/* Main Footer Layout: Split left tagline & right link columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo & Tagline column */}
          <div className="md:col-span-6 space-y-4">
            <Link href="/" className="flex items-center gap-1.5 group w-fit">
              <Logo className="h-8 w-8 transition-transform group-hover:scale-105 duration-200" />
              <span className="font-sans font-bold text-lg text-charcoal tracking-tight">
                Creed Tech
              </span>
            </Link>
            <p className="font-sans text-sm text-slate-gray max-w-sm leading-relaxed">
              A software studio in Lagos, Nigeria. We build digital products and growth engines that help people and businesses reach their full potential.
            </p>
          </div>

          {/* Links Column 1: Explore */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-navy font-bold">
              Explore
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/what-we-do" className="font-sans text-sm text-slate-gray hover:text-navy transition-colors">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="/work" className="font-sans text-sm text-slate-gray hover:text-navy transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/faq" className="font-sans text-sm text-slate-gray hover:text-navy transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Company */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-navy font-bold">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="font-sans text-sm text-slate-gray hover:text-navy transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-sans text-sm text-slate-gray hover:text-navy transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons row */}
        <div className="flex gap-4 items-center">
          <a href="#" aria-label="Instagram"><InstagramIcon /></a>
          <a href="#" aria-label="X (Twitter)"><XIcon /></a>
          <a href="#" aria-label="LinkedIn"><LinkedInIcon /></a>
          <a href="#" aria-label="GitHub"><GitHubIcon /></a>
        </div>

        {/* Bottom bar with relationship context and copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full border-t border-steel-blue/20 pt-6 text-center sm:text-left gap-4">
          <p className="font-sans text-xs text-slate-gray/80">
            © {new Date().getFullYear()} Creed Tech. All rights reserved.
          </p>
          <p className="font-sans text-xs text-slate-gray/60 max-w-sm sm:max-w-none leading-relaxed">
            Creed Tech is part of the <span className="font-semibold text-slate-gray/80">Creed Empire</span> family of businesses.
          </p>
        </div>
      </PageContainer>
    </footer>
  );
}
