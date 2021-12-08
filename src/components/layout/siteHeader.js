import React from 'react';
import Search from '../search/search.js';
import logo from '../../images/logo-brand-hanes.png';


const SiteHeader = () => {
  return (
	<header className="site-header">
		<div className="site-header__container page-width">
			<div className="site-header-left-col">
				<a href="/" className="logo-link">
					<img src={logo} className="logo" alt="Hanes" />
				</a>
			</div>
			<div className="site-header-right-col">
				<Search />
				<h1 className="site-title">Happy Holidays - The Cheers is Here!</h1>
			</div>
		</div>
	</header>
  )
}
  

export default SiteHeader;