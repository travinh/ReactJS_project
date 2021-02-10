//rafce

import React from 'react';
import {Nav, NavbarContainer, NavLogo} from './NavbarElements'

const index = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>BLOSSOM</NavLogo>
                    <h1>Hey</h1>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default index
