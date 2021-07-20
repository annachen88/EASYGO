import React, { useState } from 'react';
import './Products.css';
// import resource from 
function Products(props){
    const[toggleHover,setToggleHover] = useState(false);
    const handle_hoveron =()=>{
        setToggleHover(true)
    }
    const handle_hoverleave =()=>{
        setToggleHover(false)
    }
    return(
    // <div className='out'>
        <li className='product' onMouseEnter={handle_hoveron} onMouseLeave={handle_hoverleave}>
            {/* <Link className='product-link' to={props.path}> */}
                <figure className='product-figure'>
                    <img className='product-img' 
                    src={require('../components/products/杜老爺'+props.src).default}
                    ></img>
                </figure>
                    {!toggleHover &&
                    <div className='product-info' >
                    {props.text}
                    </div>}

                   {toggleHover&&
                    <div className='detail_btn'>瀏覽規格</div>
                    }
                   
                
            {/* </Link> */}
            
        </li>
    // </div>
    )
};
export default Products;
