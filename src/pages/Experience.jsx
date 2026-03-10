import { useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import { experience, education } from '../data/resumeData'

function RevealDiv({ children, delay = 0, className = '' }) {
  const ref = useScrollReveal(0.1)
  return (
    <div ref={ref} className={`rv ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

function ExpCard({ company, role, period, bullets, delay }) {
  return (
    <RevealDiv delay={delay}
      className="py-7 border-t border-black/[0.07] relative group">
      {/* Red left bar on hover */}
      <div className="absolute left-[-6vw] top-0 bottom-0 w-[3px] bg-[#dc0000]
                      scale-y-0 group-hover:scale-y-100 transition-transform duration-350 origin-top" />

      <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
        <div>
          <div className="font-orbitron font-bold text-sm tracking-wide text-[#111122]">{company}</div>
          <div className="font-rajdhani font-semibold text-sm tracking-wide text-[#556070] mt-0.5">{role}</div>
        </div>
        <div className="font-mono text-[9px] tracking-widest text-[#dc0000] px-2.5 py-1
                        border border-[rgba(220,0,0,0.2)] bg-[rgba(220,0,0,0.05)]">
          {period}
        </div>
      </div>

      <ul className="flex flex-col gap-1.5 mt-3">
        {bullets.map((b, i) => (
          <li key={i} className="text-[13px] text-[#111122]/60 leading-[1.7] pl-4 relative">
            <span className="absolute left-0 top-1 text-[#dc0000] text-[9px]">▸</span>
            {b}
          </li>
        ))}
      </ul>
    </RevealDiv>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative z-[1] py-20 px-[6vw] bg-[#f5f5f7]">
      <RevealDiv><div className="section-label">Pit Wall</div></RevealDiv>
      <RevealDiv delay={60}>
        <h2 className="font-orbitron font-extrabold leading-tight mb-3"
            style={{ fontSize: 'clamp(26px,3.8vw,46px)' }}>
          Race <span className="text-[#dc0000]">Experience</span>
        </h2>
      </RevealDiv>

      <div>
        {experience.map((exp, i) => (
          <ExpCard key={exp.company} {...exp} delay={i * 80} />
        ))}
        {/* Last border */}
        <div className="border-b border-black/[0.07]" />
      </div>

      {/* Education */}
      <RevealDiv delay={200} className="mt-12">
        <div className="section-label mb-4">Education · Engineering Academy</div>
        <div className="border-l-[3px] border-[#dc0000] pl-5">
          <div className="flex justify-between items-center flex-wrap gap-3">
            <div>
              <div className="font-orbitron font-bold text-sm tracking-wide">{education.school}</div>
              <div className="text-sm text-[#556070] mt-1">{education.degree}</div>
              <div className="font-mono text-[9px] tracking-widest text-black/30 mt-1">
                {education.location} · {education.year}
              </div>
            </div>
            <div className="text-right">
              <div className="font-orbitron font-black text-2xl text-[#dc0000]">{education.gpa}</div>
              <div className="font-mono text-[8px] tracking-widest text-[#556070]">GPA SCORE</div>
            </div>
          </div>
        </div>
      </RevealDiv>
    </section>
  )
}
