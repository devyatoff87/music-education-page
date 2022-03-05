import React, { useContext, useEffect, useRef, useState } from 'react'
import "./CoursesList_style.scss"
import ProductCard from "../product-card/ProductCard"
import useGetProducts from '../../../helpers/useGetProducts';

function CoursesList() {

    let products = useGetProducts("guitar")

    return (
        <div className='product_section negative_margins'>
            {products && products.map((product) => {
                return <ProductCard key={product.id} otherProps={product} />
            })}
        </div>
    )
}

export default CoursesList
