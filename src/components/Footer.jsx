import { personalInfo } from '../data/portfolio'
import styles from './Footer.module.css'

const links = ['about','skills','projects','experience','education','contact']

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>KE<span>/&gt;</span></div>
            <p className={styles.tagline}>
              Backend .NET Developer passionate about clean code and scalable systems.
              Open to opportunities in Egypt &amp; Dubai.
            </p>
            <div className={styles.socials}>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className={styles.social} title="GitHub">⌥ GitHub</a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className={styles.social} title="LinkedIn">in LinkedIn</a>
              <a href={`mailto:${personalInfo.email}`} className={styles.social} title="Email">✉ Email</a>
            </div>
          </div>

          <div className={styles.col}>
            <h4>Navigation</h4>
            <ul>
              {links.map(l => (
                <li key={l}><a href={`#${l}`}>{l}</a></li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Contact</h4>
            <p><a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></p>
            <p><a href={`tel:${personalInfo.phone.replace(/\s/g,'')}`}>{personalInfo.phone}</a></p>
            <p className={styles.location}>{personalInfo.location}<br />Open to Relocation</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>© {year} Kareem Ezzat — Built with React &amp; passion</span>
          <div className={styles.bottomLinks}>
            {links.slice(0,3).map(l => <a key={l} href={`#${l}`}>{l}</a>)}
          </div>
        </div>
      </div>
    </footer>
  )
}
