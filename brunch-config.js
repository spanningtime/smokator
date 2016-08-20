'use strict';

module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'app.js': /^app\//,
        'vendor.js': /^node_modules\//
      }
    },

    stylesheets: {
      joinTo: {
        'app.css': /^app\//
      }
    }
  },

  plugins: {
    babel: {
      presets: ['es2015', 'react']
    }
  },

  server: {
<<<<<<< 74c054c53cd5bdbf2d9ccaf0f4b34219ae8d7f4b
    port: Number.parseInt(process.env.PORT) || 8000
=======
    port: 8000
>>>>>>> Initial commit
  }
};
