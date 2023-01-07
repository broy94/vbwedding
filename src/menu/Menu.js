import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ScrollerLink from "../scroller-link/ScrollerLink";
import LanguageSelector from "../language-selector/LanguageSelector";
import './Menu.css';
import {localizedStrings} from "../Localization";
import Brand from "../brand.png";

const googleFormsLink = "https://forms.gle/2HpVHVdFGA3qiUaf7";

function Menu(props) {
    return (
        <Navbar sticky="top" bg="light" expand="md">
            <Container>
                <Navbar.Brand as={ScrollerLink} to="main" spy={true} activeClass="active-main" className="px-2">
                    <img src={Brand} alt="Viki & Bubi" className="logo" />
                </Navbar.Brand>
                <LanguageSelector className="d-md-none ms-auto" onLanguageChange={props.onLanguageChange} currentLanguage={props.currentLanguage} />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={ScrollerLink} to="invitation" spy={true} activeClass="active-link">{localizedStrings.menu.invitation}</Nav.Link>
                        <Nav.Link as={ScrollerLink} to="schedule" spy={true} activeClass="active-link">{localizedStrings.menu.schedule}</Nav.Link>
                        {/*<Nav.Link as={ScrollerLink} to="seating" spy={true} activeClass="active-link">{localizedStrings.menu.seating}</Nav.Link>*/}
                        <Nav.Link as={ScrollerLink} to="accommodation" spy={true} activeClass="active-link">{localizedStrings.menu.accommodation}</Nav.Link>
                        <Nav.Link href={googleFormsLink} target="_blank" className="rsvp">{localizedStrings.menu.rsvp}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <LanguageSelector className="d-none d-md-block" onLanguageChange={props.onLanguageChange}  currentLanguage={props.currentLanguage}/>
            </Container>
        </Navbar>
    );
}

export default Menu;