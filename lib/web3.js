import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider || "ws://127.0.0.1:7545");

const contractAddress = "0xbf87396d0706B57cb76bf9cDF4eC61AC14D637d8"
const contract = null

const sharedMessage = "This is to confirm your account when downloading the limited edition album"

export { web3, contract, contractAddress, sharedMessage }