import React from 'react';

import './css/banner.css';

function Banner(props) {

	const { bannerHead, bannerBody } = props;

	return (
		<div className="bannerContiner">
			<div className="bannerHeader">
				{ bannerHead }
			</div>
			<div className="bannerBody">
				{ bannerBody }
			</div>
		</div>
	)
}

export default Banner;