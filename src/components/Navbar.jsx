import Logo from "./Logo"
import {NavLink} from "react-router-dom"

function Navbar() {
    const navItem = [
        {
            title : "Home",
            slug : "/",
            isActive : true,
        },
        {
            title : "Project",
            slug : "/project",
            isActive : false,
        }
    ]
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Logo/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            navItem.map((item, index) =>(
                                <li className="nav-item" key={index}>
                                <NavLink className={`nav-link ${item.isActive ? "active" : ""}`} to={item.slug}>{item.title}</NavLink>
                                </li>
                            ))
                        }
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">Project</a>
                        </li>*/}
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar