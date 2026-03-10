import { useRef, useEffect } from 'react'
import { certifications } from '../data/resumeData'

function CertCard({ icon, name, org, delay }) {
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

  return (
    <div
      ref={ref}
      className="rv py-4 border-b border-black/[0.07] flex gap-3.5 items-start group cursor-default"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-xl flex-shrink-0 mt-0.5 transition-colors duration-200 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <div className="font-rajdhani font-bold text-[13px] text-[#111122] mb-1">{name}</div>
        <div className="font-mono text-[8px] tracking-widest text-[#556070]">{org}</div>
      </div>
    </div>
  )
}

export default function Certifications() {
  const labelRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    [labelRef, titleRef].forEach(r => {
      if (!r.current) return
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) r.current.classList.add('visible') },
        { threshold: 0.1 }
      )
      obs.observe(r.current)
    })
  }, [])

  return (
    <section id="certifications" className="relative z-[1] py-16 px-[6vw] bg-white">
      <div ref={labelRef} className="rv section-label">Lap Records</div>
      <h2
        ref={titleRef}
        className="rv font-orbitron font-extrabold leading-tight mb-2"
        style={{ fontSize: 'clamp(26px,3.8vw,46px)', transitionDelay: '60ms' }}
      >
        Certifications <span className="text-[#dc0000]">&amp; Achievements</span>
      </h2>

      <div
  className="mt-10 grid gap-6"
  style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}
>
        {certifications.map((c, i) => (
          <CertCard key={c.name} {...c} delay={i * 70} />
        ))}
      </div>
    </section>
  )
}
