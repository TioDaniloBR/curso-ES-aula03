/////////////////////////////////////Factory/////////////////////////////////////////////////

// function Pessoa(customProperties){
//     return {
//         name: 'Guilherme',
//         lastName: 'Cabrini',
//         ...customProperties
//     };
// }

// const p = Pessoa({name:'Custom name',age: 27});
// console.log(p);

//////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////Singleton////////////////////////////////////////////////

// function Pessoa(){
//     if(!Pessoa.instance){
//         Pessoa.instance = this;
//     }
//     return Pessoa.instance;
// }

// const p = Pessoa.call({name:'Guilherme'});
// const p2 = Pessoa.call({name:'Custom name'});

// console.log(p);
// console.log(p2);

//////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////Decorator//////////////////////////////////////////////////

// let loggedIn = false;

// function callIfAuthenticated(fn){
//     return !!loggedIn && fn();
// }
// function sum(a,b){
//     return a + b;
// }

// console.log(callIfAuthenticated(() => sum(2,3)));
// loggedIn = true;
// console.log(callIfAuthenticated(() => sum(2,3)));
// loggedIn = false;
// console.log(callIfAuthenticated(() => sum(2,3)));

//////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////Observer///////////////////////////////////////////////////

// class Observable{
//     constructor(){
//         this.observables = [];
//     }
//     subscribe(fn){
//         this.observables.push(fn);
//     }
//     notify(data){
//         this.observables.forEach(fn => fn(data));
//     }
//     unsubscribe(fn){
//         this.observables = this.observables.filter(obs => obs !== fn);
//     }
// }

// const o = new Observable();

// const logData1 = data => console.log('Subscribe 1: '+data);
// const logData2 = data => console.log('Subscribe 2: '+data);
// const logData3 = data => console.log('Subscribe 3: '+data);

// o.subscribe(logData1);
// o.subscribe(logData2);
// o.subscribe(logData3);

// o.notify('notified 1');
// o.unsubscribe(logData2);
// o.notify('notified 2');

//////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////Module//////////////////////////////////////////////

let name = 'default';
function getName(){
    return name;
}

function setName (newName){
    name = newName;
}

module.exports = {
    getName,
    setName
};

//////////////////////////////////////////////////////////////////////////////////////