var nforce = require('nforce');
var request = require('request');
var lightIP = process.env.LIGHTIP; //"192.168.1.73";
var lightUser = process.env.LIGHTUSER; //"IVhogkeTowDCDoydFxlQq30wgl25lSUvtPieHqgY";
var lightId = process.env.LIGHTID; //4;
var clientId = process.env.CLIENTID; //3MVG9SemV5D80oBfmAcCaV8muPm2sVOELIrkXQJdw0Hp0jn2YDvofSnHkH9FtjuT_NSAkGD6kv167k0LAfikQ
var clientSecret = process.env.CLIENTSECRET; //4086443458085840588
var red = 0;
var green = 14000;

var org = nforce.createConnection({
  clientId: clientId,
  clientSecret: clientSecret,
  redirectUri: 'http://localhost:3000/oauth/_callback',
  environment: 'production'
});


org.authenticate({ username: process.env.SFUSER, password: process.env.SFPASS}, function(err, oauth){

  if(err) return console.log(err);

  console.log('connecting to event');
  var str = org.stream({ topic: 'SafetyViolation__e', oauth: oauth, isEvent:true, apiVersion: 'v39.0' });

  str.on('connect', function(){
    console.log('connected to event source');
  });

  str.on('error', function(error) {
    console.log('error: ' + error);
  });

  str.on('data', function(data) {
    console.log(data);
    handleData(data);

  });

});

function handleData(data){
  //if (data.payload){ //bad version
    console.log('in data handling function');
    var body = {"on":true, "sat":254, "bri":254,"hue": red, "alert":"select"};
    if (data.payload.Safe__c){
      body = {"on":true, "sat":254, "bri":254,"hue": green, "alert":"select"};
    }
    request.put({
      uri : "http://"+lightIP+"/api/"+lightUser+"/lights/"+lightId+"/state",
      body : body,
      json: true
    }, function(error, response){
      console.log(error);
      console.log(response);
    });
}
