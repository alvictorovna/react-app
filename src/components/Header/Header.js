import React from 'react';
import './Header.modules.scss';

const Header = ({user:{firstName = '', lastName = ''}})=>(
    <div className = 'header'>
        <p>{firstName} {lastName}</p>
    </div>
)

export default Header;