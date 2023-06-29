import { ethers } from "ethers";
const RPC_URL = process.env.NEXT_PUBLIC_RPC_URL || ''
const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
const contractAddress = "0x42BbC267fc54D215E267d63d3A48c395b01299d7";

const abi= [
	{
		"inputs": [
			{
				"internalType": "uint256[2]",
				"name": "_pA",
				"type": "uint256[2]"
			},
			{
				"internalType": "uint256[2][2]",
				"name": "_pB",
				"type": "uint256[2][2]"
			},
			{
				"internalType": "uint256[2]",
				"name": "_pC",
				"type": "uint256[2]"
			},
			{
				"internalType": "uint256[3]",
				"name": "_pubSignals",
				"type": "uint256[3]"
			}
		],
		"name": "verifyProof",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const contract = new ethers.Contract(contractAddress, abi, provider);

export const verifyProof = async (proof: string) => {
	try{

		const arr = new Array(`[${proof}]`)
		const arr2 = JSON.parse(arr[0]);
		const pA = arr2[0];
		const pB = arr2[1];
		const pC = arr2[2];
		const pubSignals = arr2[3]
		const result = await contract.verifyProof(pA,pB,pC,pubSignals);
		return result;
	} catch (error) {
		console.log(error);
		return false;
	}
}