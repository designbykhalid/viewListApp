import React from 'react';

const ProductInfoListItem = ({
  getActiveProductDetails,
  id,
  name,
  image_uri
}) => {

      const handleOnClick = (e, id) => {
        e.preventDefault();
        getActiveProductDetails(id);
      }

      return (
      <div className="product-list__item">
        <div className="product-info">
            <a href="#" className="product-info__link" onClick={e => handleOnClick(e,id)}>
              <img className="product-info__image" src={image_uri} alt={name['name-USen']} />
              <h3 className="product-info__title">{name['name-USen']}</h3>
            </a>
        </div>
      </div>
      )
  }

export default ProductInfoListItem;