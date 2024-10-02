import React, { useEffect, useState , useContext} from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Footer from '../components/Footer';
import { deleteDoctorApi, getUserDoctorApi } from '../services/allApis';
import base_url from '../services/base_url';
import { toast } from 'react-toastify';
import EditDoctor from '../components/EditDoctor';
import { editResponseContext } from '../contextApi/ContextShare';
import Header from '../components/Header';


function ViewDoctor() {

  const [userDoctor, setUserDoctor] = useState([])
  const [editResponse,setEditResponse]=useContext(editResponseContext)  

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      getData()
    }
  }, [editResponse])


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


  const deleteDoctor = async (id) => {
    const header = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    }
    const result = await deleteDoctorApi(id, header)
    if(result.status==200){
      alert("Are You Sure Want To Delete!!")
      toast.success("Doctor Deleted!!")
      getData()
    }
    else{
      console.log(res);
      toast.error("Deletion Failed!!")
    }
  }


  return (
    <>
    <Header/>
      <div>

        <div className="container-fluid row p-5" style={{ height: '100%' }}>
          <div className="col">
            <h1 className='text-white'>AVAILABLE DOCTORS</h1>

            {/* <div className="mt-4 d-flex justify-content-between">
              <div className="d-flex">

              </div>
              <Link className="btn btn-success" to={'/addDoctor'}> + Add Doctors</Link>
            </div> */}


            <div>
              <div className="row mt-5">
                <div className="col-mt-5">
                  <Card style={{ width: '18rem' }} className='border border-3 border-light shadow bg-light rounded'>
                    <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/medical-doctor-profile-icon-female-doctor-avatar-medical-doctor-profile-icon-female-doctor-avatar-vector-illustration-stock-312057728.jpg" className='img-fluid' />
                    <Card.Body>
                      <Card.Title>Dr. Anu</Card.Title>
                      <Card.Text className='mt-3'>Hospital : Medical College</Card.Text>
                      <Card.Text>Location : Calicut</Card.Text>
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
                          <Card style={{ width: '18rem' }} className='border border-3 border-light shadow bg-light rounded'>
                            <Card.Img variant="top" src={`${base_url}/upload/${item.picture}`} className='img-fluid' style={{ height: '30vh' }} />
                            <Card.Body>
                              <Card.Title>Dr.{item.name}</Card.Title>
                              <Card.Text className='mt-3'>Hospital : {item.field}</Card.Text>
                              <Card.Text>Location : {item.location}</Card.Text>
                              <Card.Text>Consulting Time : {item.consultingTime}</Card.Text>
                              <div className='text-center'>
                                <Link to={'/appointment'} className='btn btn-warning border rounded'>Book An Appointment</Link>
                              </div>
                              <Card.Text>------------------------------------</Card.Text>
                              <div className='d-flex justify-content-between'>
                                <EditDoctor doctor={item}/>
                                <button className='btn' onClick={()=>{deleteDoctor(item._id)}}><i className="fa-solid fa-trash fa-xl" style={{ color: "#ff0000", }} /></button>
                              </div>

                            </Card.Body>
                          </Card>
                        </div>
                      ))
                    }
                  </div>
                  :
                  <h1 className='text-light mt-5 text-center'>Currently Other Doctors Are Not Available!! <br></br>
                    <span style={{fontSize:'20px',color:'white'}}>You can <b>Add Doctors</b> Throuh Admin Panel in the Footer !!</span>
                  </h1>
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

