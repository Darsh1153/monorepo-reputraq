"use client";

import { useEffect, useRef } from "react";
import { brandConfig } from "@/lib/brand-config";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
  life: number;
  maxLife: number;
}

interface ParticleSystemProps {
  count?: number;
  className?: string;
  colors?: string[];
}

export function ParticleSystem({ 
  count = 50, 
  className = "",
  colors = [
    brandConfig.colorPalette.colors.vibrantSky.hex,
    brandConfig.colorPalette.colors.oceanDepth.hex,
    brandConfig.colorPalette.colors.charcoalCore.hex,
    "#8b5cf6",
    "#06b6d4"
  ]
}: ParticleSystemProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const initParticles = () => {
      const newParticles: Particle[] = [];
      
      for (let i = 0; i < count; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.5 + 0.1,
          life: 0,
          maxLife: Math.random() * 200 + 100
        });
      }
      
      particlesRef.current = newParticles;
    };

    initParticles();
  }, [count, colors]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.map(particle => {
        // Update position
        const newX = particle.x + particle.vx;
        const newY = particle.y + particle.vy;
        
        // Update life
        const newLife = particle.life + 1;
        
        // Reset particle if it's off screen or life is over
        if (newX < 0 || newX > canvas.width || newY < 0 || newY > canvas.height || newLife > particle.maxLife) {
          return {
            ...particle,
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            life: 0,
            opacity: Math.random() * 0.5 + 0.1
          };
        }

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity * (1 - newLife / particle.maxLife);
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(newX, newY, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        return {
          ...particle,
          x: newX,
          y: newY,
          life: newLife
        };
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 1 }}
    />
  );
}