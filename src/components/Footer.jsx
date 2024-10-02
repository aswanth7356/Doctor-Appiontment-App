import React from 'react'
// import { Link } from 'react-router-dom'
// import { useState, useEffect } from 'react'


function Footer() {

  // const [logStatus, setLogStatus] = useState(false)


  // useEffect(() => {
  //   if (sessionStorage.getItem('token')) {
  //     setLogStatus(true)
  //   }
  //   else {
  //     setLogStatus(false)
  //   }
  // }, [])





  return (
    <>
      <footer className="text-center" style={{background:'black'}}>
        {/* Grid container */}
        <div className="container pt-4">
          {/* Section: Social media */}
          <section className="">
            {/* Facebook */}
            <a
              data-mdb-ripple-init=""
              className="btn btn-link btn-floating btn-lg text-white m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-facebook-f" />
            </a>
            {/* Twitter */}
            <a
              data-mdb-ripple-init=""
              className="btn btn-link btn-floating btn-lg text-white m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-twitter" />
            </a>
            {/* Google */}
            <a
              data-mdb-ripple-init=""
              className="btn btn-link btn-floating btn-lg text-white m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-google" />
            </a>
            {/* Instagram */}
            <a
              data-mdb-ripple-init=""
              className="btn btn-link btn-floating btn-lg text-white m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-instagram" />
            </a>
            {/* Linkedin */}
            <a
              data-mdb-ripple-init=""
              className="btn btn-link btn-floating btn-lg text-white m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-linkedin" />
            </a>
            {/* Github */}
            <a
              data-mdb-ripple-init=""
              className="btn btn-link btn-floating btn-lg text-white m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-github" />
            </a>
          </section>
          {/* Section: Social media */}
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div
          className="text-center p-3 text-white "
          style={{ backgroundColor: "black" }}
        >
          © 2024 Copyright:
          <a className="text-white">
            www.doctorsbooking.com
          </a>
        </div>
        {/* Copyright */}
      </footer>

    </>
  )
}

export default Footer





