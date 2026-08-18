import { type FormEvent, type ReactNode, useEffect, useState } from 'react';
import { ArrowDownRight, ArrowRight, Check, CircleCheck, Menu, Send, X } from 'lucide-react';
import workshopShelves from './assets/workshop-shelves.jpg';
import electronicsStock from './assets/electronics-stock.jpg';
import rackOne from './assets/rack-one.jpg';
import rackTwo from './assets/rack-two.jpg';
import rackThree from './assets/rack-three.jpg';
import rackFour from './assets/rack-four.jpg';
import rackFive from './assets/rack-five.jpg';
import { ErrorBoundary } from '@/components/error-boundary';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const models = ['A4', 'A5', 'A6', 'A7', 'A8', 'Q5', 'Q7', 'Porsche'];

const workshopImages = [
  { src: workshopShelves, alt: 'Electronic steering racks arranged on workshop shelving', label: 'Racks on hand / ready to identify', wide: true },
  { src: electronicsStock, alt: 'Electronic steering units laid out for inspection', label: 'Control units / component-level work' },
  { src: rackOne, alt: 'Electronic steering rack on a tiled workshop floor', label: 'Rack assembly / inspection' },
  { src: rackTwo, alt: 'Close view of an electronic steering rack assembly', label: 'Mechanical housing / inspection' },
  { src: rackThree, alt: 'Electronic steering rack prepared for assessment', label: 'Assessment / repair route' },
  { src: rackFour, alt: 'Steering rack repair stock', label: 'Repair stock / platform knowledge' },
  { src: rackFive, alt: 'Electronic steering rack component', label: 'Component detail / careful handling' },
];

function useReveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (!('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

function Home() {
  useReveal();
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container-wide" aria-label="Main navigation">
          <a className="brand" href="#top" onClick={() => setMenuOpen(false)} data-testid="link-brand">
            <span className="brand-mark">E&amp;S</span>
            <span className="brand-copy">
              <span className="brand-name">E&amp;S Motors</span>
              <span className="brand-sub">Steering rack specialists</span>
            </span>
          </a>
          <div className="nav-links">
            <a href="#expertise" data-testid="link-expertise">Expertise</a>
            <a href="#coverage" data-testid="link-coverage">Coverage</a>
            <a href="#workshop" data-testid="link-workshop">Workshop</a>
            <a href="#process" data-testid="link-process">How it works</a>
          </div>
          <a className="nav-cta" href="#request" data-testid="link-request-quote">
            Request help <ArrowRight size={15} />
          </a>
          <button className="mobile-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} data-testid="button-mobile-menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {menuOpen && (
            <div className="mobile-menu">
              <a href="#expertise" onClick={() => setMenuOpen(false)} data-testid="mobile-link-expertise">Expertise</a>
              <a href="#coverage" onClick={() => setMenuOpen(false)} data-testid="mobile-link-coverage">Coverage</a>
              <a href="#workshop" onClick={() => setMenuOpen(false)} data-testid="mobile-link-workshop">Workshop</a>
              <a href="#process" onClick={() => setMenuOpen(false)} data-testid="mobile-link-process">How it works</a>
              <a className="button-primary" href="#request" onClick={() => setMenuOpen(false)} data-testid="mobile-link-request">Request help <ArrowRight size={15} /></a>
            </div>
          )}
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="container-wide hero-content">
            <div className="eyebrow eyebrow-light reveal">Electronic steering / Audi + Porsche</div>
            <h1 className="display reveal reveal-delay-1" id="hero-title">Steering<br /><span>sorted.</span></h1>
            <p className="hero-lead reveal reveal-delay-2">Specialist supply, diagnostics and repair for electronic steering racks in premium German vehicles. Precise work for the people who know the difference.</p>
            <div className="hero-actions reveal reveal-delay-3">
              <a className="button-primary" href="#request" data-testid="button-hero-request">Tell us what’s wrong <ArrowDownRight size={16} /></a>
              <a className="button-ghost" href="#coverage" data-testid="button-hero-coverage">Check vehicle coverage</a>
            </div>
            <div className="hero-micro reveal reveal-delay-3"><i /> For workshops, traders &amp; vehicle owners</div>
          </div>
          
        </section>

        <div className="strip">
          <div className="container-wide strip-inner">
            <p><strong>One component.</strong> Four clear routes to a reliable fix.</p>
            <div className="strip-markers" aria-hidden="true"><span className="marker" /><span className="marker" /><span className="marker" /></div>
          </div>
        </div>

        <section className="section-pad intro" id="expertise">
          <div className="container-wide intro-grid">
            <div className="reveal">
              <div className="eyebrow">01 / The specialist difference</div>
              <h2 className="display">Keep the<br />signal clear.</h2>
              <div className="blue-rule" />
            </div>
            <div className="reveal reveal-delay-1">
              <p className="intro-copy">Electronic steering faults rarely announce themselves with a simple answer. A warning light can point to the rack, its control unit, the motor, a sensor — or the conversation between them.</p>
              <p className="intro-copy"><strong>E&amp;S Motors focuses on that conversation.</strong> We help identify the right route before a costly part is fitted, then supply or repair the steering rack with the care premium vehicles demand.</p>
              <div className="signature-line">Technical expertise / plainly explained</div>
            </div>
          </div>
          <div className="container-wide" style={{ marginTop: '68px' }}>
            <div className="precision-panel reveal reveal-delay-2">
              <h3>What we work around</h3>
              <ul className="spec-list">
                <li><span>Electronic power steering racks</span><b>EPS</b></li>
                <li><span>Steering control modules</span><b>ECU</b></li>
                <li><span>Motor and position feedback</span><b>DATA</b></li>
                <li><span>Vehicle-specific faults</span><b>VAG / PORSCHE</b></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section-pad dark-section process" id="process">
          <div className="container-wide">
            <div className="process-header reveal">
              <div>
                <div className="eyebrow">02 / The route to resolution</div>
                <h2 className="display">No guessing.<br />Just next steps.</h2>
              </div>
              <p>Whether you are managing a workshop bay, preparing a vehicle for sale or trying to get your own car back on the road, the first step is a useful conversation.</p>
            </div>
            <div className="process-grid">
              <article className="process-step reveal">
                <div className="step-num">01 — IDENTIFY</div>
                <h3>Tell us<br />the symptoms.</h3>
                <p>Share the vehicle, the warning lights and what has already been checked.</p>
              </article>
              <article className="process-step reveal reveal-delay-1">
                <div className="step-num">02 — DIAGNOSE</div>
                <h3>Separate<br />the signal.</h3>
                <p>We help narrow down whether the rack is ready for repair, replacement or further testing.</p>
              </article>
              <article className="process-step reveal reveal-delay-2">
                <div className="step-num">03 — RESOLVE</div>
                <h3>Choose the<br />right route.</h3>
                <p>Supply a suitable unit, repair your rack or advise on the next practical move.</p>
              </article>
              <article className="process-step reveal reveal-delay-3">
                <div className="step-num">04 — RETURN</div>
                <h3>Drive with<br />clarity.</h3>
                <p>A steering system that feels understood, not simply swapped out.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section-pad coverage" id="coverage">
          <div className="container-wide">
            <div className="coverage-top reveal">
              <div>
                <div className="eyebrow">03 / Vehicle coverage</div>
                <h2 className="display">Built around<br />the platform.</h2>
              </div>
              <p>A focused range means deeper familiarity with the systems, symptoms and steering racks found across these Audi and Porsche vehicles.</p>
            </div>
            <div className="model-map reveal reveal-delay-1">
              {models.map((model) => (
                <div className="model-cell" key={model} data-testid={`card-coverage-${model.toLowerCase()}`}>
                  <div className="model-name">{model}</div>
                  <div className="model-note">{model === 'Porsche' ? 'selected models' : 'Audi platform'}</div>
                </div>
              ))}
            </div>
            <div className="coverage-foot reveal reveal-delay-2">
              <span>Not sure if your vehicle is covered?</span>
              <a href="#request" data-testid="link-coverage-request">Send the details and we’ll help you work it out <ArrowRight size={14} /></a>
            </div>
          </div>
        </section>

        <section className="section-pad workshop-gallery" id="workshop">
          <div className="container-wide">
            <div className="gallery-header reveal">
              <div>
                <div className="eyebrow">04 / In the workshop</div>
                <h2 className="display">The work is<br /><span>real.</span></h2>
              </div>
              <p>From racks on the shelf to electronic units on the bench, this is the kind of component-level work E&amp;S Motors handles every day.</p>
            </div>
            <div className="gallery-grid">
              {workshopImages.map((image, index) => (
                <figure className={`gallery-item reveal ${image.wide ? 'gallery-item-wide' : ''} ${index > 0 ? `reveal-delay-${Math.min(index, 3)}` : ''}`} key={image.src}>
                  <img src={image.src} alt={image.alt} loading={index === 0 ? 'eager' : 'lazy'} />
                  <figcaption>
                    <span>{image.label}</span>
                    <span className="gallery-index">{String(index + 1).padStart(2, '0')}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="split-section" aria-label="Repair and replacement">
          <div className="split-image">
            <div className="image-caption">The rack is the message / We read it carefully</div>
          </div>
          <div className="split-copy reveal">
            <div className="eyebrow">04 / The work itself</div>
            <h2>Repair what<br />makes sense.</h2>
            <p>Replacement is not always the answer. We look at the evidence, the vehicle and the job in front of you — then make the route clear.</p>
            <ul className="detail-list">
              <li><Check size={16} /> Steering rack supply</li>
              <li><Check size={16} /> Diagnostic support</li>
              <li><Check size={16} /> Electronic rack repair</li>
              <li><Check size={16} /> Replacement guidance</li>
            </ul>
          </div>
        </section>

        <section className="section-pad contact" id="request">
          <div className="container-wide contact-grid">
            <div className="contact-intro reveal">
              <div className="eyebrow">05 / Start a conversation</div>
              <h2 className="display">Give us<br />the detail.</h2>
              <p>Tell us what you know, even if it is only the vehicle model and the warning message. We will use the detail to point you towards the most useful next step.</p>
              <button className="button-ghost" onClick={() => scrollTo('top')} data-testid="button-back-to-top">Back to the top <ArrowDownRight size={15} style={{ transform: 'rotate(225deg)' }} /></button>
            </div>
            <form className="contact-form reveal reveal-delay-1" onSubmit={submitForm} data-testid="form-contact">
              <div className="form-heading">
                <h3>Request help</h3>
                <span>01 / 04</span>
              </div>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="name">Your name</label>
                  <input id="name" name="name" required placeholder="How should we address you?" data-testid="input-name" />
                </div>
                <div className="field">
                  <label htmlFor="email">Best email</label>
                  <input id="email" name="email" type="email" required placeholder="Where can we reply?" data-testid="input-email" />
                </div>
                <div className="field">
                  <label htmlFor="vehicle">Vehicle</label>
                  <input id="vehicle" name="vehicle" required placeholder="For example, Audi A6" data-testid="input-vehicle" />
                </div>
                <div className="field">
                  <label htmlFor="registration">Registration / year</label>
                  <input id="registration" name="registration" placeholder="Optional" data-testid="input-registration" />
                </div>
                <div className="field full">
                  <label htmlFor="route">What do you need?</label>
                  <select id="route" name="route" defaultValue="" data-testid="select-route">
                    <option value="" disabled>Select the closest route</option>
                    <option>Diagnostic support</option>
                    <option>Electronic steering rack repair</option>
                    <option>Replacement steering rack</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div className="field full">
                  <label htmlFor="message">What is happening?</label>
                  <textarea id="message" name="message" placeholder="Warning lights, symptoms or anything already checked..." data-testid="textarea-message" />
                </div>
              </div>
              <button className="button-primary form-submit" type="submit" data-testid="button-submit-request">
                {submitted ? <>Request noted <CircleCheck size={16} /></> : <>Send request <Send size={15} /> </>}
              </button>
              {submitted && <div className="form-status" role="status" data-testid="status-form-success"><CircleCheck size={17} /> Thanks — your request has been captured locally. In a live setup, this is where a specialist reply would begin.</div>}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container-wide">
          <div className="footer-grid">
            <div>
              <a className="brand" href="#top" data-testid="link-footer-brand">
                <span className="brand-mark">E&amp;S</span>
                <span className="brand-copy"><span className="brand-name">E&amp;S Motors</span><span className="brand-sub">Steering rack specialists</span></span>
              </a>
              <p className="footer-note">Focused expertise for electronic steering racks across selected Audi and Porsche vehicles.</p>
            </div>
            <div className="footer-nav">
              <a href="#expertise" data-testid="footer-link-expertise">Expertise</a>
              <a href="#coverage" data-testid="footer-link-coverage">Coverage</a>
              <a href="#request" data-testid="footer-link-request">Request help</a>
            </div>
          </div>
          <div className="footer-bottom"><span>© E&amp;S Motors Pty Ltd. We Are Available Across South Africa</span><span>Precision automotive engineering, plainly explained.</span></div>
        </div>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Router />
    </WouterRouter>
  );
}

export default App;