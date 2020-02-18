import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <div style={{ color: `teal` }}>
      <Link to="/contact/">Contact</Link>
      <Header headerText="About Gatsby" />
      <p>Such wow. Very React.</p>
    </div>
  </Layout>
)
