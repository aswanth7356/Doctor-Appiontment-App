import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Appointment() {
    return (
        <>


            <div className='' style={{ height: '100%' , background:'#262840' }}>
                <div className="row">
                    <div className="col">
                        <img src="https://t3.ftcdn.net/jpg/04/91/49/48/240_F_491494823_PXA3BGakHi2Cn8iDBpGOK2XVAPpFQeJo.jpg" className='img-fluid w-100' alt="" />
                    </div>
                </div>



                <div className="row container-fluid mt-5" style={{ height: '100%' }}>
                    <div className="col d-flex justify-content-center align-items-center mb-5 mt-5">
                        <div className='border shadow p-5 w-50 rounded'>
                            <h1 className='text-white text-center mb-4'>BOOK AN APPIONTMENT</h1>
                            <Form>
                                <div className='row'>
                                    <Form.Group className="mb-3 w-50" controlId="formBasicFname">
                                        <Form.Control type="text" placeholder="First Name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3 w-50" controlId="formLname">
                                        <Form.Control type="text" placeholder="Last Name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3 w-50" controlId="formNumber">
                                        <Form.Control type="number" placeholder="Enter Pnone No" />
                                    </Form.Group>

                                    <Form.Group className="mb-3 w-50" controlId="formPlace">
                                        <Form.Control type="text" placeholder="Place" />
                                    </Form.Group>

                                    <Form.Group className="mb-3 w-50" controlId="formDate">
                                        <Form.Control type="date" placeholder="" />
                                    </Form.Group>
                                </div>

                                <div className='text-center mt-3'>
                                    <Button type="submit" className='btn btn-primary border rounded w-50'>
                                        Submit
                                    </Button>
                                </div>

                            </Form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Appointment
