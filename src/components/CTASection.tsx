"use client";

import { useRef, useEffect } from "react";
import Container from "@/components/global/Container";
import { Button } from "@/components/ui/Button";
import Heading from "@/components/shared/Heading";

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const btnWrapperRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -999, y: -999 });
  const raf = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = section.offsetWidth;
      canvas.height = section.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const r = section.getBoundingClientRect();
      mouse.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    window.addEventListener("mousemove", onMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const btn = btnWrapperRef.current;
      if (!btn) { raf.current = requestAnimationFrame(draw); return; }

      const sr = section.getBoundingClientRect();
      const br = btn.getBoundingClientRect();
      const cx = br.left - sr.left + br.width / 2;
      const cy = br.top - sr.top + br.height / 2;

      const mx = mouse.current.x;
      const my = mouse.current.y;
      const dx = cx - mx;
      const dy = cy - my;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 20) { raf.current = requestAnimationFrame(draw); return; }

      const angle = Math.atan2(dy, dx);
      const pad = 40;
      const ox = mx + Math.cos(angle) * pad;
      const oy = my + Math.sin(angle) * pad;
      const ex = cx - Math.cos(angle) * (br.height / 2 + 4);
      const ey = cy - Math.sin(angle) * (br.height / 2 + 4);

      ctx.save();
      ctx.strokeStyle = "#A51C30";
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 6]);
      ctx.lineDashOffset = 0;
      ctx.beginPath();
      ctx.moveTo(ox, oy);
      ctx.lineTo(ex, ey);
      ctx.stroke();

      const hl = 10;
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.moveTo(ex, ey);
      ctx.lineTo(ex - hl * Math.cos(angle - Math.PI / 6), ey - hl * Math.sin(angle - Math.PI / 6));
      ctx.moveTo(ex, ey);
      ctx.lineTo(ex - hl * Math.cos(angle + Math.PI / 6), ey - hl * Math.sin(angle + Math.PI / 6));
      ctx.stroke();
      ctx.restore();

      raf.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative px-4 xl:px-10 overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10"
      />
      <Container className="py-16 md:py-28 relative z-20">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-x-16">
          <div>
            <Heading tag="h2" size="xxxl" className="max-w-[40rem] text-balance leading-tight text-navy">
              Ready to Start Your Educational Journey?
            </Heading>
            <p className="mt-6 md:mt-8 text-body-md text-balance text-on-surface-variant max-w-xl">
              Take the first step towards your study abroad dream. Schedule a free
              consultation with our expert counselors today.
            </p>
          </div>
          <div ref={btnWrapperRef} className="mt-10 lg:mt-0">
            <Button href="/contact" variant="primary" size="lg">
              Get Free Consultation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
