'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    fingerprint: {
      prepend: 'https://<your-username>.github.io/<your-repo-name>/'
    }
  });

  return app.toTree();
};
