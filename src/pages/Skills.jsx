import { useEffect, useRef } from 'react'
import { skills } from '../data/resumeData'

function SkillCard({ icon, name, pct, tags, delay }) {
  const ref    = useRef(null)
  const barRef = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          if (barRef.current) barRef.current.style.width = pct + '%'
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [pct])

  return (
    <div
      ref={ref}
      className="rv py-5 border-b border-black/[0.07] relative group overflow-hidden"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Bottom red sweep on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#dc0000] to-transparent
                      scale-x-0 group-hover:scale-x-100 transition-transform duration-350 origin-left" />

      <div className="text-[22px] mb-2">{icon}</div>
      <div className="font-orbitron text-[10px] font-bold tracking-widest uppercase mb-1">{name}</div>

      {/* Skill bar */}
      <div className="h-[1.5px] bg-black/[0.07] mt-2.5 overflow-hidden">
        <div
          ref={barRef}
          className="h-full"
          style={{
            width: 0,
            background: 'linear-gradient(90deg,#dc0000,#ff7777)',
            transition: 'width 1.4s cubic-bezier(0.4,0,0.2,1)',
          }}
        />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-2.5">
        {tags.map(t => (
          <span key={t} className="tag-pill">{t}</span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const labelRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    const els = [labelRef.current, titleRef.current]

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 }
    )

    els.forEach(el => el && obs.observe(el))

    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" className="relative z-[1] py-16 px-[6vw] bg-white">

      <div ref={labelRef} className="rv section-label">
        Pit Stop Skills
      </div>

      <h2
        ref={titleRef}
        className="rv font-orbitron font-extrabold leading-tight mb-2"
        style={{ fontSize: "clamp(26px,3.8vw,46px)", transitionDelay: "60ms" }}
      >
        Skill <span className="text-[#dc0000]">Sets</span>
      </h2>

      <div
        className="grid gap-0 mt-10"
        style={{ gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))" }}
      >
        {skills.map((s, i) => (
          <SkillCard key={s.name} {...s} delay={i * 55} />
        ))}
      </div>
    </section>
  )
}
