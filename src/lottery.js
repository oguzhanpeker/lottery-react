import web3 from "./web3";

const address = "YOUR CONTRACT ADDRESS";
const abi = "YOUR CONTRACT ABI";

export default new web3.eth.Contract(abi, address);
