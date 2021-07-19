import React, { useEffect, useState } from 'react';
import'../App.css';

function ScrollTop(){
    const [visable , setVisable] = useState(false);
    const [scrolly , setScrollY] = useState(window.pageYOffset);
    // 顯示Scroll
    const showScroll =()=>{
        setScrollY(window.pageYOffset);
        if(scrolly >= 300){
            setVisable(true);
        }else{
            setVisable(false);
        }
        console.log(scrolly);
        // console.log(padeoffset);
    }
    window.addEventListener('scroll',showScroll);
    useEffect(()=>{
        showScroll()
    },[scrolly]);
    //to TOP
    const ScrolltoTop=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }


    return(
        visable?
   ( <div className='scroll' onClick={ScrolltoTop}>
        <i class="fas fa-angle-double-up"></i>
    </div>)
    :
    (<div className='scroll' style={{ display: "none" } }>
        <i class="fas fa-angle-double-up"></i>
    </div>)
)}
export default ScrollTop;