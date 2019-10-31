import React, { Fragment } from 'react';

import './css/footer.css';

function Footer() {
	return (
		<Fragment>
		<footer>
			<div className="footerItem">
				<div className="footerItemHeading">
					Thanks
				</div>
				<div className="footerItemData">
					<ul>
						<li><a href="https://github.com/DeveloperRaj">DeveloperRaj</a></li>
						<li><a href="https://github.com/DeveloperRaj/story-stack">Story Stack Project Repo</a></li>
					</ul>
				</div>
			</div>
			<div className="footerItem">
				<div className="footerItemHeading">
					Thanks
				</div>
				<div className="footerItemData">
					Thanks to SoloLearn and Community members who Helps me a lot to learn new technology and help me build my projects, and thanks to Hacker News for awesome free API.
				</div>
			</div>
			<div className="footerItem">
				<div className="footerItemHeading">
					Contact Me
				</div>
				<div className="footerItemData">
					You can contact me at : <br />
					<ul>
						<li><a href="https://www.instagram.com/raj_chhatrala/">Instagram</a></li>
						<li><a href="https://www.sololearn.com/Profile/4991698">SoloLearn</a></li>
						<li><a href="#">jslearner066@gmail.com</a></li>
					</ul>
				</div>
			</div>
		</footer>
		<div className="copyright">All copyright&copy; reserved to Raj Chhatrala</div>
		</Fragment>
	)
}

export default Footer;