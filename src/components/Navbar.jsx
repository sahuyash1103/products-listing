import React from 'react'
import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'
import { SearchContext } from '../context/search-context';

const Nav = styled.nav`
display: flex;
justify-content: left;
gap: 25%;
align-items: center;
height: 60px;
width: 100%;
padding: 0 50px;
background-color: #fff;
`;

const Title = styled.h1`
font-size: 30px;
font-weight: 600;
margin: 0;
padding: 0;
color: #646e95;
`;

const SearchContainer = styled.div`
display: flex;
align-items: center;
border: 1px solid #ccc;
border-radius: 5px;
margin-right: 50px;
background-color: #fff;
padding: 2px;
`;

const SearchInput = styled.input`
border: none;
outline: none;
padding: 5px 10px;
font-size: 18px;
width: 300px;
height: 35px;
`;

const SearchButton = styled.span`
display: flex;
align-items: center;
padding: 5px 10px;
height: 35px;
background-color: #646e95;
cursor: pointer;
color: #fff;
border-radius: 4px;
`;


function Navbar() {
    const { setSearchTerm } = React.useContext(SearchContext);
    const [search, setSearch] = React.useState("");
    const handleSearch = (e) => {
        e.preventDefault();
        setSearchTerm(search);
    }
    return (
        <Nav>
            <Title>Product Listing</Title>
            <SearchContainer>
                <SearchInput
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter")
                            handleSearch(e)
                    }}
                />
                <SearchButton onClick={handleSearch}><BsSearch size={"16px"} /></SearchButton>
            </SearchContainer>
        </Nav>
    )
}

export default Navbar