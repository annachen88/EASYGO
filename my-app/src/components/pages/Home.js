import '../../App.css';
import './Home.css'
import MainSection from '../MainSection';
import { SliderData } from '../SliderData';

function Home(){
    return(
        <div className='main-container'>
            <MainSection slides={SliderData}/> 
            {/* 傳資料 */}
        </div>
    )
}
export default Home;
