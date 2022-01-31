import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../product-card/ProductCard'
import "./ProductCatergoryList.scss"
import { AppContext } from '../../../context/app-context'
import { getItemsFromLocalStorage } from '../../../helpers/setAndGetLocalStorage'

function ProductCategoryList() {
    let param = useParams();
    param = Object.values(param)[0];

    const products = getItemsFromLocalStorage("products")

    const product = products.find((elem) => elem.category == param)

    return (
        <div className='container _wide'>
            <div className='product_section negative_margins'>{
                product.items.map((product) =>
                    <ProductCard key={product.id} otherProps={product} />
                )}
            </div>
        </div>
    )
}

export default ProductCategoryList
