import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar(){
    //menu 的 state 變化
    const [click, setClick] = useState(false);
    //設定button 的state初始為true 之後改state用‘setButton’
    const [button,setButton] = useState(true); 

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);
    //看window的尺寸大小
    const showButton = ()=>{
        if(window.innerWidth<=960){
            setButton(false);
        }else{
            setButton(true);
        }
    };
    //window listener to check size
    window.addEventListener('resize',showButton);
    useEffect(()=>{
        showButton()
    },[]);
    return(
        <div>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <Link to="/" className='navbar-logo'>
                        自 在 購 &nbsp; E A S Y G O
                         {/* <i class='fas fa-ice-cream'/>  */}
                    </Link>
                    <ul className={click ? 'nav-menu active':'nav-menu'}>
                         {/*杜老爺 */}
                         <li className='nav-item'>
                            <Link to='/duroyal' className='nav-links' onClick={closeMenu}>
                            杜 老 爺
                            </Link>
                        </li>
                        {/* 義美 */}
                        <li className='nav-item'>
                            <Link to='/imei' className='nav-links' onClick={closeMenu}>
                            義 美
                            </Link>
                        </li>
                         {/*小美*/}
                        <li className='nav-item'>
                            <Link to='/shaomei' className='nav-links' onClick={closeMenu}>
                            小 美
                            </Link>
                        </li>
                        {
                         !button && 
                        <li className='nav-item'>
                            <a href='https://www.facebook.com/自在購Easy-go食品團購-杜老爺義美小美-109177048042090/' className='nav-links' onClick={closeMenu}>&nbsp;F A C E B O O K</a>
                        </li>
                        }
                          {
                        button && 
                        <li className='nav-item'>
                            <a href='https://www.facebook.com/自在購Easy-go食品團購-杜老爺義美小美-109177048042090/' className='nav-links' onClick={closeMenu}>&nbsp;FACEBOOK</a>
                        </li>
                        }
                    </ul>
                    {/* {button && <i class="fab fa-facebook-square" href='https://www.facebook.com/自在購Easy-go食品團購-杜老爺義美小美-109177048042090/' />} */}
                     {/* <Button className='btn--outline' href='https://www.facebook.com/自在購Easy-go食品團購-杜老爺義美小美-109177048042090/' ></Button> */}
                </div>
            </nav>
        </div>
    );
}
export default Navbar