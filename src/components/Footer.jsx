import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
    <div className='p-5' style={{backgroundColor:'black'}}>
        <div className="row">
          <div className="col">
            <h4 style={{color:'yellow'}}>Doctor's Appointment Website</h4>
            <p style={{textAlign:'justify',color:'white'}}>A doctor's appointment booking site build using MERN stack, is a web application where users can easily browse available doctors, view their specialties, schedules, and make appointments.</p>
          </div>

          <div className="col-sm-6 d-flex flex-column align-items-center">
            <h4 style={{color:'yellow'}}>Links</h4>
            <p><Link to={'/'} className='text-light'>HOME</Link></p>
            <p><Link to={'/auth'} className='text-light'>LOGIN</Link></p>
          </div>

          <div className="col">
            <h4 style={{color:'yellow'}}>Feedback</h4>
            <textarea name="" className='form-control my-3' id="" placeholder='type your feedback...'></textarea>
            <button className='btn btn-primary border rounded' >Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer



      
    
 