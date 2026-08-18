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

const vehicleDetails = {
  A4: {
    title: 'Audi A4',
    note: 'Audi platform',
    generations: 'B8 (8K) / B9 (8W)',
    rackInfo:
      'Electronic power steering rack. Exact compatibility must be confirmed from the rack label, vehicle year, drivetrain and VIN.',
    symptoms: [
      'Steering warning light',
      'Heavy or inconsistent steering',
      'Clunking or knocking while turning',
    ],
    options: [
      'Diagnostic support',
      'Rack repair assessment',
      'Replacement rack sourcing',
    ],
  },
  A5: {
    title: 'Audi A5',
    note: 'Audi platform',
    generations: '8T / 8F / F5',
    rackInfo:
      'Electronic power steering rack. Exact compatibility must be confirmed from the rack label, vehicle year, drivetrain and VIN.',
    symptoms: [
      'Steering assistance warning',
      'Uneven steering feel',
      'Noise or play from the steering system',
    ],
    options: [
      'Diagnostic support',
      'Rack repair assessment',
      'Replacement rack sourcing',
    ],
  },
  A6: {
    title: 'Audi A6',
    note: 'Audi platform',
    generations: 'C7 (4G) / C8 (4A)',
    rackInfo:
      'Electronic power steering rack. Exact compatibility must be confirmed from the rack label, vehicle year, drivetrain and VIN.',
    symptoms: [
      'Electronic steering warning',
      'Heavy steering or reduced assistance',
      'Vehicle wandering or poor steering response',
    ],
    options: [
      'Diagnostic support',
      'Rack repair assessment',
      'Replacement rack sourcing',
    ],
  },
  A7: {
    title: 'Audi A7',
    note: 'Audi platform',
    generations: '4G / 4K',
    rackInfo:
      'Electronic power steering rack. Exact compatibility must be confirmed from the rack label, vehicle year, drivetrain and VIN.',
    symptoms: [
      'Steering system warning',
      'Intermittent loss of assistance',
      'Clunking, knocking or unusual steering noise',
    ],
    options: [
      'Diagnostic support',
      'Rack repair assessment',
      'Replacement rack sourcing',
    ],
  },
  A8: {
    title: 'Audi A8',
    note: 'Audi platform',
    generations: 'D4 (4H) / D5 (4N)',
    rackInfo:
      'Electronic power steering rack. Exact compatibility must be confirmed from the rack label, vehicle year, drivetrain and VIN.',
    symptoms: [
      'Steering assistance warning',
      'Heavy or delayed steering response',
      'Steering instability or unusual feedback',
    ],
    options: [
      'Diagnostic support',
      'Rack repair assessment',
      'Replacement rack sourcing',
    ],
  },
  Q5: {
    title: 'Audi Q5',
    note: 'Audi platform',
    generations: '8R / FY',
    rackInfo:
      'Electronic power steering rack. Exact compatibility must be confirmed from the rack label, vehicle year, drivetrain and VIN.',
    symptoms: [
      'Electronic steering warning',
      'Heavy steering at low speed',
      'Noise or vibration while turning',
    ],
    options: [
      'Diagnostic support',
      'Rack repair assessment',
      'Replacement rack sourcing',
    ],
  },
  Q7: {
    title: 'Audi Q7',
    note: 'Audi platform',
    generations: '4M and selected variants',
    rackInfo:
      'Electronic power steering rack. Exact compatibility must be confirmed from the rack label, vehicle year, drivetrain and VIN.',
    symptoms: [
      'Steering system warning',
      'Reduced or intermittent steering assistance',
      'Vehicle pulling or wandering',
    ],
    options: [
      'Diagnostic support',
      'Rack repair assessment',
      'Replacement rack sourcing',
    ],
  },
  Porsche: {
    title: 'Porsche',
    note: 'Selected models',
    generations: 'Selected Macan, Cayenne and Panamera generations',
    rackInfo:
      'Electronic steering rack support is available for selected Porsche applications. Exact compatibility must be confirmed from the rack label, vehicle details and VIN.',
    symptoms: [
      'Power steering warning',
      'Heavy or inconsistent steering',
      'Unusual noises or steering play',
    ],
    options: [
      'Diagnostic support',
      'Rack repair assessment',
      'Replacement rack sourcing',
    ],
  },
} as const;

