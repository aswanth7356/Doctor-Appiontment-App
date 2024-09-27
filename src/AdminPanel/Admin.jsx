import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function Admin() {
  return (
    <>
      <div style={{height:"80vh",background:'linear-gradient(218deg, rgba(188,188,194,1) 0%, rgba(128,1,254,0.5187324929971988) 99%, rgba(255,0,0,0) 100%)'}}>
        <div className="container p-3">
          <div className="row">
            <h1 className='text-light text-center mt-5'>ADMIN PANEL</h1>
            <div className="col">
              <div className="mt-5">
                <Link className="btn border rounded w-25" style={{background:'black',color:'yellow'}} to={'/addDoctor'}> + Add Doctors</Link>
              </div>

              <div className="col">
                <Link className="btn border rounded mt-5 w-25" style={{background:'black',color:'yellow'}} to={'/addDepartment'}> + Add Department</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    <Footer/>
    </>
  )
}

export default Admin
