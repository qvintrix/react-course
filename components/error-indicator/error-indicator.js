import React from 'react';
import {Wrapper, Title} from './styles';

const ErrorIndicator = () => (
    <Wrapper>
        <Title>BOOM!</Title>
        <span>
        something has gone terribly wrong
      </span>
    </Wrapper>
);

export default ErrorIndicator;
