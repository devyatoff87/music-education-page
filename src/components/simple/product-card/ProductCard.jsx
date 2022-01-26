import React from 'react'
import "./ProductCard.scss"
import ColumnBox from '../../layout/ColumnBox'

function ProductCard({ otherProps }) {
    const { title, price, online, description, productImgUrl } = otherProps
    return (
        <ColumnBox boxStyle={"large"}>
            <div className='product_card'>
                <img src={productImgUrl} alt='' />
                <div className='product_details'>
                    <h1>
                        {title}
                    </h1>
                    <p className='desc'>{description}</p>
                    <p className='price'>{price}</p>
                </div>
            </div>
        </ColumnBox>
    )
}

export default ProductCard
