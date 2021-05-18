import Logo from '../partials/logo';
import Nav from '../partials/Nav';

function Header() {
    return(
        <div>
            <header id="header" className="container">
                <Logo />
                <Nav />
            </header>
        </div>
    )
}

export default Header;