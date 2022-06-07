const { img } = require('./data/img');
const { audio } = require('./data/audio');
const { video } = require('./data/video');

function addInitialPost() {
  const { v4 } = require('uuid');

  const posts = [];
  for (let i = 0; i <= 15; i++) {
    posts.push({
      text: `пост ${i}`,
      geoStatus: true,
      geo: '[47.7612087, 142.063478]',
      date: new Date(),
      id: v4(),
    });
  }
  posts.push({
    text: 'пост с ссылкой в тексте https://netology.ru/, пост с ссылкой в тексте https://netology.ru/ 😃 ',
    geoStatus: true,
    geo: '[47.7612087, 142.063478]',
    date: new Date(),
    id: v4(),
  });
  posts.push(video);
  posts.push(audio);
  posts.push(img);
  return posts;
}

module.exports.addInitialPost = addInitialPost;