import React, { useContext } from 'react'
import { Routes, Route, useParams } from 'react-router-dom';
import ProductList from '../sections/product-list/ProductList';
import ProductCategoryList from '../sections/product/ProductCategoryList';
import { AppContext } from '../../context/app-context'

function Products() {
    let param = useParams();
    const category = Object.values(param)[0];
    return (
        <div className='container _wide'>
            <h1 className='page_title'>Kurse {category}</h1>
            <ProductCategoryList />
        </div>
    )
}

export default Products
