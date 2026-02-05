import './IndustryGrid.css'

const INDUSTRIES = [
  { name: 'Content & Marketing', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600' },
  { name: 'E-Commerce & Retail', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600' },
  { name: 'Real Estate', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600' },
  { name: 'Agencies', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600' },
  { name: 'Travel & Hospitality', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600' },
  { name: 'Restaurants & Food', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600' },
  { name: 'Finance & Investment', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600' },
  { name: 'Startups & Founders', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600' },
  { name: 'Personal Productivity', image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600' },
  { name: 'Recruiting & Staffing', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600' },
  { name: 'Wellness & Healthcare', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600' },
  { name: 'Logistics & Supply Chain', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600' },
]

export default function IndustryGrid() {
  return (
    <section className="industry-grid">
      <div className="industry-grid__container">
        <h2 className="industry-grid__title">
          There is a twin<br />
          for every <em>industry</em>.
        </h2>
        <div className="industry-grid__cards">
          {INDUSTRIES.map((industry, i) => (
            <a key={i} href={`/discover?industry=${encodeURIComponent(industry.name)}`} className="industry-card">
              <div className="industry-card__bg" style={{ backgroundImage: `url(${industry.image})` }} />
              <div className="industry-card__overlay" />
              <span className="industry-card__name">{industry.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
