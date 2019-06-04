import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import App from "../components/app"
import ContextProvider from "../context/contextProvider"

const IndexPage = () => (
  <Layout>
    <ContextProvider>
      <SEO title="Should I kite Poole bay" />
      <App />
    </ContextProvider>
  </Layout>
)

export default IndexPage
