import { useMemo, useRef, useEffect, useState } from 'react'
import ChatMockup from './ChatMockup'
import './Features.css'

interface FeaturesProps {
  scrollY: number
}

const FEATURES = [
  {
    title: 'Start with a conversation, not a spec.',
    em: 'conversation',
    description: 'Describe what you want to accomplish. Twin helps you brainstorm, refine, and turn vague ideas into working agents—no upfront planning required.',
  },
  {
    title: 'Connects to any API, built on the fly.',
    em: 'fly',
    description: 'Twin creates integrations in real time. If the API exists, then Twin is already integrated. Your agent can use it without you writing a single line.',
  },
  {
    title: "When there's no API, it uses the browser.",
    em: 'browser',
    description: 'Your agent can log in, click, scroll, and extract data like a human would. If it works in a browser, Twin can automate it.',
  },
  {
    title: 'Deploy once, run forever.',
    em: 'forever',
    description: 'Set your agent to run on a schedule or trigger it from webhooks, emails, or messages. It keeps working while you sleep.',
  },
  {
    title: 'Share with the community.',
    em: 'community',
    description: 'Publish your agents for others to use. Discover what others have built. And get opportunities from sharing yours with the world.',
  },
]

export default function Features({ scrollY }: FeaturesProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [sectionTop, setSectionTop] = useState(0)

  useEffect(() => {
    if (sectionRef.current) {
      setSectionTop(sectionRef.current.offsetTop)
    }
  }, [])

  const activeIndex = useMemo(() => {
    const heroHeight = window.innerHeight * 3
    const relativeScroll = scrollY - heroHeight
    if (relativeScroll < 0) return 0
    const sectionHeight = window.innerHeight * 0.5
    return Math.min(Math.floor(relativeScroll / sectionHeight), FEATURES.length - 1)
  }, [scrollY])

  // Helper to render title with em tag
  const renderTitle = (title: string, em: string) => {
    const parts = title.split(em)
    return (
      <>
        {parts[0]}<em>{em}</em>{parts[1]}
      </>
    )
  }

  return (
    <section className="features" ref={sectionRef}>
      <div className="features__desktop">
        <div className="features__text-column">
          {FEATURES.map((feature, i) => (
            <div key={i} className={`features__block ${i === activeIndex ? 'features__block--active' : ''}`}>
              <h2>{renderTitle(feature.title, feature.em)}</h2>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="features__mockup-column">
          <div className="features__mockup-sticky">
            <div className="features__mockup-container">
              <ChatMockup />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className="features__mobile">
        {FEATURES.map((feature, i) => (
          <div key={i} className="features__block features__block--active">
            <h2>{renderTitle(feature.title, feature.em)}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
