import React, { useContext } from 'react'
import { Routes, Route, useParams } from 'react-router-dom';
import ProductList from '../sections/product-list/ProductList';
import ProductCategoryList from '../sections/product/ProductCategoryList';
import { AppContext } from '../../context/app-context'

function Products() {
    let param = useParams();
    param = Object.values(param)[0];

    const context = useContext(AppContext);
    const products = context.appState.products
    return (
        <div className='container'>
            <Routes>
                <Route path="/" element={<ProductList products={products} />} />
                <Route path={param} element={<ProductCategoryList products={products} />} />
            </Routes>
        </div>
    )
}

export default Products
