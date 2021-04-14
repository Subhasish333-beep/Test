import React from 'react'
import {Link} from 'react-router-dom'
const Navbar=()=>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                <Link to="/" className="navbar-brand" >Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link to="/home" className="nav-link active" aria-current="page" >Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/Todos" className="nav-link" href="#">Todos</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/home" className="nav-link" href="#">Create Todos</Link>
                    </li>
                  </ul>                 
                </div>
              </div>
            </nav>
        </div>
    )
}
export default Navbar;