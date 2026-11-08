import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, ArrowUpRight, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const googleReviews = [
  {
    id: 1,
    author: 'Rebecca Brockob',
    role: 'Regelmäßige Gartenpflege',
    text: 'Sehr freundlich, unkompliziert und zuverlässig. Wir nehmen die Dienste der Firma Seremet regelmäßig hauptsächlich für Gartenpflege in Anspruch und sind immer sehr zufrieden. Vielen herzlichen Dank!',
    rating: 5,
    date: 'Vor 2 Monaten',
  },
  {
    id: 2,
    author: 'Eve S.',
    role: 'Handwerk & Küchenabbau',
    text: 'Die Seremet Dienstleistungen GmbH hat bei uns eine Küche abgebaut. Die Arbeiten wurden sehr gut und zuverlässig ausgeführt, die Mitarbeiter waren sehr nett und haben auch noch Tips gegeben. Vielen Dank an Herrn Seremet für diesen kurzfristigen Einsatz. Ich kann die Firma nur weiterempfehlen.',
    rating: 5,
    date: 'Vor 4 Monaten',
  },
  {
    id: 3,
    author: 'Myriam Thiesse',
    role: 'Dienstleistung & Montage',
    text: 'Würde die Firma Seremet jedem weiterempfehlen. Sehr nette freundliche Mitarbeiter, ordentliche schnelle Arbeit und super Preis. Besser hätte man den Job nicht machen können. Nochmal vielen Dank an euch alle.',
    rating: 5,
    date: 'Vor 5 Monaten',
  },
  {
    id: 4,
    author: 'Birgit ADB',
    role: 'Haus- & Objektservice',
    text: 'Sehr gute Arbeit. Zuverlässige Mitarbeiter. Pünktlich, ordentlich und fleißig. Ich würde die Firma Seremet jederzeit wieder beauftragen.',
    rating: 5,
    date: 'Vor 6 Monaten',
  },
  {
    id: 5,
    author: '315 Er',
    role: 'Kunde aus Nienburg',
    text: 'Wer gerne mit Vollprofis arbeitet ist hier genau richtig, kann ich guten Gewissens weiterempfehlen!',
    rating: 5,
    date: 'Vor 8 Monaten',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const count = googleReviews.length;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth Auto-Play (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % count);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, count]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % count);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + count) % count);
  };

  const getCardTransform = (index) => {
    let diff = (index - currentIndex) % count;
    if (diff > count / 2) diff -= count;
    if (diff < -count / 2) diff += count;

    const isCenter = diff === 0;
    const isImmediateRight = diff === 1;
    const isImmediateLeft = diff === -1;

    let x = '0%';
    let rotateY = 0;
    let scale = 1;
    let zIndex = 30;
    let opacity = 1;

    if (isMobile) {
      if (isCenter) {
        x = '0%';
        rotateY = 0;
        scale = 1;
        zIndex = 30;
        opacity = 1;
      } else if (isImmediateRight) {
        x = '88%';
        rotateY = -22;
        scale = 0.82;
        zIndex = 20;
        opacity = 0.35;
      } else if (isImmediateLeft) {
        x = '-88%';
        rotateY = 22;
        scale = 0.82;
        zIndex = 20;
        opacity = 0.35;
      } else {
        x = diff > 0 ? '140%' : '-140%';
        rotateY = diff > 0 ? -40 : 40;
        scale = 0.65;
        zIndex = 10;
        opacity = 0;
      }
    } else {
      if (isCenter) {
        x = '0%';
        rotateY = 0;
        scale = 1;
        zIndex = 30;
        opacity = 1;
      } else if (isImmediateRight) {
        x = '66%';
        rotateY = -28;
        scale = 0.86;
        zIndex = 20;
        opacity = 0.65;
      } else if (isImmediateLeft) {
        x = '-66%';
        rotateY = 28;
        scale = 0.86;
        zIndex = 20;
        opacity = 0.65;
      } else if (diff === 2) {
        x = '115%';
        rotateY = -48;
        scale = 0.72;
        zIndex = 10;
        opacity = 0.2;
      } else if (diff === -2) {
        x = '-115%';
        rotateY = 48;
        scale = 0.72;
        zIndex = 10;
        opacity = 0.2;
      }
    }

    return { x, rotateY, scale, zIndex, opacity, isCenter };
  };

  return (
    <section id="bewertungen" className="py-20 sm:py-28 bg-white border-y border-neutral-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google Trust Box */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-16">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-bold tracking-widest text-brand-800 uppercase mb-3">
              Echtes Feedback aus Nienburg
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-[1.15]">
              Was unsere Kunden auf Google schreiben.
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 mt-3">
              Transparenz und Verlässlichkeit schaffen langfristiges Vertrauen. Hier lesen Sie ungefilterte Kundenstimmen aus unserem offiziellen Google Unternehmensprofil.
            </p>
          </div>

          {/* Google Review Action Card */}
          <div className="bg-[#FBF9F5] p-5 sm:p-6 rounded-2xl border border-neutral-200/90 shadow-subtle flex flex-col sm:flex-row items-center gap-5 shrink-0">
            <div className="flex items-center gap-3">
              {/* Google G Icon */}
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-neutral-200 shadow-2xs">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-black text-neutral-900">4,7</span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <div className="text-xs text-neutral-500 font-medium">
                  Google Unternehmensprofil
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <a
                href="https://search.google.com/local/writereview?placeid=ChIJvyaWXfOLsEcReyS9ILdMqjs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-700 hover:bg-brand-800 text-white text-xs sm:text-sm font-bold shadow-xs transition-colors text-center"
              >
                <span>Bewertung schreiben</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="https://share.google/1hTez8oTYnUJ1m2pu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white hover:bg-neutral-50 text-neutral-800 text-xs sm:text-sm font-semibold border border-neutral-300 transition-colors text-center"
              >
                <span>Alle ansehen</span>
              </a>
            </div>
          </div>
        </div>

        {/* 3D PERSPECTIVE ROUNDELL STAGE */}
        <div
          className="relative py-8 sm:py-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* 3D Perspective Viewport */}
          <div
            className="relative h-[360px] sm:h-[380px] w-full max-w-5xl mx-auto flex items-center justify-center"
            style={{ perspective: '1200px' }}
          >
            {googleReviews.map((rev, index) => {
              const { x, rotateY, scale, zIndex, opacity, isCenter } = getCardTransform(index);

              return (
                <motion.div
                  key={rev.id}
                  className="absolute top-0 bottom-0 flex items-center justify-center w-full max-w-[320px] sm:max-w-[460px] md:max-w-[500px]"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                  animate={{
                    x,
                    rotateY,
                    scale,
                    opacity,
                    zIndex,
                  }}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={() => {
                    if (!isCenter) setCurrentIndex(index);
                  }}
                >
                  <div
                    className={`w-full h-full rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                      isCenter
                        ? 'bg-white border-2 border-emerald-600/30 shadow-[0_20px_50px_rgba(0,152,70,0.12),0_10px_25px_rgba(0,0,0,0.06)] ring-1 ring-emerald-500/10'
                        : 'bg-[#FBF9F5] border border-neutral-200/90 shadow-md cursor-pointer hover:border-emerald-600/40'
                    }`}
                  >
                    <div>
                      {/* Top Row: Stars + Google Badge */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="flex text-amber-400 gap-0.5">
                          {[...Array(rev.rating)].map((_, s) => (
                            <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[11px] font-semibold text-emerald-800">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          Verifizierte Google-Bewertung
                        </span>
                      </div>

                      {/* Quote Symbol */}
                      <Quote className="w-8 h-8 text-emerald-600/20 mb-2 transform -scale-x-100" />

                      {/* Review Text */}
                      <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-sans italic line-clamp-5">
                        „{rev.text}“
                      </p>
                    </div>

                    {/* Author Footer */}
                    <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-3 mt-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                          {rev.author.charAt(0)}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-neutral-900 flex items-center gap-1.5">
                            <span>{rev.author}</span>
                          </div>
                          <div className="text-xs text-neutral-500">{rev.role}</div>
                        </div>
                      </div>

                      <span className="text-[11px] text-neutral-400 font-medium shrink-0">
                        {rev.date}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Interactive Controls: Left/Right Arrows & Indicators */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              aria-label="Vorherige Bewertung"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-brand-700 hover:text-white border border-neutral-200 shadow-md flex items-center justify-center text-neutral-700 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {googleReviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Gehe zu Bewertung ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === idx
                      ? 'w-7 sm:w-8 h-2.5 bg-emerald-600'
                      : 'w-2.5 h-2.5 bg-neutral-300 hover:bg-neutral-400'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              aria-label="Nächste Bewertung"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-brand-700 hover:text-white border border-neutral-200 shadow-md flex items-center justify-center text-neutral-700 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
