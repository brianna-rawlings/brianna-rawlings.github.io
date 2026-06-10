import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="#home" className={styles.name}>Brianna Rawlings</a>
      <ul className={styles.links}>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="/resume.pdf" className={styles.resumeBtn} target="_blank" rel="noreferrer">Resume ↗</a></li>
      </ul>
    </nav>
  )
}
