import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-metallic.jpg';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title letters
      if (titleRef.current) {
        const letters = titleRef.current.querySelectorAll('.letter');
        gsap.from(letters, {
          opacity: 0,
          y: 100,
          rotationX: -90,
          stagger: 0.05,
          duration: 1.2,
          ease: 'power4.out',
          delay: 0.3,
        });
      }

      // Animate subtitle
      if (subtitleRef.current) {
        gsap.from(subtitleRef.current, {
          opacity: 0,
          y: 30,
          duration: 1,
          delay: 1.5,
          ease: 'power3.out',
        });
      }

      // Pulse scroll indicator
      if (scrollIndicatorRef.current) {
        gsap.to(scrollIndicatorRef.current, {
          y: 10,
          opacity: 0.6,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className="letter inline-block">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Metallic luxury texture"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void-black/60 via-void-black/40 to-void-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1
          ref={titleRef}
          className="mb-6 font-display text-6xl font-bold tracking-tight text-primary md:text-8xl lg:text-9xl"
        >
          {splitText('LOHAM')}
        </h1>
        
        <p
          ref={subtitleRef}
          className="max-w-2xl font-body text-lg tracking-[0.2em] text-metallic-chrome md:text-xl"
        >
          simplifying solutions for architectural metals
        </p>

        {/* Scroll Indicator */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-12 flex flex-col items-center gap-2"
        >
          <span className="font-body text-xs tracking-widest text-metallic-aluminum">
            SCROLL
          </span>
          <ChevronDown className="h-6 w-6 text-metallic-chrome" />
        </div>
      </div>

      {/* Metallic Gradient Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
