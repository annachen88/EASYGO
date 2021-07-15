import React from 'react';
import Products from '../Products';
import './Duroyal.css';
import { DuroyalData } from '../DuroyalData';
function Duroyal(){
    DuroyalData.map((item=>{
        console.log(item.src[0])
    }))
    
    return (
        <div className='product'>
            <h1>Duroyal</h1>
            <div className='container'>
                <div className='wrapper'>
                    {
                       DuroyalData.map((item=>{
                        return(
                            <ul className='row'>
                                <Products
                                src={item.src[0]}
                                text={item.text}
                                content={item.content}
                                />
                            </ul>
                        )
                    }))
                    }
                </div>

            </div>
            
        </div>
    
    )
}
export default Duroyal;