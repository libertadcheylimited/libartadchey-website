/** Scoped motion for the About page. Respects prefers-reduced-motion via globals. */
export function AboutStyles() {
  return (
    <style>{`
      @keyframes about-fade-up {
        from {
          opacity: 0;
          transform: translateY(1rem);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .about-reveal {
        animation: about-fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
      }

      .about-reveal-delay-1 {
        animation-delay: 0.12s;
      }

      .about-reveal-delay-2 {
        animation-delay: 0.22s;
      }

      @media (prefers-reduced-motion: reduce) {
        .about-reveal,
        .about-reveal-delay-1,
        .about-reveal-delay-2 {
          animation: none;
        }
      }
    `}</style>
  );
}
