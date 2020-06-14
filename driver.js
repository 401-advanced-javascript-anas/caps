'use strict';

const eventsEmmiter = require('./events');

console.log('2');

// eventsEmmiter.on('save', payload => logIt('---->>>> save-from-caps-file', payload ) );
eventsEmmiter.on('in-transit', payload => logIt('in-transit', payload));
eventsEmmiter.on('delivered', payload => logIt('delivered', payload));
eventsEmmiter.on('pickup', payload => logIt('pickup', payload));


function logIt(event, payload) {
  let time = new Date();
  console.log({event, time, payload});
}

