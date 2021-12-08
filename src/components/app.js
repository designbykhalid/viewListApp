import React, {useEffect, useState} from 'react';
import fetchUtils from '@degjs/fetch-utils';
import PriceFilter from './filters/price.js';
import ProductInfoList from './results/productInfoList.js';
import ProductDetailModal from './modal/productDetailModal.js';
import SiteHeader from './layout/siteHeader.js';
import SiteFooter from './layout/siteFooter.js';



const App = () => {

	const [dataItems, setDataItems] = useState([]);
	const [productDetails, setProductDetails] = useState();


	const getActiveProductDetails = (id) => {

		// Sorry this State does not work - it is suppoed to be used for the Modal Window.
		const productId = parseInt(id);
		const activeProductDetails = dataItems.find(item => item.id === productId);
		setProductDetails(id);
	}

	useEffect(() => {
		const url = 'http://acnhapi.com/v1/songs';
		fetchUtils.getJSON(
			url,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then(data => {
				setDataItems(Object.values(data));
			})
			.catch(error => {
				console.log(error);
			});
	});

	return (
		<>
		<SiteHeader />
		{/* Below is a modal window component but I got stuck in the state so couldnt complete it */}
		<ProductDetailModal productDetails={productDetails}  />
		<main className="main-content">
			<div className="page-width">
				<div className="content content--2col-left">
					<div className="content-container">
						<div className="sidebar-content">
							<PriceFilter />
						</div>
						<div className="results-content">
							<ProductInfoList getActiveProductDetails={getActiveProductDetails} productsList={dataItems} />
						</div>
					</div>
				</div>
			</div>
		</main>
		<SiteFooter />
		</>
	);
}

export default App;
