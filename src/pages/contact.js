import React from "react"
import { ContactForm, CTAAreaTwoCol, Blurb } from "../components"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <CTAAreaTwoCol
        leftColumn={<Blurb heading="Get In Touch" />}
        rightColumn={<ContactForm />}
      />
    </Layout>
  )
}

export default Contact
