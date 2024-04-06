import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" class="poopy" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link">
                            <button borst="btn btn-link">Home</button>
                        </Link>
                        <Link to="/ComponentOne" className="nav-link">
                            <button className="btn btn-link">SCP-002</button>
                        </Link>
                        <Link to="/ComponentTwo" className="nav-link">
                            <button className="btn btn-link">SCP-003</button>
                        </Link>
                        <Link to="/ComponentThree" className="nav-link">
                            <button className="btn btn-link">SCP-004</button>
                        </Link>
                        <Link to="/ComponentFour" className="nav-link">
                            <button className="btn btn-link">SCP-005</button>
                        </Link>
                        <Link to="/ComponentFive" className="nav-link">
                            <button className="btn btn-link">SCP-006</button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
