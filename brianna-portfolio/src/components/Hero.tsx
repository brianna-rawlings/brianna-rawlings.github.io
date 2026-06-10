import styles from './Hero.module.css'

const tags = [
  { emoji: '⚽', label: 'Soccer Captain', style: 'terra' },
  { emoji: '📊', label: 'Sports Analytics', style: 'forest' },
  { emoji: '🤖', label: 'AI & LLMs', style: 'sand' },
  { emoji: '🐍', label: 'Python', style: 'terra' },
  { emoji: '🌲', label: 'Outdoor Enthusiast', style: 'forest' },
]

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.bg} />
      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />
      <div className={styles.inner}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          CS Student &amp; Athlete
        </div>
        <h1 className={styles.heading}>
          Hey, I'm<br /><em>Brianna.</em>
        </h1>
        <p className={styles.desc}>
          I build data-driven things that sit at the intersection of tech, sports,
          and human performance — and I believe good software should feel as good as it works.
        </p>
        <div className={styles.tags}>
          {tags.map((t) => (
            <span key={t.label} className={`${styles.tag} ${styles['tag_' + t.style]}`}>
              {t.emoji} {t.label}
            </span>
          ))}
        </div>
        <div className={styles.ctas}>
          <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>See my work</a>
          <a href="#contact" className={`${styles.btn} ${styles.btnSecondary}`}>Say hello</a>
        </div>
      </div>
      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        scroll
      </div>
    </section>
  )
}
