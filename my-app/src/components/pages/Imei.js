import React from 'react';
import Products from '../Products';
import ScrollTop from '../ScrollTop';
import './Page.css';
import { ImeiData } from '../data/ImeiData';

function Imei(){
    ImeiData.map((item=>{
        console.log(item.src[0])
    }))
    
    return (
        <div className='product_page'>
        <p>義美</p>
        <div className='container'>
            <ul className='wrapper'>
                {
                   ImeiData.map((item=>{
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
export default Imei;