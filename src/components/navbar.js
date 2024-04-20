import user_logo from './../images/user_logo.png';
import settings_logo from "./../images/settings.svg";
import { Link } from 'react-router-dom';
import Settings from './settings';
function Navbar(props) {
    
    const colorStyle = {
        color: props.mode === "light" ? "Black" : "White",
    }
    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-${props.mode}`} style={colorStyle}>
                <div className="container">
                    <a className="navbar-brand" style={colorStyle} href="/">
                        <img src={user_logo} alt="Bootstrap" height="40" width="40" />
                        &nbsp;&nbsp;@user1
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" style={{ color: "white" }} ></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" style={colorStyle} aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={colorStyle} to="/">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={colorStyle} to="/">Leader Board</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <div className="btn-group dropstart">
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#settingsModal">
                                    <img src={settings_logo} alt="settings logo"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <Settings bgMusicToggle={props.bgMusicToggle} gameMusicToggle={props.gameMusicToggle} toggleMode={props.toggleMode} mode={props.mode}/>
        </>
    );
}

export default Navbar;