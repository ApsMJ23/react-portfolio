import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Document, Page, pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function ResumeScreen() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    const goToPrevPage = () =>
        setPageNumber(1)
    const goToNextPage = () =>
        setPageNumber(2)
    return (
        <Container>
            <Row className='pt-5'>
                <Col md={6} className='mx-auto p-4 text-center' id='ResumeContainer'>
                    <Document
                        className='PDFDocument'
                        file='Profile.pdf'
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        <Page pageNumber={pageNumber} className='PDFPage ' />
                    </Document>
                    <Col md={6} className='mx-auto p-3 text-center'>
                        <Button variant='warning' className='m-2' onClick={goToPrevPage}>1</Button>
                        <Button variant='warning' className='m-2' onClick={goToNextPage}>2</Button>
                    </Col>
                    <Row >
                        <Col md={12} className='text-center mx-auto'>
                            <h4>Page {pageNumber} of {numPages}</h4>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container >
    );
}

export default ResumeScreen
