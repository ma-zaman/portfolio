import { Container, Row, Col, Nav, Tab } from "react-bootstrap"
import ProjectCard from "./ProjectCard"
import logo_LIPN from "@/assets/icons/logo_LIPN.png"
import logo_CNRS from "@/assets/icons/logo_CNRS.png"
import logo_Capgemini from "@/assets/icons/logo_Capgemini.png"
import logo_Orange from "@/assets/icons/logo_Orange.png"
import logo_principal from "@/assets/icons/logo_principal.png"
import { useTranslation } from "react-i18next"

export const Projects = () => {
  const { t } = useTranslation();
  const projectsPro = [{
    title: "professional_projects.lipn_intern.title",
    description: "professional_projects.lipn_intern.description",
    imgUrl: logo_LIPN
  },{
    title: "professional_projects.cnrs_apprenticeship.title",
    description: "professional_projects.cnrs_apprenticeship.description",
    imgUrl: logo_CNRS
  },{
    title: "professional_projects.capgemini.title",
    description: "professional_projects.capgemini.description",
    imgUrl: logo_Capgemini
  },{
    title: "professional_projects.orange_first.title",
    description: "professional_projects.orange_first.description",
    imgUrl: logo_Orange
  },{
    title: "professional_projects.orange_second.title",
    description: "professional_projects.orange_second.description",
    imgUrl: logo_Orange
  },]

  const projectsPerso = [{
    title: "personal_projects.portfolio.title",
    description: "personal_projects.portfolio.description",
    imgUrl: logo_principal
  }]
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Here you can find all the different projects I have worked on</p>
            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
            <Nav variant="pills" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link eventKey='first'>{t('professional_projects.title')}</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='second'>{t('personal_projects.title')}</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey='first'>
                <Row>
                  {
                    projectsPro.map((project, index) => {
                      return (
                        <ProjectCard key={index} {...project} />
                      )
                    })
                  }
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey='second'>
                <Row>
                {
                    projectsPerso.map((project, index) => {
                      return (
                        <ProjectCard key={index} {...project} />
                      )
                    })
                  }
                </Row>
              </Tab.Pane>
            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}