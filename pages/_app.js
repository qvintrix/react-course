import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import { store } from '../store';
import '../styles/styles.scss';

class MyApp extends App {
  constructor(props) {
    super(props);
  }

  render() {
    const { Component } = this.props;

    return (
            <Container>
                <Provider store={store}>
                    <Component {...this.props}/>
                </Provider>
            </Container>
    );
  }
}

export default MyApp;
