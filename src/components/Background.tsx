"use client";

import React, { useEffect, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function Background() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        // Resize handling
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;

            constructor() {
                this.x = Math.random() * (canvas?.width || window.innerWidth);
                this.y = Math.random() * (canvas?.height || window.innerHeight);
                this.size = Math.random() * 2;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.5;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > (canvas?.width || 0)) this.x = 0;
                if (this.x < 0) this.x = (canvas?.width || 0);
                if (this.y > (canvas?.height || 0)) this.y = 0;
                if (this.y < 0) this.y = (canvas?.height || 0);
            }

            draw(color: string) {
                if (!ctx) return;
                ctx.fillStyle = color;
                ctx.globalAlpha = this.opacity;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }

        const initParticles = () => {
            particles = [];
            const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 10000);
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const getThemeColor = () => {
            switch (theme) {
                case 'blue': return 'rgba(0, 240, 255, 0.8)';
                case 'green': return 'rgba(0, 255, 157, 0.8)';
                case 'red': return 'rgba(255, 0, 85, 0.8)';
                default: return 'rgba(255, 255, 255, 0.3)'; // Black theme particles
            }
        };

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const color = getThemeColor();

            particles.forEach(particle => {
                particle.update();
                particle.draw(color);
            });

            // Draw grid lines optionally for futuristic effect? Maybe too busy.
            // Let's stick to particles that change color.

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]);

    // CSS Mesh Gradient Background as base
    const getGradient = () => {
        switch (theme) {
            case 'blue': return 'radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.05) 0%, rgba(5, 5, 5, 0) 50%)';
            case 'green': return 'radial-gradient(circle at 50% 50%, rgba(0, 255, 157, 0.05) 0%, rgba(5, 5, 5, 0) 50%)';
            case 'red': return 'radial-gradient(circle at 50% 50%, rgba(255, 0, 85, 0.05) 0%, rgba(5, 5, 5, 0) 50%)';
            default: return 'none';
        }
    };

    return (
        <div className="fixed inset-0 -z-10 pointer-events-none transition-all duration-1000" style={{ background: getGradient() }}>
            <canvas ref={canvasRef} className="absolute inset-0 block" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-repeat mask-image-gradient"></div>
        </div>
    );
}
