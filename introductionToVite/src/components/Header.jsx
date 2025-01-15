import './Header.css';
import {IconActivityHeartbeat} from '@tabler/icons-react';
const Header = () => {
    return (
        <header className="header">
            <nav className="navBar">
                <IconActivityHeartbeat
                    size={40}
                    color="white"
                    stroke={2}
                    className="navIcon"
                />
                <h1>Demo</h1>

                <div className="dropdowns">
                    <div className="dropdown">
                        <button className="dropbtn">Dropdown 1</button>
                        <div className="dropdown-content">
                            <a href="#">Option 1</a>
                            <a href="#">Option 2</a>
                            <a href="#">Option 3</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Dropdown 2</button>
                        <div className="dropdown-content">
                            <a href="#">Option 1</a>
                            <a href="#">Option 2</a>
                            <a href="#">Option 3</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Dropdown 3</button>
                        <div className="dropdown-content">
                            <a href="#">Option 1</a>
                            <a href="#">Option 2</a>
                            <a href="#">Option 3</a>
                        </div>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default Header;