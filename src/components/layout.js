import * as React from "react"

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} Your Site Name
      </footer>
    </div>
  )
}

export default Layout