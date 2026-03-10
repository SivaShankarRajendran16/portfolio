import { useEffect, useState } from 'react'

export default function Loader({ onDone }) {
  const [lights, setLights]   = useState([false, false, false, false, false])
  const [lightsOff, setOff]   = useState(false)
  const [showGo, setShowGo]   = useState(false)
  const [fading, setFading]   = useState(false)

  useEffect(() => {
    // Light each one on sequentially
    [0,1,2,3,4].forEach(i => {
      setTimeout(() => {
        setLights(prev => { const n=[...prev]; n[i]=true; return n })
      }, 400 + i * 480)
    })
    // All off → show GO
    setTimeout(() => { setOff(true); setShowGo(true) }, 3200)
    // Fade out loader
    setTimeout(() => { setFading(true) }, 4200)
    setTimeout(() => { onDone() }, 4800)
  }, [onDone])

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-[#0a0a0a] flex flex-col items-center justify-center
                  transition-opacity duration-[900ms] ${fading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <p className="font-mono text-[10px] tracking-[8px] text-white/20 mb-11 uppercase">
        Formula 1 World Championship · Season 2026
      </p>

      <div className="flex gap-5 mb-11">
        {lights.map((on, i) => (
          <div
            key={i}
            className={`w-8 h-8 rounded-full border-2 transition-all duration-[220ms] ${
              lightsOff
                ? 'bg-[#080000] border-[#130000]'
                : on
                ? 'bg-[#dc0000] border-[#ff5555]'
                : 'bg-[#160000] border-[#280000]'
            }`}
            style={on && !lightsOff ? {
              boxShadow: '0 0 28px #dc0000, 0 0 70px rgba(220,0,0,0.35), inset 0 0 12px rgba(255,90,90,0.3)'
            } : {}}
          />
        ))}
      </div>

      <p
        className={`font-orbitron text-2xl font-black tracking-[10px] text-[#dc0000] transition-opacity duration-300
                    ${showGo ? 'opacity-100' : 'opacity-0'}`}
        style={{ textShadow: '0 0 40px #dc0000' }}
      >
        LIGHTS OUT !!!
      </p>
      {!showGo && (
        <p className="font-mono text-[10px] tracking-[4px] text-white/25 mt-4 blink">
          INITIALISING SYSTEMS…
        </p>
      )}
    </div>
  )
}
