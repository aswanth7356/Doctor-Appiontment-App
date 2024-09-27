import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { registerApi } from '../services/allApis';
import { toast } from 'react-toastify';
import { LoginApi } from '../services/allApis';
import { useNavigate } from 'react-router-dom';


function Auth() {

  const [regStatus, setRegStatus] = useState(false)
  const [user, setUser] = useState({
    email: "", username: "", password: ""
  })

  const navigate = useNavigate()


  const stateChange = () => {
    setRegStatus(!regStatus)
  }


  const handleRegister = async () => {
    // console.log(user);
    const { email, username, password } = user
    if (!email || !username || !password) {
      toast.warning("Enter Valid Inputs")
    }
    else {
      const result = await registerApi(user)
      console.log(result)
      if (result.status == 200) {
        toast.success("Registration Successfull !!")
        setUser({
          username: "", password: "", email: ""
        })
        stateChange()
      }
      else {
        toast.error("Registration Failed !!  User Already Exist")
      }
    }
  }




  const handleLogin = async () => {
    const { email, password } = user
    if (!email || !password) {
      toast.warning("Please Fill Valid Inputs")
    }
    else {
      const res = await LoginApi(user)
      console.log(res);
      if (res.status == 200) {
        toast.success("Login Successfull!!")
        setUser({
          email: "", password: ""
        })
        sessionStorage.setItem('token', res.data.token)
        sessionStorage.setItem('username', res.data.username)
        navigate('/')
      }
      else {
        toast.error("Login failed.. Invalid Input/Password")
      }
    }
  }



  return (
    <>

      <div style={{ background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)' }}>

        <div className='w-100 d-flex justify-content-center align-items-center' style={{ height: '100%' }}>
          <div className='row w-50 rounded shadow ' style={{ marginTop: '160px', marginBottom: '213px' }}>

            <div className="col-md-6">
              {
                regStatus ?
                  <img src="https://visitorwelcome.adani.com/Assets/img/login.png" className='img-fluid mt-5 h-75' alt="" />
                  :
                  <img src="https://www.allegrostaffing.com/static/assets/images/process-01.png" className='img-fluid mt-5 h-75' alt="" />

              }
            </div>

            <div className="col-sm-6 p-3">
              {
                regStatus ?
                  <h3 className='d-flex flex-column align-items-center mt-3'><b>SIGNUP</b></h3>
                  :
                  <h3 className='d-flex flex-column align-items-center mt-3 mb-5'><b>LOGIN</b></h3>
              }

              <div className=''>
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3 mt-3">
                  <Form.Control type="email" placeholder="name@example.com" onChange={(e) => { setUser({ ...user, email: e.target.value }) }} value={user.email} />
                </FloatingLabel>

                {
                  regStatus &&
                  <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" onChange={(e) => { setUser({ ...user, username: e.target.value }) }} value={user.username} />
                  </FloatingLabel>
                }


                <FloatingLabel controlId="floatingPassword" label="Password" className='mb-4'>
                  <Form.Control type="password" placeholder="Password" onChange={(e) => { setUser({ ...user, password: e.target.value }) }} value={user.password} />
                </FloatingLabel>
              </div>
              <div className='col d-flex justify-content-between'>

                {
                  regStatus ?
                    <button className='btn btn-primary w-50 border rounded mb-3' onClick={handleRegister}>Register</button>
                    :
                    <button className='btn btn-warning w-50 border rounded' onClick={handleLogin} >Login</button>
                }

                {
                  regStatus ?
                    <button className='btn ' onClick={stateChange} style={{color:'black',textDecoration:'none',fontSize:'16px'}}>Have an account?<span style={{textDecoration:'underline',color:'blue'}}>Login</span></button>
                    :
                    <button className='btn p-0' onClick={stateChange} style={{color:'black',textDecoration:'none',fontSize:'14px'}}>Don't have an account?<br></br><span style={{textDecoration:'underline',color:'blue'}}>Sign Up</span></button>
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






