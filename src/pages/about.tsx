import { useEffect } from 'react';

export default function AboutPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'About E&S Motors | Electronic Steering Rack Specialists';

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="inner-page">
      <header className="inner-page-nav">
        <a className="brand" href="/">
          <img className="brand-logo" src="/logo.svg" alt="E&S Motors" />
          <span className="brand-copy">
            <span className="brand-name">E&amp;S Motors</span>
            <span className="brand-sub">Steering rack specialists</span>
          </span>
        </a>

        <a className="inner-page-home" href="/">
          Back to home
        </a>
      </header>

      <main>
        <section className="inner-page-hero">
          <div className="container-wide">
            <div className="eyebrow">/ About E&amp;S Motors</div>
            <h1 className="display">
              Specialist work.<br />
              <span>Clear advice.</span>
            </h1>
            <p className="inner-page-lead">
              E&amp;S Motors focuses on electronic steering rack diagnostics,
              repair and supply for selected Audi and Porsche vehicles across
              South Africa.
            </p>
          </div>
        </section>

        <section className="inner-page-content container-wide">
          <div className="inner-page-copy">
            <div className="eyebrow">/ What we do</div>
            <h2 className="display">A clearer route<br />to the fix.</h2>
          </div>

          <div className="inner-page-copy">
            <p>
              Steering faults can come from the rack, control unit, motor,
              sensors or the communication between them. E&amp;S Motors helps
              identify the correct route before a costly part is fitted.
            </p>

            <p>
              We work with workshops, traders and vehicle owners who need
              practical support with electronic steering systems.
            </p>

            <p>
              Depending on the vehicle and the fault, the right route may be
              diagnostic support, a repair assessment or a suitable replacement
              steering rack.
            </p>
          </div>
        </section>

        <section className="inner-page-facts">
          <div className="container-wide inner-page-facts-grid">
            <div className="inner-page-fact">
              <strong>01</strong>
              <span>Electronic steering rack diagnostics</span>
            </div>

            <div className="inner-page-fact">
              <strong>02</strong>
              <span>Repair and replacement routes</span>
            </div>

            <div className="inner-page-fact">
              <strong>03</strong>
              <span>Selected Audi and Porsche platforms</span>
            </div>

            <div className="inner-page-fact">
              <strong>04</strong>
              <span>Mobile assistance across South Africa</span>
            </div>
          </div>
        </section>

        <section className="inner-page-action">
          <div className="container-wide">
            <h2 className="display">Need help with<br /><span>your steering rack?</span></h2>
            <a className="button-primary" href="/#request">
              Send your vehicle details
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}