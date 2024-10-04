import React, { useEffect, useState, useContext } from 'react'
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
  const [editResponse, setEditResponse] = useContext(editResponseContext)

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
    if (result.status == 200) {
      alert("Are You Sure Want To Delete!!")
      toast.success("Doctor Deleted!!")
      getData()
    }
    else {
      console.log(res);
      toast.error("Deletion Failed!!")
    }
  }


  return (
    <>
      <Header />


      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Available Doctors</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              "Book an appointment at the nearest hospital."
            </p>
          </div>
        </div>
      </header>

      {/* Dummy Section*/}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-center">

            <div className="col mb-5">
              <div className="card h-100 border shadow">
                {/* doctor image */}
                <img
                  className="card-img-top img-fluid"
                  src="https://thumbs.dreamstime.com/b/medical-doctor-profile-icon-female-doctor-avatar-medical-doctor-profile-icon-female-doctor-avatar-vector-illustration-stock-312057728.jpg"
                  alt="Doctor Profile"
                />
                {/* doctor details */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* doctor name */}
                    <h5 className="fw-bolder">Dr. Anu</h5>
                    <p className="fw-bolder">Hospital: KMCT</p>
                    <p>Location: Calicut</p>
                    {/* consulting time */}
                    <span>Consulting Time: 3pm to 6pm</span>
                  </div>
                </div>
                {/* book appointment actions */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <Link to={'/appointment'} className="btn btn-outline-warning mt-auto text-dark">
                      Book An Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Repeat the same block for other doctors */}
            <div className="col mb-5">
              <div className="card h-100 border shadow">
                <img
                  className="card-img-top img-fluid"
                  src="https://thumbs.dreamstime.com/b/medical-doctor-profile-icon-female-doctor-avatar-medical-doctor-profile-icon-female-doctor-avatar-vector-illustration-stock-312057728.jpg"
                  alt="Doctor Profile"
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Dr. Smitha</h5>
                    <p className="fw-bolder">Hospital: StarCare</p>
                    <p>Location: Thrissur</p>
                    <span>Consulting Time: 4pm to 7pm</span>
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <Link to={'/appointment'} className="btn btn-outline-warning mt-auto text-dark">
                      Book An Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col mb-5">
              <div className="card h-100 border shadow">
                <img
                  className="card-img-top img-fluid"
                  src="https://thumbs.dreamstime.com/b/medical-doctor-profile-icon-female-doctor-avatar-medical-doctor-profile-icon-female-doctor-avatar-vector-illustration-stock-312057728.jpg"
                  alt="Doctor Profile"
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Dr. Veena</h5>
                    <p className="fw-bolder">Hospital: IQRA</p>
                    <p>Location: Calicut</p>
                    <span>Consulting Time: 5pm to 8pm</span>
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <Link to={'/appointment'} className="btn btn-outline-warning mt-auto text-dark">
                      Book An Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col mb-5">
              <div className="card h-100 border shadow">
                <img
                  className="card-img-top img-fluid"
                  src="https://thumbs.dreamstime.com/b/medical-doctor-profile-icon-female-doctor-avatar-medical-doctor-profile-icon-female-doctor-avatar-vector-illustration-stock-312057728.jpg"
                  alt="Doctor Profile"
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Dr. Gita</h5>
                    <p className="fw-bolder">Hospital: GH</p>
                    <p>Location: Idukki</p>
                    <span>Consulting Time: 6pm to 9pm</span>
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <Link to={'/appointment'} className="btn btn-outline-warning mt-auto text-dark">
                      Book An Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* You can add more doctor cards here */}

          </div>
        </div>
      </section>




      <section className="py-5">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-center">
            {userDoctor.length > 0 ? (
              userDoctor.map((item) => (
                <div className="col mb-5" key={item._id}>
                  <div className="card h-100 border shadow">
                    {/* Doctor image */}
                    <img
                      className="card-img-top img-fluid"
                      src={`${base_url}/upload/${item.picture}`}
                      alt="Doctor"
                    />
                    {/* Doctor details */}
                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">Dr. {item.name}</h5>
                        <p className="fw-bolder">Hospital: {item.field}</p>
                        <p>Location: {item.location}</p>
                        <span>Consulting Time: {item.consultingTime}</span>
                      </div>
                    </div>
                    {/* Book appointment actions */}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <Link to={'/appointment'} className="btn btn-outline-warning mt-auto text-dark">
                          Book An Appointment
                        </Link>
                      </div>
                    </div>
                    {/* Edit and Delete buttons */}
                    <div className="d-flex justify-content-between p-3">
                      <EditDoctor doctor={item} />
                      <button className="btn" onClick={() => deleteDoctor(item._id)}>
                        <i
                          className="fa-solid fa-trash fa-xl"
                          style={{ color: "#ff0000" }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h2 className="text-center text-dark my-4">Other Doctors Are Not Available!!</h2>
            )}
          </div>
        </div>
      </section>


      <Footer />
    </>
  )
}

export default ViewDoctor

