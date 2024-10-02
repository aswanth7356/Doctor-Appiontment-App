import React from 'react'
import { useEffect, useState } from 'react';
import './home.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


function Home() {

  const [logStatus, setLogStatus] = useState(false)


  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      setLogStatus(true)
    }
    else {
      setLogStatus(false)
    }
  }, [])




  return (
    <>
      <Header />


      <div style={{ background: '#040744', height:'200vh'}} >
        <div className='container'>
          <div className="row d-flex justify-content-center text-align-center " >
            <h1 className='first-head text-white text-center' style={{ marginTop: '5rem' }}>BOOK AND MEET A DOCTOR</h1>
            <p className='text-white text-center'>India's best online appointment scheduling platform</p>
          </div>
        </div>


        <div className='p-3 mt-5'>
          <div className="home row shadow mb-5 rounded">
            <div className="col-md-6 p-3">
              <img src="https://t3.ftcdn.net/jpg/06/12/89/52/360_F_612895290_5m4XeQsdmekGhrRlgId6HB3jfPkKvzwq.jpg" width={'100%'} alt="" />
            </div>

            <div className="description col-md-6 p-5 d-flex flex-column justify-content-center">
              <h1>Doctor's Appointment Booking Platform</h1>
              <p>A doctor's appointment booking site allows patients to easily schedule appointments with healthcare providers. It features a user-friendly interface where patients can search for doctors by specialty, location, and availability, view detailed doctor profiles, and book appointments online. The platform also includes
                appointment reminders, patient reviews, and secure management of medical information.
              </p>
              {
                logStatus ?
                  <Link className='btn w-50 border rounded' style={{ background: 'black', color: 'yellow' }} to={'/department'}>View Department</Link>
                  :
                  <Link className='btn btn-warning w-50 border border-1 border-success rounded' to={'/auth'}>Get Started</Link>
              }
            </div>
          </div>
        </div>


        <div className='container'>

          <div className="row mt-5 shadow mb-5 rounded d-flex align-items-center">
            <div className="col-md-4 ">
              <Card style={{ width: '22rem', height: '36rem', padding: '50px', background: '#262840', color: '#fff' }}>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVc55Zb6Hb_BK_977uHVCygwCvteZ6PRTVIQ&s" width='100%' />
                <Card.Body>
                  <Card.Title><b>DOCTOR NEAR ME</b></Card.Title>
                  <Card.Text>
                    Doctor / Hospital / Specialization to match specific consultation needs. Confirmed Online Appointment slots, practice locations, to select from to book appointment for clinic consultation or video consultation.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4 ">
              <Card style={{ width: '22rem', height: '36rem', padding: '50px', background: '#262840', color: '#fff' }}>
                <Card.Img variant="top" src="https://media.istockphoto.com/id/1151608262/vector/illustration-icon-with-the-concept-of-looking-for-health-information-by-consulting-a-doctor.jpg?s=612x612&w=0&k=20&c=HFCQsZYEGfNgGbpzggQzJM3nGXujeGw0cmXKeOGxa-Q=" width='100%' />
                <Card.Body>
                  <Card.Title><b>KNOW YOUR DOCTOR</b></Card.Title>
                  <Card.Text>
                    Request appointments based on slots, date,consultation location. Know your Doctor to book confirmed doctor Appointment effortlessly with clinic details of practice location to engage with patients effortlessly.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4 mb-5 mt-5">
              <Card style={{ width: '22rem', height: '36rem', padding: '50px', background: '#262840', color: '#fff' }} >
                <Card.Img variant="top" className='p-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhw0I0eIZE7XHWcBpXcP4luN1FMuGMZN1LSw&s" />
                <Card.Body>
                  <Card.Title><b>BOOK CONFIRMED APPOINTMENT</b></Card.Title>
                  <Card.Text>
                    Avoid endless back and forth communication; empowering with Google verified SMS & dynamic Email notifications. Confirmed Doctor Appointment, clinical procedure scheduling.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>


      <Footer />




    </>
  )
}

export default Home
