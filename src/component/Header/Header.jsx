import { useState } from 'react';

// logo
import logo from "../../asses/image/LOGO11-01.png";
// bootstrap
import { NavLink } from "react-router-dom";
import SLUGS from "../../utilities/slug";
import {UnorderedListOutlined } from '@ant-design/icons';
function Header() {

    const [scroll, setscroll] = useState(true);

    const handleNav = () => {
        if (window.scrollY >= 150) {
            setscroll(false)
        } else {
            setscroll(true)
        }
    };
    window.addEventListener('scroll', handleNav);

    return (
        <section id={scroll ? 'header' : 'changeHeader'}>

            {/* ROUTE */}
            <nav>
                <input type="checkbox" id='check' />
                <label htmlFor="check" className='checkbtn'>
                    <UnorderedListOutlined />
                </label>
                <label className='logo'><NavLink to={SLUGS.home}> <img style={{ width: "135px" }} src={logo} alt="" /></NavLink></label>
                <ul>
                    <li><NavLink activeclassName="active" to={SLUGS.home}>Home</NavLink></li>
                    <li><NavLink activeclassName="active" to={SLUGS.about}>About</NavLink></li>
                    <li><NavLink activeclassName="active" to={SLUGS.gallery}>Gallery</NavLink></li>
                    <li><NavLink activeclassName="active" to={SLUGS.art}>Art Collection</NavLink></li>
                    <li><NavLink activeclassName="active" to={SLUGS.team}>Team</NavLink></li>
                    <li><NavLink activeclassName="active" to={SLUGS.project}>Project</NavLink></li>
                    <li><NavLink activeclassName="active" to={SLUGS.contact}>Contact</NavLink></li>
                </ul>
            </nav>

        </section>
    );
}

export default Header;