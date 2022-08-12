import React from "react"
import { ContactForm, CTAAreaTwoCol, Blurb, Seo } from "../components"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <Seo title="Contact" />
      <CTAAreaTwoCol
        customClass="cta-purple"
        format="even"
        leftColumn={<Blurb heading="Get In Touch" />}
        rightColumn={<ContactForm />}
      />
    </Layout>
  )
}

export default Contact
