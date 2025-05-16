import { Github } from "lucide-react"

export default function UniverseFooter() {
  return (
    <footer className="universe-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Github className="github-icon" />
          <span className="copyright">© {new Date().getFullYear()} EyeCode Battle</span>
        </div>

        <div className="footer-links">
          <a href="#" className="footer-link">
            About
          </a>
          <a href="#" className="footer-link">
            Rules
          </a>
          <a href="#" className="footer-link">
            Previous Editions
          </a>
          <a href="#" className="footer-link">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
