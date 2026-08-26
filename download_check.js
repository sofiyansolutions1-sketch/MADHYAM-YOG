const https = require('https');
const urls = [
  'CDv0DWG', 'CDvEena', 'CDvGXff', 'CDvM3bt',
  'CDvMlrx', 'CDv1wBf', 'CDvMQ24', 'CDvV1Gs',
  'CDvVbcv', 'CDvWAiu', 'CDvWpqu', 'CDvXlrG'
];
// Just verify if they are valid by doing a HEAD request
urls.forEach(id => {
  https.request('https://iili.io/' + id + '.jpg', {method: 'HEAD'}, (res) => {
    console.log(id, res.statusCode);
  }).end();
});
