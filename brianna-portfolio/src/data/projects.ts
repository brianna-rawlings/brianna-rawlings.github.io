export interface Project {
  emoji: string
  title: string
  description: string
  tech: string[]
  status: 'active' | 'completed'
  featured?: boolean
  gradient: string
}

export const projects: Project[] = [
  {
    emoji: '🤖',
    title: 'AI Proposal Analysis — Ardalyst Internship',
    description: 'Building a secure AI-powered pipeline to automate federal proposal analysis and response generation. Benchmarked top LLMs including GPT-4, prototyped agentic workflows using n8n and LangChain, and tackled real data security constraints in production AI systems.',
    tech: ['Python', 'GPT-4', 'LangChain', 'n8n', 'Prompt Engineering', 'API Automation'],
    status: 'active',
    featured: true,
    gradient: 'linear-gradient(135deg, rgba(196,112,79,0.15), rgba(61,90,71,0.15))',
  },
  {
    emoji: '📈',
    title: 'WHOOP Wearable Recovery Dashboard',
    description: 'Interactive Streamlit dashboard analyzing my own sleep, strain, and HRV data to surface insights about athletic recovery. Built this because I wanted to actually understand my numbers — not just see them.',
    tech: ['Python', 'Streamlit', 'Jupyter', 'Data Viz', 'Machine Learning'],
    status: 'completed',
    gradient: 'linear-gradient(135deg, rgba(61,90,71,0.15), rgba(196,112,79,0.08))',
  },
  {
    emoji: '🗓️',
    title: 'Taylor University Registrar — Scheduling Web App',
    description: 'Partnered with a student team to redesign the manual classroom scheduling process for department chairs. The app balanced professor workloads and saved significant administrative time each semester.',
    tech: ['Django', 'Python', 'SQL', 'HTML / CSS', 'Agile'],
    status: 'completed',
    gradient: 'linear-gradient(135deg, rgba(232,221,208,0.6), rgba(196,112,79,0.1))',
  },
]
