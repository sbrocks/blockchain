const assert = require('assert');
// ganache-cli works as our local ethereum network
const ganache = require('ganache-cli');
const Web3 = require('web3');
// Web3 is a constructor function and that's why we have named it with capital W
const provider = ganache.provider();
const web3 = new Web3(provider);

const INITIAL_STRING = "Hi there!";
// Import the bytecode and interface from compile.js file
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
	// To get all the accounts
	accounts = await web3.eth.getAccounts();
	// Use one of those accounts to create the contract
	inbox = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({ 
			data: bytecode,
		    arguments: ['Hi there!'] 
		})
		.send({ from: accounts[0], gas: '1000000'});

	inbox.setProvider(provider);
});


describe('Inbox', () => {
	it('deploys a contract', async () => {
		//console.log(inbox);
		assert.ok(inbox.options.address);
	});

	it('has a default message', async () => {
		// calling a function
		const message = await inbox.methods.message().call();
		assert.equal(message,'Hi there!');
	});

	it('can change the message', async () => {
		//sending a transaction
		await inbox.methods.setMessage('bye').send({from:accounts[0]});
		const message = await inbox.methods.message().call();
		assert.equal(message,'bye');
	});
});




