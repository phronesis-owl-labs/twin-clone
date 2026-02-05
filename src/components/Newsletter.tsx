import './Newsletter.css'

export default function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter__container">
        <h2 className="newsletter__title">Stay in the loop</h2>
        <p className="newsletter__subtitle">Subscribe to our newsletter for updates</p>
        <form className="newsletter__form" onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="Enter your email" className="newsletter__input" required />
          <button type="submit" className="newsletter__btn">Subscribe</button>
        </form>
      </div>
    </section>
  )
}
