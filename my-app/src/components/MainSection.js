import React,{useState} from 'react';
import '../App.css';
import'./MainSection.css'
import { SliderData } from '../components/SliderData';

function MainSection({slides}){
   const[current,setCurrent] = useState(0);
   const[left,setLeft]=useState(slides.length-1);
   const[right,setRight]=useState(1);
   const[backRight,setBackRight]=useState(2);
   const[backLeft,setBackLeft]=useState(3);

   const length = slides.length;
   //確認是否有資料
   if(!Array.isArray(slides) || slides.length<= 0){
       return null;
   }
   //next & prev image index state function 
   const nextSlide =()=>{
       setLeft(left === length-1? 0: left+1);
       setRight(right === length-1? 0:right+1)
       setCurrent(current === length-1 ? 0 : current+1)
       setBackRight(backRight=== length-1 ? 0 : backRight+1)
       setBackLeft(backLeft===length-1 ? 0 : backLeft+1)
   }
   const preSlide =()=>{
        setLeft(left === 0 ? length-1 : left-1);
        setRight(right === 0 ? length-1 : right-1)
        setCurrent(current === 0 ? length-1 : current-1)
        setBackRight(backRight===  0 ? length-1 : backRight-1)
        setBackLeft(backLeft=== 0 ? length-1 : backLeft-1)
   }
   const imgOrder = [backLeft,left,current,right,backRight]; //呈現的順序
   
   return(
        <div className='image-container'>
            <div className='left'>
                <i class="fas fa-chevron-left fa-3x" onClick={preSlide}/>
            </div>
            <div className='right'>
                <i class="fas fa-chevron-right fa-3x" onClick={nextSlide} />
            </div>
            <div className='all-image'>
            {
                imgOrder.map((element)=>{
                    return(
                        <div className={element==left||element==right||element==current?"active":"slide"}>
                             <img src={require('../components/products/'+SliderData[element]).default} alt="product image" className={element==left||element==right||element==current?"image-active":"image-slide"}/>
                        </div>
                    )
                })
            }
            </div>
        </div>
          // SliderData.map((slide,index)=>{
            //    return(
            //        <div>
            //         {/* 主要三個顯示的 */}
            //         <div className={index==left||index==right||index==current?"slide active":""} key={index}>
            //             {
            //             (index==left||index==right||index==current)
            //             && (
            //             <img src={require('../components/products/'+slide.product).default} alt="product image" className='image'/>
            //             )
            //             }
            //         </div>
            //     </div>
            //     )
            // }
            // )
    )
};
export default MainSection;