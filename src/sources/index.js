import Swagger from 'swagger-client';
import config from 'config';

let client;

function buildClient(callback) {
  new Swagger({
    url: config.swaggerSpec,
    usePromise: true
  })
  .then((client) => callback(null, client))
  .catch((err) => callback(err));
}

function getApi(callback) {
  if (client) {
    callback(client);
  }
  buildClient((err, result) => {
    if(err) {
      callback(err);
    }
    client = result;
    callback(null, client);
  });
}

module.exports.getApi = getApi;
