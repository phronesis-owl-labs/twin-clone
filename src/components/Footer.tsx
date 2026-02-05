import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__col footer__col--brand">
          <div className="footer__logo">twin</div>
          <p className="footer__tagline">The AI company builder</p>
        </div>
        <div className="footer__col">
          <h5>Product</h5>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Discover</a>
          <a href="#">Blog</a>
        </div>
        <div className="footer__col">
          <h5>Company</h5>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer__col">
          <h5>Legal</h5>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© 2026 Twin. All rights reserved.</p>
      </div>
    </footer>
  )
}
