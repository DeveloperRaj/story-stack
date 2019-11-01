import React from 'react';
import { Link } from 'react-router-dom';

import './css/header.css';

function Header(props) {

	let isOpen = false;

	const toggleNav = (e) => {
		let nav = document.getElementById('nav');
		if (!isOpen) {
			nav.style.display = "block";
			isOpen = true;
		} else {
			nav.style.display = "none";
			isOpen = false;
		}
	}

	return (
		<header className="headerContainer">
			<div className="siteLogo">
				<u>S</u>t<u>o</u>r<u>y</u>&nbsp;S<u>t</u>a<u>c</u>k
			</div>
			<button onClick={toggleNav} type="button" className="btn">
				Menu
			</button>
			<div className="links" id="nav">
				<ul>
					<li><Link to="/" className="linkItem">home</Link></li>
					<li><Link to="/topstories" className="linkItem">topstories</Link></li>
					<li><Link to="/askstories" className="linkItem">askstories</Link></li>
					<li><Link to="/showstories" className="linkItem">showstories</Link></li>
					<li><Link to="/jobstories" className="linkItem">jobstories</Link></li>
				</ul>
			</div>
		</header>
	)
}

export default Header;