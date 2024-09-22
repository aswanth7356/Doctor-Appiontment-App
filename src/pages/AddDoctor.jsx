import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';



function AddDoctor() {
  return (
    <>

      <div style={{ background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)' }}>

        <div className="row container-fluid" style={{ height: '100%' }}>
          <div className="col d-flex justify-content-center align-items-center" style={{marginTop:'120px',marginBottom:'120px'}}>
            <div className='border p-5 shadow bg-dark rounded d-flex flex-column'>
              <h3 className='text-center text-light '>ADD DOCTOR</h3>
              <div className='mt-3'>

                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="img">
                      <input type="file" name="" id="img" style={{ display: "none" }} />
                      <img src="https://icons.iconarchive.com/icons/elegantthemes/beautiful-flat/256/Image-icon.png" className='img-fluid' alt="" style={{ cursor: 'pointer' }} />
                    </label>
                  </div>

                  <div className="col-md-6">
                    
                    <FloatingLabel
                      controlId="floatingName" label="Name" className="mb-3" >
                      <Form.Control type="text" placeholder="name" />
                    </FloatingLabel>

                    <FloatingLabel
                      controlId="floatingDep" label="Department" className="mb-3" >
                      <Form.Control type="text" placeholder="dep" />
                    </FloatingLabel>


                    <FloatingLabel
                      controlId="floatingLocation" label="Location" className="mb-3" >
                      <Form.Control type="text" placeholder="location" />
                    </FloatingLabel>

                    <FloatingLabel
                      controlId="floatingCtime" label="Consulting Time" className="mb-3" >
                      <Form.Control type="text" placeholder="ct" />
                    </FloatingLabel>

                    <div className='text-center'>
                      <button className='btn btn-warning w-50 border border-3 border-success rounded '>Add</button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default AddDoctor


