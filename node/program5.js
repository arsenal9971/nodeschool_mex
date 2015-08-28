var fs=require('fs'); /*Llamamos a la libreria fs*/

var dir=fs.readdir('/home/hector/node',
	function callback(err,list){console.log(list[1])})

/*Separar los archivos de su extensión*/
console.log()