import { useRef, useEffect } from 'react'
import { projects } from '../data/resumeData'

function ProjectCard({ num, title, desc, tags, index }) {
  const ref = useRef(null)
  const isEven = index % 2 === 1

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
      className={`rv relative py-8 border-t border-black/[0.07] group cursor-pointer transition-none
                  ${isEven ? 'pl-7 border-l border-black/[0.07]' : 'pr-7'}`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      {/* Bottom red line on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#dc0000]
                      scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      {/* Arrow */}
      <div className={`absolute top-8 text-[#dc0000] text-lg opacity-0 group-hover:opacity-100
                       transition-all duration-200 ${isEven ? 'left-[-2px]' : 'right-3'}
                       group-hover:translate-x-0 ${isEven ? '-translate-x-1.5' : 'translate-x-1.5'}`}>
        {isEven ? '←' : '→'}
      </div>

      <div className="font-orbitron font-black text-[46px] leading-none text-[rgba(220,0,0,0.07)] mb-3.5">
        {num}
      </div>
      <div className="font-orbitron font-bold text-sm tracking-wide mb-2.5">{title}</div>
      <p className="text-[13px] text-[#556070] leading-[1.75]">{desc}</p>
      <div className="flex flex-wrap gap-1.5 mt-3.5">
        {tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
      </div>
    </div>
  )
}

export default function Projects() {
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
      return () => obs.disconnect()
    })
  }, [])

  return (
    <section id="projects" className="relative z-[1] py-16 px-[6vw] bg-[#f5f5f7]">
      <div ref={labelRef} className="rv section-label">Pit Stop Builds</div>
      <h2
        ref={titleRef}
        className="rv font-orbitron font-extrabold leading-tight mb-2"
        style={{ fontSize: 'clamp(26px,3.8vw,46px)', transitionDelay: '60ms' }}
      >
        Featured <span className="text-[#dc0000]">Projects</span>
      </h2>

      {/* 2-col grid with dividers only */}
      <div className="grid grid-cols-2 mt-10 text-[#dc0000]" style={{ gridTemplateColumns: 'repeat(2,1fr) ' }}>
        {projects.map((p, i) => (
          <ProjectCard key={p.num} {...p} index={i} />
        ))}
        {/* Bottom borders for last 2 cards */}
        <div className="col-span-2 border-b border-black/[0.07] text-[#dc0000]" />
      </div>
    </section>
  )
}
