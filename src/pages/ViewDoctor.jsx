import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Footer from '../components/Footer';
import { getUserDoctorApi } from '../services/allApis';
import base_url from '../services/base_url';


function ViewDoctor() {

  const [userDoctor, setUserDoctor] = useState([])

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      getData()
    }
  }, [])


  const getData = async () => {
    const header = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    }
    const res = await getUserDoctorApi(header)
    if (res.status == 200) {
      console.log(res.data);
      setUserDoctor(res.data)
    }
    else {
      console.log(res)
    }
  }


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


            <div>
              <div className="row mt-5">
                <div className="col-mt-5">
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/medical-doctor-profile-icon-female-doctor-avatar-medical-doctor-profile-icon-female-doctor-avatar-vector-illustration-stock-312057728.jpg" className='img-fluid' />
                    <Card.Body>
                      <Card.Title>Name : Anu</Card.Title>
                      <Card.Text className='mt-3'>Field : mbbs</Card.Text>
                      <Card.Text>Location : calicut</Card.Text>
                      <Card.Text>Consulting Time : 1pm to 3pm</Card.Text>
                      <Link to={'/appointment'} className='btn btn-warning border rounded'>Book An Appointment</Link>
                    </Card.Body>
                  </Card>

                </div>
              </div>
            </div>



            <div>
              {
                userDoctor.length > 0 ?
                  <div className='row'>
                    {
                      userDoctor.map((item) => (
                        <div className='col mt-5'>
                          <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`${base_url}/upload/${item.picture}`} className='img-fluid' style={{height:'30vh'}}/>
                            <Card.Body>
                              <Card.Title>Name : {item.name}</Card.Title>
                              <Card.Text className='mt-3'>Field : {item.field}</Card.Text>
                              <Card.Text>Location : {item.location}</Card.Text>
                              <Card.Text>Consulting Time : {item.consultingTime}</Card.Text>
                              <div className='text-center'>
                                <Link to={'/appointment'} className='btn btn-warning border rounded'>Book An Appointment</Link>
                              </div>
                              <Card.Text>------------------------------------</Card.Text>
                              <div className='d-flex justify-content-between'>
                                <button className='btn'><i className="fa-solid fa-pen-to-square fa-xl" style={{color: "#0011ff",}} /></button>
                                <button className='btn'><i className="fa-solid fa-trash fa-xl" style={{color: "#ff0000",}} /></button>
                              </div>

                            </Card.Body>
                          </Card>
                        </div>
                      ))
                    }
                  </div>
                  :
                  <h1 className='text-light mt-5 text-center'>Currently No Doctors Are Available!!</h1>
              }
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default ViewDoctor

