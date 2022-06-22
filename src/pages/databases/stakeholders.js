import React from "react"

// components
import {
  TableContainer,
  Section,
  SectionContent,
  BreadCrumb,
} from "../../components"
import Layout from "../../components/Layout"

const Stakeholders = () => {
  return (
    <Layout>
      <SectionContent>
        <BreadCrumb />
      </SectionContent>
      <Section title="Stakeholders">
        <SectionContent>
          {/* <Container>
            <TableContainer
              columns={columns}
              data={data}
              renderRowSubComponent={renderRowSubComponent}
            />
          </Container> */}
        </SectionContent>
      </Section>
    </Layout>
  )
}
export default Stakeholders
