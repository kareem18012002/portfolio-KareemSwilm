import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = ['about','skills','projects','experience','education']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { threshold: 0.4 }
    )
    links.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <a href="#hero" className={styles.logo}>
          KE<span className={styles.logoAccent}>/&gt;</span>
        </a>

        <ul className={styles.links}>
          {links.map(l => (
            <li key={l}>
              <a
                href={`#${l}`}
                className={`${styles.link} ${active === l ? styles.linkActive : ''}`}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.right}>
          <a href="#contact" className={styles.cta}>hire_me()</a>
          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        {links.map(l => (
          <a key={l} href={`#${l}`} onClick={close} className={styles.mobileLink}>{l}</a>
        ))}
        <a href="#contact" onClick={close} className={`${styles.mobileLink} ${styles.mobileCta}`}>
          hire_me()
        </a>
      </div>
      {menuOpen && <div className={styles.overlay} onClick={close} />}
    </>
  )
}