const models = Object.keys(vehicleDetails) as Array<keyof typeof vehicleDetails>;
const WHATSAPP_NUMBER = '27739502924';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hello E&S Motors, I would like help with an electronic steering rack.',
)}`;
const PUBLIC_PHONE = '+27 73 950 2924';
const PHONE_LINK = 'tel:+27739502924';
const PUBLIC_EMAIL = 'Sakhilembanjwa049@gmail.com';
const SERVICE_AREA = 'Nationwide across South Africa';
const BUSINESS_HOURS = '08:00–18:00';
const FACEBOOK_LINK = 'https://www.facebook.com/share/1ERqT4dgj3/';
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
const [selectedModel, setSelectedModel] =
  useState<keyof typeof vehicleDetails>('A4');
const [requestVehicle, setRequestVehicle] = useState('');
const selectedVehicle = vehicleDetails[selectedModel];

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

const submitForm = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const vehicle = String(formData.get('vehicle') ?? '').trim();
  const registration = String(formData.get('registration') ?? '').trim();
  const route = String(formData.get('route') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();

  const whatsappMessage = [
    'Hello E&S Motors, I need help with an electronic steering rack.',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Vehicle: ${vehicle}`,
    `Registration / year: ${registration || 'Not provided'}`,
    `Request type: ${route || 'Not specified'}`,
    '',
    'What is happening:',
    message || 'No additional symptoms provided.',
  ].join('\n');

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

  setSubmitted(true);
form.reset();
setRequestVehicle('');
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
          <a
  className="nav-cta"
  href={WHATSAPP_LINK}
  target="_blank"
  rel="noreferrer"
  data-testid="link-whatsapp"
>
  WhatsApp us <ArrowRight size={15} />
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
              <>
  <a
    className="button-primary"
    href="#request"
    onClick={() => setMenuOpen(false)}
    data-testid="mobile-link-request"
  >
    Request help <ArrowRight size={15} />
  </a>
  <a
    className="button-ghost"
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noreferrer"
    onClick={() => setMenuOpen(false)}
    data-testid="mobile-link-whatsapp"
  >
    Chat on WhatsApp <ArrowRight size={15} />
  </a>
</>
            </div>
          )}
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="container-wide hero-content">
            <div className="eyebrow eyebrow-light reveal">Electronic steering </div>
            <h1 className="display reveal reveal-delay-1" id="hero-title">Steering<br /><span>sorted.</span></h1>
            <p className="hero-lead reveal reveal-delay-2">Specialist supply, diagnostics and repair for electronic steering racks in selected German vehicles. Precise work for the people who know the difference.</p>
            <div className="hero-actions reveal reveal-delay-3">
              <a className="button-primary" href="#request" data-testid="button-hero-request">Tell us what’s wrong <ArrowDownRight size={16} /></a>
              <a className="button-ghost" href="#coverage" data-testid="button-hero-coverage">Check vehicle coverage</a>
   <a
  className="button-ghost"
  href={WHATSAPP_LINK}
  target="_blank"
  rel="noreferrer"
  data-testid="button-hero-whatsapp"
>
  Chat on WhatsApp <ArrowRight size={15} />
</a>           
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
              <div className="eyebrow">/ The specialist difference</div>
              <h2 className="display">Keep the<br />signal clear.</h2>
              <div className="blue-rule" />
            </div>
            <div className="reveal reveal-delay-1">
              <p className="intro-copy">Electronic steering faults rarely announce themselves with a simple answer. A warning light can point to the rack, its control unit, the motor, a sensor — or the conversation between them.</p>
              <p className="intro-copy"><strong>E&amp;S Motors focuses on that conversation.</strong> We help identify the right route before a costly part is fitted, then supply or repair the steering rack with the care your vehicles demand.</p>
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
        <section className="section-pad workshop-gallery" id="workshop">
          <div className="container-wide">
            <div className="gallery-header reveal">
              <div>
                <div className="eyebrow">/ In the workshop</div>
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

        <section className="section-pad dark-section process" id="process">
          <div className="container-wide">
            <div className="process-header reveal">
              <div>
                <div className="eyebrow">/ The route to resolution</div>
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
                <div className="eyebrow">/ Vehicle coverage</div>
                <h2 className="display">Built around<br />the platform.</h2>
              </div>
              <p>A focused range means deeper familiarity with the systems, symptoms and steering racks found across these Audi and Porsche vehicles.</p>
            </div>
         <div
  className="model-map reveal reveal-delay-1"
  role="tablist"
  aria-label="Select a vehicle category"
>
  {models.map((model) => {
    const vehicle = vehicleDetails[model];
    const isSelected = selectedModel === model;

    return (
      <button
        className={`model-cell ${isSelected ? 'is-selected' : ''}`}
        key={model}
        type="button"
        role="tab"
        aria-selected={isSelected}
        aria-controls="vehicle-coverage-details"
        data-testid={`card-coverage-${model.toLowerCase()}`}
        onClick={() => setSelectedModel(model)}
      >
        <div className="model-name">{model}</div>
        <div className="model-note">{vehicle.note}</div>
      </button>
    );
  })}
</div>

<div
  className="vehicle-detail"
  id="vehicle-coverage-details"
  role="tabpanel"
  aria-live="polite"
