import React from 'react';

const PriceDisplayTile = props => {

  return(
    <div className='product-display-container'>
      <Link to={`/products/${props.id}`}>
        <div className='product-name'>{props.name}</div>
      </Link>
      <div className='amazon-price'>{props.amzPrice}</div>
      <div className='walmart-price'>{props.walmartPrice}</div>
    </div>

  )
}

export default PriceDisplayTile;
