module.exports = {
  appenders: {
    console: {type: 'console'},
    debug: {
      type: 'dateFile',
      filename: '/var/log/node/funny-schedule/logs/debug.log',
      pattern: '_yyyy-MM-dd',
      alwaysIncludePattern: true
    },
    ali_joke_showapi_gifJoke: {
      type: 'dateFile',
      filename: '/var/log/node/funny-schedule/logs/ali_joke_showapi_gifJoke.log',
      pattern: '_yyyy-MM-dd',
      alwaysIncludePattern: true
    },
    ali_joke_showapi_picJoke: {
      type: 'dateFile',
      filename: '/var/log/node/funny-schedule/logs/ali_joke_showapi_picJoke.log',
      pattern: '_yyyy-MM-dd',
      alwaysIncludePattern: true
    },
    ali_joke_showapi_textJoke: {
      type: 'dateFile',
      filename: '/var/log/node/funny-schedule/logs/ali_joke_showapi_textJoke.log',
      pattern: '_yyyy-MM-dd',
      alwaysIncludePattern: true
    },
    api_laifudao_tupian: {
      type: 'dateFile',
      filename: '/var/log/node/funny-schedule/logs/api_laifudao_tupian.log',
      pattern: '_yyyy-MM-dd',
      alwaysIncludePattern: true
    },
    api_laifudao_xiaohua: {
      type: 'dateFile',
      filename: '/var/log/node/funny-schedule/logs/api_laifudao_xiaohua.log',
      pattern: '_yyyy-MM-dd',
      alwaysIncludePattern: true
    },

    www_xxhh_com_tag_gif: {
      type: 'dateFile',
      filename: '/var/log/node/funny-schedule/logs/www_xxhh_com_tag_gif.log',
      pattern: '_yyyy-MM-dd',
      alwaysIncludePattern: true
    },
  },
  categories: {
    default: {
      appenders: ['debug',
        'console',
        'ali_joke_showapi_gifJoke',
        'ali_joke_showapi_picJoke',
        'ali_joke_showapi_textJoke',
        'api_laifudao_tupian',
        'api_laifudao_xiaohua',
        'www_xxhh_com_tag_gif'
      ]
      ,
      level: 'debug'
    }
  }
};
