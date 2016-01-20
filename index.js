var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdownit');
var collections = require('metalsmith-collections');
var react = require('metalsmith-react').default;
var watch = require('metalsmith-watch');
var express = require('metalsmith-express');
var snippet = require('metalsmith-snippet');
var typography = require('metalsmith-typography');
var sass = require('metalsmith-sass');
var options = require('./options.json');

metalsmith(__dirname)
  .use(express())
  .use(watch(options.watch))
  .use(collections(options.collection))
  .use(markdown())
  .use(typography())
  .use(snippet(options.snippet))
  .use(react(options.react))
  .use(sass(options.sass))
  .build(function (err) {
    if (err) throw err;
  });

// http://brage.switchbit.io/
