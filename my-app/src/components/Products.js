import React from 'react';
// import resource from 
function Products(props){
    return(
    <div>
        <li className='product'>
            {/* <Link className='product-link' to={props.path}> */}
                <figure className='product-img'>
                    <img className='product-img' 
                    src={require('../components/products/杜老爺'+props.src).default}
                    ></img>
                </figure>
                <div className='product-info'>
                    <p>{props.text}</p>
                    <p>{props.content}</p>
                </div>
            {/* </Link> */}
            
        </li>
    </div>
    )
};
export default Products;
