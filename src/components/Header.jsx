import logo from "../assets/images/logo.png";

export default function Header(props) {
    return (
        <header>
            <img src={logo} alt="Le Hangar logo" className="header__logo"/>
            <nav className="header__nav" aria-label="Main navigation">
                <a className="button-rdv" href="https://salonkee.ch/salon/le-hangar?lang=fr" target="_blank" rel="noreferrer">Prendre rendez-vous en ligne</a>
                {props.screenWidth > props.desktopWidth && <a href="#le-salon" className="header__a">Le Salon</a>}
                {props.screenWidth > props.desktopWidth && <a href="https://goo.gl/maps/JnjxKwWeSbyHfGxy7" className="header__a" target="_blank" rel="noreferrer">Direction</a>}
            </nav>
        </header>
    )
}