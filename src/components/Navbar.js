import React from 'react';
import './Navbar.css';

export default function Navbar(props) {
  return (
    <>
        <div className='navbar'>
            <div className="navElements" >
                <h2 className='name'>{props.title}</h2>
                {/* <ul>
                    <li><a>mode</a></li>
                </ul> */}
            </div>
        </div>
    </>
  )
}
