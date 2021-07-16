import React from 'react';
import './Products.css';
// import resource from 
function Products(props){
    return(
    // <div className='out'>
        <li className='product'>
            {/* <Link className='product-link' to={props.path}> */}
                <figure className='product-figure'>
                    <img className='product-img' 
                    src={require('../components/products/杜老爺'+props.src).default}
                    ></img>
                </figure>
                <div className='product-info'>
                    <p>{props.text}</p>
                    <br/>
                    <p>{props.content}</p>
                </div>
            {/* </Link> */}
            
        </li>
    // </div>
    )
};
export default Products;
