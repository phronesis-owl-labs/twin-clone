import { useMemo } from 'react'
import './Hero.css'

interface HeroProps {
  scrollY: number
}

const CARDS = [
  { title: 'Real Estate Agent', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800' },
  { title: 'Startup Founder', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800' },
  { title: 'Influencer', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800' },
  { title: 'Food Truck Owner', image: 'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=800' },
  { title: 'Pool Cleaning Service', video: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-pool-with-palm-trees-in-a-tropical-4748-large.mp4' },
  { title: 'Interior Designer', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800' },
  { title: 'Personal Trainer', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800' },
  { title: 'Wedding Planner', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800' },
  { title: 'Online Business', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800' },
]

export default function Hero({ scrollY }: HeroProps) {
  const scrollProgress = useMemo(() => {
    const maxScroll = typeof window !== 'undefined' ? window.innerHeight * 2 : 1000
    return Math.min(scrollY / maxScroll, 1)
  }, [scrollY])

  const gridScale = 1 + (1 - scrollProgress) * 2
  const gridOpacity = scrollProgress < 0.8 ? 1 : 1 - (scrollProgress - 0.8) * 5
  const titleOpacity = scrollProgress < 0.1 ? scrollProgress * 10 : scrollProgress > 0.7 ? 1 - (scrollProgress - 0.7) * 3.33 : 1
  const titleTransform = scrollProgress < 0.1 ? 16 - scrollProgress * 160 : 0

  return (
    <section className="hero">
      <div className="hero__scroll-container">
        <div className="hero__sticky">
          <div className="hero__grid" style={{ transform: `scale(${gridScale})`, opacity: gridOpacity }}>
            {CARDS.map((card, i) => (
              <div key={i} className="hero__card">
                <div className="hero__card-media">
                  {card.video ? (
                    <video autoPlay loop muted playsInline>
                      <source src={card.video} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={card.image} alt={card.title} />
                  )}
                </div>
                <div className="hero__card-title">{card.title}</div>
              </div>
            ))}
          </div>
          <div className="hero__title" style={{ opacity: titleOpacity, transform: `translateY(${titleTransform}px)` }}>
            <h1>The AI<br /><em>company</em><br /><span>builder</span></h1>
          </div>
        </div>
      </div>
    </section>
  )
}
