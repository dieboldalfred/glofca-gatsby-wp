import React from "react"
import { ContactForm, CTAArea, Blurb } from "../components"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <CTAArea
        leftColumn={<Blurb heading="Get In Touch" />}
        rightColumn={<ContactForm />}
      />
    </Layout>
  )
}

export default Contact
