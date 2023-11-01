import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
width: 100%;
height: 50px;
background-color: #fff;
display: flex;
align-items: center;
justify-content: center;
`;

const Text = styled.p`
color: #646e95;
font-size: 24px;
font-weight: 500;
`;

function Footer() {
  return (
    <FooterContainer>
      <Text>Footer is here</Text>
    </FooterContainer>
  )
}

export default Footer