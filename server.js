const _ = require('lodash');
const yaml = require('js-yaml');

function render(tpl, data) {
  return _.template(tpl)(data);
}

module.exports = { render, cfg: yaml.load('a: 1') };
