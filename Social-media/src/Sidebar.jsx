import { Link } from "react-router-dom"

export default function Sidebar({selectedTab, setSelectedTab}) {
    return(
        <div>
        <div classNameName="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" 
        style={{width: "180px"}}>
    <Link to="/" classNameName="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg classNameName="bi pe-none me-2" width="40" height="32"><use xlink:Href="#bootstrap"></use></svg>
      <span classNameName="fs-4">Sidebar</span>
    </Link>
    <hr/>
    <ul classNameName="nav nav-pills flex-column mb-auto">
      <li classNameName="nav-item" >
        <a href="/" classNameName= "nav-link text-white" aria-current="page">
          <svg classNameName="bi pe-none me-2" width="16" height="16"><use xlink:Href="#home"></use></svg>
          Home
        </a>
      </li>
      <li >
        <Link to="/create-post" classNameName=  "nav-link text-white">
          <svg classNameName="bi pe-none me-2" width="16" height="16"><use xlink:Href="#speedometer2"></use></svg>
          Create Post
        </Link>
      </li>
      </ul>
     
    <hr/>
    <div classNameName="dropdown">
      <a href="#" classNameName="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" classNameName="rounded-circle me-2"/>
        <strong>mdo</strong>
      </a>
      <ul classNameName="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><a classNameName="dropdown-item" href="#">New project...</a></li>
        <li><a classNameName="dropdown-item" href="#">Settings</a></li>
        <li><a classNameName="dropdown-item" href="#">Profile</a></li>
        <li><hr classNameName="dropdown-divider"/></li>
        <li><a classNameName="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
            
  
        
        </div>
    )
}