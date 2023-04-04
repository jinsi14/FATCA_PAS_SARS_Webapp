import React from "react";
import { useNavigate } from "react-router-dom";

const Contain = props => {

    const handleSearchClick = props => {
        alert(" Data is not available")
    }

    const containNavigate = useNavigate();
    const handleLogoffClick = props => {
        containNavigate("/");
    }

    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                  <h6>Serch for Reportable Data ....</h6>
                  <button onClick={handleLogoffClick} type="button" className="btn btn-outline-secondary" >Log off</button>
                </div>
            </nav>
            
            <div className="center">
                <div className= "row justify-content-evenly pt-5 pb-5">


                  <div className="col-md-3 pt-5">
                    List of PAS system in FACTA
                     <div className="form-check pt-4 pb-2">
                       <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                       <label className="form-check-label" htmlFor="flexCheckDefault">
                         Conventional
                       </label>
                     </div>
                     <div className="form-check pb-2">
                       <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                       <label className="form-check-label" htmlFor="flexCheckDefault">
                         Flexcube - Wealth
                       </label>
                     </div>
                     <div className="form-check pb-2">
                       <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                       <label className="form-check-label" htmlFor="flexCheckDefault">
                         Flexcube - OMUT
                       </label>
                     </div>
                     <div className="form-check pb-2">
                       <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                       <label className="form-check-label" htmlFor="flexCheckDefault">
                         Flexi
                       </label>
                     </div>
                     <div className="form-check pb-2">
                       <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                       <label className="form-check-label" htmlFor="flexCheckDefault">
                         Omega 2
                       </label>
                     </div>
                     <div className="form-check pb-2">
                       <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                       <label className="form-check-label" htmlFor="flexCheckDefault">
                         Omega 3
                       </label>
                     </div>
                     <div className="form-check pb-2">
                       <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                       <label className="form-check-label" htmlFor="flexCheckDefault">
                         RPS
                       </label>
                     </div>
                
                     <button onClick={handleSearchClick} type="button" className="btn btn-outline-dark" >Search</button>
                  </div>




                  <div className="col-md-3 pt-5">
                    <form>
                    Date Range
                    <div className="pt-3">
                    <input type="date" name=""/>
                    </div>
                    </form>
                  </div>


                  <div className="col-md-3 pt-5">
                  Reportable Status

                  <div className="form-check pt-4 pb-2">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                    Reportable
                    </label>
                  </div>
                  <div className="form-check pb-2">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                    Not Reportable
                    </label>
                  </div>
                  <div className="form-check pb-2">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                    Possibly Reportable
                    </label>
                  </div>

                  <div className="border border-dark-subtle pt-2">
                    <p>Party Search</p>

                    <div className="form-check pb-2">
                        <input className="form-check-input"  type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label " htmlFor="flexCheckDefault">
                        Person
                        </label>
                    </div>

                    <div className="form-check pb-2">
                        <input className="form-check-input"  type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label " htmlFor="flexCheckDefault">
                        Entity
                        </label>
                    </div>

                    <div className="pt-2 pb-4">
                        <label htmlFor="id" >ID</label>
                        <input type="number" name="firstname" id="firstname" required />
                    </div>
                  </div>



                  </div>

                </div>
            </div>
        </div>
    )
};

export default Contain;