import React from 'react'
import styled from 'styled-components'

const ProductListTileContainer = styled.div`
display: flex;
justify-content: left;
align-items: center;
width: 450px;
height:180px;
padding: 10px;
background-color: #fff;
border-radius: 10px;
margin: 10px;
`
const ProductListTileImage = styled.img`
width: 150px;
height: 150px;
border-radius: 5px;
object-fit: cover;
margin: 10px;
cursor: pointer;
`;

const ProductListTileContent = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
margin: 10px;
padding: 10px 0px;
height: 150px;
justify-content: space-between;
align-items: left;
`;

const ProductListTileTitle = styled.h2`
font-size: 20px;
font-weight: 600;
color: #646e95;
cursor: pointer;
text-align: left;   
width: 230px;
height: 20px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`;

const ProductListTileDescription = styled.p`
font-size: 14px;
font-weight: 400;
text-align: justify;
width: 230px;
height: 70px;
overflow: hidden;
color: gray;
`;

const ProductListTilePrice = styled.p`
font-size: 18px;
font-weight: 600;
color: #646e95;
width: 230px;
height: 20px;
text-align: left;
`;

function ProductListTile({image, title, description, price}) {
    return (
        <ProductListTileContainer>
            <ProductListTileImage src={image} alt="product" />
            <ProductListTileContent>
                <ProductListTileTitle>{title}</ProductListTileTitle>
                <ProductListTileDescription>{description}</ProductListTileDescription>
                <ProductListTilePrice>${price}</ProductListTilePrice>
            </ProductListTileContent>
        </ProductListTileContainer>
    )
}

export default ProductListTile