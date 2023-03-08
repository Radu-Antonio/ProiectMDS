import React, { Component }  from 'react';

function Navbar(){
    return (
         <nav className = "nav">
            <a href = "/" className ="site-title">Site Name</a>
            <ul className='controllers'>
                <li className='controller'><a href = "/#"> Home </a></li>
                <li className='controller'><a href = "/#"> Articles </a></li>
                <li className='controller'><a href = "/#"> Interviews Questions </a></li>
                <li className='controller'><a href = "/#"> Logical Questions </a></li>
                <li className='controller'><a href = "/#"> About</a></li>
                
             </ul>

             <ul className='login'>
             <li><a href = "/#"> Login </a></li>
             </ul>
            
        </nav>
    )
}

export default Navbar;