import { personalInfo } from '../data/portfolio'
import styles from './About.module.css'

export default function About() {
  const { bio, highlights, stats } = personalInfo

  return (
    <section id="about">
      <div className="section">
        <div className={`section-label reveal ${styles.centerLabel}`}>// 01. ABOUT_ME</div>
        <h2 className={`section-title reveal ${styles.centerTitle}`}>About <span>Me</span></h2>
        <p className={`${styles.subtitle} reveal`}>Get to know me better</p>

        <div className={`${styles.panel} reveal`}>
          <aside className={styles.profileCard}>
            <img src="/images/profile-photo.png" alt={personalInfo.name} className={styles.photo} />
            <h3>{personalInfo.name}</h3>
            <p>{personalInfo.role}</p>
            <div className={styles.profileLinks}>
              <a href={personalInfo.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </aside>

          <div className={styles.contentCard}>
            <h3 className={styles.contentTitle}>Professional Summary</h3>
            {bio.map((p, i) => (
              <p key={i} className={styles.bioPara}>{p}</p>
            ))}

            <div className={styles.highlights}>
              {highlights.map(item => (
                <span key={item} className={styles.highlightTag}>{item}</span>
              ))}
            </div>

            <div className={styles.statsGrid}>
              {stats.map(s => (
                <div key={s.label} className={styles.statCard}>
                  <div className={styles.statNum}>{s.num}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>

            <div className={styles.contactGrid}>
              <a href={`mailto:${personalInfo.email}`} className={styles.contactItem}>
                <strong>Email</strong>
                <span>{personalInfo.email}</span>
              </a>
              <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className={styles.contactItem}>
                <strong>Phone</strong>
                <span>{personalInfo.phone}</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className={styles.contactItem}>
                <strong>LinkedIn</strong>
                <span>View Profile</span>
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className={styles.contactItem}>
                <strong>GitHub</strong>
                <span>View Repositories</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
