import { useEffect, useRef } from 'react'
import PlaneCanvas from '../components/PlaneCanvas'
import useNavTo from '../hooks/useNavTo'
import { personal, stats } from '../data/resumeData'

function CountStat({ target, suffix, label, start }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!start) return
    let v = 0
    const iv = setInterval(() => {
      v = Math.min(v + target / 65, target)
      if (ref.current) ref.current.textContent = Math.floor(v) + suffix
      if (v >= target) clearInterval(iv)
    }, 22)
    return () => clearInterval(iv)
  }, [start, target, suffix])

  return (
    <div className="border-l-2 border-[#dc0000] pl-3">
      <div ref={ref} className="font-orbitron text-2xl font-black text-[#111122] leading-none">0</div>
      <div className="font-mono text-[8px] tracking-widest text-[#556070] mt-1 uppercase">{label}</div>
    </div>
  )
}

export default function Hero({ started }) {
  const navTo = useNavTo()

  // Speed lines
  const lines = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    top:      8 + Math.random() * 84,
    width:    55 + Math.random() * 150,
    duration: 0.3 + Math.random() * 0.45,
    delay:    Math.random() * 3,
  }))

  const delays = ['4.4s','4.55s','4.7s','4.85s','5.0s','5.15s']

  return (
    <section
  id="hero"
  className="min-h-[90vh] relative overflow-hidden flex items-center px-[8vw] pt-16 pb-10"
>
      {/* Grid background */}
      <div className="absolute inset-0 z-0 pointer-events-none"
           style={{
             backgroundImage: 'linear-gradient(rgba(220,0,0,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(220,0,0,0.035) 1px,transparent 1px)',
             backgroundSize: '52px 52px',
           }} />

      {/* Ghost number */}
      <div className="absolute right-[-1vw] top-1/2 -translate-y-1/2 font-orbitron font-black
                      leading-none pointer-events-none select-none z-0 text-transparent"
           style={{
             fontSize: 'clamp(180px,24vw,360px)',
             WebkitTextStroke: '1px rgba(220,0,0,0.06)',
           }}>
        26
      </div>

      {/* Speed lines */}
      {lines.map(l => (
        <div
          key={l.id}
          className="speed-line"
          style={{
            top: `${l.top}%`,
            width: `${l.width}px`,
            '--duration': `${l.duration}s`,
            '--delay': `${l.delay}s`,
          }}
        />
      ))}

      {/* 3 Planes */}
      <PlaneCanvas />

      {/* Content */}
      <div className="relative z-10 max-w-[560px]">
        <p className="slide-in font-mono text-[10px] tracking-[5px] text-[#dc0000] mb-3.5"
           style={{ animationDelay: delays[0] }}>
          ✈ DevOps Cloud Engineer · Season 2026
        </p>

        <h1 className="slide-in font-orbitron font-black leading-[0.9] tracking-tight"
            style={{ fontSize: 'clamp(34px,5.2vw,72px)', animationDelay: delays[1] }}>
          <span className="block"
                style={{ background: 'linear-gradient(135deg,#0a0a0a,#444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {personal.nameShort}
          </span>
          <span className="block text-[#dc0000]">{personal.nameLast}</span>
        </h1>

        <p className="slide-in font-rajdhani font-semibold tracking-[4px] text-[#556070] mt-4 uppercase text-sm"
           style={{ animationDelay: delays[2] }}>
          {personal.role}
        </p>

        <p className="slide-in font-mono text-[10px] tracking-[2px] text-black/35 mt-2"
           style={{ animationDelay: delays[3] }}>
          📍 {personal.location} &nbsp;·&nbsp; {personal.phone} &nbsp;·&nbsp; {personal.email}
        </p>

        <div className="slide-in flex gap-7 mt-8 flex-wrap"
             style={{ animationDelay: delays[4] }}>
          {stats.map(s => (
            <CountStat key={s.label} {...s} start={started} />
          ))}
        </div>

        <div className="slide-in flex gap-3 mt-7 flex-wrap"
             style={{ animationDelay: delays[5] }}>
          <button className="btn-red" onClick={() => navTo('experience')}>
            View Experience
          </button>
          <button className="btn-outline" onClick={() => navTo('contact')}>
            Get In Touch →
          </button>
        </div>
      </div>
    </section>
  )
}
