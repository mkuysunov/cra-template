const rootPath = require('path');
const getPath = (path) => rootPath.resolve(__dirname, path);

module.exports = {
  webpack: {
    alias: {
      '@assets': getPath('./src/assets'),
      '@components': getPath('./src/components'),
      '@hooks': getPath('./src/hooks'),
      '@store': getPath('./src/store'),
      '@utils': getPath('./src/utils'),
      '@views': getPath('./src/views'),
    },
  },
};
