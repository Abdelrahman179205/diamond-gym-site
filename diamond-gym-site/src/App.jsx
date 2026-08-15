import React, { useEffect, useState } from "react";
const facilities = [
  {
    number: "01",
    title: "Strength",
    image: "/images/strength.jpg",
    description: "Build strength with a serious training floor and equipment made for progression.",
  },
  {
    number: "02",
    title: "Cardio",
    image: "/images/cardio.jpg",
    description: "Keep your conditioning sharp with dedicated cardio equipment and space.",
  },
  {
    number: "03",
    title: "CrossFit",
    image: "/images/crossfit.jpg",
    description: "High-energy functional training designed to challenge your limits.",
  },
  {
    number: "04",
    title: "Ladies Area",
    image: "/images/ladies.jpg",
    description: "A dedicated training environment designed around comfort and confidence.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      {/* NAVIGATION */}
      <header className="navbar">
        <a
  href="#top"
  className="brand"
  aria-label="Diamond Gym home"
  onClick={closeMenu}
>
  <img
    src="/images/branding/logo.png"
    alt="Diamond Gym"
    className="brand-logo"
  />
</a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <nav
  className={`nav-links ${menuOpen ? "nav-links--open" : ""}`}
  aria-label="Main navigation"
>
  <a href="#experience" onClick={closeMenu}>
    Why Diamond
  </a>

  <a href="#facilities" onClick={closeMenu}>
    The Gym
  </a>

  <a href="#gallery" onClick={closeMenu}>
    Gallery
  </a>

  <a href="#contact" onClick={closeMenu}>
    Location
  </a>

  <a href="#join" className="nav-cta" onClick={closeMenu}>
    Join Now
  </a>
</nav>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <img
            className="hero-image"
            src="/images/hero.jpg"
            alt="Modern gym training floor"
          />

          <div className="hero-overlay" />

          <div className="hero-content section-pad">
            <p className="eyebrow">
              DIAMOND GYM · OBOUR CITY
            </p>

            <h1 className="hero-title">
  Built for those who
  <span> refuse to stay average.</span>
</h1>

            <p className="hero-eyebrow">
  TRAIN HARD. <span>STAY STRONG.</span>
</p>

            <div className="hero-actions">
              <a href="#join" className="btn btn-primary">
                Join Diamond
              </a>

              <a href="#facilities" className="btn btn-secondary">
                Explore the gym
              </a>
            </div>
          </div>

          <div className="hero-scroll">
            <span>Scroll to explore</span>
            <span className="scroll-line" />
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section section-pad">
          <div className="section-heading">
            <p className="eyebrow">
              THE DIAMOND EXPERIENCE
            </p>

            <h2>
              Built for people
              <span> who train.</span>
            </h2>

            <p className="section-description">
              Whether you're chasing strength, conditioning,
              performance or simply a healthier lifestyle,
              Diamond gives you the environment to keep moving.
            </p>
          </div>

          <div className="experience-grid">
            <article className="experience-card">
              <span>01</span>
              <h3>Serious equipment.</h3>
              <p>
                Train with equipment designed to support
                every stage of your progress.
              </p>
            </article>

            <article className="experience-card">
              <span>02</span>
              <h3>Professional guidance.</h3>
              <p>
                Get the support and training environment
                you need to stay consistent.
              </p>
            </article>

            <article className="experience-card">
              <span>03</span>
              <h3>A stronger community.</h3>
              <p>
                Surround yourself with people who show up
                and keep pushing forward.
              </p>
            </article>
          </div>
        </section>

        {/* FACILITIES */}
        <section
          id="facilities"
          className="section facilities-section section-pad"
        >
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">
                TRAIN YOUR WAY
              </p>

              <h2>
                Everything you need.
                <span> Nothing you don't.</span>
              </h2>
            </div>

            <p className="section-description">
              Multiple training environments under one roof,
              built around different goals and different ways to move.
            </p>
          </div>

          <div className="facility-grid">
            {facilities.map((facility) => (
              <article
                className="facility-card"
                key={facility.number}
              >
                <img
                  src={facility.image}
                  alt={`${facility.title} training`}
                  loading="lazy"
                />

                <div className="facility-gradient" />

                <div className="facility-content">
                  <span>{facility.number}</span>

                  <h3>{facility.title}</h3>

                  <p>{facility.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* TRAINER */}
        <section className="trainer-section section-pad">
          <div className="trainer-image-wrapper">
            <img
              src="/images/trainer.jpg"
              alt="Personal trainer working with a gym member"
              loading="lazy"
            />
          </div>

          <div className="trainer-content">
            <p className="eyebrow">
              TRAIN WITH PURPOSE
            </p>

            <h2>
              Don't just
              <span> show up.</span>
            </h2>

            <p>
              The right environment can change the way you train.
              Diamond combines serious facilities with a community
              that keeps you motivated to come back.
            </p>

            <a href="#join" className="text-link">
              Start your journey →
            </a>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="section section-pad">
          <div className="section-heading">
            <p className="eyebrow">
              INSIDE DIAMOND
            </p>

            <h2>
              Your training
              <span> starts here.</span>
            </h2>
          </div>

          <div className="gallery-grid">
            <div className="gallery-large">
              <img
                src="/images/equipment.jpg"
                alt="Gym equipment"
                loading="lazy"
              />
            </div>

            <div className="gallery-small">
              <img
                src="/images/locker-room.jpg"
                alt="Modern gym locker room"
                loading="lazy"
              />
            </div>

            <div className="gallery-small">
              <img
                src="/images/entrance.jpg"
                alt="Modern gym entrance"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="join" className="cta-section section-pad">
          <div className="cta-card">
            <img
              src="/images/cta.jpg"
              alt="Athlete training in a gym"
              loading="lazy"
            />

            <div className="cta-overlay" />

            <div className="cta-content">
              <p className="eyebrow">
                YOUR NEXT REP STARTS HERE
              </p>

              <h2>
                Ready to become
                <span> Diamond?</span>
              </h2>

              <p>
  Thinking about joining? Come see Diamond Gym for yourself.
  Our team can show you the facilities, training areas and
  membership options available.
</p>

              <div className="hero-actions">
                <a
                  href="https://wa.me/201140711118"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  WhatsApp us
                </a>

                <a
                  href="tel:+201140711118"
                  className="btn btn-secondary"
                >
                  011 407 1118
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="contact-section section-pad"
        >
          <div className="contact-card">
            <div>
              <p className="eyebrow">
                VISIT DIAMOND
              </p>

              <h2>
                Obour City.
                <span> Cairo, Egypt.</span>
              </h2>
            </div>

            <div className="contact-info">
              <p>
                Silver Mall
                <br />
                Obour City, Cairo
              </p>

              <a
                href="https://maps.google.com/?q=Diamond+Gym+Obour+City"
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                Open in Google Maps ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer section-pad">
        <div className="footer-main">
          <div className="brand">
  <img
    src="/images/branding/logo.png"
    alt="Diamond Gym"
    className="brand-logo"
  />
</div>

          <div className="footer-links">
            <a
              href="https://www.instagram.com/diamond_gym_egypt/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://www.facebook.com/p/Diamond-Gym-Egypt-61552985152796/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>

            <a
              href="https://wa.me/201140711118"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Diamond Gym Egypt
          </span>

          <span>
            Train hard. Stay strong.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
