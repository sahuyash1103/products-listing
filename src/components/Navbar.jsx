import React from 'react'
import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'

const Nav = styled.nav`
position: sticky;
top: 0;
display: flex;
justify-content: left;
gap: 25%;
align-items: center;
height: 60px;
width: 100%;
padding: 0 50px;
background-color: #16161e;
`;

const Title = styled.h1`
font-size: 30px;
font-weight: 600;
margin: 0;
padding: 0;
color: #1999d7;
`;

const SearchContainer = styled.div`
display: flex;
align-items: center;
border: 1px solid #ccc;
border-radius: 5px;
margin-right: 50px; 
`;

const SearchInput = styled.input`
border: none;
outline: none;
padding: 5px 10px;
font-size: 18px;
width: 300px;
`;

const SearchButton = styled.span`
display: flex;
align-items: center;
padding: 5px 10px;
background-color: #16161e;
border-radius: 5px;
cursor: pointer;
color: #fff;
`;


function Navbar() {
    return (
        <Nav>
            <Title>Product Listing</Title>
            <SearchContainer>
                <SearchInput type="text" placeholder="Search..." />
                <SearchButton><BsSearch size={"16px"}/></SearchButton>
            </SearchContainer>
        </Nav>
    )
}

export default Navbar