import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Department() {
    return (
        <>
        <Header/>
            <div>
                <div className='container d-flex justify-content-center mt-5 mb-5' style={{ height: '100%'}}>
                    <div className="row">
                        <h3 className='text-center text-dark mt-5 mb-5'><b>DEPARTMENTS</b></h3>

                        <div className="col-md-3">
                            <Card className='border border-2 rounded shadow mb-3 ms-5' style={{ width: '15rem', cursor: 'pointer' }}>
                                <Link to={'/viewDoctor'}>
                                    <Card.Img variant="top" src="https://img.pikbest.com/origin/10/49/94/328pIkbEsTphP.png!w700wp" className='img-fluid p-2' />
                                    <Card.Body>
                                        <Card.Title className='text-center text-dark'>Dental</Card.Title>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </div>

                        <div className="col-md-3">

                            <Card className='border border-2 rounded shadow ms-5 mb-3' style={{ width: '15rem', cursor: 'pointer' }}>
                                <Link to={'/viewDoctor'}>
                                    <Card.Img variant="top" src="https://media.istockphoto.com/id/851052576/vector/neurology-concept-in-circle-with-thin-line-icons-brain-neuron-neural-connections-neurologist.jpg?s=612x612&w=0&k=20&c=xDNxbAFrTF-jP12TsxJspPl7OEjUwrBFFq-_U5TKA94=" className='img-fluid p-3' />
                                    <Card.Body>
                                        <Card.Title className='text-center text-dark'>Neurology</Card.Title>
                                    </Card.Body>
                                </Link>
                            </Card>

                        </div>

                        <div className="col-md-3">
                            <Card className='border border-2 rounded shadow ms-5 mb-3' style={{ width: '15rem', cursor: 'pointer' }}>
                                <Link to={'/viewDoctor'}>
                                    <Card.Img variant="top" src="https://w7.pngwing.com/pngs/968/276/png-transparent-cardiothoracic-surgery-orthopedic-surgery-medicine-neurosurgery-others-blue-text-trademark-thumbnail.png" className='img-fluid p-3' />
                                    <Card.Body>
                                        <Card.Title className='text-center text-dark'>Orthopaedics</Card.Title>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </div>

                        <div className="col-md-3 ">
                            <Card className='border border-2 rounded shadow ms-5 mb-3' style={{ width: '15rem', cursor: 'pointer' }}>
                                <Link to={'/viewDoctor'}>
                                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDsiDjhG-fYAI_sMIGUiAUxMEYSMPLGsSY0Q&s" className='img-fluid p-3'/>
                                    <Card.Body>
                                        <Card.Title className='text-center text-dark'>Cardiologists</Card.Title>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </div>

                        <div className="col-md-3 mt-5">
                            <Card className='border border-2 rounded shadow ms-5 mb-3' style={{ width: '15rem', cursor: 'pointer' }}>
                                <Link to={'/viewDoctor'}>
                                    <Card.Img variant="top" src="https://img.freepik.com/free-vector/hand-drawn-dermatologist-cartoon-illustration_23-2151016711.jpg" className='img-fluid p-3'/>
                                    <Card.Body>
                                        <Card.Title className='text-center text-dark'>Dermatologists</Card.Title>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </div>

                        <div className="col-md-3 mt-5">
                            <Card className='border border-2 rounded shadow ms-5 mb-3' style={{ width: '15rem', cursor: 'pointer' }}>
                                <Link to={'/viewDoctor'}>
                                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRki7WWbXjUcebyShWn2ep7bmdSM07kt0rFOw&s" className='img-fluid p-3 mt-3 mb-2'/>
                                    <Card.Body>
                                        <Card.Title className='text-center text-dark'>Gynecologists</Card.Title>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </div>

                        <div className="col-md-3 mt-5">
                            <Card className='border border-2 rounded shadow ms-5 mb-3' style={{ width: '15rem', cursor: 'pointer' }}>
                                <Link to={'/viewDoctor'}>
                                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-YPnPneSnFAtPjMasyKfq_ORap0aHBeeGdGB2EkIbP6CaQbDzjzFb6h7qKhtutIfd56s&usqp=CAU" className='img-fluid p-3'/>
                                    <Card.Body>
                                        <Card.Title className='text-center text-dark'>Oncologists</Card.Title>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </div>

                        <div className="col-md-3 mt-5">
                            <Card className='border border-2 rounded shadow ms-5 mb-3' style={{ width: '15rem', cursor: 'pointer' }}>
                                <Link to={'/viewDoctor'}>
                                    <Card.Img variant="top" src="https://png.pngtree.com/png-clipart/20211027/ourmid/pngtree-ophthalmologist-checks-eyesight-and-makes-operation-magnifying-glass-png-image_4006807.png" className='img-fluid p-3'/>
                                    <Card.Body>
                                        <Card.Title className='text-center text-dark'>Ophthalmologists</Card.Title>
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
