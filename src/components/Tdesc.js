import React from 'react';

import './css/tdesc.css';

function Tdesc(props) {

	const { descImgLogo, imgType, descName, descMain } = props;

	return (
		<div className="descItem">
			<div className="descItemHead">
				<div className="descItemLogo">
					<img src={require(`../images/${descImgLogo}.${imgType}`)} alt="" />
				</div>
				<div className="descItemName">
					{descName}
				</div>
			</div>
			<div className="descItemMain">
				{descMain} 
			</div>
		</div>
	)
}

export default Tdesc;