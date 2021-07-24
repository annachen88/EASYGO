import React from 'react';
import Products from '../Products';
import ScrollTop from '../ScrollTop';
import './Page.css';
import { ShaomeiData } from '../data/ShaomeiData';

function Shaomei(){
    ShaomeiData.map((item=>{
        console.log(item.src[0])
    }))
    
    return (
        <div className='product_page'>
            <p>小美</p>
            <div className='container'>
                <ul className='wrapper'>
                    {
                       ShaomeiData.map((item=>{
                        return(
                            // <div>
                                <Products
                                src={item.src}
                                text={item.text}
                                content={item.content}
                                flavors={item.flavors}
                                number={item.number}
                                />
                            // </div>
                        )
                    }))
                    }
                </ul>
                <ScrollTop></ScrollTop>
            </div>
            
        </div>
    
    )
}
export default Shaomei;