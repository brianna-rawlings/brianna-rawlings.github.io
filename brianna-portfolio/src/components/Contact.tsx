import { useReveal } from '../hooks/useReveal'
import styles from './Contact.module.css'

const links = [
  { icon: '✉️', label: 'Email', value: 'brianna.rawlings@taylor.edu', href: 'mailto:brianna.rawlings@taylor.edu' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/brianna-rawlings', href: 'https://linkedin.com/in/brianna-rawlings' },
  { icon: '🐙', label: 'GitHub', value: 'github.com/brianna-rawlings', href: 'https://github.com/brianna-rawlings' },
]

const funFacts = [
  { icon: '🎣', text: 'Happiest with a fishing rod in a lake somewhere quiet' },
  { icon: '🥾', text: 'Hiking trails > treadmills, always' },
  { icon: '🏕️', text: 'Camping is basically my reset button' },
  { icon: '🎵', text: 'Country music on shuffle is my coding soundtrack' },
  { icon: '🍦', text: 'Will never turn down ice cream, ever' },
]

export default function Contact() {
  useReveal()
  return (
    <section id="contact" className={styles.section}>
      <div className="section-inner">
        <p className={`section-label ${styles.label} reveal`}>Say hello</p>
        <h2 className={`${styles.heading} reveal`}>Let's connect.</h2>
        <div className={styles.grid}>
          <div className={`${styles.left} reveal`}>
            <p className={styles.intro}>Whether you're a recruiter, a fellow athlete-coder, or someone who also thinks sleep data is fascinating — I'd love to hear from you.</p>
            <div className={styles.links}>
              {links.map((l) => (
                <a key={l.label} href={l.href} className={styles.link} target="_blank" rel="noreferrer">
                  <span className={styles.linkIcon}>{l.icon}</span>
                  <span>
                    <span className={styles.linkLabel}>{l.label}</span>
                    <span className={styles.linkVal}>{l.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div className={`${styles.right} reveal reveal-delay-1`}>
            <h3 className={styles.rightHeading}>A few more things about me</h3>
            <p className={styles.rightSub}>When the laptop closes...</p>
            <div className={styles.facts}>
              {funFacts.map((f) => (
                <div key={f.text} className={styles.fact}>
                  <span className={styles.factIcon}>{f.icon}</span>
                  <span>{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
