export const ageCheckerAbi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_verifier",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_plonkVerifier",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "person",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "bool",
				"name": "verfied",
				"type": "bool"
			}
		],
		"name": "AgeVerfied",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "addressMapping",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getVerficationStatus",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "uint256[8]",
				"name": "_proof",
				"type": "uint256[8]"
			},
			{
				"internalType": "uint256[2]",
				"name": "_input",
				"type": "uint256[2]"
			}
		],
		"name": "verifyUsingGroth",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "bytes",
				"name": "_proof",
				"type": "bytes"
			},
			{
				"internalType": "uint256[]",
				"name": "_pubSignals",
				"type": "uint256[]"
			}
		],
		"name": "verifyUsingPlonk",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]