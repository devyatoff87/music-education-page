import React from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../simple/product-card/ProductCard'
import "./ProductCatergoryList.scss"

function ProductCategoryList({ products }) {
    let param = useParams();
    param = Object.values(param)[0];
    const product = products.find((el) => el.category == param)

    return (
        <div className='product_section'>{
            product.items.map((product) =>
                <ProductCard key={product.id} otherProps={product} />
            )}
        </div>
    )
}

export default ProductCategoryList
