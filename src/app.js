

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import Body from './components/Body';
import Contact from './components/Contact';
import Error from './components/Error';
import HeaderLayout from './components/HeaderLayout';
import RestaurantMenu from './components/RestaurantMenu';
const AppLayout = () =>{
   
    return (
        <div className="app">
            <HeaderLayout/>
            <Outlet/>
        </div>
    )
}
const appRouter= createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'about',
                element:<About/>
            },
            {
                path:'contact',
                element:<Contact/>
            },
            {
                path:'restaurant/:resId',
                element:<RestaurantMenu/>
            }
        ]
    },
    
])
const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

