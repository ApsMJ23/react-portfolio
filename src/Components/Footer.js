import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
    return (
        <div className='bg-dark py-3'>
            <Container className='p-3 mt-5'>
                <Row>
                    <Col md={3} xs={3}>
                        <h4>Location</h4>
                        <h6>New Delhi,110038</h6>
                    </Col>
                    <Col md={5} xs={5} className='text-center'>
                        <h4>Around the Web</h4>
                        <Col md={12} className='text-center'>
                            <a href='https://github.com/ApsMJ23'>
                                <i className='fab fa-github mx-2' style={{ fontSize: '3vw', color: '#f9952d' }}></i></a>
                            <a href='https://www.linkedin.com/in/apsmj23/'>
                                <i className='fab fa-linkedin' style={{ fontSize: '3vw', color: '#f9952d' }}></i></a>
                            <a href='mailto:apurvsiingh@gmail.com'>
                                <i className='fab fa-google mx-2' style={{ fontSize: '3vw', color: '#f9952d' }}></i></a>
                            <a href='https://www.instagram.com/apurvawithan_a/'>
                                <i className='fab fa-instagram' style={{ fontSize: '3vw', color: '#f9952d' }}></i></a>
                        </Col>
                    </Col>
                    <Col md={4} xs={4} className='text-center'>
                        <h5>&#169; Apurv Singh</h5>
                    </Col>
                </Row>
            </Container >
        </div>
    )
}

export default Footer
