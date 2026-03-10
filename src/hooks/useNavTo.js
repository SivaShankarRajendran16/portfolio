export default function useNavTo() {
  function navTo(sectionId) {
    const target = document.getElementById(sectionId)
    if (!target) return
    const navH = document.getElementById('nav')?.offsetHeight || 56
    const y = target.getBoundingClientRect().top + window.pageYOffset - navH - 12
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
  return navTo
}
