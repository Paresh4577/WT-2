import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mt-2">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/' className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
              <Link to='/Contact' className="nav-link">Contact</Link>
              </li>
              <li className="nav-item">
              <Link to='/UpdateForm' className="nav-link">Update</Link>
              </li>
              <li className="nav-item">
              <Link to='/res' className="nav-link">Registration</Link>
              </li>
              <li className="nav-item">
              <Link to='/DetailsMeetings' className="nav-link">DetailsMeetings</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
