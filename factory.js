import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x186A32f3C262aa35A78e16044b5f9FF42963a1de'
);

export default instance;
