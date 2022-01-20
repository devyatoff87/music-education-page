import React, { useContext } from 'react'
import { AppContext } from '../../context/app-context'
import AddProductForm from '../sections/add-product-form/AddProductForm';
function Home() {
    const { products } = useContext(AppContext);
    return (
        <div>

            <AddProductForm />
        </div>
    )
}

export default Home
