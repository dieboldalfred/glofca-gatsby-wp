import React from "react"
import { ContactForm, CTAAreaTwoCol, Blurb } from "../components"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
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
