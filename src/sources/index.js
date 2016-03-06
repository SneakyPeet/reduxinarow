import Swagger from 'swagger-client';
import config from 'config';

let client;

function buildClient(callback) {
  new Swagger({
    url: config.swaggerSpec,
    usePromise: true
  }).then(callback);
}

function getApi(callback) {
  if (client) {
    callback(client);
  }
  buildClient((result) => {
    client = result;
    callback(client);
  });
}

module.exports.getApi = getApi;
