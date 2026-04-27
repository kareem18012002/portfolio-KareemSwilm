import { useMemo, useState } from 'react'
import { projects } from '../data/portfolio'
import styles from './Projects.module.css'

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all')

  const classify = (project) => project.platform || 'web'

  const counts = useMemo(() => {
    const mobile = projects.filter(p => classify(p) === 'mobile').length
    const web = projects.length - mobile
    return { all: projects.length, web, mobile }
  }, [])

  const filteredProjects = useMemo(() => {
    if (activeTab === 'all') return projects
    return projects.filter(p => classify(p) === activeTab)
  }, [activeTab])

  const tabs = [
    { key: 'all', label: `All Projects (${counts.all})` },
    { key: 'web', label: `Web Apps (${counts.web})` },
    { key: 'mobile', label: `Mobile Apps (${counts.mobile})` },
  ]

  return (
    <section id="projects">
      <div className="section">
        <div className="section-label reveal">// 03. PROJECTS</div>
        <h2 className="section-title reveal">Featured <span>Work</span></h2>

        <div className={styles.tabs}>
          {tabs.map(tab => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`${styles.tabBtn} ${activeTab === tab.key ? styles.tabActive : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredProjects.map((p, i) => (
            <div
              key={p.id}
              className={`${styles.card} ${p.featured ? styles.featured : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {p.badge && (
                <span className={`${styles.badge} ${styles[`badge_${p.badgeColor || 'blue'}`]}`}>
                  {p.badge}
                </span>
              )}

              <div className={styles.topRow}>
                <span className={styles.id}>{p.id} / {p.year}</span>
                <a href={p.github} target="_blank" rel="noreferrer" className={styles.ghLink}>
                  GitHub →
                </a>
              </div>

              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.subtitle}>{p.subtitle}</p>
              <p className={styles.desc}>{p.description}</p>

              <div className={styles.metrics}>
                {p.metrics.map(m => (
                  <span key={m} className={styles.metric}>{m}</span>
                ))}
              </div>

              <div className={styles.techRow}>
                {p.tech.map(t => (
                  <span key={t} className={styles.tech}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
