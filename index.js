#!/usr/bin/env node

'use strict';

var fs = require('fs');
var execSync = require('child_process').execSync;
var program = require('commander');
var clc = require('cli-color');
var consoleError = clc.red.bold;

var commitMsgFile = process.argv[2] || './.git/COMMIT_EDITMSG';
var isNewCommit = (process.argv[3] === 'undefined');

var maxCharsLine = '#⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴⎴';
var scissorsLine = '# ---------- Message Formatting Convention ----------';

program
  .option('-t, --template [file path]', 'Set file location of template for git commit message', '')
  .parse(process.argv);
var msgTplFile = !program.template ? './default.tpl' : program.template;
try {
  fs.accessSync(msgTplFile, fs.R_OK)
} catch (err) {
  console.error(consoleError('Invalid path for template file: ' + msgTplFile));
  process.exit(1);
}

var msgTpl = fs.readFileSync(msgTplFile).toString();

var doc = `
${scissorsLine}
${msgTpl}
`;

function getPrefilledMessage() {
  if (!isNewCommit) {
    return '';
  }

  var currentBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
  return '(' + currentBranch + '): ';
}

function getMaxCharsLine() {
  if (!isNewCommit) {
    return '';
  }

  return '\n' + maxCharsLine;
}

function getContentWithDoc() {
  if (content.indexOf(scissorsLine) !== -1) {
    // git commit -v
    content = content.replace(scissorsLine, doc + scissorsLine);
  } else if (content.indexOf('#') !== -1) {
    // other cases where there is a prompt to display doc
    content = content + doc;
  }

  return content;
}

var content = fs.readFileSync(commitMsgFile).toString();
content = getPrefilledMessage() + getMaxCharsLine() + getContentWithDoc();

fs.writeFileSync(commitMsgFile, content);
process.exit(0);
