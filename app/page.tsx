import Image from "next/image";
import { SiteNav } from "@/components/site-nav";
import { TeamProfiles } from "@/components/TeamProfiles";
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
  { href: "#vision", label: "Vision & Mission" },
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
    profile: [
      "Haroon Khalid is a seasoned journalist and editorial professional with extensive experience across leading Pakistani media organizations, including Dawn, Tribune 24/7, and Indus News. Over the course of his career, he has progressed from sub-editor to senior editorial leadership roles such as News Editor and Executive Producer, demonstrating strong command over newsroom operations, content curation, and editorial decision-making. His expertise lies in selecting, editing, and shaping news content, supervising editorial teams, and ensuring accuracy, quality, and compliance with professional standards across print, digital, and broadcast platforms.",
      "With a strong academic background, Haroon holds an M.A. in Mass Communication and an M.A. in International Relations from the University of Karachi, along with a BCS degree from FAST Institute. He is highly skilled in writing, editing, reporting, and translation in both English and Urdu, and is well-versed in modern newsroom tools and workflows. His continuous professional development through workshops in media security, data journalism, and right to information further strengthens his profile, positioning him as a well-rounded media professional committed to editorial excellence and evolving industry practices.",
    ],
  },
  {
    initials: "SF",
    name: "Sabeehul-Wara Fasihi",
    role: "Newsroom Leadership",
    description:
      "A media professional with more than a decade in news editing, reporting, and newsroom management, including roles with News 14, Bol Network, Express News, ARY News, Geo News, and News One.",
    profile: [
      "Sabeehul-Wara Fasihi is an experienced media professional with over a decade of expertise in news editing, reporting, and newsroom management. He is currently serving as Controller News at News 14, and has previously worked with leading media organizations including Bol Network, Express News, ARY News, Geo News, and News One. His core strengths include editorial decision-making, content supervision, assignment planning, and coordination with key stakeholders, ensuring accurate and timely news delivery across platforms.",
      "He holds a Master’s degree in Mass Communication and is currently pursuing an M.Phil in Humanities. With strong command over newsroom systems such as ENPS and OCTOPUS, along with technical and analytical skills, Sabeeh brings a well-rounded approach to modern journalism. His professional journey is further supported by contributions to social issue reporting, research projects, and active engagement with journalist bodies, reflecting his commitment to credible and impactful media practices.",
    ],
  },
  {
    initials: "TH",
    name: "Tariq Habib",
    role: "Corporate Communications",
    description:
      "A marketing and corporate communications professional with 20+ years across media, academia, corporate, and non-profit organizations, specializing in brand, media, digital strategy, and stakeholder engagement.",
    profile: [
      "Tariq Habib is a seasoned marketing and corporate communications professional with 20+ years of cross-sector experience spanning corporate, media, academia, and the non-profit landscape. He brings a strong blend of strategic thinking and creative execution, with expertise in brand building, media relations, digital strategy, and stakeholder engagement. Throughout his career, he has developed impactful communication frameworks, led high-visibility campaigns, and contributed to both print and digital journalism. His work has been associated with leading organizations such as The News International, GEO News, The Aga Khan University, Pak-Qatar Group, and Central Depository Company (CDC), reflecting a well-rounded professional journey rooted in communication excellence.",
      "In his most recent roles, Tariq has led marketing and corporate communications functions, driving integrated strategies that combine traditional outreach with modern digital platforms. He has successfully managed corporate branding, media engagement, large-scale events, and content development while strengthening organizational visibility and reputation. Known for his strong editorial acumen and ability to craft compelling narratives, he has also contributed articles to prominent publications including Dawn, The News International, and Jang. With a deep understanding of audience behavior and evolving media trends, Tariq continues to position organizations for growth through effective storytelling, strategic communication, and impactful engagement initiatives.",
    ],
    image: "/tariq-habib-profile.jpeg",
    imageAlt: "Portrait of Tariq Habib",
    avatarScale: 1.35,
    avatarPosition: "center 32%",
    avatarOrigin: "50% 38%",
  },
  {
    initials: "MS",
    name: "Muhammad Saifullah",
    role: "Startup Ecosystem & Social Innovation",
    description:
      "A social entrepreneur, startup ecosystem specialist, and certified filmmaker with 15+ years of experience supporting more than 1,000 startups in Pakistan and internationally as a mentor, trainer, and advisor.",
    profile: [
      "Muhammad Saifullah is a seasoned social entrepreneur, startup ecosystem specialist, and certified filmmaker with over 15 years of diverse professional experience. He has played a pivotal role in supporting the creation and growth of over 1,000 startups across Pakistan and internationally, serving as a mentor, trainer, and advisor.",
      "Globally recognized by Shell LiveWIRE as the best Program Manager across 22 country programs, Saifullah has represented Pakistan on international platforms, delivering training and capacity-building sessions in the UK, Indonesia, Nigeria, and other countries across Europe, Asia, and Africa. He also brings international work experience from the UAE, having worked in Dubai in sales and marketing roles.",
      "A graduate of the Indus Valley School of Art and Architecture with a diploma in filmmaking, Saifullah combines creativity with purpose through multimedia storytelling, strategic communications, and social innovation. He has assisted in the production of several short films and engages in acting as a personal passion and hobby.",
      "A father, a traveler, and a culture enthusiast, Saifullah is driven by the desire to create lasting impact, leveraging his skills and experience to make a meaningful difference during his brief stop on this planet.",
    ],
    image: "/muhammad-saifullah-profile.jpeg",
    imageAlt: "Portrait of Muhammad Saifullah",
    avatarScale: 1.85,
    avatarPosition: "center 12%",
    avatarOrigin: "50% 20%",
  },
];

