import { useEffect, useRef, useCallback } from 'react';

import solarImage from '../../assets/solar5.jpg';



export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const bg = hero.querySelector<HTMLElement>('.hero-bg-parallax');

    if (bg) {
      const y = window.scrollY;
      bg.style.transform = `translateY(${y * 0.3}px)`;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToContact = useCallback(() => {
    const contact = document.getElementById('contact');

    if (contact) {
      contact.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, []);

  const scrollToProjects = useCallback(() => {
    const projects = document.getElementById('projects');

    if (projects) {
      projects.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative xl:min-h-screen overflow-hidden bg-hero-gradient"
    >
      {/* BACKGROUND */}
      <div className="hero-bg-parallax absolute inset-0">

        <div className="absolute inset-0 bg-dot-pattern opacity-40" />

        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px]
          rounded-full bg-brand-green-light opacity-60 blur-3xl"
        />

        <div
          className="absolute -bottom-48 -left-24 w-[500px] h-[500px]
          rounded-full bg-brand-gold-light opacity-50 blur-3xl"
        />

      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-24 xl:px-28 pt-36 sm:pt-32 lg:pt-28 pb-20">
        <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-16 xl:gap-12 items-center">

          {/* LEFT */}
          <div className="w-full max-w-2xl xl:ml-6">

            <div
              className="animate-fade-up opacity-0-start animate-delay-100
              inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm
              border border-brand-green/20 px-4 py-2 rounded-full mb-7"
              style={{ animationFillMode: 'both' }}
            >
              <span className="w-2 h-2 rounded-full bg-brand-green" />

              <span className="text-brand-green text-xs tracking-widest uppercase font-semibold">
                Visakhapatnam · EPC Power Solutions
              </span>
            </div>

            {/* HEADING */}
            <h1
              className="animate-fade-up opacity-0-start animate-delay-200
              text-4xl md:text-5xl xl:text-7xl font-extrabold
              leading-[1.1] mb-6 text-text-primary"
              style={{ animationFillMode: 'both' }}
            >
              Powering India With{' '}

              <span className="text-brand-green relative inline-block">
                Clean Solar

                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 8 Q75 2 150 8 Q225 14 300 8"
                    stroke="#F5A623"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>

              {' '}Energy
            </h1>

            {/* SUBTITLE */}
            <p
              className="animate-fade-up opacity-0-start animate-delay-300
              text-lg text-text-muted mb-10 leading-relaxed max-w-xl"
              style={{ animationFillMode: 'both' }}
            >
              A team of passionate engineers delivering Turn-key EPC
              solar solutions from residential rooftops to
              multi-megawatt commercial installations.
            </p>

            {/* BUTTONS */}
            <div
              className="animate-fade-up opacity-0-start animate-delay-400
              flex flex-wrap gap-5 mb-16"
              style={{ animationFillMode: 'both' }}
            >
              <button
                onClick={scrollToContact}
                className="px-7 py-3.5 rounded-xl bg-brand-green
                text-white font-semibold shadow-md
                hover:shadow-xl hover:scale-105 transition-all"
              >
                Get Free Quote ✦
              </button>

              <button
                onClick={scrollToProjects}
                className="px-7 py-3.5 rounded-xl border border-gray-300
                font-semibold hover:bg-gray-100 transition-all"
              >
                View Projects →
              </button>
            </div>

            {/* STATS */}
<div
  className="animate-fade-up opacity-0-start animate-delay-500 mt-14"
  style={{ animationFillMode: 'both' }}
>
  <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">

    {[
      ['19+', 'Projects Completed'],
      ['16 MW', 'Installed Capacity'],
      ['22M+', 'kWh / Year'],
      ['25 yr', 'PPA Duration'],
    ].map(([value, label]) => (
      <div
        key={label}
        className="group rounded-3xl px-6 py-7
        transition-all duration-300 hover:-translate-y-1"
        style={{
          background: 'rgba(255,255,255,0.72)',
          border: '1px solid rgba(0,0,0,0.05)',
          backdropFilter: 'blur(14px)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        }}
      >
        <h3
          className="text-4xl font-extrabold
          text-brand-green mb-2"
        >
          {value}
        </h3>

        <p
          className="text-sm text-text-muted
          leading-relaxed"
        >
          {label}
        </p>

        <div
          className="mt-5 h-[3px] w-12 rounded-full
          bg-gradient-to-r from-brand-green to-brand-gold
          transition-all duration-300 group-hover:w-20"
        />
      </div>
    ))}

  </div>
</div>
</div> 
        {/* RIGHT — Premium Solar Banner */}
<div
  className="
  relative
  w-full

 max-w-[540px]
  

  h-auto
  sm:h-[620px]
  md:h-[620px]

  rounded-[28px]
  sm:rounded-[32px]

  overflow-hidden
  shadow-[0_25px_60px_rgba(0,0,0,0.28)]

  mx-auto
  "
>
 <div
    className="
    relative
    w-full
    h-full
    rounded-[32px]
    overflow-hidden
    shadow-[0_25px_60px_rgba(0,0,0,0.28)]
    "
  >

    {/* Background Image */}
    <img
      src={solarImage}
      alt="Solar Plant"
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Dark Overlay */}
    <div
      className="absolute inset-0"
      style={{
        background:
          'linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.82))',
      }}
    />

    {/* Glow */}
    <div
      className="absolute -top-24 left-1/2 -translate-x-1/2
      w-[320px] h-[320px] rounded-full blur-3xl"
      style={{
        background: 'rgba(255,180,0,0.16)',
      }}
    />

    {/* Content */}
    <div className="relative z-10 h-full flex flex-col justify-between p-5 sm:p-8">

      {/* TOP */}
      <div>

        <div
          className="inline-flex items-center gap-2
          bg-white/10 backdrop-blur-md
          border border-white/10
          rounded-full px-4 py-2 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-yellow-400" />

          <span className="text-xs tracking-[0.2em] uppercase text-white/80">
            Clean & Renewable Energy
          </span>
        </div>

        <h2
  className="
  text-[24px]
  sm:text-4xl
  xl:text-5xl

  font-extrabold
  leading-[1.05]
  text-white
  "
>
          POWERING A

          <span className="block text-yellow-400">
            SUSTAINABLE FUTURE
          </span>
        </h2>

        <p className="mt-3 text-[13px] sm:text-base text-white/75 leading-relaxed max-w-md">
          Sri Anu Infrastructure delivers reliable EPC solar
          solutions with innovation, engineering excellence
          and long-term sustainability.
        </p>

      </div>

      {/* FEATURE CARDS */}
      <div className="grid grid-cols-2 gap-3">
        {[
          ['⚡', 'Clean Energy'],
          ['🛠️', 'Turn-key EPC'],
          ['🛡️', 'Quality & Reliability'],
          ['👨‍💼', 'Expert Team'],
        ].map(([icon, title]) => (
          <div
            key={title}
            className="rounded-2xl p-2.5 sm:p-4
            bg-white/10 backdrop-blur-md
            border border-white/10
            hover:scale-[1.03]
            transition-all duration-300"
          >
            <div className="text-2xl mb-3">
              {icon}
            </div>

            <h3 className="text-white font-semibold text-xs sm:text-sm">
              {title}
            </h3>

            <p className="text-white/65 text-xs mt-1">
              Sustainable solar solutions.
            </p>
          </div>
        ))}

      </div>

    </div>
  </div>
</div>

        </div>
      </div>

{/* ── Scroll indicator ── */}
<div
  className="absolute bottom-2 left-1/2 -translate-x-1/2
  flex flex-col items-center gap-2 animate-bounce z-30"
>
  <span className="font-heading font-600 text-text-muted text-2xs tracking-widest uppercase">
    Scroll
  </span>

  <div className="w-px h-10 bg-gradient-to-b from-brand-green to-transparent" />
</div>

</section>
);
}