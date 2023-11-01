import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import ProductList from './main/ProductList'

const PageContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
`;

const Main = styled.main`
display: flex;
justify-content: left;
align-items: center;
width: 100%;
height: 100%;
background-color: #646e95;
`;

const Section = styled.section`
width: 82%;
height: 100%;
`;

function Layout() {
    return (
        <PageContainer>
            <Navbar />
            <Main>
                <Sidebar />
                <Section>
                    <ProductList />
                </Section>
            </Main>
        </PageContainer>
    )
}

export default Layout