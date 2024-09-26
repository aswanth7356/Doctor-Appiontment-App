import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Department() {
    return (
        <>
            <div>
                <div className='container mt-5 mb-5' style={{ height: '100%' }}>
                    <div className="row d-flex justify-content-center border shadow p-5" style={{ background: 'radial-gradient(circle, rgba(188,188,194,1) 0%, rgba(254,1,180,1) 99%, rgba(255,0,0,0.3478641456582633) 100%)' }}>
                        <h3 className='text-center text-white mb-5'>DEPARTMENT</h3>

                        <div className="col-md-4">
                            <Card className='border border-2 border-dark rounded ms-2 mb-3' style={{ width: '15rem', cursor: 'pointer' }}>
                                <Link to={'/viewDoctor'}>
                                    <Card.Img variant="top" src="https://img.pikbest.com/origin/10/49/94/328pIkbEsTphP.png!w700wp" className='img-fluid p-2' />
                                    <Card.Body>
                                        <Card.Title className='text-center'>Dental</Card.Title>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </div>

                        <div className="col-md-4">

                            <Card className='border border-2 border-dark rounded ms-2 mb-3' style={{ width: '15rem', cursor: 'pointer' }}>
                                <Link to={'/viewDoctor'}>
                                    <Card.Img variant="top" src="https://media.istockphoto.com/id/851052576/vector/neurology-concept-in-circle-with-thin-line-icons-brain-neuron-neural-connections-neurologist.jpg?s=612x612&w=0&k=20&c=xDNxbAFrTF-jP12TsxJspPl7OEjUwrBFFq-_U5TKA94=" className='img-fluid p-3' />
                                    <Card.Body>
                                        <Card.Title className='text-center'>Neurology</Card.Title>
                                    </Card.Body>
                                </Link>
                            </Card>

                        </div>

                        <div className="col-md-4">
                            <Card className='border border-2 border-dark rounded ms-2 mb-3' style={{ width: '15rem', cursor: 'pointer' }}>
                                <Link to={'/viewDoctor'}>
                                    <Card.Img variant="top" src="https://w7.pngwing.com/pngs/968/276/png-transparent-cardiothoracic-surgery-orthopedic-surgery-medicine-neurosurgery-others-blue-text-trademark-thumbnail.png" className='img-fluid p-3' />
                                    <Card.Body>
                                        <Card.Title className='text-center'>Orthopaedics</Card.Title>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </div>

                        

                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Department
