import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchCategoriesStart } from "../../store/categories/categories.action.ts";


import CategoryPreview from "../../components/category-preview/category-preview.component";
import Category from "../category/category.component";

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesStart());
    }, []);

    return (
        <Routes>
            <Route index element={<CategoryPreview />} />
        </Routes>
    );
};

export default Shop;