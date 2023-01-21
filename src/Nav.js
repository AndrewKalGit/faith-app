import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './img/faithlogo.png';
import OutsideClickHandler from 'react-outside-click-handler';
import './Hamburger.css';

function Nav(props) {

const [hidden, setHidden ] = useState(false);

const close = () => {
    setHidden(!hidden);
}

    return (
        <>
<div class="bg-white">
<header class="shadow-sm">
  <div class="max-w-screen-4xl mx-auto">
    <div class="flex justify-center items-center lg:justify-between space-x-4 lg:space-x-10">
      <Link to="/" class="flex lg:w-0 lg:flex-1">
        <img class="w-28 bg-white rounded-lg" src={Logo} alt='Logo'/>
      </Link>

      <nav class="hidden space-x-8 text-sm font-medium lg:flex">
        <ul class='text-black lg:flex lg:gap-12 lg:mr-8 none text-base font-medium'>
                <li class='hover:opacity-50'>
                    <Link to='/'> Home </Link>
                </li>
                <li class='hover:opacity-50'>
                    <Link to='about'> About </Link>
                </li>
                <li class='hover:opacity-50'>
                    <Link to='staff'> Staff </Link> 
                </li>
                <li class='hover:opacity-50'>
                    <Link to='sermons'> Sermon </Link>
                </li>    
                <li class='hover:opacity-50'>
                    <Link to='biblestudy'> Bible Study </Link>
                </li>
                <li class='hover:opacity-50'>
                    <Link to='events'> Events </Link>
                </li>
                <li class='hover:opacity-50'>
                    <a href='http://njfaithchurch.org/korean-ministry/' target='_blank' rel="noreferrer"> Korean Ministry </a>
                </li>
            </ul>
      </nav>
    </div>
  </div>
</header>
	<nav className={`Hamburger-Menu${hidden ? 'clicked' : 'unclicked'}`}>
						<OutsideClickHandler
							onOutsideClick={() => {
								setHidden(false);
							}}>
							<button
								onClick={close}
								type='button'>
								{hidden ? '' : ''}
								<div
									className={`Hamburger-icon1${hidden ? 'animate' : ''}`}></div>
								<div
									className={`Hamburger-icon2${hidden ? 'animate' : ''}`}></div>
								<div
									className={`Hamburger-icon3${hidden ? 'animate' : ''}`}></div>
							</button>
						</OutsideClickHandler>
					</nav>
          	<div className={`Nav-HamburgerContent${hidden ? 'Nav-HamburgerContentshow' : ''}`}>
						<div className='Nav-HamburgerContentshow'>
						<Link className='Nav-Links-Hambuger' to='/'>
							Home 
						</Link>
						<Link className='Nav-Links-Hambuger' to='/about'>
							About
						</Link>
                        <Link className='Nav-Links-Hambuger' to='/staff'>
							Staff
						</Link>
						<Link className='Nav-Links-Hambuger' to='/sermon'>
							Sermon
						</Link>
                        <Link className='Nav-Links-Hambuger' to='/biblestudy'>
							Bible Study
						</Link>
						<Link className='Nav-Links-Hambuger' to='/events'>
							Events
						</Link>
                        <a className='Nav-Links-Hambuger' href='http://njfaithchurch.org/korean-ministry/' target='_blank' rel="noreferrer">
							Korean Ministry 
						</a>
					</div>
        </div>
</div>
        </>
    );
}

export default Nav;