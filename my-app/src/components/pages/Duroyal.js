import React from 'react';
import Products from '../Products';
import './Duroyal.css';
import { DuroyalData } from '../DuroyalData';
function Duroyal(){
    DuroyalData.map((item=>{
        console.log(item.src[0])
    }))
    
    return (
        <div className='product_duroyal'>
            <h1>Duroyal</h1>
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

            </div>
            
        </div>
    
    )
}
export default Duroyal;