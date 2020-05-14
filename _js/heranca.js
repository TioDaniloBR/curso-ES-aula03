////////////////////////////////Herança/////////////////////////////////////////////////

// 'use strict';

// const myText = 'Hello prototype!';
// myText.split(''); // <- de onde vem esse split?

/////////////////////////////////////////////////////////////////////////////////

// 'use strict';

// const myText = String("Hello prototype!");
// console.log(myText.__proto__.split);

/////////////////////////////////////////////////////////////////////////////////

// function Pessoa(name){
//     this.name = name;
// }

// const p = new Pessoa("Guilherme");
// console.log(p);

/////////////////////////////////////////////////////////////////////////////////

// function Pessoa(name){
//     this.name = name;

//     return {
//         name: "Teste"
//     };
// }

// const p2 = new Pessoa("Guilherme");
// console.log(p2);

/////////////////////////////////////////////////////////////////////////////////

// function Cachorro(){}

// Cachorro.prototype.latir = function (){}

// const c = new Cachorro();
// console.log(c.__proto__);
// Cachorro.prototype.teste = function (){};
// console.log(c.__proto__);
// const c2 = new Cachorro();

// console.log(String.prototype.split);
// console.log("123456".split(''));
// String.prototype.split = function(){console.log("ixi....")}
// console.log("123456".split(''));

/////////////////////////////////////////////////////////////////////////////////



