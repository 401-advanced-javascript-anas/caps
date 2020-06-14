'use strict';

const eventsEmmiter = require('./events');

console.log('3');


eventsEmmiter.on('save', handleSave);

function handleSave(payload) {
  // console.log(`Record ${payload.orderID} was saved`);
  console.log('-------------------------------------------------------------------------------------');
  
  eventsEmmiter.emit('pickup', {id: payload.orderID});
}