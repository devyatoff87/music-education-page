import React, { useState, useDispatch, useContext } from 'react';
import { addNewProduct } from '../../../context/app-action-creators';
import { AppContext } from '../../../context/app-context';
import "./AddProductForm.scss"
import { CustomInput, CustomSelect, CustomTextarea } from "./CustomFormElements"
function AddProductForm() {

    const { dispatch, appState } = useContext(AppContext);


    const products = appState.products

    const initFormState = {
        title: "",
        category: "",
        id: "",
        price: 0,
        description: "",
        imgUrl: ""
    }

    const [formData, setFormData] = useState(initFormState)

    const onChangeHandle = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        setFormData({ ...formData, [name]: value })
    }


    const onSubmitHandle = (e) => {
        e.preventDefault();
        dispatch(addNewProduct(formData))
    }

    return <div>
        <form onChange={(e) => onChangeHandle(e)} onSubmit={(e) => onSubmitHandle(e)} className="add_product_form">
            <CustomInput name="title" title="Title" type="text" />
            <CustomInput name="id" type="text" title="Id" />
            <CustomSelect name="id" title="Category" elements={products} />
            <CustomInput name="price" type="text" title="Price" />
            <CustomInput name="productImgUrl" type="text" title="Image url" placeholder='https://image-link.jpeg' />
            <CustomTextarea name="description" type="text" title="Description" />
            <input type="submit" value="ADD" />
        </form>
    </div>
}

export default AddProductForm;
