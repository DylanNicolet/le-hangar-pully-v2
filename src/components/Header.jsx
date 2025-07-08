import React from "react";
import logo from "../images/logo.png";

export default function Header() {
    // const screenWidth = useSelector((state) => state.webConfig.screenWidth)
    // const desktopWidth = useSelector((state) => state.webConfig.desktopWidth)

    const [screenWidth, setScreenWidth] = React.useState(1920)
    const [desktopWidth, setdesktopWidth] = React.useState(1920)

    return (
        <header>
            <img src={logo} alt="Le Hangar logo" className="header__logo"/>
            <nav className="header__nav" aria-label="Main navigation">
                <a className="button-rdv" href="https://salonkee.ch/salon/le-hangar?lang=fr" target="_blank" rel="noreferrer">Prendre rendez-vous en ligne</a>
                {screenWidth > desktopWidth && <a href="#le-salon" className="header__a">Le Salon</a>}
                {screenWidth > desktopWidth && <a href="https://goo.gl/maps/JnjxKwWeSbyHfGxy7" className="header__a" target="_blank" rel="noreferrer">Direction</a>}
            </nav>
        </header>
    )
}