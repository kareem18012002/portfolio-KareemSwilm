import { experience } from '../data/portfolio'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <div id="experience" className={styles.wrapper}>
      <div className="section">
        <div className="section-label reveal">// 04. EXPERIENCE</div>
        <h2 className="section-title reveal">Work <span>Experience</span></h2>
        <div className={styles.timeline}>
          {experience.map((e, i) => (
            <div key={i} className={`${styles.item} reveal`}>
              <div className={styles.left}>
                <div className={styles.period}>{e.period}</div>
                <div className={styles.line} />
              </div>
              <div className={styles.right}>
                <div className={styles.dot} />
                <h3 className={styles.title}>{e.title}</h3>
                <div className={styles.org}>{e.org}</div>
                <ul className={styles.list}>
                  {e.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
