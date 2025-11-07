import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutImage from '@/assets/about-craft.jpg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContainer = scrollContainerRef.current;

    if (!section || !scrollContainer) return;

    const ctx = gsap.context(() => {
      // Horizontal scroll animation
      const scrollWidth = scrollContainer.scrollWidth - window.innerWidth;

      gsap.to(scrollContainer, {
        x: -scrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          end: () => `+=${scrollWidth}`,
          anticipatePin: 1,
        },
      });

      // Fade in text blocks as they come into view
      const textBlocks = scrollContainer.querySelectorAll('.story-block');
      textBlocks.forEach((block) => {
        gsap.from(block, {
          opacity: 0,
          x: 100,
          scrollTrigger: {
            trigger: block,
            containerAnimation: gsap.getById('horizontal'),
            start: 'left right',
            end: 'center center',
            scrub: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const stories = [
    {
      title: 'Heritage',
      text: 'Born from the intersection of traditional craftsmanship and contemporary design philosophy, we honor the past while forging the future.',
    },
    {
      title: 'Philosophy',
      text: 'Every creation is a deliberate act. We believe in the power of restraint, the elegance of precision, and the poetry of negative space.',
    },
    {
      title: 'Craftsmanship',
      text: 'Our atelier is where time slows down. Each piece undergoes meticulous scrutiny, shaped by hands that understand the language of materials.',
    },
  ];

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-deep-black">
      <div ref={scrollContainerRef} className="flex h-full" id="horizontal">
        {/* Opening Scene */}
        <div className="flex h-full min-w-screen items-center justify-center px-12 md:px-24">
          <div className="max-w-2xl">
            <h2 className="mb-8 font-display text-5xl font-bold text-primary md:text-7xl">
              The Story
            </h2>
            <p className="font-body text-lg leading-relaxed text-metallic-aluminum md:text-xl">
              Where artistry transcends utility
            </p>
          </div>
        </div>

        {/* Image Panel */}
        <div className="relative h-full min-w-screen">
          <img
            src={aboutImage}
            alt="Artisan craftsmanship"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-black via-transparent to-deep-black" />
        </div>

        {/* Story Blocks */}
        {stories.map((story, index) => (
          <div
            key={index}
            className="story-block flex h-full min-w-screen items-center justify-center px-12 md:px-24"
          >
            <div className="max-w-xl">
              <div className="mb-6 h-px w-24 bg-gradient-metallic" />
              <h3 className="mb-6 font-display text-4xl font-semibold text-primary md:text-6xl">
                {story.title}
              </h3>
              <p className="font-body text-base leading-relaxed text-metallic-aluminum md:text-lg">
                {story.text}
              </p>
            </div>
          </div>
        ))}

        {/* Closing */}
        <div className="flex h-full min-w-screen items-center justify-center px-12">
          <p className="max-w-md text-center font-display text-2xl italic text-metallic-chrome md:text-3xl">
            "Design is not what it looks like. Design is how it works."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
