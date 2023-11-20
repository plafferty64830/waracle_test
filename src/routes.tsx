import React, { Fragment } from "react";
import { Route, Routes, useNavigate } from 'react-router-dom'
import { ListCats } from "./pages/ListCats";
import { UploadCat } from "./pages/UploadCat";
import { FlexProps } from "@chakra-ui/react";

export type RouteProps = FlexProps;
export const Navigation: React.FC<RouteProps> = () => {
    return (
        <Routes>
            <Route path='/' element={<ListCats />} />
            <Route path='/upload' element={<UploadCat />} />
        </Routes>
    )
}