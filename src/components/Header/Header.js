import React, { Component } from 'react';
import Search from './Search';
import styled from 'styled-components';



export default function Header() {
  return (
    <HeaderArea>
        <Logo>
            <img src={require('../../img/react-news-logo.png')} alt="" />
        </Logo>
        <Search/>
    </HeaderArea>
  )
}

// Styled Component
const HeaderArea = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  max-width: 200px;
`;
