import React from 'react'
import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'

const Nav = styled.nav`
display: flex;
justify-content: space-between;
gap: 500px;
align-items: center;
padding: 0 5px;
height: 60px;
width: 100%;
position: fixed;
background-color: #1e202e;
border-bottom: 1px solid #ccc;
`

const Title = styled.h1`
display: inline-block;
font-size: 24px;
font-weight: 600;
margin: 0 50px;
padding: 0;
color: #fff;
`

const SearchWrapper = styled.div`
border: 1px solid #fff;
border-radius: 4px;
margin: 2px 50px;
`;

const SearchInput = styled.input`
border: none;
outline: none;
font-size: 18px;
padding: 5px 10px;
width: 300px;
`

const SearchIcon = styled.i``;

function Navbar() {
  return (
    <Nav>
      <Title>Product Listing</Title>
      <SearchWrapper>
        <SearchInput type="text" placeholder="Search" />
        <SearchIcon>
          <BsSearch />
        </SearchIcon>
      </SearchWrapper>
    </Nav>
  )
}

export default Navbar