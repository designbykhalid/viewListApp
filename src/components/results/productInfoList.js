import React from 'react';
import ProductInfoListItem from './ProductInfoListItem.js'

const ProductInfoList = ({productsList, getActiveProductDetails}) => {
  return (
    <div className="product-list">
        { productsList.map((item, index) => <ProductInfoListItem getActiveProductDetails={getActiveProductDetails} key={index} {...item} />) }
    </div>
  )
}

export default ProductInfoList;
