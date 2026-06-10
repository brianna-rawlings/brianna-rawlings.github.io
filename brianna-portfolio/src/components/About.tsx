import { useReveal } from '../hooks/useReveal'
import styles from './About.module.css'

const skills = [
  'Python', 'R', 'JavaScript', 'TypeScript', 'HTML / CSS',
  'Django', 'Streamlit', 'SQL', 'LangChain', 'Jupyter', 'n8n', 'React'
]

const cards = [
  { icon: '🎓', title: 'Taylor University', desc: 'CS & Digital Media · Minor in Data Science · Expected 2026', accent: 'terra' },
  { icon: '⚽', title: "Women's Soccer Captain", desc: 'Leading on and off the field — where my interest in performance analytics was born.', accent: 'forest' },
  { icon: '🔬', title: 'AI Intern @ Ardalyst', desc: 'Building LLM-powered systems for federal proposal automation.', accent: 'sand' },
]

export default function About() {
  useReveal()
  return (
    <section id="about" className={styles.section}>
      <div className="section-inner">
        <div className={styles.grid}>
          <div className={`${styles.textCol} reveal`}>
            <p className="section-label">About me</p>
            <h2 className={styles.heading}>The person behind the projects</h2>
            <p className={styles.body}>I'm a <strong>CS &amp; Digital Media student at Taylor University</strong> with a minor in Data Science. My work lives where tech meets human performance.</p>
            <p className={styles.body}>As <strong>captain of the Women's Soccer Team</strong>, I've experienced firsthand how the right data can change how you train and recover — that's what pushed me to build the WHOOP Recovery Dashboard.</p>
            <p className={styles.body}>This summer I'm interning at <strong>Ardalyst</strong>, building an AI system that automates federal proposal analysis using LLMs like GPT-4, working on prompt engineering, API automation, and security-first AI design.</p>
            <div className={styles.skillsSection}>
              <p className="section-label" style={{ fontSize: '0.7rem' }}>Tech I work with</p>
              <div className={styles.skillsGrid}>
                {skills.map((s) => <span key={s} className={styles.chip}>{s}</span>)}
              </div>
            </div>
          </div>
          <div className={styles.cardCol}>
            {cards.map((c, i) => (
              <div key={c.title} className={`${styles.card} ${styles['accent_' + c.accent]} reveal reveal-delay-${i + 1}`}>
                <div className={styles.cardAccent} />
                <div className={styles.cardIcon}>{c.icon}</div>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <p className={styles.cardDesc}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
