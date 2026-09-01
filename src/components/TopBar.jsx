import { useEffect, useState } from 'react'
import Mark from './Mark.jsx'
import ArrowBox from './ArrowBox.jsx'

const LINKS = [
  { label: 'Product', href: '#product' },
  { label: 'How it works', href: '#how' },
  { label: 'Demo', href: '#demo' },
  { label: 'Modules', href: '#modules' },
  { label: 'Hardware', href: '#hardware' },
  { label: 'Questions', href: '#faq' },
]

export default function TopBar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <div className="topbar">
        <a className="topbar__mark" href="#top" aria-label="Athena Labs — home">
          <Mark />
        </a>

        <a className="topbar__cta" href="#contact">
          Apply
          <ArrowBox />
        </a>
      </div>

      <div className="menu">
        <button
          className="menu__toggle"
          type="button"
          aria-label="Sections"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
          <span />
        </button>

        <nav className={`menu__panel${open ? ' is-open' : ''}`} aria-label="Sections">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
