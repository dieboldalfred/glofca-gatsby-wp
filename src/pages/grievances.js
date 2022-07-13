import React from "react"
import { GrievanceForm, CTAAreaTwoCol, Blurb } from "../components"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <CTAAreaTwoCol
        format="even"
        leftColumn={
          <Blurb
            heading="Grievance Form"
            minorHeading="Grievance Mechanism (GM) is a complaint and proposal consideration mechanism that provides an accessible channel for submission of complaints and feedback to individuals and communities, if they suppose that the GLOFCA Project has or may have negative impact for them. GM allows to improve the response efficiency and accountability level to the project beneficiaries, ensuring the prompt complaints and feedback consideration and processing, as well as problems identification and finding their solutions together with the stakeholders."
          />
        }
        rightColumn={<GrievanceForm />}
      />
    </Layout>
  )
}

export default Contact
