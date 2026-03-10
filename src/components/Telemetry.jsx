import { useEffect, useState } from 'react'

export default function Telemetry({ show }) {
  const [spd,  setSpd]  = useState(312)
  const [gear, setGear] = useState(7)
  const [lap,  setLap]  = useState('1:21.4')

  useEffect(() => {
    const iv1 = setInterval(() => {
      setSpd(290  + Math.floor(Math.random() * 30))
      setGear(6   + Math.floor(Math.random() * 2))
    }, 950)

    let ls = 81, lms = 400
    const iv2 = setInterval(() => {
      lms += 100
      if (lms >= 1000) { lms = 0; ls++ }
      const m  = Math.floor(ls / 60)
      const s  = (ls % 60).toString().padStart(2, '0')
      const ms = Math.floor(lms / 100)
      setLap(`${m}:${s}.${ms}`)
    }, 100)

    return () => { clearInterval(iv1); clearInterval(iv2) }
  }, [])

  const Div  = () => <div className="w-px h-4 bg-white/[0.07]" />
  const Item = ({ label, value, color = 'text-[#dc0000]', suffix = '' }) => (
    <div className="flex items-center gap-1.5 whitespace-nowrap">
      <span className="text-white/35 tracking-widest">{label}</span>
      <span className={`font-bold ${color}`}>{value}</span>
      {suffix && <span className="text-white/20 text-[8px]">{suffix}</span>}
    </div>
  )

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[200] px-[6vw] py-1.5 flex items-center gap-5
                  font-mono text-[9px] bg-[rgba(10,10,14,0.97)] border-t border-[rgba(220,0,0,0.25)]
                  backdrop-blur-xl transition-opacity duration-500 ${show ? 'opacity-100' : 'opacity-0'}`}
    >
      <Item label="SPD"  value={spd}  suffix="KMH" />
      <Div /><Item label="GEAR" value={gear} />
      <Div /><Item label="RPM"  value="13,400" />
      <Div />
      {/* RPM bar */}
      <div className="w-[180px] h-0.5 bg-white/[0.07] overflow-hidden flex-shrink-0">
        <div className="rpm-fill h-full" style={{ background: 'linear-gradient(90deg,#e8c000,#dc0000)' }} />
      </div>
      <Div /><Item label="LAP"  value={lap} />
      <Div /><Item label="POS"  value="P1" color="text-[#00e87a]" />
      <Div /><Item label="TYRE" value="SOFT" color="text-[#e8c000]" />
      <Div />
      <div className="ml-auto flex items-center gap-1.5">
        <span className="live-dot w-[5px] h-[5px] rounded-full bg-[#00e87a] inline-block"
              style={{ boxShadow: '0 0 7px #00e87a' }} />
        <span className="text-white/35 tracking-widest">LIVE</span>
      </div>
    </div>
  )
}
