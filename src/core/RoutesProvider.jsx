import React, { Suspense } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import { Layout } from "core/components/Layout";
import HomePage from "core/pages/HomePage";
import ProductListPage from "product/pages/ProductListPage";
import ProductPage from "product/pages/ProductDetailPage";

const unknownRoute = (message) => <Route
    path="*"
    element={
        <main>
            <p>{message}</p>
        </main>
    }
/>;

// React lazy here

const RoutesProvider = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route index path="products" element={
                        <Suspense fallback={<span>Cargando...</span>}>
                            <ProductListPage />
                        </Suspense>
                    } />
                    <Route path="products/:idProduct" element={<ProductPage />} />
                    {unknownRoute("Nothing here!")}
                </Route>
            </Routes>
            <Outlet />
        </>
    );
};

export default RoutesProvider;