import React from "react";
import { useNavigate } from "react-router-dom";

const Search = (props) => {

  const navigate = useNavigate();
  const handleLogoffClick = props => {
    navigate("/");
  }

  const searchNavigate = useNavigate();
  const handleSearchForReportableDataClick = props => {
    searchNavigate("/contain")
  }

    return (
        <div>
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">

              <h6 >Well come to the FATCA Reporting System : </h6>
                <button onClick={handleLogoffClick} type="button" className="btn btn-outline-secondary">Log off</button>
            </div>
          </nav>

          <div className="text-center justify-content-evenly pt-5 pb-3">
        
            <button onClick={handleSearchForReportableDataClick} type="button" className="btn btn-outline-secondary" >Search For Reportable Data</button>
          
          </div>
          
          <div className="img-fluid">
            <img src = "./images/fatca1.jpg" alt = "fatca" height="100%" width="100%" />
          </div>
        </div>
    )
};

export default Search; 