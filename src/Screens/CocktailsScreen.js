import React from 'react'
import { Container, Row, Col, Image, ListGroup, Button } from 'react-bootstrap'
import cocktails from '../cocktails.png'
import html from '../images/html.png'
import bootstrap from '../images/bootstrap.png'
import css from '../images/css.png'
import node from '../images/node.png'
import js from '../images/js.png'



function CocktailsScreen() {
    return (
        <Container fluid>
            <h2 className='text-center m-3'>The CockTailDB</h2>
            <Row>
                <Col md={8}>
                    <Col md={7}>
                        <a href='https://cocktails14.netlify.app'>
                            <Image src={cocktails} fluid rounded className='p-3 proImg' /></a>
                    </Col>
                    <Col md={12}>
                        <p>This was my final project while I was doing the course from John Smilga, in this I applied all the concepts that I learned from the course, I fetched the data from an external api,which had great data about the different types of cocktails, and I made a search bar which was the first time I got to know about the filter funciton in JS. The most fun part about this project was that this could help college students who had the taste for exotic cocktails, and I felt like my creation would be helpful for someone. </p><br></br>
                        <h4><strong>Frontend</strong></h4>
                        <p>The fronted of this project used React as the javascript libraby and Redux to manage the application state. I used bootstrap to make the site responsive and I used some of my own CSS for some extra styling, I used axios to fetch and post data to and from our django rest api, using axios was easier than the fetch command as it has much more functionality and is faster</p>
                        <Row>
                            <Col md={5}>
                                <h4><strong>What I learned</strong></h4>
                                <ul>
                                    <li>APIs</li>
                                    <li>useReducer</li>
                                    <li>ReactJS</li>
                                    <li>Bootstrap</li>
                                </ul>
                            </Col>
                            <Col md={6} className='my-4'>

                                <a href='https://github.com/ApsMJ23/React-Project/tree/master/14.Cocktails'>
                                    <Button className='mx-3 btn-warning'><strong><i className='fab fa-github'></i>Source Code</strong></Button>
                                </a>

                                <a href='https://cocktails14.netlify.app'>
                                    <Button className=' btn-warning'><strong><i className='fas fa-laptop'></i>Website</strong></Button>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Col>
                <Col md={4} className='mb-5'>
                    <ListGroup variant='flush' className='px-2 shadow-lg'>
                        <ListGroup.Item>
                            <h4 className='text-center'>Technologies Used!!</h4>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col md={6} xs={6} className='p-3'>
                                    <Image src={html} alt='html' fluid />
                                    <Image src={css} alt='css' fluid className='mb-3' />
                                    <Image src={bootstrap} alt='bootstrap' fluid />
                                </Col>
                                <Col md={6} xs={6} className='p-3'>
                                    <Image src={js} alt='js' fluid className='mt-3' />
                                    <Image src={node} alt='node' fluid className='mt-5' />
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container >
    )
}

export default CocktailsScreen
