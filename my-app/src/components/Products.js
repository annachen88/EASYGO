import React, { useState } from 'react';
import './Products.css';
// import resource from 
function Products(props){
    const[toggleHover,setToggleHover] = useState(false);
    const[showDetail,setShowDetail]= useState(false);
    const[bigImage,setBigImage] = useState(0);
    const handle_hoveron =()=>{
        setToggleHover(true)
    }
    const handle_hoverleave =()=>{
        setToggleHover(false)
    }
    const handleDetailPage = ()=>{
        setShowDetail(!showDetail)
        setBigImage(0)
    }
    const myRef = React.createRef();
    const handleBigImage = (number) =>{
        setBigImage(number)
        const item = myRef.current.children

        console.log(myRef.current.children)
        for(let i=0;i<item.length;i++){
            item[i].className = "flavor_unit";
        }
        item[number].className = "flavor_unit_active";
    }
       
    return(
    <div >
        <li className='product' onMouseEnter={handle_hoveron} onMouseLeave={handle_hoverleave} onClick={handleDetailPage}>
            {/* <Link className='product-link' to={props.path}> */}
                <figure className='product-figure'>
                    <img className='product-img' 
                    src={require('../components/products/'+props.src[0]).default}
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
                        <i className='fas fa-times fa-2x' onClick={handleDetailPage}/>
                    </div>
                    <div className='mainImage'>
                        <img 
                            src={require('../components/products/'+props.src[bigImage]).default}/>
                    </div>
                    <div className='detail_right'>
                        <div className='product_title'>
                            { 
                            (props.flavors.length > 1 )?
                            (props.text + " - " + props.flavors[bigImage]):
                            (props.text)
                            }
                        </div>
                        <div className='product_content'>
                            {props.content}
                        </div>
                        <div className='product_number'>
                            {props.number}
                        </div>
                        <div className='product_flavor' ref={myRef}>
                            {
                                props.flavors.map((flavor,index)=>(
                                    index==0?
                                    (<div className='flavor_unit_active' >
                                    <img src={require('../components/products/'+props.src[index]).default} key={index} onClick={()=>handleBigImage(index)} />
                                    </div>):
                                    (<div className='flavor_unit' >
                                    <img src={require('../components/products/'+props.src[index]).default} key={index} onClick={()=>handleBigImage(index)} />
                                    </div>)
                                ))
                            }
                        </div>
                    </div>
                </div>
                
            </div>}
     </div>
    )
};
export default Products;
