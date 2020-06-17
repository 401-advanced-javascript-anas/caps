// 'use strict';

// const events = require('events');
// const faker = require('faker');

// const eventsEmmiter = new events();

// const fName = faker.name.findName();
// const fAddress  = faker.address.streetAddress();
// const id = faker.random.uuid();
// const emailAdd = faker.internet.email();




// let shopArr = ['1-206-flowers', 'Macdo', 'Queen Burger', 'Glass Stove', 'Tiecoon', 'Julious Scissor', 'The Eager Book'];
// let item = shopArr[Math.floor(Math.random() * shopArr.length)];




// // Add some Listeners

// eventsEmmiter.on('save', handleSave);
// eventsEmmiter.on('in-transit', payload => logIt('in-transit', payload));
// eventsEmmiter.on('delivered', payload => logIt('delivered', payload));
// eventsEmmiter.on('pickup', payload => logIt('pickup', payload));


// // Emit some events



// eventsEmmiter.emit('save',
//   {
//     store: item,
//     orderID: id,
//     customer: fName,
//     address: fAddress,
//     email: emailAdd,
//   });
// eventsEmmiter.emit('in-transit',
//   {
//     store: item,
//     orderID: id,
//     customer: fName,
//     address: fAddress,
//     email: emailAdd,

//   });
// eventsEmmiter.emit('delivered',
//   {
//     store: item,
//     orderID: id,
//     customer: fName,
//     address: fAddress,
//     email: emailAdd,
//   });



// function handleSave(payload) {
//   console.log(`Record ${payload.orderID} was saved`);
//   eventsEmmiter.emit('pickup', {id: payload.orderID});
// }

// function logIt(event, payload) {
//   let time = new Date();
//   console.log({event, time, payload});
// }
