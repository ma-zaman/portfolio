import { Col } from "react-bootstrap"
import { useTranslation } from "react-i18next";

export type ProjectCardProps = {
  title: string,
  description: string,
  imgUrl: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({title, description, imgUrl}) => {
  
  const { t } = useTranslation();
  
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <div className="project-logo">
          <img className="project-logo-image" src={imgUrl}/>
        </div>
        <div className="proj-txtx">
          <h4>{t(title)}</h4>
          <span>{t(description)}</span>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard