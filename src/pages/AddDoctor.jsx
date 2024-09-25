import React, { useState, useEffect } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Footer from '../components/Footer';
import { toast } from 'react-toastify';
import { addDoctorApi } from '../services/allApis';
import { useNavigate } from 'react-router-dom';



function AddDoctor() {

  const [doctorData, setDoctorData] = useState({
    name: "", field: "", location: "", consultingTime: "", picture: ""
  })

  const [imgStatus, setImgStatus] = useState(false)

  const [preview, setPreview] = useState("")

  const navigate=useNavigate()


  useEffect(() => {
    // console.log(doctorData.picture.type);
    if (doctorData.picture.type != 'image/jpg' && doctorData.picture.type != 'image/png' && doctorData.picture.type != 'image/jpeg') {
      console.log("Invalid File Type");
      setImgStatus(false)
      setDoctorData({
        name: "", field: "", location: "", consultingTime: "", picture: ""
      })
      setPreview("")
    }
    else {
      console.log("Valid file type");
      setImgStatus(true)
      setPreview(URL.createObjectURL(doctorData.picture))
    }
  }, [doctorData.picture])

  console.log(doctorData);




  const handleAddButton =async () => {
    const { name, field, location, consultingTime, picture } = doctorData
    if (!name || !field || !location || !consultingTime || !picture) {
      toast.warning("Fill Form With Valid Data")
    }
    else {
      const formData=new FormData()
      formData.append('name',name)
      formData.append('field',field)
      formData.append('location',location)
      formData.append('consultingTime',consultingTime)
      formData.append('picture',picture )

      const header={
        'Content-Type':'multipart/form-data',
        'Authorization':`Bearer ${sessionStorage.getItem('token')}`
      }

      // api call
      const res=await addDoctorApi(formData,header)
      if(res.status==201){
        toast.success("Doctor Added SuccessFully")
        setDoctorData({
          name: "", field: "", location: "", consultingTime: "", picture: ""
        })
        setPreview("")
        navigate('/viewDoctor')
      }
      else{
        toast.error("Doctor Adding Failed")
      }
    }
  }



  return (
    <>

      <div style={{ background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)' }}>

        <div className="row container-fluid" style={{ height: '100%' }}>
          <div className="col d-flex justify-content-center align-items-center" style={{ marginTop: '120px', marginBottom: '120px' }}>
            <div className='border p-5 shadow bg-dark rounded d-flex flex-column'>
              <h3 className='text-center text-light '>ADD DOCTOR</h3>
              <div className='mt-3'>

                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="img">
                      <input type="file" onChange={(e) => { setDoctorData({ ...doctorData, picture: e.target.files[0] }) }} name="" id="img" style={{ display: "none" }} />
                      <img src={preview ? preview : "https://icons.iconarchive.com/icons/elegantthemes/beautiful-flat/256/Image-icon.png"} className='img-fluid' alt="" style={{ cursor: 'pointer' }} />
                      {
                        !imgStatus &&
                        <p className='text-primary p-3'>Invalid file type... Image file must be png | jpg | jpeg</p>
                      }
                    </label>
                  </div>

                  <div className="col-md-6">

                    <FloatingLabel
                      controlId="floatingName" label="Name" className="mb-3" >
                      <Form.Control type="text" placeholder="name" onChange={(e) => { setDoctorData({ ...doctorData, name: e.target.value }) }} />
                    </FloatingLabel>

                    <FloatingLabel
                      controlId="floatingField" label="Field" className="mb-3" >
                      <Form.Control type="text" placeholder="Field" onChange={(e) => { setDoctorData({ ...doctorData, field: e.target.value }) }} />
                    </FloatingLabel>


                    <FloatingLabel
                      controlId="floatingLocation" label="Location" className="mb-3" >
                      <Form.Control type="text" placeholder="location" onChange={(e) => { setDoctorData({ ...doctorData, location: e.target.value }) }} />
                    </FloatingLabel>

                    <FloatingLabel
                      controlId="floatingCtime" label="Consulting Time" className="mb-3" >
                      <Form.Control type="text" placeholder="ct" onChange={(e) => { setDoctorData({ ...doctorData, consultingTime: e.target.value }) }} />
                    </FloatingLabel>

                    <div className='text-center'>
                      <button className='btn btn-warning w-50 border border-3  rounded' onClick={handleAddButton}>Add</button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </>
  )
}

export default AddDoctor


