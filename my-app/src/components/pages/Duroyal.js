import React from 'react';
import Products from '../Products';
import ScrollTop from '../ScrollTop';
import './Page.css';
import { DuroyalData } from '../data/DuroyalData';

function Duroyal(){
    DuroyalData.map((item=>{
        console.log(item.src[0])
    }))
    
    return (
        <div className='product_page'>
            <p>杜老爺</p>
            <div className='container'>
                <ul className='wrapper'>
                    {
                       DuroyalData.map((item=>{
                        return(
                            // <div>
                                <Products
                                src={item.src[0]}
                                text={item.text}
                                content={item.content}
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
export default Duroyal;