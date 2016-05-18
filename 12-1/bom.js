var person ={
	name:'Mr right' ,
	gender:'man' ,
	age:'30' ,
	sing:function(){
		console.log('你好');
	}
}
//console.log(person.name);
//person.sing();



for (var i in person){
	console.log(i + ":" + person[i]);
}
for (var i in person){
	console.log(i + ":" + console[i]);
}
console.clear();
console.log (typeof person);
console.log (typeof false);
console.log (typeof 'false');
console.log (typeof 100);
console.log (typeof person.name);

var sites =['baidu.com','sohu.com','taobao.com'];
console.log(sites[0]);
console.log (typeof sites);