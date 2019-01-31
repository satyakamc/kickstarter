const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'chapter stay slide column spatial demand random economy paddle world young shine',
  'https://rinkeby.infura.io/v3/c50d95c650e04939868097e2e92c4512'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('attemping to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
  .deploy({ data: compiledFactory.bytecode })
  .send({from: accounts[0], gas: '1000000'});

  console.log('contract deployed to', result.options.address);
};
deploy();
