import { tickerItems } from '../data/resumeData'

export default function Ticker() {
  // Duplicate array so seamless loop works
  const items = [...tickerItems, ...tickerItems]

  return (
    <div className="bg-[#dc0000] py-1.5 overflow-hidden relative z-[5]">
      <div className="ticker-inner flex w-max">
        {items.map((item, i) => (
          <span key={i} className="font-mono text-[9px] tracking-[3px] text-white px-8 whitespace-nowrap">
            {i % 2 === 1 ? '★' : item}
          </span>
        ))}
      </div>
    </div>
  )
}
