import React from "react"
import { GrievanceForm, CTAAreaTwoCol, Blurb } from "../components"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <CTAAreaTwoCol
        format="even"
        leftColumn={<Blurb heading="Submit Feedback" />}
        rightColumn={<GrievanceForm />}
      />
    </Layout>
  )
}

export default Contact
