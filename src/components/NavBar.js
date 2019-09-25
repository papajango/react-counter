import React from 'react';

//Stateless Functional Component
const NavBar = props => {
	const { totalCounters } = props;
	return (
		<nav className="navbar navbar-light bg-light">
			<a className="navbar-brand" href="#">
				NavBar{' '}
				<span className="badge badge-pill badge-secondary">
					{totalCounters}
				</span>
			</a>
		</nav>
	);
};

export default NavBar;
