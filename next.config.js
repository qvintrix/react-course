module.exports = (phase, { defaultConfig }) => {

    const withSass = require('@zeit/next-sass');

    return withSass();
};
