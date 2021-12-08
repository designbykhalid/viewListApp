import React from 'react';


const SiteFooter = () => {
  return (
	<footer className="site-footer">
		<div className="site-footer__container page-width">
            <ul className="footer-links-list">
                <li className="footer-links-list__item"><a href="#">Customer Service</a></li>
                <li className="footer-links-list__item"><a href="#">My Profile</a></li>
                <li className="footer-links-list__item"><a href="#">Secure Shopping</a></li>
                <li className="footer-links-list__item"><a href="#">Affiliate Programs</a></li>
                <li className="footer-links-list__item"><a href="#">HanesBrands Corporate</a></li>
            </ul>
            <small className="copyright">&copy;2021 HANESBRANDS INC. ALL RIGHTS RESERVED.</small>
		</div>
	</footer>
  )
}
  

export default SiteFooter;