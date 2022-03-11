import React from "react";
import PropTypes from "prop-types";
export default function Header(props) {


 
  
// let i;
// function bgvalue(i)
// {

//    if(i===1)
//    {
//      i=0;
//      localStorage.setItem("i",0);

//    }else
//    {
//     i=1;
//     localStorage.setItem("i",1);


//    }
// }

  return (

     
    <div>
      
{
 

 
 
      parseInt(localStorage.getItem("i"))===1 ?
   

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              {props.title}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
              </ul>

              {/* <button
                className="btn btn-sm btn-dark mx-2"
                onClick={() => {
                  console.log("helo light")
                  // if (JSON.parse(localStorage.getItem("it") == 1) ){
                  
                  //  console.log("1")
                  //  localStorage.it=JSON.stringify(0)
                  //  console.log(localStorage.getItem("it"))
                    
                  //  } else {
                  //   console.log("0")
                  //   localStorage.it=JSON.stringify(1)
                  //   console.log(localStorage.getItem("it"))
                    
                     
                  //  }

                  localStorage.it=JSON.stringify(0)

                }}
              >
                Dark Mode
              </button> */}

              {props.searchbar ? (
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                   
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              ) : (
                "lol"
              )}
            </div>
          </div>
        </nav>
     :
      
        
           <nav className="navbar navbar-expand-lg navbar-light bg-dark">
             <div className="container-fluid">
               <a className="navbar-brand" href="#">
                 {props.title}
               </a>
               <button
                 className="navbar-toggler"
                 type="button"
                 data-bs-toggle="collapse"
                 data-bs-target="#navbarSupportedContent"
                 aria-controls="navbarSupportedContent"
                 aria-expanded="false"
                 aria-label="Toggle navigation"
               >
                 <span className="navbar-toggler-icon"></span>
               </button>
               <div
                 className="collapse navbar-collapse"
                 id="navbarSupportedContent"
               >
                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                   <li className="nav-item">
                     <a className="nav-link active" aria-current="page" href="#">
                       Home
                     </a>
                   </li>
                   <li className="nav-item">
                     <a className="nav-link" href="#">
                       About
                     </a>
                   </li>
                 </ul>
   
                 <button
                className="btn btn-sm btn-dark mx-2"
                onClick={() => {

                  console.log("Dark")
                  // if (JSON.parse(localStorage.getItem("it") === 1) ){
                  
                  //   console.log("1")
                  //   localStorage.it=JSON.stringify(0)
                     
                  //   } else {
                  //    console.log("0")
                  //    localStorage.it=JSON.stringify(1)
                     
                      
                  //   }
                  localStorage.it=JSON.stringify(1)
                }}
              >
                Dark Mode
              </button>
   
                 {props.searchbar ? (
                   <form className="d-flex">
                     <input
                       className="form-control me-2"
                       type="search"
                       placeholder="Search"
                       aria-label="Search"
                       value="lol"
                     />
                     <button className="btn btn-outline-success" type="submit">
                       Search
                     </button>
                   </form>
                 ) : (
                   "lol"
                 )}
               </div>
             </div>
           </nav>
         }
      
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  searchbar: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  title: "enter title ",
  searchbar: true,
};
