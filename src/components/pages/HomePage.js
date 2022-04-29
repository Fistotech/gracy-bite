import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import Logo2 from '../../assets/Logo2.png';
import Ellipse1 from '../../assets/Ellipse1.svg';
import Food from '../../assets/Food.jpg';
import Chips from '../../assets/Chips.jpg';
import Burger from '../../assets/Burger.jpg';
import Pies from '../../assets/Pies.jpg';
import Pizza from '../../assets/Pizza.jpg';
import Sharwama from '../../assets/Sharwama.jpg';
import Barbeque from '../../assets/Barbeque.jpg';






 function HomePage() {
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
                   <li><a href='/signin'>Order Now</a></li>
                </ul>
            </div>
        </div>
        <div className='section'>
            <div className='section-container'>
               <div className='section-text'>
                   <h1>Welcome to <span style={{color: 'red'}}>GracyBite</span></h1>
                   <p>Looking for a best snacks like pies, dognuts, fried chips, pizzas, suasuages,
                       burgers, just to mention but a few  for braekfast lunch and dinner, please look no further.
                   </p>
                   {/* <button style={{textDecoration: 'none', color: 'white', fontSize: '18px'}}><Link to="/signup" style={{textDecoration: 'none', color: 'white'}}>Sign Up to Order</Link></button> */}
                   <button style={{marginLeft: '150px', marginTop: '50px', width: '300px', height: '6vh', background: 'blue', color: 'white', fontSize: '20px', cursor: 'pointer', borderRadius: '5px'}}><Link to="/signup" style={{textDecoration: 'none', color: 'white'}}>Register Now</Link></button>
              </div>
                   <div className='center-image'>
                       <img src={Food} alt ='' />
                   </div>
            </div>

        </div>

        <div className='article'>
            <div className='up'>

            <div className='chips'> 
            <h2>Chips</h2>
            <img src={Chips} alt=''  style={{width: '380px', height: '50vh' }} />
            </div>
            <div className='burger'>
            <h2>Burgers</h2>
            <img src={Burger} alt=''  style={{width: '380px', height: '50vh', }} />
            </div>
            <div className='pies'>
            <h2>Pies</h2>
            <img src={Pies} alt='' style={{width: '380px', height: '50vh', }} />
            </div>
            </div>
            <hr />
            <div className='middle'>
            <div className='Pizzas'>
            <h2>Pizzas</h2>
            <img src={Pizza} alt=''  style={{width: '380px', height: '50vh', }} />
            </div>
            <div className='Sharwama'>
            <h2>Sharwama</h2>
            <img src={Sharwama} alt=''  style={{width: '380px', height: '50vh', }} />
            </div>
            <div className='barbeque'>
            <h2>Barbeque</h2>
            <img src={Barbeque} alt=''  style={{width: '380px', height: '50vh', }} />
            </div>
            </div>

        </div>
        <button style={{width: '30%', height: '6vh', background: 'blue', color: 'white', borderRadius: '5px', marginTop: '500px', marginLeft: '500px', }}><Link to="/signup">Register Now</Link></button>
        
    </div>
  )
}
export default HomePage;
