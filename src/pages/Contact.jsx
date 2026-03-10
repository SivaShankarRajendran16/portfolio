import { useRef, useEffect } from 'react'
import { personal } from '../data/resumeData'

export default function Contact() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const podDelays = [0, 0.3, 0.6, 0.9, 1.2]

  return (
    <section
      id="contact"
      className="relative overflow-hidden text-center py-24 px-[6vw] bg-white"
    >
      {/* Checkered footer pattern */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[50px] pointer-events-none"
        style={{
          backgroundImage: 'repeating-conic-gradient(rgba(0,0,0,0.025) 0% 25%, transparent 0% 50%)',
          backgroundSize: '16px 16px',
        }}
      />

      <div ref={ref} className="rv relative z-10">
        {/* Podium lights */}
        <div className="flex gap-2.5 justify-center mb-8">
          {podDelays.map((d, i) => (
            <div
              key={i}
              className="pod-light w-3 h-3 rounded-full bg-[#dc0000]"
              style={{
                animationDelay: `${d}s`,
                boxShadow: '0 0 10px #dc0000',
              }}
            />
          ))}
        </div>

        <h2
          className="font-orbitron font-black mb-4"
          style={{
            fontSize: 'clamp(28px,4.5vw,60px)',
            background: 'linear-gradient(135deg,#111,#555)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Let's Cross<br />The Finish Line
        </h2>

        <p className="font-rajdhani text-base text-[#556070] max-w-[420px] mx-auto mb-9 leading-[1.75]">
          Open to new opportunities in DevOps, Cloud Engineering and Full Stack development.
          Ready to bring race-day precision to your team.
        </p>

        <div className="flex gap-3 justify-center flex-wrap">
          <a href={`mailto:${personal.email}`} className="btn-red">
            📧 Email Me
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn-outline">
            LinkedIn →
          </a>
          <a href={personal.github} target="_blank" rel="noreferrer" className="btn-outline">
            GitHub →
          </a>
        </div>

        <div className="mt-14 font-mono text-[8px] tracking-[3px] text-black/15">
          SIVA SHANKAR RAJENDRAN · DEVOPS RACING · SEASON 2026 · CHENNAI, INDIA
        </div>
      </div>
    </section>
  )
}
