// components/ArrowRain.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const fall = keyframes`
    0% {
        top: -10%;
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    100% {
        top: 110%;
        opacity: 0;
    }
`;

const ArrowContainer = styled.div`
    position: absolute; /* Changed from fixed to absolute */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0; /* Set to -1 to place it behind other elements */
`;

const Arrow = styled.div`
    position: absolute;
    top: -10%;
    left: ${({ left }) => left}%;
    animation: ${fall} ${({ duration }) => duration}s linear infinite;
    animation-delay: ${({ delay }) => delay}s;
    transform: rotate(45deg);
    display: flex;
    align-items: center;
`;

const ArrowSymbol = styled.span`
    font-family: 'ArrowFont', sans-serif;
    margin-right: 5px;
    font-size: ${({ size }) => size}px;
    color: darkgreen;
`;

const ArrowText = styled.span`
  font-family: 'SuperWaterFort', sans-serif;
  font-size: ${({ size }) => size * 0.8}px;
  color: green;
`;

function generateArrows(num) {
    const arrows = [];
    const signs = ['+10%', '+20%', '+50%', '+100%'];
    for (let i = 0; i < num; i++) {
        const size = Math.random() * 20 + 20; // Base size
        const left = Math.random() * 100;
        const duration = Math.random() * 5 + 5;
        const delay = Math.random() * 5;
        const sign = signs[Math.floor(Math.random() * signs.length)];
        arrows.push(
            <Arrow
                key={i}
                left={left}
                duration={duration}
                delay={delay}
            >
                <ArrowSymbol size={size}>↑</ArrowSymbol>
                <ArrowText size={size}>{sign}</ArrowText>
            </Arrow>
        );
    }
    return arrows;
}

function ArrowRain() {
    return <ArrowContainer>{generateArrows(50)}</ArrowContainer>;
}

export default ArrowRain;
