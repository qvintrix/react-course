import React from 'react';
import PropTypes from 'prop-types';
import {Wrapper} from './styles';

const Layout = ({ children }) => (
    <Wrapper>
        {children}
    </Wrapper>
);

export default Layout;


Layout.propTypes = {
    children: PropTypes.object,
};
