import { useEffect } from 'react';

export default function MobileServicePage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Mobile Steering Rack Service South Africa | E&S Motors';

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
            <span className="brand-name">E&amp;S Motors Group</span>
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
            <div className="eyebrow">/ Mobile assistance</div>
            <h1 className="display">
              We come<br />
              <span>to you.</span>
            </h1>
            <p className="inner-page-lead">
              E&amp;S Motors provides mobile assistance across South Africa and
              can come to your location to help clarify the right steering-rack
              route.
            </p>
          </div>
        </section>

        <section className="inner-page-content container-wide">
          <div className="inner-page-copy">
            <div className="eyebrow">/ How it works</div>
            <h2 className="display">Three steps<br />forward.</h2>
          </div>

          <ol className="inner-page-steps">
            <li>
              <strong>01 — Share your location</strong>
              <p>
                Tell us the city, town or area where the vehicle or steering
                rack is located.
              </p>
            </li>

            <li>
              <strong>02 — Send the details</strong>
              <p>
                Provide the vehicle, year, symptoms, VIN or rack part number
                if available.
              </p>
            </li>

            <li>
              <strong>03 — Confirm the next step</strong>
              <p>
                We advise whether the next step is mobile assistance, diagnostic
                support, a repair assessment or replacement supply.
              </p>
            </li>
          </ol>
        </section>

        <section className="inner-page-service-note">
          <div className="container-wide">
            <div className="eyebrow">/ Nationwide support</div>
            <h2 className="display">Your location<br /><span>is the starting point.</span></h2>
            <p>
              You do not need to know exactly what has failed before contacting
              us. Send the information you have, including where the vehicle or
              rack is located, and we will help work out the practical next
              step.
            </p>

            <a className="button-primary" href="/#request">
              Tell us where you are
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}