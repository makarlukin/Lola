const contract = new web3.eth.Contract(abi, address);

contract.events.RemoveLiquidity({
  fromBlock: 0,
  toBlock: 'latest'
}, (error, event) => {
  if (error) {
    console.error('Error in event handler:', error);
  } else {
    console.log('RemoveLiquidity event:', event.returnValues);
  }
});
