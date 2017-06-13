var fs= require('fs');
var colors = require('colors');

var StatMode=require('stat-mode');

fs.stat('./photo.jpg', function(err, stats){
    var statMode=new StatMode(stats);
    console.log(stats);

});

fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
	console.log("dane przed zapisem".red);
    console.log(data);
    fs.appendFile('./tekst.txt', '\n  dane po zapisie w pliku tekst.txt',  function(err){
    	if(err) throw err;
    	console.log('zapisano!'.magenta);
    	fs.readFile('./tekst.txt', 'utf-8', function(err, data){
    		console.log("dane po zapisie".rainbow);
    		console.log(data);
    	});
    });
});