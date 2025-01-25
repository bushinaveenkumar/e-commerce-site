import React from 'react'
import './Breadcrumb.css'
const Breadcrumb = (props) => {
    const {product}=props;
    console.log(product)

  return (    
    <div className='Breadcrumbs-container'>
        <ul class="breadcrumb">
            <li><a href="#">SHOP</a></li>
            <li><a href="#">{product.category}</a></li>
            <li>{product.id}</li>            
        </ul>
    </div>
  )
}

export default Breadcrumb