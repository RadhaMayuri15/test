import React from 'react'

function Cart({items}) {
  return (
    <div>
      <div className="col">
        {
          items.map((item)=>(
            <div className="card">
              <h2>{item.name}</h2>
              <h3>{item.id}</h3>
              <h2>{item.price}</h2>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart