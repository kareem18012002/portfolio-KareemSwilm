import { education } from '../data/portfolio'
import styles from './Education.module.css'

export default function Education() {
  return (
    <section id="education">
      <div className="section">
        <div className="section-label reveal">// 05. EDUCATION</div>
        <h2 className="section-title reveal">Academic <span>Background</span></h2>
        <div className={styles.grid}>
          {education.map((e, i) => (
            <div key={i} className={`${styles.card} reveal`} style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className={styles.year}>{e.year}</div>
              <h3 className={styles.degree}>{e.degree}</h3>
              <div className={styles.school}>{e.school}</div>
              <span className={styles.badge}>{e.badge}</span>
              <p className={styles.note}>{e.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
