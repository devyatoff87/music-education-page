import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../product-card/ProductCard'
import "./CoursesList_style.scss"
import { AppContext } from '../../../context/app-context'
import { getItemsFromLocalStorage } from '../../../helpers/helpers'

function CoursesList() {
    // let param = useParams();
    // param = Object.values(param)[0];

    const products = getItemsFromLocalStorage("products")

    // const product = products.find((elem) => elem.category == param)

    return (
        <div className='product_section negative_margins'>
            {
                products[0].items.map((product) =>
                    <ProductCard key={product.id} otherProps={product} />
                )}
        </div>
    )
}

export default CoursesList
