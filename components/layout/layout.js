import React from 'react';
import './layout.scss';

const Layout = ({ children }) => (
    <div className="layout-container">
        {children}
    </div>
);

export default Layout;
