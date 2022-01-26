import React, { useState, useDispatch, useContext } from 'react';
import { addNewProduct, addedSuccessfully, showNotification } from '../../../context/app-action-creators';
import { AppContext } from '../../../context/app-context';
import "./AddProductForm.scss"
import { CustomInput, CustomSelect, CustomTextarea } from "../../simple/custom-form-elements/CustomFormElements"
import { resetFormValues } from '../../../helpers/helpers';
function AddProductForm() {

    const { dispatch, appState } = useContext(AppContext);

    const [products_, setProducts] = useState()

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
        try {
            dispatch(addNewProduct(formData));
            dispatch(showNotification({
                style: "success",
                text: "Product added successfully"
            }))

        } catch (err) {
            dispatch(showNotification({
                style: "error",
                text: "Product hasn't been added successfully"
            }))
            console.log(err);
        }

        resetFormValues({
            classNameOfForm: ".add_product_form",
            classNameException: "category",
            setTimeOutTime: 3000
        });

        setFormData(initFormState)
    }

    return (<form onChange={(e) => onChangeHandle(e)} onSubmit={(e) => onSubmitHandle(e)} className="add_product_form">
        <CustomInput required name="title" title="Title" type="text" />
        <CustomInput required name="id" type="text" title="Id" />
        <CustomSelect required name="id" title="Category" elements={products} />
        <CustomInput required min="0" max="10" name="price" type="number" title="Price" />
        <CustomInput required name="productImgUrl" type="text" title="Image url" placeholder='https://image-link.jpeg' />
        <CustomTextarea required name="description" type="text" title="Description" />
        <input className='button' type="submit" value="ADD" />
    </form>)
}

export default AddProductForm;
