import { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolio'
import styles from './Hero.module.css'

export default function Hero() {
  const typewriterTexts = [
    'ASP.NET Core specialist',
    'Clean Architecture advocate',
    'RESTful API builder',
  ]
  const [typed, setTyped] = useState('')
  const [idx, setIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = typewriterTexts[idx]
    const speed = deleting ? 40 : 70
    const timer = setTimeout(() => {
      if (!deleting && typed === current) {
        setTimeout(() => setDeleting(true), 1800)
        return
      }
      if (deleting && typed === '') {
        setDeleting(false)
        setIdx(i => (i + 1) % typewriterTexts.length)
        return
      }
      setTyped(prev => deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1))
    }, speed)
    return () => clearTimeout(timer)
  }, [typed, deleting, idx])

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.contentGrid}>
          <div className={styles.leftCol}>
            <div className={styles.tag}>
              <span className={styles.dot} />
              Available for opportunities
            </div>

            <div className={styles.badge}>// BACKEND .NET DEVELOPER</div>

            <h1 className={styles.name}>
              Kareem Ezzat
              <br />
              <span>Gharib Ali</span>
            </h1>

            <div className={styles.typeRow}>
              <span className={styles.typed}>{typed}</span>
              <span className={styles.cursor}>|</span>
            </div>

            <p className={styles.desc}>
              Building scalable backend systems with <strong>ASP.NET Core</strong> and{' '}
              <strong>Clean Architecture</strong>, focused on maintainable APIs, performance, and
              production reliability.
            </p>

            <div className={styles.btns}>
              <a href="#about" className={styles.primaryBtn}>Learn More</a>
              <a href="#projects" className={styles.secondaryBtn}>View My Work</a>
            </div>

            <div className={styles.socialRow}>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className={styles.socialLink}>
                GITHUB
              </a>
              <span className={styles.socialSeparator}>·</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className={styles.socialLink}>
                LINKEDIN
              </a>
              <span className={styles.socialSeparator}>·</span>
              <a href={`mailto:${personalInfo.email}`} className={styles.socialLink}>
                EMAIL
              </a>
            </div>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.photoWrap}>
              <img src="/images/profile-photo.png" alt="Kareem Ezzat Gharib Ali" className={styles.photo} />
            </div>
          </div>
        </div>

        <div className={styles.stats}>
          {[
            { num: '3+', label: 'Projects' },
            { num: '40%', label: 'API Speed Boost' },
            { num: '3.45', label: 'GPA' },
            { num: '1+', label: 'Years Exp' },
          ].map((s, i) => (
            <div key={s.label} className={styles.stat}>
              <div className={`${styles.statNum} ${i === 1 ? styles.statAmber : ''}`}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
