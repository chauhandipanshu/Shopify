// import React,{useContext} from 'react'
// import {ShopContext} from '../context/ShopContext'
// import {useParams} from 'react-router-dom' ;
// import Breadcrum from '../components/Breadcrums/Breadcrum';

// const Product = () => {
//     const{all_product} =useContext(ShopContext);
//     const{productId}=useParams();
//     const product= all_product.find((e)=> e.id === Number(productId));
//     return (
//         <div>
//             <Breadcrum product ={product} />
//         </div>
//     )
// }

// export default Product
// import React from 'react'
import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../components/Breadcrums/Breadcrum';
import ProductDisplay from '../components/Productdisplay/productdisplay';
import Descriptionbox from '../components/Descriptionbox/descriptionbox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product ={product}/>
      <Descriptionbox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
