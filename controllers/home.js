const doSmthWithData = require('../model/doSmthWithData');
const template = require('../views/home');

exports.index = function (req, res) {
  res.write(template.build({
    title: 'Архитектура. ШРИ-2018',
    answer: 'Здесь появится ответ сервера',
    log: '',
  }));
  res.end();
};

exports.answer = function (req, res) {
  const answer = doSmthWithData(req.body.userText);
  res.write(template.build({
    title: 'Архитектура. ШРИ-2018',
    answer,
  }));
  res.end();
};
