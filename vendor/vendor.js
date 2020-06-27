'use strict';
require('dotenv').config();
const faker = require('faker');

const io = require('socket.io-client');
const caps = io.connect('http://localhost:3000/caps');


const store = process.env.STORE_NAME;

caps.emit('join', store);


caps.on('delivered', (payload)=>{
  console.log(`Thank you for delivering ${payload.orserID}`);
  
})


setInterval(() => {
  let delivery = {
    store: store,
    customer: faker.name.findName(),
    orderID: faker.random.uuid(),
    address: faker.address.streetAddress(),
  };
 
  caps.emit('pickup', delivery);
}, 5000);








// require('dotenv').config();
// const net = require('net');

// const client = new net.Socket();

// const HOST = process.env.HOST || 'localhost';
// const PORT = process.env.PORT || 3000;

// // Connect to the CAPS server
// client.connect(PORT, HOST, ()=> {console.log('vendor connected');

//   // CLIENT is listening for the data event coming in from the CAPS server
//   client.on('data', (data) => {
//     const event = JSON.parse(data);
//     if(event.event === 'delivered'){
//       console.log(`Thank you for delivering ${event.payload.orderID}`);
//     }
//   });

//   client.on('close', () => console.log('Vendor Connection Closed'));
// });







