// components/Header.js
import React from 'react';
import styled from 'styled-components';
import { FaTelegramPlane, FaChartLine } from 'react-icons/fa';

const HeaderContainer = styled.div`
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    z-index: 2; /* Ensure it's above the arrows */
`;

const IconButton = styled.a`
    color: #fff;
    font-size: 40px;
    margin: 0 20px;
    text-decoration: none;

    &:hover {
        color: #f0f0f0;
    }
`;

function Header() {
    return (
        <HeaderContainer>
            <IconButton href="https://t.me/czdogwifhat" target="_blank" rel="noopener noreferrer">
                <FaTelegramPlane />
            </IconButton>
            <IconButton href="https://yourgraphlink.com" target="_blank" rel="noopener noreferrer">
                <FaChartLine />
            </IconButton>
        </HeaderContainer>
    );
}

export default Header;
