import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const Main = styled.main`
    flex-grow: 1;
    display: flex;
    height: 100%;
`;

const Section = styled.section`

`;

function Layout() {
    return (
        <PageContainer>
            <Navbar />
            <Main>
                <Sidebar />
                <Section>
                    porduct list here
                </Section>
            </Main>
            <Footer />
        </PageContainer>
    )
}

export default Layout