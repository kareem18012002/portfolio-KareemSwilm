import { skills } from '../data/portfolio'
import styles from './Skills.module.css'

export default function Skills() {
  const categoryMeta = {
    Backend: { icon: '🧩' },
    Database: { icon: '🗄️' },
    Architecture: { icon: '🏛️' },
    'Security & Tools': { icon: '🛡️' },
    'Mobile & Cloud': { icon: '📱' },
    Performance: { icon: '⚡' },
  }

  return (
    <div id="skills" className={styles.wrapper}>
      <div className="section">
        <div className="section-label reveal">// 02. TECH_STACK</div>
        <h2 className={`section-title reveal ${styles.skillsTitle}`}>Skills & <span>Tools</span></h2>
        <p className={`${styles.subtitle} reveal`}>Technologies and tools I use to build modern solutions</p>
        <div className={styles.groups}>
          {skills.map((s, i) => (
            <section
              key={s.category}
              className={`${styles.group} reveal`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <h3 className={styles.categoryTitle}>
                <span className={styles.categoryIcon}>{categoryMeta[s.category]?.icon || '🔹'}</span>
                {s.category}
              </h3>
              <div className={styles.grid}>
                {s.tags.map(tag => (
                  <div key={tag} className={styles.skillItem}>
                    <span className={styles.skillDot}>•</span>
                    <span className={styles.skillName}>{tag}</span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
