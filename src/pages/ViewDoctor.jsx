import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';


function ViewDoctor() {
  return (
    <>

      <div style={{ background: 'linear-gradient(196deg, rgba(238,174,202,1) 0%, rgba(123,32,32,1) 100%)' }}>

        <div className="container-fluid row" style={{ height: '100%' }}>
          <div className="col p-5">
            <h1 className='text-white'>AVAILABLE DOCTORS</h1>

            <div className="mt-4 d-flex justify-content-between">
              <div className="d-flex">

              </div>
              <Link className="btn btn-success" to={'/addDoctor'}> + Add Doctors</Link>
            </div>


            <div className="row">
              <div className='col mt-5'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/medical-doctor-profile-icon-female-doctor-avatar-medical-doctor-profile-icon-female-doctor-avatar-vector-illustration-stock-312057728.jpg" className='img-fluid' />
                  <Card.Body>
                    <Card.Title>Name : Anu</Card.Title>
                    <Card.Text className='mt-3'>Department : Dentist</Card.Text>
                    <Card.Text>Location : Kochi</Card.Text>
                    <Card.Text>Consulting Time : 1pm to 3pm</Card.Text>
                    <Link to={'/appointment'} className='btn btn-warning border rounded'>Book An Appointment</Link>
                  </Card.Body>
                </Card>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewDoctor

