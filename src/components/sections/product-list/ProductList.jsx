import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./ProductList.scss"

function ProductList({ products }) {

    const navigate = useNavigate();

    return (
        <div className='products_list'>
            {
                products.map((product) =>
                    <div className='showcase' key={product.id} onClick={() => navigate(product.title)}>
                        <h1>{product.category}</h1>
                        <ul>{
                            product.items.map((item) =>
                                <li key={item.id} className='title'>
                                    {item.title}
                                </li>
                            )
                        }
                        </ul>
                    </div>
                )
            }
        </div>
    )
}

export default ProductList
