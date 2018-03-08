import React from 'react';

const PriceDisplayTile = props => {

  return(
    <div className='product-display-container'>
      <div className='product-name'>{props.name}</div>
      <div className='amazon-price'>{props.amzPrice}</div>
      <div className='walmart-price'>{props.walmartPrice}</div>
    </div>

  )
}

export default PriceDisplayTile;
