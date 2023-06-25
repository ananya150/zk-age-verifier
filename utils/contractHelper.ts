import { ethers } from 'ethers';
import { networkConfig , toHex } from './networkConfig';
import { ageCheckerAbi } from './abi';


export const getRpcUrlByChainId = (chainId: number): string => {
    const networkRpc = networkConfig[toHex(chainId).toString()].rpcUrls[0];
    return networkRpc;
  };
  

export const getRpcProviderByChainId = (chainId: number) => {
    return new ethers.providers.JsonRpcProvider(getRpcUrlByChainId(chainId));
  };

export const getContract = (abi: any, address: string, chainId: number) => {
    const signerOrProvider = getRpcProviderByChainId(chainId);
    return new ethers.Contract(address, abi, signerOrProvider);
  };

 export const getAgeCheckContract = () => {
    try {
      const contractAddr = '0x31a65BF2C250b04dA48E482D60952C618065B94c';
  
      return getContract(ageCheckerAbi, contractAddr, 80001);
    } catch (e) {
      console.log(`Error getting contract for the chainId ${80001}`);
    }
    return undefined;
  };