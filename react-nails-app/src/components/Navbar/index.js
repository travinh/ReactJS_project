//rafce

import React from 'react';
import {Nav, NavbarContainer, NavLogo} from './NavbarElements'

const index = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>BLOSSOM</NavLogo>
                    <MobileIcon>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default index
