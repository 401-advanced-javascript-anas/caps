'use strict';

// everything will fall in here
const eventsEmmiter = require('./events');

// 
require('./driver');
require('./vendor');

const faker = require('faker');

console.log('4');



const fName = faker.name.findName();
const fAddress  = faker.address.streetAddress();
const id = faker.random.uuid();
const emailAdd = faker.internet.email();

let shopArr = ['1-206-flowers', 'Macdo', 'Queen Burger', 'Glass Stove', 'Tiecoon', 'Julious Scissor', 'The Eager Book'];
let item = shopArr[Math.floor(Math.random() * shopArr.length)];



// Emit some events
setInterval( time,5000);
function time(){


  eventsEmmiter.emit('save',{ orderID: id });


  eventsEmmiter.emit('pickup',
    {
      store: item,
      orderID: id,
      customer: fName,
      address: fAddress,
      email: emailAdd,
    });



  eventsEmmiter.emit('in-transit',
    {
      store: item,
      orderID: id,
      customer: fName,
      address: fAddress,
      email: emailAdd,

    });

  setTimeout(timeOut, 3000);
  function timeOut(){
    eventsEmmiter.emit('delivered',
      {
        store: item,
        orderID: id,
        customer: fName,
        address: fAddress,
        email: emailAdd,

    
      });
    console.log('Thank you!');
  }
}
// console.log( 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh' ,eventsEmmiter.emit('delivered',
//   {
//     store: item,
//     orderID: id,
//     customer: fName,
//     address: fAddress,
//     email: emailAdd,
//   }));




