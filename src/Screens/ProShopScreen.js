import React from 'react'
import { Container, Row, Col, Image, ListGroup, Button } from 'react-bootstrap'
import proshop from '../proshop.png'
import html from '../images/html.png'
import bootstrap from '../images/bootstrap.png'
import css from '../images/css.png'
import django from '../images/django.png'
import node from '../images/node.png'
import aws from '../images/aws.png'
import js from '../images/js.png'
import postman from '../images/postman.png'
import postgre from '../images/postgre.png'


function ProShopScreen() {
    return (
        <Container fluid>
            <h2 className='text-center m-3'>Proshop-My first attempt at an e-commerce website!!</h2>
            <Row>
                <Col md={8}>
                    <Col md={7}>
                        <a href='https://proshop14.herokuapp.com/#/'>
                            <Image src={proshop} fluid rounded className='p-3 proImg' /></a>
                    </Col>
                    <Col md={12}>
                        <p>I started this project on 21st May 2021, Since I had completed CS50's Web Programming in pyhton and Javascript I had the starting knowledge of django and the course my John Smilga enabled me to use react as well in my project, so after this project helped me learn how to combine those 2 technologies together,I was really excited to do this project but honestly, it was really tiresome, because I give myself a deadline before starting anything and for this project it was a week, hence i had to watch 18hrs worth of content and understand it and code it myself, but it is my personal opinion, the person who started this cource and the guy who ended it are 2 different people, this course not only helped me make a website worthy to put on my resume but it taught me how to stay consistent, how to not give up even though every part of your mind says otherwise, and at last it made me a better coder than I was before.I completed this course on 28th May 2021, and now let me tell you how I did it, So the whole project was divided into frontend and backend:</p>
                        <h4><strong>Frontend</strong></h4>
                        <p>The fronted of this project used React as the javascript libraby and Redux to manage the application state. I used bootstrap to make the site responsive and I used the Lux theme from <a href='https://bootswatch.com/'>Bootswatch.com</a> for some extra styling, I used axios to fetch and post data to and from our django rest api, using axios was easier than the fetch command as it has much more functionality and is faster, I used JWT as an authentication method as it was safe and fast, and for the paypal integration buttons we couldn't use the provided buttons because they don't support JSX hence I had to resort to 3rd party libraries.  </p>
                        <h4><strong>Backend</strong></h4>
                        <p>In the backend I used Django as the web framework, I used postgresql as my database which was hosted on AWS with all my static files(images) stored in an AWS S3 bucket,the main function of any backend is to send and recieve api requests, and django rest framework was the best for it, its GUI helped a lot, especially during JWT authentications, I used postman to check my api URLs, The trickiest part was hosting the database on AWS it was pretty confusing this is where Dennis helped me smooth the whole process. </p>
                        <Row>
                            <Col md={5}>
                                <h4><strong>What I learned</strong></h4>
                                <ul>
                                    <li>Django Rest Framework</li>
                                    <li>Redux</li>
                                    <li>AWS Integraion</li>
                                    <li>PostgreSql</li>
                                    <li>Postman</li>
                                </ul>
                            </Col>
                            <Col md={6} className='p-5'>

                                <a href='https://github.com/ApsMJ23/ProShop.git'>
                                    <Button className='mx-3 btn-warning'><strong><i className='fab fa-github'></i>Source Code</strong></Button>
                                </a>

                                <a href='https://proshop14.herokuapp.com/#/'>
                                    <Button className=' btn-warning'><strong><i className='fas fa-laptop'></i>Website</strong></Button>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Col>
                <Col md={4} className='py-5'>
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
                                    <Image src={js} alt='js' fluid className='mt-3' />
                                </Col>
                                <Col md={6} xs={6} className='p-3'>
                                    <Image src={django} alt='django' fluid className='mt-4' />
                                    <Image src={node} alt='node' fluid className='mt-5' />
                                    <Image src={aws} alt='aws' fluid className='mt-5' />
                                    <Image src={postman} alt='postman' fluid className='mt-2' />
                                </Col>
                                <Col md={8} xs={8} className='mx-auto'>
                                    <Image src={postgre} alt='postgre' fluid />
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container >
    )
}

export default ProShopScreen
