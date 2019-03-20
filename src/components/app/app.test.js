import App from './app';

jest.mock('./app');

beforeEach(() => {
    App.mockClear();
});
