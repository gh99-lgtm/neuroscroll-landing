'use client';

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';

export default function HeroParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  // Adjustable values for particle behavior
  const particleConfig: ISourceOptions = {
    fullScreen: false,
    fpsLimit: 60,
    particles: {
      number: {
        value: 80, // ADJUST: particle count (lower = better performance)
        density: {
          enable: true,
          width: 800,
          height: 800,
        },
      },
      color: {
        value: ['#22d3ee', '#38bdf8', '#60a5fa'], // cyan/blue brand colors
      },
      opacity: {
        value: { min: 0.2, max: 0.5 }, // ADJUST: particle opacity
      },
      size: {
        value: { min: 2, max: 5 }, // ADJUST: particle size
      },
      move: {
        enable: true,
        speed: 1.2, // ADJUST: movement speed (lower = calmer)
        direction: 'none',
        random: true,
        straight: false,
        outModes: {
          default: 'out',
        },
      },
      links: {
        enable: true,
        distance: 140, // ADJUST: max distance for neuron connections
        color: '#38bdf8',
        opacity: 0.25, // ADJUST: line opacity (keep low for subtlety)
        width: 1.5,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: false, // disabled for calm effect
        },
        onClick: {
          enable: false,
        },
      },
    },
    detectRetina: true,
    responsive: [
      {
        maxWidth: 768,
        options: {
          particles: {
            number: {
              value: 40, // ADJUST: reduced count on mobile
            },
            links: {
              distance: 100,
            },
          },
        },
      },
    ],
  };

  if (!init) return null;

  return (
    <Particles
      id="hero-particles"
      className="absolute inset-0 w-full h-full"
      options={particleConfig}
    />
  );
}
