import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import ProductListTile from './ProductListTile'
import { SearchContext } from '../../context/search-context';
import _ from 'lodash';

const ProductListContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: left;
width: 1450px;
height: 98%;
`;

const NoProductInfo = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
font-size: 24px;
font-weight: 500;
color: #fff;
`;

const PaginatedContent = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: left;
align-items: start;
overflow-y: scroll;
margin: 0 10px;
margin-top: 10px;
`;

const Pagination = styled.div`
width: 100%;
height: 60px;
background-color: #fff;
margin-top: 10px;
border-radius: 5px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 50px;
`;

const PageLink = styled.span`
display: flex;
justify-content: center;
align-items: center;
font-size: 16px;
font-weight: 500;
border-radius: 5px;
padding: 5px 15px;
margin: 0 5px;
cursor: pointer;
outline: none;
border: 1.5px solid gray;
background-color: #646e95;
color: #fff;
${(props) => props.active && "color: #646e95; background-color: #fff;"};
&:hover {
  background-color: #fff;
  color: #646e95;
}
`;

const PageNumbers = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

function ProductList() {
    const { searchResults } = useContext(SearchContext);
    const [paginatedItems, setPaginatedItems] = useState([]);
    const [page, setPage] = useState({ page: 1 });

    useEffect(() => {
        setPaginatedItems(getPaginatedItems(searchResults, 1, 9).data);
        setPage(getPaginatedItems(searchResults, 1, 9));
    }, [searchResults]);

    const handlePageChangeNext = (e) => {
        setPaginatedItems(getPaginatedItems(searchResults, page.page + 1, 9).data);
        setPage(getPaginatedItems(searchResults, page.page + 1, 9));
    }

    const handlePageChangePrevious = (e) => {
        setPaginatedItems(getPaginatedItems(searchResults, page.page - 1, 9).data);
        setPage(getPaginatedItems(searchResults, page.page - 1, 9));
    }

    const handlePageChange = (page) => {
        setPaginatedItems(getPaginatedItems(searchResults, page, 9).data);
        setPage(getPaginatedItems(searchResults, page, 9));
    }

    return (
        <ProductListContainer>
            {paginatedItems.length > 0 ||
                <NoProductInfo>
                    No Product Found!
                </NoProductInfo>
            }
            <PaginatedContent>
                {paginatedItems.length > 0 &&
                    paginatedItems.map((product, index) => (
                        <ProductListTile
                            key={index}
                            image={"https://via.placeholder.com/150"}
                            // image={product.images[0]}
                            title={product.title}
                            description={product.description || "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam iusto necessitatibus velit, molestiae voluptates aperiam."}
                            price={product.price}
                        />
                    ))
                }
            </PaginatedContent>
            <Pagination>
                <PageLink
                    onClick={page.page <= page.total_pages && handlePageChangePrevious}
                >
                    Previous
                </PageLink>
                <PageNumbers>
                    {
                        _.range(1, page.total_pages + 1).map((pageNumber, index) => (
                            <PageLink
                                key={index}
                                active={page.page === pageNumber}
                                onClick={() => handlePageChange(pageNumber)}
                            >
                                {pageNumber}
                            </PageLink>
                        ))
                    }
                </PageNumbers>
                <PageLink
                    onClick={page.page < page.total_pages ? handlePageChangeNext : null}
                >
                    Next
                </PageLink>
            </Pagination>
        </ProductListContainer >
    )
}


function getPaginatedItems(items, page, pageSize) {
    var pg = page || 1,
        pgSize = pageSize || 100,
        offset = (pg - 1) * pgSize,
        pagedItems = _.drop(items, offset).slice(0, pgSize);
    return {
        page: pg,
        pageSize: pgSize,
        total: items.length,
        total_pages: Math.ceil(items.length / pgSize),
        data: pagedItems
    };
}

export default ProductList