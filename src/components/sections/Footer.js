import { Link } from 'react-router-dom';

function Footer() {
    return(
        <div className="randomizer">
            <footer className="container">
            <div className="row">
                <div className="col">
                    <p>Unsure of what your next drama should be? Don't worry! We have you covered. Use our Random Drama Generator to find your next binge. 
                </p>

                </div>
            </div>
            <div className="row">
                <div className="col">
                <a href="https://keishashanice.github.io/koreanDrama-Generator/" target="blank">Korean Drama Generator</a> 
                </div>
            </div>
            <div className="row copy">
                <div className="col">
                    <p>KeishaShanice &copy; 2020 <a href="#header">Top</a></p>
                </div>
            </div>
            </footer>
        </div>
    )
}

export default Footer;