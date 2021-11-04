import { Link, useHistory } from 'react-router-dom';

export default function Header() {
    const history = useHistory()

    const logout = () => {
        localStorage.removeItem('login')
        history.push("/")
    }

        return (
          <>
          <nav className="py-2 bg-light border-buttom">
            <div className="container d-flex flex-wrap">
              <ul className="nav me-auto">
                <li className="nav-item">
                  <a href="/" className="nav-link link-dark px-2 active" aria-current="page">Home</a>
                </li>
                <li className="nav-item"><a href="/about" className="nav-link link-dark px-2">About</a></li>
                <li className="nav-item"><a href="/todos" className="nav-link link-dark px-2">Todos</a></li>
                </ul>
                  <Link to="/login"><button className="btn btn-primary btn-lg" type="button"> Login</button></Link>
                  <button className="btn btn-sm btn-danger" onClick={ logout }>Logout</button>
            </div>
          </nav>
          <header className="py-3 mb-4 border-bottom">
            <div className="container d-flex flex-wrap justify-content-center">
              <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
                <span className="fs-4">My First React App</span>
              </a>
            </div>
          </header>
          </>
        )       
}