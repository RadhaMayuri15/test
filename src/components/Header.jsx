import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
    let navigate=useNavigate();
  return (
    <div className='bg-light ' style={{minHeight:"80px"}}>
        <nav className='header d-flex justify-content-between align-items-center'>
            <div className="w-25">
                <Link to="#">Logo</Link> 
            </div>
        <ul className='w-50 mb-0 pl-0 d-flex list-unstyled justify-content-between'>
            {/* <div className="w-100 d-flex justfiy-content-between"> */}
            
                {/* <div className=""> */}
                    <li><Link to="/">Home</Link></li>
                    {/* </div> */}
                {/* <div className=""> */}
                    <li><Link to="register" >Register</Link></li>
                    {/* </div> */}
                {/* <div className=""> */}
                    <li><Link to="login">Login</Link></li>
                    {/* </div> */}
                {/* <div className=""> */}
                    {/* </div> */}
                    <li><Link to="catalogue" >Catalogue</Link></li>
                    <li><Link to="cart" >Cart</Link></li>
            
            {/* </div> */}
        </ul>
        </nav>
        
    </div>
  )
}

export default Header