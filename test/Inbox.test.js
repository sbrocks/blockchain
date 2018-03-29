const assert = require('assert');
// ganache-cli works as our local ethereum network
const ganache = require('ganache-cli');

// Web3 is a constructor function and that's why we have named it with capital W
const Web3 = require('web3');
const web3 = new Web3(ganache.provider())  
