import React from 'react';
import { Link } from 'react-router-dom';
import Food from '../../assets/Food.jpg';
import Logo2 from '../../assets/Logo2.png';
import Barbeque from '../../assets/Barbeque.jpg';
import Burger from '../../assets/Burger.jpg';
import Chips from '../../assets/Chips.jpg';
import Pies from '../../assets/Pies.jpg';
import Pizza from '../../assets/Pizza.jpg';
import Sharwama from '../../assets/Sharwama.jpg';
import '../../App.css';


 function OrderNowPage() {
  return (
    <div>
        <div className='header'>
            <div className='logo'> 
            <img src={Logo2} alt='' />

            </div>
            <div className='nav-bar'>
                <ul className='nav-links'>
                   <li><a href='/'>HomePage</a></li>
                   <li><a href='/signin'>Login</a></li>
                   <li><a href='/signup'>Sign Up</a></li>
                   <li><a href='/order-now'>Order Now</a></li>
                </ul>
            </div>
        </div>

        <div className='article'>
            <div className='up' style={{marginTop: '350px'}}>

              <div className='food-item'> 
               <img src={Chips} alt=''  style={{width: '380px', height: '50vh' }} />
               <h1 style={{textAlign: 'center'}}><a href='' style={{textDecoration: 'none'}}>Chips</a></h1>
               </div>

               <div className='food-item'>
                  <img src={Burger} alt=''  style={{width: '380px', height: '50vh', }} />
                  <h1 style={{textAlign: 'center'}}><a href='' style={{textDecoration: 'none'}}>Burger</a></h1>
               </div>

               <div className='food-item'>
                   <img src={Pies} alt='' style={{width: '380px', height: '50vh', }} />
                   <h1 style={{textAlign: 'center'}}><a href='/order-pie' style={{textDecoration: 'none'}}>Pies</a></h1>
                </div>
            </div>
            
            <div className='middle'>
                <div className='pizza'>
                   <img src={Pizza} alt=''  style={{width: '380px', height: '50vh', }} />
                   <h1 style={{textAlign: 'center'}}><a href='' style={{textDecoration: 'none'}}>Pizza</a></h1>
               </div>

               <div className='Sharwama'>
                  <img src={Sharwama} alt=''  style={{width: '380px', height: '50vh', }} />
                  <h1 style={{textAlign: 'center'}}> <a href='' style={{textDecoration: 'none'}}>Sharwama</a></h1>
               </div>

               <div className='barbeque'>
                   <img src={Barbeque} alt=''  style={{width: '380px', height: '50vh', }} />
                   <h1 style={{textAlign: 'center'}}> <a href='' style={{textDecoration: 'none'}}>Barbeque</a></h1>
               </div>
            </div>

        </div>
        </div>
  
   
  )
}
export default  OrderNowPage;
