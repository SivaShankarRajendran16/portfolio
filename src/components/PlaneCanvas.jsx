
import { useEffect, useRef } from "react";

export default function PlaneCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const TRAIL = 110;

    let mouse = { x: 0, y: 0 };

    function resize() {
      const hero = canvas.parentElement;
      if (!hero) return;

      canvas.width = hero.offsetWidth;
      canvas.height = hero.offsetHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    window.addEventListener("mousemove", (e) => {
      mouse.x = (e.clientX / canvas.width - 0.5) * 30;
      mouse.y = (e.clientY / canvas.height - 0.5) * 30;
    });

    const W = () => canvas.width;
    const H = () => canvas.height;

    function spawn(edge) {
      const drift = (Math.random() - 0.5) * 0.7;

      let x, y, angle;

      if (edge === 0) {
        x = Math.random() * W();
        y = -40;
        angle = Math.PI / 2 + drift;
      } else if (edge === 1) {
        x = W() + 40;
        y = Math.random() * H();
        angle = Math.PI + drift;
      } else if (edge === 2) {
        x = Math.random() * W();
        y = H() + 40;
        angle = -Math.PI / 2 + drift;
      } else {
        x = -40;
        y = Math.random() * H();
        angle = drift;
      }

      const hue = Math.random() < 0.6 ? 0 : 210;

      return {
        x,
        y,
        angle,
        edge,
        speed: 1.4 + Math.random() * 1.3,
        size: 12 + Math.random() * 6,
        trail: [],
        hue,
        wobble: Math.random() * 100,
        wobbleSpeed: 0.008 + Math.random() * 0.01,
      };
    }

    const planes = [spawn(0), spawn(1), spawn(3)];

    function drawPlane(x, y, angle, size, hue) {
      ctx.save();

      ctx.translate(x, y);
      ctx.rotate(angle + Math.PI / 2);

      const s = size / 12;

      const c1 = hue === 0 ? "#cc0000" : "#1a6aff";
      const c2 = hue === 0 ? "#ff3333" : "#4a8dff";
      const c3 = hue === 0 ? "#880000" : "#0044cc";

      ctx.shadowColor =
        hue === 0 ? "rgba(255,0,0,0.4)" : "rgba(80,140,255,0.4)";
      ctx.shadowBlur = 10;

      const body = ctx.createLinearGradient(0, -s * 13, 0, s * 12);
      body.addColorStop(0, c1);
      body.addColorStop(0.5, c2);
      body.addColorStop(1, c3);

      ctx.fillStyle = body;

      ctx.beginPath();
      ctx.moveTo(0, -s * 13);
      ctx.bezierCurveTo(s * 2.5, -s * 8, s * 2.2, s * 2, s * 1.5, s * 10);
      ctx.lineTo(0, s * 12);
      ctx.lineTo(-s * 1.5, s * 10);
      ctx.bezierCurveTo(-s * 2.2, s * 2, -s * 2.5, -s * 8, 0, -s * 13);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = c2;

      ctx.beginPath();
      ctx.moveTo(0, -s * 2);
      ctx.lineTo(s * 16, s * 5);
      ctx.lineTo(s * 10, s * 7);
      ctx.lineTo(-s * 10, s * 7);
      ctx.lineTo(-s * 16, s * 5);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = "rgba(180,225,255,0.9)";
      ctx.beginPath();
      ctx.ellipse(0, -s * 7, s * 1.2, s * 2.5, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }

    let frame = 0;
    let raf;

    function animate() {
      ctx.clearRect(0, 0, W(), H());

      ctx.save();
      ctx.translate(mouse.x, mouse.y);

      frame++;

      planes.forEach((p) => {
        p.angle += Math.sin(frame * p.wobbleSpeed + p.wobble) * 0.01;

        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;

        p.trail.push({ x: p.x, y: p.y });

        if (p.trail.length > TRAIL) p.trail.shift();

        const margin = 80;

        if (
          p.x < -margin ||
          p.x > W() + margin ||
          p.y < -margin ||
          p.y > H() + margin
        ) {
          const edge = Math.floor(Math.random() * 4);
          Object.assign(p, spawn(edge));
        }

        const len = p.trail.length;

        for (let i = 1; i < len; i++) {
          const f = i / len;

          ctx.globalAlpha = f * 0.5;

          ctx.strokeStyle =
            p.hue === 0
              ? "rgba(255,80,0,1)"
              : "rgba(80,150,255,1)";

          ctx.lineWidth = f * 3;

          ctx.beginPath();
          ctx.moveTo(p.trail[i - 1].x, p.trail[i - 1].y);
          ctx.lineTo(p.trail[i].x, p.trail[i].y);
          ctx.stroke();
        }

        ctx.globalAlpha = 1;

        drawPlane(p.x, p.y, p.angle, p.size, p.hue);
      });

      ctx.restore();

      raf = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[4]"
    />
  );
}

