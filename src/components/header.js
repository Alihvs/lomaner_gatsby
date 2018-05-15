import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div style={{
    backgroundColor: '#ba90ed',
    minHeight: "60px"
  }}>
    <h1 style={{
        color: "#ffffff",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0'
      }}>
      <Link
        to="/">
        {siteTitle}
      </Link>
    </h1>
  </div>
)

export default Header
