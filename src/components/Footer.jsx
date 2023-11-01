import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
width: 100%;
height: 60px;
background-color: #16161e;
display: flex;
align-items: center;
justify-content: center;
`;

const Text = styled.p`
color: #fff;
font-size: 20px;
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