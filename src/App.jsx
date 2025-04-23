import React, { useState } from 'react'
import Root from './components/Root'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import About from './components/About'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RatingsChart from './components/RatingsChart'
import Cart from './components/Cart'
import Catalogue from './components/Catalogue'

function App() {

  const [items, setItems]=useState([]);
  const addToCart=(item)=>{
    setItems((prev)=>[...prev, item]);
  }

  const [users, setUsers] = useState([]);

  const browserRouterObj=createBrowserRouter([{
    path:'',
    element:<Root/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },{
        path:'register',
        element:<Register users={users} setUsers={setUsers} />
      },{
        path:'login',
        element:<Login users={users}/>
      },{
        path: 'cart',
        element:<Cart items={items}/>
      },{
        path: 'catalogue',
        element:<Catalogue addToCart={addToCart}/>
      }
    ]}
  ])

  return (
    <RouterProvider router={browserRouterObj} />
    // <div className="w-50 container p-5">
    //   <RatingsChart />
    // </div>
  )
}

export default App