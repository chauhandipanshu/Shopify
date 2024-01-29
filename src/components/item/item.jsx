import React from 'react'
import './item.css'
import {Link} from 'react-router-dom'

const Item = (props) => {
    return (
        <div className ='item'>
             <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)}src={props.image} alt={props.name} /></Link>
             <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    ${props.new_price}
                </div>
                <div className="item-price-old">
                    ${props.old_price}
                </div>
            </div>
        </div>
    )
}

export default Item
// Item.js
// import React from 'react';
// import './item.css'
// import {Link} from 'react-router-dom'
// const Item = ({ id, name, image, new_price, old_price }) => {
//   return (
//     <div key={id} className="product-item">
//       <Link to={`/product/${id}`}></Link><img src={image} alt={name} />
//       {/* <p>{name}</p> */}
//       <h3>{name}</h3>
//       <div className="item-prices">
//                <div className="item-price-new">
//                     ${new_price}
//                  </div>
//                  <div className="item-price-old">
//                     ${old_price}
//                  </div>
//              </div>
//     </div>
//   );
// };

// export default Item;
// Item.js
// import React from 'react';
// import './item.css'; // Add a CSS file for styling

// const Item = ({ id, name, image, new_price, old_price }) => {
//   return (
//     <div key={id} className="product-item">
//       <img src={image} alt={name} />
//       <div className="item-details">
//         <h3>{name}</h3>
//         <p>New Price: {new_price}</p>
//         <p>Old Price: {old_price}</p>
//       </div>
//     </div>
//   );
// };

// export default Item;

