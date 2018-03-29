// To specify the version of solidity used
pragma solidity ^0.4.17;

// Writing the contract
contract Inbox {
    string public message;
    
    // constructor function
    function Inbox(string initialMessage) public {
        message = initialMessage;
    }
    
    // A function which is meant to modify the state of contract
    // will not return any value
    function setMessage(string newMessage) public {
        message = newMessage;
    }
   
}

