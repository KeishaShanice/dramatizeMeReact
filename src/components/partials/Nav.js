import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="#">Navigation</a> */}
                <Link to="/" className="navbar-brand">Navigation</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        {/* <a className="nav-link" href="#">Genre</a> */}
                        </li>
                        <li className="nav-item">
                            <Link to="/actors" className="nav-link">Actors</Link>
                        {/* <a className="nav-link" href="#">Actor</a> */}
                        </li>
                        <li className="nav-item">
                            <Link to="/genre" className="nav-link">Genre</Link>
                        {/* <a className="nav-link" href="#">Contact Us</a> */}
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact Us</Link>
                        {/* <a className="nav-link" href="#">Contact Us</a> */}
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
</>








        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <div className="container-fluid">
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <li className="nav-item">
        //                     <Link to="/">Home</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to="/about">About</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to="/actors">Actors</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to="/genre">Genre</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to="/contact">Contact Us</Link>
        //                 </li>
        //             </ul>

        //         </div>
        //     </div>
        // </nav>
    )
}

export default Nav;