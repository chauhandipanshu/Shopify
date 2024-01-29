import react from 'react'
import './RelatedProducts.css'
import data_product from '../assets/data'
import Item from '../item/item'
const RelatedProducts =() => {
    return (
        <div className="relatedproducts">
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-item"></div>
            {data_product.map((product,i) => (      
          <Item
            key={i}
            id={product.id}
            name={product.name}
            image={product.image}
            new_price={product.new_price}
            old_price={product.old_price}
          />
        ))}
        </div>
    )
}

export default RelatedProducts
