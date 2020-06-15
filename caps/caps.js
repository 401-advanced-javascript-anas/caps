'use strict';

const net = require('net');
require('dotenv').config();
const uuid = require('uuid').v4;

const PORT = process.env.PORT || 3000;

const server = net.createServer(); 
server.listen(PORT, ()=> console.log(`Server is up on ${PORT}`));



let socketPool = {}; // store the connected clients


server.on('connection', (socket)=> {
    
  
  const id = `Socket-${uuid}`;

  // add the socket objec to the SocketPool Object
  console.log(`client with ID : ${id} is connected!!! `);

  socketPool[id] = socket;
  // add subscriber to recieving data on the socket 
  socket.on('data', (buffer)=> dispatchEvent(buffer));
  
  socket.on('error', (e) => {console.log('SOCKET ERR', e);});

  socket.on('end', (end) => {
    console.log('connection ended', end);
    delete socketPool[id];
  });
});


server.on('error', (e)=> {
  console.log('SERVER ERROR', e);
});


function dispatchEvent(buffer) {
  console.log(' SERVER GOT your msg!!');
  // I am recieving the msg, Buffer (Binary), 
  // parse it to string
  let message = JSON.parse(buffer.toString().trim());
  console.log('message >> ',message);
  // send a msg : broadcast a msg to all clients.
  broadcast(message);
}

function broadcast(msg) {
  // Send the msg to all clients connected to you.
  let payload = JSON.stringify(msg);
  // We are sending the msg to all sockets by looping through them 
  // and using the socket object that we saved previously.
  for (let socket in socketPool) {
    socketPool[socket].write(payload);
  }
}











// // everything will fall in here
// const eventsEmmiter = require('../events');

// // 
// require('../driver/driver');
// require('../vendor/vendor');


// console.log('4');



// const fName = faker.name.findName();
// const fAddress  = faker.address.streetAddress();

// const emailAdd = faker.internet.email();

// // let shopArr = ['1-206-flowers', 'Macdo', 'Queen Burger', 'Glass Stove', 'Tiecoon', 'Julious Scissor', 'The Eager Book'];
// // let item = shopArr[Math.floor(Math.random() * shopArr.length)];



// // Emit some events
// setInterval( time,5000);
// function time(){


//   eventsEmmiter.emit('save',{ orderID: id });


//   eventsEmmiter.emit('pickup',
//     {
//       store: process.env.STORE_NAME,
//       orderID: id,
//       customer: fName,
//       address: fAddress,
//       email: emailAdd,
//     });



//   eventsEmmiter.emit('in-transit',
//     {
//       store: process.env.STORE_NAME,
//       orderID: id,
//       customer: fName,
//       address: fAddress,
//       email: emailAdd,

//     });

//   setTimeout(timeOut, 3000);
//   function timeOut(){
//     eventsEmmiter.emit('delivered',
//       {
//         store: process.env.STORE_NAME,
//         orderID: id,
//         customer: fName,
//         address: fAddress,
//         email: emailAdd,

    
//       });
//     console.log('Thank you!');
//   }
// }
// // console.log( 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh' ,eventsEmmiter.emit('delivered',
// //   {
// //     store: item,
// //     orderID: id,
// //     customer: fName,
// //     address: fAddress,
// //     email: emailAdd,
// //   }));




