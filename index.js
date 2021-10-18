const yaml = require('js-yaml');
const fs = require('fs');

const doc = yaml.load(fs.readFileSync('./sample.yml', 'utf8'));
console.log(JSON.stringify(doc, null, 2));
