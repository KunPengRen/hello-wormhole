const { Web3 } = require('web3');
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8546");

// The provided data
const data = '0x0f4b629a000000000000000000000000000000000000000000000000000000000000000400000000000000000000000042d4ba5e542d9fed87ea657f0295f1968a61c00a0000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000001c48656c6c6f20576f726d686f6c65203137303738333331363238373800000000';

// The ABI for the function you're interested in
const functionAbi = {
  "type":"function",
  "name":"sendCrossChainGreeting",
  "inputs":[
    {"name":"targetChain","type":"uint256"},
    {"name":"targetAddress","type":"address"},
    {"name":"greeting","type":"string"}
  ]
};

// Decode the data
const decodedData = web3.eth.abi.decodeParameters(functionAbi.inputs, data.slice(10)); // slice(10) to remove the function selector

console.log("Decoded Data:", decodedData);
