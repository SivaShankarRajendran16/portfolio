import { useEffect, useState } from 'react'
import useNavTo from '../hooks/useNavTo'

const links = [
  { label: 'Experience',      id: 'experience'     },
  { label: 'Skills',          id: 'skills'         },
  { label: 'Projects',        id: 'projects'       },
  { label: 'Certifications',  id: 'certifications' },
  { label: 'Contact',         id: 'contact'        },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const navTo = useNavTo()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      id="nav"
      className={`fixed top-0 left-0 right-0 z-[500] px-[6vw] py-3 flex items-center justify-between
                  transition-all duration-300 border-b border-transparent
                  ${scrolled ? 'bg-white/96 border-b-[rgba(220,0,0,0.15)] backdrop-blur-lg' : ''}`}
    >
      {/* Logo */}
      <button
        onClick={() => navTo('hero')}
        className="font-orbitron font-black text-base tracking-[3px] text-[#111122] cursor-pointer bg-transparent border-none"
      >
        S<span className="text-[#dc0000]">.</span>S
      </button>

      {/* Links */}
      <ul className="hidden md:flex gap-7 list-none">
  {links.map(({ label, id }) => (
    <li
      key={id}
      className={
        id === "experience" || id === "skills"
          ? "hidden sm:block"
          : ""
      }
    >
      <button
        onClick={() => navTo(id)}
        className="font-rajdhani text-xs font-bold tracking-[2.5px] text-[#556070] uppercase
                   bg-transparent border-none cursor-pointer transition-colors duration-200
                   hover:text-[#111122] relative group"
      >
        {label}
        <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#dc0000]
                         scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
      </button>
    </li>
  ))}
</ul> 
    </nav>
  )
}
