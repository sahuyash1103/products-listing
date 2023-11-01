import React from 'react'
import styled from 'styled-components'
import { SearchContext } from '../context/search-context';

const SidebarContainer = styled.div`
height: 97%;
width: 350px;
margin: 10px;
padding: 50px 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-color: #fff;
border-radius: 10px;
`;

const SidebarContent = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
width: 250px;
`;

const SidebarTitle = styled.h3`
font-size: 20px;
font-weight: 600;
color: #646e95;
`;

const SidebarList = styled.ul`
display: flex;
flex-direction: column;
gap: 10px;
text-decoration: none;
list-style: none;
`;

const SidebarListItem = styled.li`
font-size: 16px;
font-weight: 500;
cursor: pointer;
&:hover {
  color: #000;
}
`;

const SidebarCheckbox = styled.input`
cursor: pointer;
margin-right: 10px;
accent-color: #646e95;
`;

const SidebarLabel = styled.label`
cursor: pointer;
margin-right: 10px;
&:hover {
  color: #646e95;
  font-weight: 600;
}
`;

const SidebarPriceLabel = styled.label`
font-size: 18px;
font-weight: 500;
margin: 0 10px;
text-align: center;
cursor: pointer;
&:hover {
  color: #646e95;
  font-weight: 600;
}
`;

const SidebarPriceInput = styled.input`
font-size: 16px;
font-weight: 500;
border: 1px solid gray;
border-radius: 5px;
outline: none;
width: 100px;
padding: 5px 10px;
margin: 0 5px;
&::-webkit-outer-spin-button,
&::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
`;

const ButtonsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
width: 100%;

`;

const SidebarButton = styled.button`
font-size: 16px;
font-weight: 500;
border: 1px solid gray;
border-radius: 5px;
outline: none;
width: 100px;
padding: 5px 10px;
margin: 0 5px;
cursor: pointer;
background-color: #646e95;
color: #fff;
&:hover {
  background-color: #fff;
  color: #646e95;
}
`;

function Sidebar() {
  const { categories, setSearchFilters } = React.useContext(SearchContext);
  const [categoriesChecked, setCategoriesChecked] = React.useState([]);
  const [priceLessThen, setPriceLessThen] = React.useState(0);

  const setFilter = () => {
    setSearchFilters({ priceLessThen, categories: categoriesChecked });
  }

  const clearFilter = () => {
    setSearchFilters({ priceLessThen: 0, categories: [] });
    setCategoriesChecked([]);
    setPriceLessThen(0);
  }

  const handleCategoryChange = (checked, categoryId) => {
    if (checked) {
      setCategoriesChecked([...categoriesChecked, categoryId]);
    } else {
      setCategoriesChecked(categoriesChecked.filter((category) => category !== categoryId));
    }
  }

  return (
    <SidebarContainer>
      <SidebarContent>
        <SidebarTitle>Categories</SidebarTitle>
        <SidebarList>
          {
            categories.map((category, index) => (
              <SidebarListItem key={index}>
                <SidebarCheckbox
                  type='checkbox'
                  id={category.categoryName}
                  onChange={(e) => handleCategoryChange(e.target.checked, category.categoryName)}
                  checked={categoriesChecked.includes(category.categoryName)}
                />
                <SidebarLabel htmlFor={category.categoryName}>
                  {category.categoryName}
                </SidebarLabel>
              </SidebarListItem>
            ))
          }
        </SidebarList>
        <SidebarTitle>Price</SidebarTitle>
        <SidebarPriceLabel htmlFor='price'>
          Less then $
          <SidebarPriceInput
            type='number'
            id='price'
            min={0}
            value={priceLessThen}
            onChange={(e) => setPriceLessThen(e.target.value)
            }
          />
        </SidebarPriceLabel>
      </SidebarContent>
      <ButtonsContainer>
        <SidebarButton onClick={clearFilter}>Clear</SidebarButton>
        <SidebarButton onClick={setFilter}>Apply</SidebarButton>
      </ButtonsContainer>
    </SidebarContainer>
  )
}

export default Sidebar