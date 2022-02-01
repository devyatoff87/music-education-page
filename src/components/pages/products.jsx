import React, { useContext, useEffect } from 'react'
import { Routes, Route, useParams, Outlet, NavLink, useLocation, useNavigationType, useNavigate } from 'react-router-dom';
import ProductList from '../sections/coures-title-list/ProductList';
import CoursesList from '../sections/courses-preview-list/CoursesList';
import { AppContext } from '../../context/app-context'
import HowItWorks from "../sections/how-it-works/HowItWorks"
import ProductsNavbar from '../sections/navbars/products/ProductsNavbar';
import Lessons from '../sections/lessons/Lessons';

function Products() {
    const location = useLocation()
    const navigate = useNavigate();

    useEffect(() => {
        location.pathname == "/products" && navigate(`${location.pathname}/courses`)
    }, [])


    return (
        <div className='container _wide'>
            <h1 className='page_title'>Unterricht und Kurse</h1>
            <ProductsNavbar />
            <Routes>
                <Route path="courses" element={<CoursesList />} />
                <Route path="lessons" element={<Lessons />} />
                <Route path="how-it-works" element={<HowItWorks />} />
            </Routes>
            <Outlet />
        </div>



    )
}

export default Products
