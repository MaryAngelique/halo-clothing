import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getCategoriesAndDocuments } from "../../utils/firebase.utils";

import { setCategories } from "../../store/categories/categories.action";


import CategoryPreview from "../../components/category-preview/category-preview.component";
import Category from "../category/category.component";

import "./shop.styles.scss";

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categories = await getCategoriesAndDocuments("categories");
            dispatch(setCategories(categories));
        };

        getCategoriesMap();
    }, []);

    return (
        <Routes>
            <Route index element={<CategoryPreview />} />
        </Routes>
    );
};

export default Shop;