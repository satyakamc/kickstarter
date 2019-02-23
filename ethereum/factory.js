import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x91921679bF8Db3ccC67200c800e64A3D1B024D5f'
);

export default instance;
