import { useReveal } from '../hooks/useReveal'
import { projects, type Project } from '../data/projects'
import styles from './Projects.module.css'

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <div className={`${styles.card} ${project.featured ? styles.featured : ''} reveal ${delay ? `reveal-delay-${delay}` : ''}`}>
      <div className={styles.imgArea} style={{ background: project.gradient }}>
        <span className={styles.emoji}>{project.emoji}</span>
      </div>
      <div className={styles.body}>
        <span className={`${styles.status} ${project.status === 'active' ? styles.active : styles.done}`}>
          {project.status === 'active' ? '● Active' : 'Completed'}
        </span>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.description}</p>
        <div className={styles.tech}>
          {project.tech.map((t) => <span key={t} className={styles.pill}>{t}</span>)}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  useReveal()
  return (
    <section id="projects" className={styles.section}>
      <div className="section-inner">
        <div className={`${styles.header} reveal`}>
          <p className="section-label">Work</p>
          <h2 className={styles.heading}>Things I've built</h2>
        </div>
        <div className={styles.grid}>
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
