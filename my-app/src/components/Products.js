import React, { useState } from 'react';
import './Products.css';
// import resource from 
function Products(props){
    const[toggleHover,setToggleHover] = useState(false);
    const[showDetail,setShowDetail]= useState(false);
    const handle_hoveron =()=>{
        setToggleHover(true)
    }
    const handle_hoverleave =()=>{
        setToggleHover(false)
    }
    const handleDetailPage = ()=>{
        setShowDetail(!showDetail)
    }
    return(
    <div >
        <li className='product' onMouseEnter={handle_hoveron} onMouseLeave={handle_hoverleave} onClick={handleDetailPage}>
            {/* <Link className='product-link' to={props.path}> */}
                <figure className='product-figure'>
                    <img className='product-img' 
                    src={require('../components/products/'+props.src).default}
                    ></img>
                </figure>
                {!toggleHover && 
                <div className='product-info' >
                    {props.text}
                </div>}
                {toggleHover &&
                <div className='detail_btn'>
                    瀏覽規格
                </div>}
            {/* </Link> */}
            
            
        </li>
        {showDetail && 
            <div className='detail_container'>
                <div className='detail_wrapper'>
                    <div className='close_btn' >
                        <i className='fas fa-times fa-lg' onClick={handleDetailPage}/>
                    </div>
                    <div className='mainImage'>
                        <img className='showImage'
                                src={require('../components/products/'+props.src).default}/>
                    </div>
                    <div className='detail_right'>
                        <div className='product_title'>
                             {props.text}
                        </div>
                        <div className='product_content'></div>
                        <div className='product_number'></div>
                        <div className='product_flavor'></div>
                    </div>
                </div>
                
            </div>}
     </div>
    )
};
export default Products;
