import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpenText,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  Mail,
  MapPin,
  Newspaper,
  UsersRound,
} from "lucide-react";

const navigation = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#vision", label: "Vision and Mission" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

const coverage = [
  {
    title: "Corporate News",
    description: "Verified developments, decisions, appointments, and milestones.",
    Icon: Newspaper,
  },
  {
    title: "Executive Interviews",
    description: "Direct conversations with the leaders shaping business in Pakistan.",
    Icon: UsersRound,
  },
  {
    title: "Markets & Economy",
    description: "Clear context for the shifts that affect companies and investors.",
    Icon: ChartNoAxesCombined,
  },
  {
    title: "Boardroom Perspective",
    description: "Analysis of strategy, reputation, leadership, and public trust.",
    Icon: BriefcaseBusiness,
  },
  {
    title: "People & Workplace",
    description: "HR voices, organizational culture, and the people behind progress.",
    Icon: Building2,
  },
  {
    title: "Ideas & Culture",
    description: "Books, business travel, leadership wisdom, and a lighter lens.",
    Icon: BookOpenText,
  },
];

const team = [
  {
    initials: "HK",
    name: "Haroon Khalid",
    role: "Editorial Leadership",
    description:
      "A veteran journalist whose career spans Dawn, Tribune 24/7, and Indus News. His experience covers newsroom leadership, content curation, editing, reporting, and bilingual journalism.",
  },
  {
    initials: "SF",
    name: "Sabeehul-Wara Fasihi",
    role: "Newsroom Leadership",
    description:
      "A media professional with more than a decade in news editing, reporting, and newsroom management, including roles with News 14, Bol Network, Express News, ARY News, Geo News, and News One.",
  },
  {
    initials: "TH",
    name: "Tariq Habib",
    role: "Corporate Communications",
    description:
      "A marketing and corporate communications professional with 20+ years across media, academia, corporate, and non-profit organizations, specializing in brand, media, digital strategy, and stakeholder engagement.",
  },
];

export default function Home() {
  return (
    <>
      <header id="home" className="site-header">
        <div className="masthead section-shell">
          <a href="#home" aria-label="The Corporate Lens, back to top" className="brand-link">
            <Image
              src="/the-corporate-lens-logo-cropped.png"
              alt="The Corporate Lens — Beyond the Headlines"
              width={1253}
              height={525}
              priority
              sizes="(max-width: 720px) 88vw, 680px"
            />
          </a>
        </div>
      </header>

      <nav className="site-nav" aria-label="Main navigation">
        <div className="nav-inner section-shell">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <main>
        <section className="hero navy-section" aria-labelledby="hero-title">
          <div className="section-shell hero-grid">
            <div className="hero-copy">
              <h1 id="hero-title">Pakistan&apos;s corporate story, in sharper focus.</h1>
              <p className="hero-intro">
                Credible reporting, executive voices, and market intelligence for people who make consequential decisions.
              </p>
              <div className="hero-actions">
                <a href="#about" className="button button-gold">
                  Discover our lens <ArrowDownRight aria-hidden="true" size={19} />
                </a>
                <a href="#contact" className="text-link">
                  Share a story <ArrowUpRight aria-hidden="true" size={18} />
                </a>
              </div>
            </div>

            <div className="lens-mark" aria-hidden="true">
              <span className="lens-ring" />
              <span className="lens-core">TCL</span>
            </div>
          </div>
        </section>

        <section id="about" className="gold-section content-section" aria-labelledby="about-title">
          <div className="section-shell about-grid">
            <div className="section-heading">
              <p className="eyebrow">About us · Who we are</p>
              <h2 id="about-title">The insight behind the headline.</h2>
            </div>

            <div className="about-copy">
              <p className="lead-copy">
                The Corporate Lens is Pakistan&apos;s premier digital media platform dedicated to the country&apos;s corporate,
                business, and economic landscape.
              </p>
              <p>
                We deliver credible journalism, exclusive executive interviews, boardroom perspectives, and in-depth
                market intelligence that empower business leaders, investors, policymakers, and professionals to make
                informed decisions.
              </p>
              <p>
                Our accomplished editorial board of veteran journalists, former editors, and industry experts upholds the
                highest standards of accuracy, integrity, and editorial excellence. Every story is carefully researched,
                fact-checked, and reviewed for balanced reporting and meaningful analysis.
              </p>
              <p>
                We don&apos;t simply report events—we provide the insight, context, and perspective behind the headlines.
              </p>
            </div>

          </div>
        </section>

        <section id="vision" className="navy-section content-section" aria-label="Vision and mission">
          <div className="section-shell">
            <div className="statement-grid">
              <article className="statement-card statement-card-solid">
                <span className="card-number">01</span>
                <h3>Vision</h3>
                <p>
                  To become a trusted editorial platform for Pakistan&apos;s corporate landscape, where meaningful business
                  stories are presented with clarity, credibility, and influence.
                </p>
              </article>
              <article className="statement-card">
                <span className="card-number">02</span>
                <h3>Mission</h3>
                <p>
                  To spotlight companies, leaders, decisions, and developments through premium journalism, executive
                  storytelling, and thoughtful business analysis.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="coverage" className="gold-section content-section" aria-labelledby="coverage-title">
          <div className="section-shell">
            <div className="section-heading coverage-heading">
              <div>
                <p className="eyebrow">What we cover</p>
                <h2 id="coverage-title">Business, without the noise.</h2>
              </div>
              <p>Six focused beats. One clear editorial standard.</p>
            </div>

            <div className="coverage-grid">
              {coverage.map(({ title, description, Icon }, index) => (
                <article
                  key={title}
                  className={`coverage-card${index % 2 === 0 ? " coverage-card-navy" : ""}`}
                >
                  <div className="coverage-card-top">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <Icon aria-hidden="true" size={23} strokeWidth={1.7} />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>

          </div>
        </section>

        <section id="team" className="navy-section content-section" aria-labelledby="team-title">
          <div className="section-shell">
            <div className="section-heading team-heading">
              <div>
                <p className="eyebrow">Editorial board</p>
                <h2 id="team-title">Experience behind every story.</h2>
              </div>
              <p>
                Veteran newsroom judgment meets modern corporate communication.
              </p>
            </div>

            <div className="team-grid">
              {team.map((member, index) => (
                <article
                  key={member.name}
                  className={`team-card${index % 2 === 0 ? " team-card-gold" : ""}`}
                >
                  <div className="team-card-head">
                    <span className="initials">{member.initials}</span>
                    <span className="card-number">0{index + 1}</span>
                  </div>
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="gold-section contact-section" aria-labelledby="contact-title">
          <div className="section-shell contact-grid">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 id="contact-title">Have a corporate story worth telling?</h2>
            </div>
            <div className="contact-copy">
              <p>Share the essentials with our team. We&apos;ll bring the context.</p>
              <a href="mailto:info@thecorporatelens.com" className="button button-navy">
                <Mail aria-hidden="true" size={19} /> Email Us
              </a>
              <p className="location"><MapPin aria-hidden="true" size={17} /> Karachi, Pakistan</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <p>
            © {new Date().getFullYear()} The Corporate Lens · Powered by{" "}
            <a href="https://patricians.pk">Patricians</a>
          </p>
          <p>Beyond the Headlines</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
