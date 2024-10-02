import React from 'react'
import { useState, useEffect } from 'react'


function Header() {

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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <i className="fa-solid fa-user-doctor fa-xl ms-3" style={{color: "#0459ec",}} />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active border rounded shadow-sm ms-3"
                  aria-current="page" href='/'
                >
                  <i className="fa-solid fa-house me-2" style={{ color: "#63df11", }} />
                  HOME
                </a>
              </li>
            </ul>

            {
              logStatus &&
              <button className="btn ms-2 btn-outline-dark border shadow-sm">
                <i className="fa-solid fa-calendar-check me-2" style={{ color: "#005eff", }} />
                Bookings
              </button>
            }

            {
              logStatus &&
              <button className="btn btn-danger ms-2 text-light btn-outline-dark ">
                <i className="fa-solid fa-right-from-bracket me-2" />
                Logout
              </button>
            }


          </div>
        </div>
      </nav>

    </>
  )
}

export default Header
