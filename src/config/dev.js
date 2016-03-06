'use strict';

import baseConfig from './base';

let config = {
  appEnv: 'dev',  // feel free to remove the appEnv property here
  swaggerSpec: 'http://localhost:55533/swagger/docs/v1'
};

export default Object.freeze(Object.assign({}, baseConfig, config));
