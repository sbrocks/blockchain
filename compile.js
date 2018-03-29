const path = require('path')
const fs = require('fs')
const solc = require('solc');

// __dirname would point to the root directory, inbox , here
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath,'utf8');

// To compile the solidity program file
module.exports = solc.compile(source,1).contracts[':Inbox'];