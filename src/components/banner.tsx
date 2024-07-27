import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "@icons/header-img.png"
import { useTranslation } from 'react-i18next';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const { t } = useTranslation();

    const toRotate = ["Fullstack", "Vue3", "React", "Clean-Code", "Clean-Architecture", "TDD", "Agile", "DevOps", "Microservices", "Git", "Jest"]

    const [text, setText] = useState('')
    const [delta, setDelta] = useState(100 - Math.random() *100)
    const period = 500

    useEffect(() => {
        const ticker =  setInterval(() => {
            tick()
        }, delta)

        return () => {clearInterval(ticker)}
    })

    const tick = () => {
        const i = loopNum % toRotate.length
        const fullText = toRotate[i]
        const updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(200)
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">{t('banner.tagline')}</span>
                        <h1>{t('banner.hi')} <br/><span className="wrap">{text}  &#8205;</span></h1>
                        <p>{t('banner.about_me')}</p>
                        <button onClick={()=>console.log('connected')}>{t('banner.connect')}<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" width={500}/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}