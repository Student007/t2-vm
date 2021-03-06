#!/usr/bin/env node

var parser = require("nomnom");

parser.command('create')
  .callback(function () {
    require('./create');
  })
  .help('creates the vm image')

parser.command('launch')
  .callback(function () {
    require('./run');
  })
  .help('launches the vm for testing')

parser.command('run')
  .callback(function () {
    console.error('DEPRECATED: Use the command "t2-vm launch" instead.');
    process.exit(255);
  })

parser.command('destroy')
  .callback(function () {
    require('./destroy');
  })
  .help('destroys the vm')

parser.command('shell')
  .callback(function () {
    require('./shell');
  })
  .help('launches a shell for the vm')

parser.parse();
