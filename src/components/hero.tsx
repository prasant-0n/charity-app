import React, { useEffect, useRef, useState } from 'react';
import DonateButton from './donateButton';
import { TextGenerateEffect } from './ui/text-generate-effect';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      },
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  return (
    <section className="container mx-auto px-4 py-12 md:py-24" ref={heroRef}>
      <div
        className={`flex flex-col items-center text-center transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <TextGenerateEffect
          className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight md:leading-[1.2] text-zinc-900 max-w-6xl mx-auto "
          words={'Transforming Lives Through Hope and Education'}
        ></TextGenerateEffect>
        <p className="mt-6 text-base md:text-lg font-medium leading-relaxed text-neutral-600 max-w-3xl mx-auto">
          Welcome to ForHelp, where we believe in the boundless potential of
          every child. Our mission is to create a world where underprivileged
          children are given the wings to soar high and achieve their dreams.
        </p>
        <DonateButton />
      </div>
    </section>
  );
};

export default Hero;
