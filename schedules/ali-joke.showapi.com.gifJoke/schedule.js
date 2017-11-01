const schedule = require('node-schedule');
const config = require('./config');
const Service = require('./service');
const Mongo = require('../../pool/mongo');
const moment = require('moment');
const log = require('log4js').getLogger('ali_joke_showapi_gifJoke');

module.exports = () => {
  let job = schedule.scheduleJob(config.schedule, async () => {
      log.info('ali_joke_showapi_gifJoke 获取gif动态图任务开始');
      const client = await Mongo.acquire();
      try {
        await Service(client);
      } catch (e) {
        log.info(e.message)
      } finally {
        Mongo.release(client);
        log.info('ali_joke_showapi_gifJoke 获取gif动态图任务结束,释放连接');
      }
    }
  );
};



