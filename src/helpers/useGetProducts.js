
import React, { useState, useEffect } from 'react'

function useGetProducts(category) {
    const [products, setProducts] = useState(() => null)

    useEffect(() => {
        fetch("http://localhost:3004/products")
            .then(response => response.json())
            .then((data) => {
                const cat_product = data.filter(d => d.category == category)
                setProducts((prev) => prev = cat_product[0].items)
            })
        return () => {
            return null
        }
    }, [])

    if (products) {
        return products
    }
}

export default useGetProducts