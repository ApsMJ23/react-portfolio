import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import react_banner from '../images/react-banner.png'
import bday from '../images/react-project-thumbnails/birthday-reminder.png'
import tours from '../images/react-project-thumbnails/tours.png'
import accordion from '../images/react-project-thumbnails/accordion.png'
import reviews from '../images/react-project-thumbnails/reviews.png'
import tabs from '../images/react-project-thumbnails/tabs.png'
import menu from '../images/react-project-thumbnails/menu.png'
import colorgenerator from '../images/react-project-thumbnails/colorgenerator.png'
import loremipsum from '../images/react-project-thumbnails/loremipsum.png'
import slider from '../images/react-project-thumbnails/slider.png'
import cart from '../images/react-project-thumbnails/cart.png'
import grocerybud from '../images/react-project-thumbnails/grocerybud.png'
import stripe from '../images/react-project-thumbnails/stripe.png'



function ReactProjectScreen() {
    return (<div>
        <Container className='pb-5 mb-5'>
            <Row>
                <Col md={8} xs={12} className='mt-5'>
                    <h1 className='pt-5 mt-5 '><span className='rp-title'>React Projects</span></h1>
                    <h3 className='py-4 rp-bdy'>Projects are the most practical way to learn any language, and React is no exception. Solidify your knowledge of React by creating these cool projects.</h3>
                </Col>
                <Col md={4} xs={12} className='mt-5'>
                    <Image src={react_banner} fluid />
                </Col>
            </Row>
        </Container>
        <div className='py-5 bg-dark px-1'>
            <Container>
                <h2 className='text-center mb-5'><span className='rp-title'>Basic Projects</span></h2>
                <Row className='pt-3'>




                    <Col md={4} >
                        <Card className='project-container'>
                            <Card.Header>
                                <a href='https://birthday-reminder14.netlify.app' target='_blank' rel="noopener noreferrer">
                                    <Image src={bday} alt='birthday-reminder' fluid rounded className='p-2' /></a>
                            </Card.Header>
                            <Card.Footer>
                                <h4 className='text-center'>Birthday Reminder</h4>
                            </Card.Footer>
                        </Card>


                        <Card className='project-container mt-5'>
                            <Card.Header>
                                <a href='https://accordion14.netlify.app' target='_blank' rel="noopener noreferrer">
                                    <Image src={accordion} alt='accordion' fluid rounded className='p-2' /></a>
                            </Card.Header>
                            <Card.Footer>
                                <h4 className='text-center'> Accordion</h4>
                            </Card.Footer>
                        </Card>


                        <Card className='project-container mt-5'>
                            <Card.Header>
                                <a href='https://slider14.netlify.app' target='_blank' rel="noopener noreferrer">
                                    <Image src={slider} alt='slider' fluid rounded className='p-2' /></a>
                            </Card.Header>
                            <Card.Footer>
                                <h4 className='text-center'> Slider</h4>
                            </Card.Footer>
                        </Card>


                        <Card className='project-container mt-5'>
                            <Card.Header>
                                <a href='https://grocerybud14.netlify.app' target='_blank' rel="noopener noreferrer">
                                    <Image src={grocerybud} alt='grocerybud' fluid rounded className='p-2' /></a>
                            </Card.Header>
                            <Card.Footer>
                                <h4 className='text-center'> Grocery Bud</h4>
                            </Card.Footer>
                        </Card>
                    </Col>





                    <Col md={4}>
                        <Card className='project-container'>
                            <Card.Header>
                                <a href='https://tours14.netlify.app' target='_blank' rel="noopener noreferrer">
                                    <Image src={tours} alt='tour' fluid rounded className='p-2' /></a>
                            </Card.Header>
                            <Card.Footer>
                                <h4 className='text-center'>Tours</h4>
                            </Card.Footer>
                        </Card>


                        <Card className='project-container mt-5'>
                            <Card.Header>
                                <a href='https://menu14.netlify.app' target='_blank' rel="noopener noreferrer">
                                    <Image src={menu} alt='menu' fluid rounded className='p-2' /></a>
                            </Card.Header>
                            <Card.Footer>
                                <h4 className='text-center'>Menu</h4>
                            </Card.Footer>
                        </Card>



                        <Card className='project-container mt-5'>
                            <Card.Header>
                                <a href='https://loremipsum14.netlify.app' target='_blank' rel="noopener noreferrer">
                                    <Image src={loremipsum} alt='loremIpsum' fluid rounded className='p-2' /></a>
                            </Card.Header>
                            <Card.Footer>
                                <h4 className='text-center'>Lorem Ipsum</h4>
                            </Card.Footer>
                        </Card>


                        <Card className='project-container mt-5'>
                            <Card.Header>
                                <a href='https://stripe14.netlify.app' target='_blank' rel="noopener noreferrer">
                                    <Image src={stripe} alt='stripe' fluid rounded className='p-2' /></a>
                            </Card.Header>
                            <Card.Footer>
                                <h4 className='text-center'>Stripe</h4>
                            </Card.Footer>
                        </Card>
                    </Col>




                    <Col md={4}>
                        <Card className='project-container'>
                            <Card.Header>
                                <a href='https://reviews14.netlify.app' target='_blank' rel="noopener noreferrer">
                                    <Image src={reviews} alt='reviews' className='p-2' fluid rounded /></a>
                            </Card.Header>
                            <Card.Footer>
                                <h4 className='text-center'>Reviews</h4>
                            </Card.Footer>
                        </Card>


                        <Card className='project-container mt-5'>
                            <Card.Header>
                                <a href='https://tabs14.netlify.app' target='_blank' rel="noopener noreferrer">
                                    <Image src={tabs} alt='tabs' fluid rounded className='p-2' /></a>
                            </Card.Header>
                            <Card.Footer>
                                <h4 className='text-center'>Tabs</h4>
                            </Card.Footer>
                        </Card>


                        <Card className='project-container mt-5'>
                            <Card.Header>
                                <a href='https://colorgenerator14.netlify.app' target='_blank' rel="noopener noreferrer">
                                    <Image src={colorgenerator} alt='colorgenerator' fluid rounded className='p-2' /></a>
                            </Card.Header>
                            <Card.Footer>
                                <h4 className='text-center'>Color Generator</h4>
                            </Card.Footer>
                        </Card>


                        <Card className='project-container mt-5'>
                            <Card.Header>
                                <a href='https://react-cart14.netlify.app' target='_blank' rel="noopener noreferrer">
                                    <Image src={cart} alt='cart' fluid rounded className='p-2' /></a>
                            </Card.Header>
                            <Card.Footer>
                                <h4 className='text-center'>Cart</h4>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >
    </div>
    )
}

export default ReactProjectScreen
