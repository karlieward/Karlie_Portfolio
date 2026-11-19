export default function Footer() {
  return (
    <footer className="kw-footer">
      <span>© {new Date().getFullYear()} Karlie Ward</span>
      <div className="kw-links">
        <a href="mailto:karlie3@byu.edu">Email</a>
        <a href="https://www.linkedin.com/in/karlieward/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/karlieward" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </footer>
  )
}
