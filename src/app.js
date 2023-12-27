

import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './components/Body';
import HeaderLayout from './components/HeaderLayout';
const AppLayout = () =>{
    return (
        <div className="app">
            <HeaderLayout/>
            <Body/>
        </div>
    )
}

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
