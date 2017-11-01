const schedule = require('node-schedule');
const config = require('./config');
const Service = require('./service');
const Mongo = require('../../pool/mongo');
const moment = require('moment');


module.exports = () => {
  console.log('来福岛图片抓取开始')
  let job = schedule.scheduleJob(config.schedule, async () => {
      console.log('api.laifudao.com.tupian 获取图片任务开始', moment(new Date()).format('MM-DD HH:mm'));
      const client = await Mongo.acquire();
      try {
        await Service(client);
      } catch (e) {
        console.log(e)
      }
      Mongo.release(client);
      console.log('api.laifudao.com.tupian 获取图片任务结束', moment(new Date()).format('MM-DD HH:mm'));
    }
  );
};





