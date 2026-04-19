import React from "react";

import { createBrowserRouter } from "react-router";
import NotFound from "../Components/NotFound";
import Home from "../pages/Home";
import Root from "../Layout/Root";


const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            { index: true, Component: Home },
            
        ]
    },

    {
        path: '*',
        Component: NotFound
    }
]);

export default router;