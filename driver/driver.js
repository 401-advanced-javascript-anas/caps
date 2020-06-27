'use strict';

const io = require('socket.io-client');
const caps = io.connect('http://localhost:3000/caps');

caps.emit('pickup', (payload) =>{

  setTimeout(() => {

    console.log(`picked up ${payload.orderID}`);
    caps.emit('in-transit', payload);
  }, 2000);

  
  setTimeout(() => {
    console.log(`delivered up ${payload.orderID}`);
    caps.emit('delivered', payload);
  }, 3000);
});















// const faker = require('faker');
// const net = require('net');

// const client = new net.Socket();

// const HOST = process.env.HOST || 'localhost';
// const PORT = process.env.PORT || 3000;

// client.connect(PORT, HOST, ()=> {console.log('driver got connected');});

// // const eventsEmmiter = require('../events');

// const fName = faker.name.findName();
// const fAddress  = faker.address.streetAddress();
// const clientId = faker.random.uuid();
// const emailAdd = faker.internet.email();


// console.log('2');


// const market = [];

// client.on('data', (data) => { 
//   // when the server sends me back any data
//   let eventObj = JSON.parse(data);
//   if (eventObj.event == 'pickup') {
//     console.clear();
//     market.push(eventObj.payload.orderID);
    
//     market.forEach(picked=> {console.log(picked);
//     });
//     console.log('');
//   }
//   else if( eventObj.event === 'in-transit'){
//     market.push(`delivered ${eventObj.payload.orderID}`);
//     console.clear();
//     market.forEach((transit) => {
//       console.log('herererer ',transit);
//     });
//     console.log('');
//   }
// });



// function sendOrder() {
//   setInterval(() => {

//     let fakeOrder = {
//       store: process.env.STORE_NAME,
//       orderID: clientId,
//       customer: fName,
//       address: fAddress,
//       email: emailAdd,
//     };

//     pickUp(fakeOrder);
//   }, 5000);
// }

// function pickUp (payload){
//   setTimeout(() => {
//     let pickEvent = JSON.stringify({ event: 'pickup', time: new Date() ,  payload: payload });

//     client.write(pickEvent);

//     setTimeout(() => {
//       let transitEvent = JSON.stringify({ event: 'in-transit', time: new Date() ,  payload: payload });

//       client.write(transitEvent);

//       let deliverEvent = JSON.stringify({ event: 'delivered', time: new Date() ,  payload: payload });

//       client.write(deliverEvent);
//     }, 3000);
//   }, 1000);

// }

// sendOrder();



// client.on('close', () => console.log('Driver Connection Closed'));

// client.on('error', (err) => console.log('Driver Error ', err));

















// client.on('data', function(data) {
//   let event = JSON.parse(data); // {event: event, paypload: payload}
//   console.log(new Date().toUTCString(), event.event, event.payload);
// });


// client.on('close', function() {
//   console.log('Logger Connection got closed');
// });



// // eventsEmmiter.on('save', payload => logIt('---->>>> save-from-caps-file', payload ) );
// // eventsEmmiter.on('in-transit', payload => logIt('in-transit', payload));
// // eventsEmmiter.on('delivered', payload => logIt('delivered', payload));
// // eventsEmmiter.on('pickup', payload => logIt('pickup', payload));


// // function logIt(event, payload) {
// //   let time = new Date();
// //   console.log({event, time, payload});
// // }


// const clientId = faker.random.uuid();





// setInterval( time,5000);
// function time(){


//   // eventsEmmiter.emit('save',{ orderID: clientId });


//   client.emit('pickup',
//     {
//       orderID: clientId,
//     });


//   setTimeout(timeOut, 3000);
//   function timeOut(){
//     client.emit('delivered',
//       {
//         store: process.env.STORE_NAME,
//         orderID: clientId,
//       });
//     console.log('Thank you!');
//   }



// }