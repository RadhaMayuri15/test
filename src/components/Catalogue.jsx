import React from 'react'

function Catalogue({addToCart}) {

  const products=[
    {id: 1, name: 'Soneta watch', price: 2500}, 
    {id: 2, name: 'fastrack watch', price: 2000}, 
    {id: 3, name: 'dressberry watch', price: 1500}, 
    {id: 4, name: 'tata watch', price: 1200}, 
    {id: 5, name: 'raga watch', price: 1800}, 
  ]

  return (
    <div className='container'>
      <div className="row d-flex flex-wrap gap-3">
      {
        products.map((item)=>(
          <div className="card">
            <h2>{item.name}</h2>
            <h3>{item.id}</h3>
            <h2>{item.price}</h2>
            <button className="btn btn-outline-danger" onClick={()=>addToCart(item)}>Add To Cart</button>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Catalogue

// import React from 'react';

// function Catalogue({ addToCart }) {

//   const products = [
//     { id: 1, name: 'Soneta watch', price: 2500 }, 
//     { id: 2, name: 'fastrack watch', price: 2000 }, 
//     { id: 3, name: 'dressberry watch', price: 1500 }, 
//     { id: 4, name: 'tata watch', price: 1200 }, 
//     { id: 5, name: 'raga watch', price: 1800 }, 
//   ];

//   return (
//     <div className='container'>
//       <div className="row d-flex flex-wrap gap-3">
//         {
//           products.map((item) => (
//             <div className="card p-3" key={item.id}>
//               <h4>{item.name}</h4>
//               <p>ID: {item.id}</p>
//               <p>₹{item.price}</p>
//               <button 
//                 className="btn btn-outline-danger" 
//                 onClick={() => addToCart(item)}
//               >
//                 Add To Cart
//               </button>
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   );
// }

// export default Catalogue;
