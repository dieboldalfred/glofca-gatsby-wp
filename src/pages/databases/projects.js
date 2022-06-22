import React from "react"

// components
import {
  TableContainer,
  Section,
  SectionContent,
  BreadCrumb,
} from "../../components"
import Layout from "../../components/Layout"

const Projects = () => {
  return (
    <Layout>
      <SectionContent>
        <BreadCrumb />
      </SectionContent>
      <Section title="Projects">
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
export default Projects
