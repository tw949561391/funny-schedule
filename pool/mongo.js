//--import
const GenericPool = require('generic-pool');
const MongoClient = require('mongodb').MongoClient;
const conf_mongo = require('../conf/mongo');
const log = require('log4js').getLogger('debug');

const factory = {
  create: function () {
    return new Promise(function (resolve, reject) {
      MongoClient.connect(`mongodb://${conf_mongo.uri}:${conf_mongo.port}/${conf_mongo.dbName}`, (err, db) => {
        if (err) {
          reject(err);
          log.debug("create mongo connect entity error")
        }
        else {
          resolve(db);
          log.debug("create mongo connect entity success")
        }
      })
    })
  },
  destroy: function (db) {
    return new Promise(function (resolve) {
      db.close();
      log.debug("close mongo connect entity success");
      resolve();
    })
  }
};
const opts = {
  max: 10, // maximum size of the pool 
  min: 2 // minimum size of the pool 
};
module.exports = GenericPool.createPool(factory, opts)
