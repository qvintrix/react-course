import React from 'react';
import './layout.scss';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
    <div className="layout-container">
        {children}
    </div>
);

export default Layout;


Layout.propTypes = {
  children: PropTypes.object,
};
