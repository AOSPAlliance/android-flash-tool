var express = require('express');
var fs = require('fs');
var app = express();

app.get('/log', function(req, res){
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(["-1",null,[[["ANDROID_BACKUP",0],["BATTERY_STATS",0],["SMART_SETUP",0],["TRON",0]],-3334737594024971225],[],{"175237375":[10000]}]));
});

app.post('/log', function(req, res){
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(["-1",null,[[["ANDROID_BACKUP",0],["BATTERY_STATS",0],["SMART_SETUP",0],["TRON",0]],-3334737594024971225],[],{"175237375":[10000]}]));
});

app.get('/android/internal/build/v3/branches', function(req, res){
  var obj = JSON.parse(fs.readFileSync('responses/branches.json', 'utf8'));
  res.setHeader('Content-Type', 'application/json');
  res.send(obj);
});

app.get('/android/internal/build/v3/builds', function(req, res){
  res.setHeader('Content-Type', 'application/json');
  res.send(fs.readFileSync('responses/builds.json', 'utf8'));
});

app.listen(8082);
