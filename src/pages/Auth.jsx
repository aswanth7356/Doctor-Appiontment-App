import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function Auth() {

  const [regStatus, setRegStatus] = useState(false)

  const stateChange = () => {
    setRegStatus(!regStatus)
  }

  return (
    <>

      <div style={{background:'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'}}>

        <div className='w-100 d-flex justify-content-center align-items-center' style={{ height: '100%' }}>
          <div className='row w-50 rounded shadow ' style={{marginTop:'160px', marginBottom:'160px'}}>

            <div className="col-md-6">
              <img src="https://png.pngtree.com/png-vector/20230429/ourlarge/pngtree-free-vector-login-concept-illustration-png-image_6743219.png" className='img-fluid' alt="" />
            </div>

            <div className="col-sm-6">
              {
                regStatus ?
                  <h3 className='d-flex flex-column align-items-center mt-3'><b>SIGNUP</b></h3>
                  :
                  <h3 className='d-flex flex-column align-items-center mt-3'><b>LOGIN</b></h3>
              }

              <div className=''>
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3 mt-5">
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>

                {
                  regStatus &&
                  <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" />
                  </FloatingLabel>
                }


                <FloatingLabel controlId="floatingPassword" label="Password" className='mb-4'>
                  <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
              </div>
              <div className='d-flex justify-content-between'>

                {
                  regStatus ?
                    <button className='btn btn-primary w-50 border rounded mb-3'>Register</button>
                    :
                    <button className='btn btn-warning w-50 border rounded'>Login</button>
                }

                {
                  regStatus ?
                    <button className='btn btn-link' onClick={stateChange}>Already a User ?</button>
                    :
                    <button className='btn btn-link' onClick={stateChange}>New User ?</button>
                }
              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Auth






