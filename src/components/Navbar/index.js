import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
import Covid from '../../pages/home';
const Navbar = () => {
return (
	<>
	
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='./home' activeStyle>
			Homepage
			
			
		</NavLink>
		<NavLink to='./helpline-numbers-statewise' activeStyle>
			Helplines
		</NavLink>
		<NavLink to='/guidelines' activeStyle>
			Guidelines
		</NavLink>
		<NavLink to='/about' activeStyle>
			About Us
		</NavLink>
		
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		{/* </NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn> */}
	</NavMenu>
    </Nav>
	</>
	
);

};
{
	<>
	<Covid/>
	</>
}

export default Navbar;
