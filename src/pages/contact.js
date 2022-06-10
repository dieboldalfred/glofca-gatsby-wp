import React from "react"
import { ContactForm, CTA, Blurb } from "../components"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <CTA
        leftColumn={<Blurb heading="Get In Touch" />}
        rightColumn={<ContactForm />}
      />
    </Layout>
  )
}

export default Contact
