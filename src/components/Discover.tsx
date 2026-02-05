import './Discover.css'

const AGENTS = [
  { name: 'AI Education Job Finder', description: 'Searches for AI education and EdTech job opportunities.' },
  { name: 'Les Masques Tombent', description: 'Generates illustrated stories with AI-created images.' },
  { name: 'Prompt Enhancer', description: 'Analyzes and enhances user-submitted prompts.' },
  { name: 'Hacker News AI Image', description: 'Scrapes top Hacker News articles and generates AI images.' },
  { name: 'Instagram DM Bot', description: 'Monitors Instagram DMs and drafts personalized replies.' },
  { name: 'Daily Tech News Compiler', description: 'Compiles daily briefing with tech news from multiple sources.' },
]

export default function Discover() {
  return (
    <section className="discover">
      <div className="discover__container">
        <h2 className="discover__title">Discover</h2>
        <div className="discover__grid">
          {AGENTS.map((agent, i) => (
            <a key={i} href="#" className="discover-card">
              <h3 className="discover-card__name">{agent.name}</h3>
              <p className="discover-card__desc">{agent.description}</p>
            </a>
          ))}
        </div>
        <div className="discover__cta">
          <a href="/discover" className="btn btn-primary">See all agents</a>
        </div>
      </div>
    </section>
  )
}
