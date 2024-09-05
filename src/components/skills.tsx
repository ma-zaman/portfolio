import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import percent_80 from '@icons/80_percent.png';
import percent_85 from '@icons/85_percent.png';
import percent_90 from '@icons/90_percent.png';
import percent_95 from '@icons/95_percent.png';
import { useTranslation } from 'react-i18next';

export const Skills = () => {
  const { t } = useTranslation();

  // TODO: create type CarouselConf and set responsive: Record<string, CarouselConf>
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills: Array<Record<string, string>> = [
    {
      name: 'TypeScript',
      level: percent_90,
    },
    {
      name: 'Vue3',
      level: percent_95,
    },
    {
      name: 'React',
      level: percent_85,
    },
    {
      name: 'NodeJS',
      level: percent_85,
    },
    {
      name: 'Nest',
      level: percent_80,
    },
    {
      name: 'MongoDB',
      level: percent_85,
    },
    {
      name: 'Jest',
      level: percent_85,
    },
    {
      name: 'Cypress',
      level: percent_80,
    },
    {
      name: 'Kafka (Event Streaming)',
      level: percent_85,
    },
    {
      name: 'Docker',
      level: percent_80,
    },
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>{t('skills.title')}</h2>
              <p>{t('skills.subtitle')}</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                {skills.map((skill) => {
                  return (
                    <div className="item" key={skill.name}>
                      <img src={skill.level} alt="" />
                      <h5>{skill.name}</h5>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
