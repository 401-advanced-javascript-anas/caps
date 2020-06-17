'use strict';
require('dotenv').config();

const io = require('socket.io-client');

const express = require('express');
const cors = require('cors');
const faker = require('faker');

const socket = io.connect('http://localhost:3000/caps');

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT || 3001;


app.post('/pickup', (req, res)=>{
  let delivery = req.body || {
    store: process.env.STORE_NAME,
    orderID: faker.random.uuid,
    customer: `${faker.name.findName()} ,${faker.name.lastName()}`,
    address: `${faker.address.city()}, ${faker.address.stateAbbr()} `,
  };
  socket.emit('pickup', delivery);
  res.status(200).send('schedualed');

});

app.listen(PORT, ()=>{

});