>
  <div className="vehicle-detail-heading">
    <div>
      <div className="eyebrow eyebrow-light">/ Selected coverage</div>
      <h3>{selectedVehicle.title}</h3>
    </div>
    <span className="vehicle-detail-status">{selectedVehicle.note}</span>
  </div>

  <div className="vehicle-detail-grid">
    <div className="vehicle-detail-block">
      <div className="vehicle-detail-label">Model generations</div>
      <p>{selectedVehicle.generations}</p>
    </div>

    <div className="vehicle-detail-block">
      <div className="vehicle-detail-label">Compatible rack information</div>
      <p>{selectedVehicle.rackInfo}</p>
    </div>

    <div className="vehicle-detail-block">
      <div className="vehicle-detail-label">Common symptoms</div>
      <ul>
        {selectedVehicle.symptoms.map((symptom) => (
          <li key={symptom}>{symptom}</li>
        ))}
      </ul>
    </div>

    <div className="vehicle-detail-block">
      <div className="vehicle-detail-label">Repair / replacement options</div>
      <ul>
        {selectedVehicle.options.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ul>
    </div>
  </div>

  <div className="vehicle-detail-actions">
    <button
      className="button-primary"
      type="button"
      onClick={() => {
        setRequestVehicle(selectedVehicle.title);
        scrollTo('request');
      }}
      data-testid="button-vehicle-assistance"
    >
      Request assistance <ArrowRight size={15} />
    </button>

    <span>
      Exact fitment is confirmed before repair or supply.
    </span>
  </div>
</div>
            <div className="coverage-foot reveal reveal-delay-2">
              <span>Not sure if your vehicle is covered?</span>
              <a href="#request" data-testid="link-coverage-request">Send the details and we’ll help you work it out <ArrowRight size={14} /></a>
            </div>
          </div>
        </section>

        
        <section className="split-section" aria-label="Repair and replacement">
          <div className="split-image">
            <div className="image-caption">The rack is the message / We read it carefully</div>
          </div>
          <div className="split-copy reveal">
            <div className="eyebrow">/ Usefull Tip</div>
            <h2>Signs of a<br />bad rack.</h2>
            <p>A steering rack is the core part of a car steering system. It changes the turning motion of your steering wheel into the side-to-side movement that turns your front wheels. Look out for the following signs which require immediate repair / service: </p>
          <ul className="detail-list">
  <li>
    <span className="warning-icon">!</span>
    <strong>Loose wheel:</strong> A dead spot where the car does not turn right away.
  </li>

  <li>
    <span className="warning-icon">!</span>
    <strong>Hard turning:</strong> The wheel feels heavy or tight.
  </li>

  <li>
    <span className="warning-icon">!</span>
    <strong>Fluid leaks:</strong> Puddles or wet spots from broken seals.
  </li>

  <li>
    <span className="warning-icon">!</span>
    <strong>Car wandering:</strong> The vehicle drifts or is hard to keep straight in a lane.
  </li>

  <li>
    <span className="warning-icon">!</span>
    <strong>Noises:</strong> Grinding, clunking, or knocking sounds when turning.
  </li>
</ul>
          </div>
        </section>

        <section className="section-pad contact" id="request">
          <div className="container-wide contact-grid">
            <div className="contact-intro reveal">
              <div className="eyebrow">/ Start a conversation</div>
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
                  <input
  id="vehicle"
  name="vehicle"
  required
  value={requestVehicle}
  onChange={(event) => setRequestVehicle(event.target.value)}
  placeholder="For example, Audi A6"
  data-testid="input-vehicle"
/>
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
             {submitted && (
  <div className="form-status" role="status" data-testid="status-form-success">
    <CircleCheck size={17} />
    WhatsApp should now be open with your enquiry details ready to send.
  </div>
)}
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
              <p className="footer-note">
  Focused expertise for electronic steering racks across selected Audi and Porsche vehicles.
</p>

<div className="footer-contact" aria-label="E&S Motors contact details">
  <a href={PHONE_LINK}>{PUBLIC_PHONE}</a>
  <a href={`mailto:${PUBLIC_EMAIL}`}>{PUBLIC_EMAIL}</a>
  <span>{SERVICE_AREA}</span>
  <span>Hours: {BUSINESS_HOURS}</span>
</div>
            </div>
            <div className="footer-nav">
  <a href="#expertise" data-testid="footer-link-expertise">Expertise</a>
  <a href="#coverage" data-testid="footer-link-coverage">Coverage</a>
  <a href="#request" data-testid="footer-link-request">Request help</a>
  <a
    href={FACEBOOK_LINK}
    target="_blank"
    rel="noopener noreferrer"
    data-testid="footer-link-facebook"
  >
    Facebook <ArrowRight size={14} />
  </a>
</div>
          </div>
          <div className="footer-bottom"><span>© E&amp;S Motors Pty Ltd. {SERVICE_AREA}.</span></div>
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