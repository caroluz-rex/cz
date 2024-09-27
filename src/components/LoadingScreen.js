// components/LoadingScreen.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaUtensils } from 'react-icons/fa';
import Header from './Header';
import ArrowRain from './ArrowRain';

const rotate = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div`
    background: #000000;
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;

const LoadingContent = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

const LoadingTitle = styled.h1`
    font-size: 90px;
    color: #F3BA2F;
    margin-bottom: 30px;

    /* Медиазапросы для изменения размера шрифта на мобильных устройствах */
    @media (max-width: 768px) {
        font-size: 70px; /* Для планшетов и больших мобильных устройств */
    }

    @media (max-width: 480px) {
        font-size: 50px; /* Для небольших мобильных устройств */
    }
`;

const LoadingIcon = styled(FaUtensils)`
    color: #fff;
    font-size: 120px;
    animation: ${rotate} 3s linear infinite;

    /* Изменение размера иконки на мобильных устройствах */
    @media (max-width: 768px) {
        font-size: 80px;
    }

    @media (max-width: 480px) {
        font-size: 90px;
    }
`;

function LoadingScreen() {
    return (
        <LoadingContainer>
            <ArrowRain />
            <Header />
            <LoadingContent>
                <LoadingTitle>C O O K I N G</LoadingTitle>
                <LoadingIcon />
            </LoadingContent>
        </LoadingContainer>
    );
}

export default LoadingScreen;
