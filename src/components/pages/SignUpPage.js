import React from 'react';
import { Link } from 'react-router-dom';
import Food from '../../assets/Food.jpg';
import Logo2 from '../../assets/Logo2.png';
import '../../App.css';

function SignUpPage() {
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

        <div className='signup-section'>
             
            
                  <div className='signup-section-container'>
                      
                      <div className='section-text' style={{marginTop: '0px'}}>
                          <h1 style={{marginLeft: '0px', marginTop: '0px'}}> Sign Up to <span style={{color: 'red'}}>GracyBite</span></h1>
                          <label className='firstname'>FirstName:</label><br />
                          <input style={{width: '60%', height: '4vh', placeholder:'Enter your FirstName', marginTop: '0px', marginLeft: '80px'}}/> <br /><br /><br />

                          <label className='lastname'>LastName:</label><br />
                          <input style={{width: '60%', height: '4vh', background: '', placeHolder: 'Enter your FirstName', marginTop: '0px', marginLeft: '80px'}} /><br /><br /><br />

                          <label className='email'>Email:</label><br />
                          <input style={{width: '60%', height: '4vh', background: '', placeHolder: 'Enter your FirstName', marginTop: '0px', marginLeft: '80px'}} /><br /><br /><br />

                          <label className='pass1'>Password:</label><br />
                          <input style={{width: '60%', height: '4vh', background: '', placeHolder: 'Enter your FirstName', marginTop: '0px', marginLeft: '80px'}} /><br /><br /><br />

                          <label className='pass2'>Confirm Password:</label><br />
                          <input style={{width: '60%', height: '4vh', background: '', placeholder: 'Enter your FirstName', marginTop: '0px', marginLeft: '80px'}} />
                          <button className='btn'><Link to="/signin" style={{textDecoration: 'none', color: 'white', fontSize: '18px', width: '500px'}}>Sign Up to Order</Link></button>
                     </div>
                     <div className='center-image'>
                         <img src={Food} alt ='' style={{width: '600px', height: '500px', marginTop: '60px', marginLeft: '6px'}}/>

                      </div>

                  </div>
                  


            
              

        </div>
    </div>
  )
}
export default SignUpPage;
