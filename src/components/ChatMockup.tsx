import './ChatMockup.css'

const AGENTS = [
  { name: 'Pool Cleaning Orchestrator', time: '3m ago', color: '#FF69B4', active: true },
  { name: 'Local Hotel Finder', time: '1h ago', color: '#FFD93D' },
  { name: 'Hotel Reviews Analyzer', time: 'yesterday', color: '#00D4FF' },
  { name: 'Cleaning Time Updater', time: 'A week ago', color: '#4ADE80' },
]

const MESSAGES = [
  { type: 'user', text: 'Automate my pool cleaning job' },
  { type: 'assistant', text: "What's draining your time—finding clients or managing jobs?" },
  { type: 'user', text: 'Finding clients. Always hustling for hotels.' },
  { type: 'assistant', text: 'I can find hotels with pools, cold-call them via Vapi, and book jobs. Want the full pipeline?' },
  { type: 'user', text: 'Yes, lets go' },
  { type: 'assistant', text: "Here's the goal:", quote: 'Find hotels with pools on Booking.com, cold-call via Vapi, and book jobs in your calendar.', after: 'Starting to build your agent now.' },
]

const AgentIcon = ({ color }: { color: string }) => (
  <div className="agent-icon" style={{ backgroundColor: color }}>
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
      <path d="M13.999 14H0L0 10.4268C5.47541 9.82179 9.82247 5.47532 10.4277 0L13.999 0V14Z" fill="#373428"/>
    </svg>
  </div>
)

export default function ChatMockup() {
  return (
    <div className="chat-mockup">
      {/* Sidebar */}
      <div className="chat-sidebar">
        <div className="chat-sidebar__header">
          <div className="chat-sidebar__logo">twin</div>
          <div className="chat-sidebar__actions">
            <button>🔍</button>
            <button>📋</button>
          </div>
        </div>
        <div className="chat-sidebar__list">
          <div className="chat-sidebar__item chat-sidebar__item--new">
            <div className="chat-sidebar__new-icon">+</div>
            <span>New agent</span>
          </div>
          {AGENTS.map((agent, i) => (
            <div key={i} className={`chat-sidebar__item ${agent.active ? 'chat-sidebar__item--active' : ''}`}>
              <AgentIcon color={agent.color} />
              <div className="chat-sidebar__item-info">
                <span className="chat-sidebar__item-name">{agent.name}</span>
                <span className="chat-sidebar__item-time">{agent.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="chat-main">
        <div className="chat-main__header">
          <AgentIcon color="#FF69B4" />
          <span>Pool Cleaning Orchestrator</span>
        </div>
        <div className="chat-main__messages">
          {MESSAGES.map((msg, i) => (
            <div key={i} className={`chat-message chat-message--${msg.type}`}>
              {msg.type === 'user' ? (
                <div className="chat-message__bubble">{msg.text}</div>
              ) : (
                <div className="chat-message__content">
                  <p>{msg.text}</p>
                  {msg.quote && <blockquote>{msg.quote}</blockquote>}
                  {msg.after && <p>{msg.after}</p>}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel */}
      <div className="chat-panel">
        <div className="chat-panel__header">
          <div className="chat-panel__tabs">
            <button className="chat-panel__tab">Interface</button>
            <button className="chat-panel__tab chat-panel__tab--active">Tasks</button>
            <button className="chat-panel__tab">Memory</button>
            <button className="chat-panel__tab">Trigger</button>
            <button className="chat-panel__tab">Apps</button>
          </div>
        </div>
        <div className="chat-panel__content"></div>
      </div>
    </div>
  )
}
