import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to Loamner</p>
    <p>This is the index.js inside pages</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
