import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from '../components/Footer';
import { toast } from 'react-toastify';
import { BookingApi } from '../services/allApis';
import { useNavigate } from 'react-router-dom';


function Appointment() {

    const [bookingData,setBookingData] = useState({
        firstName:"",lastName:"",email:"",phone:"",place:"",date:""
    })

    console.log(bookingData);

    const navigate=useNavigate()
    

    const handleSubmit=async()=>{
        const {firstName,lastName,email,phone,place,date}=bookingData
        if(!firstName || !lastName || !email || !phone || !place || !date){
            toast.warning("Please Fill Form With Valid data...")
        }
        else{
            const result=await BookingApi(bookingData)
            // console.log(result);
            if(result.status==201){
                toast.success("Successfully Booked!!")
                setBookingData({
                    firstName:"",lastName:"",email:"",phone:"",place:"",date:""
                })
                navigate('/')
            }
            else{
                toast.error("User Already Booked This date!!")
            }
        }
    }


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
                                        <Form.Control type="text" placeholder="First Name" onChange={(e)=>{setBookingData({...bookingData,firstName:e.target.value})}} />
                                    </Form.Group>

                                    <Form.Group className="mb-3 w-50" controlId="formLname">
                                        <Form.Control type="text" placeholder="Last Name" onChange={(e)=>{setBookingData({...bookingData,lastName:e.target.value})}}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setBookingData({...bookingData,email:e.target.value})}}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3 w-50" controlId="formNumber">
                                        <Form.Control type="number" placeholder="Enter Pnone No"  onChange={(e)=>{setBookingData({...bookingData,phone:e.target.value})}}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3 w-50" controlId="formPlace">
                                        <Form.Control type="text" placeholder="Place" onChange={(e)=>{setBookingData({...bookingData,place:e.target.value})}}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3 w-50" controlId="formDate">
                                        <Form.Control type="date" placeholder=""  onChange={(e)=>{setBookingData({...bookingData,date:e.target.value})}}/>
                                    </Form.Group>
                                </div>

                                <div className='text-center mt-3'>
                                    <Button className='btn btn-primary border rounded w-50' onClick={handleSubmit}>
                                        Submit
                                    </Button>
                                </div>
                                

                            </Form>
                        </div>
                    </div>
                </div>

            </div>

            <Footer/>
        </>
    )
}

export default Appointment
