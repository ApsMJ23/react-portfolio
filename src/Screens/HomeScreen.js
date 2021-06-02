import React from 'react'
import { Card, Col, Container, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect'
import { LinkContainer } from 'react-router-bootstrap'
import '../index.css'
import proshop from '../proshop.png'
import cart from '../cart.png'
import cocktails from '../cocktails.png'
import wave from '../wave.svg'

function HomeScreen() {
    return (
        <div>
            <img src={wave} alt="wave" />
            <Container>
                <Row>
                    <Col md={6} sm={4} className='mx-auto text-center'>
                        <h1 className='display-3'>Apurva Singh</h1>
                        <Col md={12} sm={12} className='typewriter-container text-center'>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString('Web Developer!!')
                                        .pauseFor(1000).deleteAll().typeString('Engineeering Student!!')
                                        .pauseFor(1000).deleteAll().typeString('Freelancer!!')
                                        .pauseFor(1000).deleteAll().typeString('Good Friend!!').start()
                                }}
                            />
                        </Col>
                    </Col>
                </Row>
            </Container>
            <div className='about-container' id='about'>
                <Container>
                    <Row>
                        <Col md={3}>
                            <h1>About Me</h1>
                        </Col>
                        <Col md={9} sm={12} xs={12}>
                            <p>
                                Creating web applications gives me the utmost joy, it gives me a sense of achievement. The ability to code, which innovates the user interface to optimum gives me satisfaction, I believe that I am a perfectionist and this can be seen in my code. I love programming because it is infinite and constantly changing. It has more potential for innovation, experimentation and discovery.
                    </p>
                            <p>
                                I am compelled to create smoother softwares as nobody, including me, likes slow and outdated technology. I hope that the improvements I make can improve the world.
                    </p>
                            <p>
                                My approach is simple: l think to make something great, one should think about how they would like it to be? Personal touch is important. Because isn’t homemade always better than fast fare? Join me, and let’s build a better modern web!
                    </p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container className='py-5' id='projects'>
                <h2 style={{ textAlign: 'center' }}>Mentionable Projects!!</h2>
                <Row className='py-5'>
                    <Col md={4} className='my-4' >
                        <Card>
                            <Card.Header>
                                <h3>ProShop</h3>
                            </Card.Header>
                            <Card.Body>
                                <a href='https://proshop14.herokuapp.com/#/' rel="noopener noreferrer" target='_blank'>
                                    <Image src={proshop} alt='proshop' fluid rounded /></a>
                                <p className='mt-4'>With React in frontend and Django in the backent this is a fast,secure and pretty scalable site, since the Postgresql database is hosted on AWS RDS size is not an issue, and who doesn't have paypal hence the Paypal integration!! </p>
                            </Card.Body>
                            <Card.Footer>
                                <Row>
                                    <Col className='text-start'>
                                        <Link to='/proshop' className='btn btn-warning'>Read More</Link>
                                    </Col>
                                    <Col className='text-end'>
                                        <a href="https://github.com/ApsMJ23/ProShop.git" rel="noopener noreferrer" target='_blank' className='btn btn-warning'><i className='fab fa-github'></i> Source Code</a>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4} className='my-4'  >
                        <Card>
                            <Card.Header>
                                <h3>Cocktails</h3>
                            </Card.Header>
                            <Card.Body>
                                <a href='https://cocktails14.netlify.app/' rel="noopener noreferrer" target='_blank'>
                                    <Image src={cocktails} alt='cocktails' fluid rounded /></a>
                                <p className='mt-4'>This is a react baseed cocktail database, I combined my love of cocktails and code, with an added bonus of learning the use of react-router-dom while working on this project and how to fetch data from external APIs.This was my first presentable site.</p>

                            </Card.Body>
                            <Card.Footer>
                                <Row>
                                    <Col className='text-start'>
                                        <Link to='/cocktails' className='btn btn-warning'>Read More</Link>
                                    </Col>
                                    <Col className='text-end'>
                                        <a href="https://github.com/ApsMJ23/React-Project/tree/master/14.Cocktails" rel="noopener noreferrer" target='_blank' className='btn btn-warning'><i className='fab fa-github'></i> Source Code</a>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4} className='my-4' >
                        <Card>
                            <Card.Header>
                                <h3>My journey to ReactJS</h3>
                            </Card.Header>
                            <Card.Body>
                                <LinkContainer to='/reactprojects'>
                                    <Image src={cart} alt='cart' fluid rounded />
                                </LinkContainer>
                                <p className='mt-4'>The need to learn react grew when It was getting really repetitive and tiresome to do stuff in javascript,so I started following John Smilga's course on React,He explains so effortlessly and before you know it you're redoing your portfolio in react!!</p>

                            </Card.Body>
                            <Card.Footer>
                                <Row>
                                    <Col className='text-start'>
                                        <Link to='/reactprojects' className='btn btn-warning'>Read More</Link>
                                    </Col>
                                    <Col className='text-end'>
                                        <a href="https://github.com/ApsMJ23/React-Project.git" rel="noopener noreferrer" target='_blank' className='btn btn-warning'><i className='fab fa-github'></i> Source Code</a>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div >
    )
}

export default HomeScreen
