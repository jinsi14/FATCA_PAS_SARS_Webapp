import React from "react";

const Search = (props) => {

    return (
        <div>
          <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">

              <h6 style="margin-left: 150px;">Well come to the FATCA Reporting System : 
                <span id="result"></span>
                <script>
                  document.getElementById("result").innerHTML=localStorage.getItem("name");
                </script>
              </h6>
              <a href = "index.html">
                <button type="button" class="btn btn-outline-secondary" style="margin-right: 100px;">Log off</button>
              </a>
            </div>
          </nav>

          <div class="text-center justify-content-evenly pt-5 pb-3">
            <a href = "contain.html">
            <button type="button" class="btn btn-outline-secondary" >Search For Reportable Data</button>
            </a>
          </div>
          
          <div class="img-fluid">
            <img src = "./images/fatca1.jpg" alt = "fatca" height="100%" width="100%" />
          </div>
        </div>
    )
};

export default Search; 