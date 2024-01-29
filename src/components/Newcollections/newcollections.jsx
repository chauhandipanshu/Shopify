// import React from 'react'
// import './newcollections.css'
// import new_collection from'../assets/new_collections'
// import Item from '../item/item'
// const newcollections = () =>{
//     return(
//         <div className='newcollections'>
//           <h1>NEW COLLECTIONS</h1>
//           <hr />
//           <div className="collections">
//             {new_collection.map((item,i)=>{
//                 < Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
//             })}
//           </div>
//         </div>
//     )
// }

// export default newcollections


import React from 'react';
import './newcollections.css';
import new_collection from '../assets/new_collections';
import Item from '../item/item';
const NewCollections = () => {
  return (
    <div className='newcollections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((product) => (
          <Item
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          new_price={product.new_price}
          old_price={product.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;

