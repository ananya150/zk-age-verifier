import { MoralisNextApi } from '@moralisweb3/next';

const getUrl = () => {
  if(process.env.VERCEL_URL){
    return `https://${process.env.VERCEL_URL}`
  }
    return process.env.NEXTAUTH_URL;
}

const url = getUrl();

export default MoralisNextApi({
  apiKey: process.env.MORALIS_API_KEY || '',
  authentication: {
    domain: url ? new URL(url).host : '',
    uri: url || '',
    timeout: 120,
  },
});
