import React from 'react'
import { Link } from 'react-router-dom';
import Food from '../../assets/Food.jpg';
import Logo2 from '../../assets/Logo2.png';
import '../../App.css';

 function LoginPage() {
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

        <div className='signup-section-container'>
            <div className='section-text'>
                <h1>Login to <span style={{color: 'red'}}>GracyBite</span></h1>
                <div className='email'>
                    <label style={{marginLeft: '30px'}}>Email:</label><br /><br />
                    <input  style={{width: '80%', height: '4vh', background: '', placeHolder: 'Enter your FirstName',  marginLeft: '30px'}} />
                </div>
                <div style={{marginTop: '50px'}}>
                    <label style={{marginLeft: '110px'}}>Password:</label><br /><br />
                    <input style={{width: '70%', height: '4vh', background: '', placeHolder: 'Enter your FirstName', marginTop: '10px', marginLeft: '110px'}} placeholder='enter password'/>
                </div>
                <button style={{marginLeft: '150px', marginTop: '50px', width: '300px', height: '6vh', background: 'blue', color: 'white', fontSize: '20px', cursor: 'pointer', borderRadius: '5px'}}><Link to="/order-now" style={{textDecoration: 'none', color: 'white'}}>Login</Link></button>
                
            </div>
            <div className='center-image'>
                <img src={Food} alt ='' style={{width: '600px', height: '500px', marginTop: '0px', marginLeft: '6px'}}/>

            </div>

        </div>

        
    </div>
  )
}

export default LoginPage;
