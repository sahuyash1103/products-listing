import { createContext } from "react";
import { useState, useEffect } from "react";
import { getCategories, getProducts } from '../data/index';

export const SearchContext = createContext({});


const getCategoyByID = (categories, categoryID) => {
  return categories.filter(cat =>
    JSON.stringify(cat._id["$oid"]) === JSON.stringify(categoryID[0]["$oid"])
  )[0].categoryName;
};

const filterBySearchTerm = (products, searchTerm, categories) => {
  return products.filter(product => {
    const { title, category } = product;
    const titleMatch = title.toLowerCase().includes(searchTerm.toLowerCase());

    const categoryName = getCategoyByID(categories, category);
    const categoryMatch = categoryName.toLowerCase().includes(searchTerm.toLowerCase());
    return titleMatch || categoryMatch;
  });
}

const filterByCategory = (searchList, filterCategories, categories) => {
  return searchList.filter(product => {
    const { category } = product;
    const categoryName = getCategoyByID(categories, category)
    return filterCategories.includes(categoryName);
  });
}


export const StateProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchFilters, setSearchFilters] = useState({});
  const [searchResults, setSearchResults] = useState([]);

  const providerValue = { products, setProducts, categories, setCategories, searchTerm, setSearchTerm, searchResults, setSearchResults, searchFilters, setSearchFilters };

  useEffect(() => {
    setCategories(getCategories());
    setProducts(getProducts());
  }, []);

  useEffect(() => {
    let results = filterBySearchTerm(products, searchTerm, categories);
    const filterCategories = searchFilters.categories;
    if (filterCategories && filterCategories.length !== 0) {
      results = filterByCategory(results, filterCategories, categories);
    }
    const filterPrice = searchFilters.priceLessThen;
    if (filterPrice && filterPrice !== 0) {
      results = results.filter(product => {
        const { price } = product;
        return price <= filterPrice;
      });
    }
    setSearchResults(results);
  }, [searchTerm, searchFilters, products, categories]);

  return (
    <SearchContext.Provider value={{ ...providerValue }}>
      {children}
    </SearchContext.Provider >
  );
};