function LensIcon({
  statement = false,
  onDark = false,
}: {
  statement?: boolean;
  onDark?: boolean;
}) {
  return (
    <span
      className="lens-icon"
      aria-hidden="true"
      style={{
        position: "relative",
        display: "block",
        width: "2rem",
        height: "2rem",
        flex: "0 0 auto",
        overflow: "hidden",
        borderRadius: "50%",
        marginBottom: statement ? "4rem" : undefined,
        backgroundColor: onDark ? "#ffd42a" : undefined,
      }}
    >
      <Image
        src="/the-corporate-lens-logo.png"
        alt=""
        width={90}
        height={90}
        sizes="90px"
        style={{
          position: "absolute",
          top: "-28.4px",
          left: "-1.5px",
          width: "90px",
          maxWidth: "none",
          height: "90px",
          mixBlendMode: onDark ? "difference" : undefined,
        }}
      />
    </span>
  );
}

export default function Home() {
  return (
    <>
      <header id="home" className="site-header">
        <div className="masthead section-shell">
          <a
            href="#home"
            aria-label="The Corporate Lens, back to top"
            className="brand-link"
            style={{ aspectRatio: "1253 / 525", overflow: "hidden" }}
          >
            <Image
              src="/the-corporate-lens-logo-header.png"
              alt="The Corporate Lens"
              width={1254}
              height={1254}
              priority
              sizes="(max-width: 720px) 88vw, 680px"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
            />
          </a>
        </div>
      </header>

      <SiteNav items={navigation} />

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
              <p className="eyebrow">ABOUT US</p>
              <h2 id="about-title">WHO WE ARE</h2>
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

        <section id="vision" className="navy-section content-section" aria-labelledby="vision-title">
          <div className="section-shell">
            <p id="vision-title" className="eyebrow" style={{ marginBottom: "clamp(3rem, 7vw, 5.5rem)" }}>
              Vision &amp; Mission
            </p>
            <div className="statement-grid">
              <article className="statement-card statement-card-solid">
                <LensIcon statement />
                <h3>Vision</h3>
                <p>
                  To become a trusted editorial platform for Pakistan&apos;s corporate landscape, where meaningful business
                  stories are presented with clarity, credibility, and influence.
                </p>
              </article>
              <article className="statement-card">
                <LensIcon statement onDark />
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
            <p id="coverage-title" className="eyebrow" style={{ marginBottom: "clamp(3rem, 7vw, 5.5rem)" }}>
              What we cover
            </p>

            <div className="coverage-grid">
              {coverage.map(({ title, description, Icon }, index) => (
                <article
                  key={title}
                  className={`coverage-card${index % 2 === 0 ? " coverage-card-navy" : ""}`}
                >
                  <div className="coverage-card-top">
                    <LensIcon onDark={index % 2 === 0} />
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
            <p id="team-title" className="eyebrow" style={{ marginBottom: "clamp(3rem, 7vw, 5.5rem)" }}>
              Editorial board
            </p>

            <TeamProfiles members={team} />
          </div>
        </section>

        <section id="contact" className="gold-section contact-section" aria-labelledby="contact-title">
          <div className="contact-watermark" aria-hidden="true">
            <Image
              src="/the-corporate-lens-logo.png"
              alt=""
              width={1254}
              height={1254}
              sizes="(max-width: 699px) 16rem, 28rem"
            />
          </div>
          <div className="section-shell contact-grid">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 id="contact-title">Have a corporate story worth telling?</h2>
            </div>
            <div className="contact-copy">
              <p>Share the essentials with our team. We&apos;ll bring the context.</p>
              <a href="mailto:info@thecorporatelens.com" className="button button-navy email-button">
                <Mail aria-hidden="true" size={19} /> info@thecorporatelens.com
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
