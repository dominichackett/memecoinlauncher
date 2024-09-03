export const opContractAddress = "0xe53410eBdd922C0410B645E6bA5FEBe865Ab84d2"
export const galadrielContractAddress = "0x284794C546Ca7e7B7E157e1b5fA6e5fC643F1009"

export const ContractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "image",
				"type": "string"
			}
		],
		"name": "launchToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "lzEndpoint",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "peer",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "chain",
				"type": "uint256"
			}
		],
		"name": "registerCrossChain",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "endpoint",
				"type": "address"
			}
		],
		"name": "setEndpoint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "image",
				"type": "string"
			}
		],
		"name": "TokenCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "peer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "chain",
				"type": "uint256"
			}
		],
		"name": "TokenDeployed",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_lzEndpoint",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
export const OFTABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_symbol",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_lzEndpoint",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_delegate",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "target",
				"type": "address"
			}
		],
		"name": "AddressEmptyCode",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "AddressInsufficientBalance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "allowance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientAllowance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientBalance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "approver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidApprover",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidReceiver",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSpender",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "FailedInnerCall",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "InvalidDelegate",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "InvalidEndpointCall",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "InvalidLocalDecimals",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "bytes",
				"name": "options",
				"type": "bytes"
			}
		],
		"name": "InvalidOptions",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "LzTokenUnavailable",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint32",
				"name": "eid",
				"type": "uint32"
			}
		],
		"name": "NoPeer",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "msgValue",
				"type": "uint256"
			}
		],
		"name": "NotEnoughNative",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "OnlyEndpoint",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint32",
				"name": "eid",
				"type": "uint32"
			},
			{
				"internalType": "bytes32",
				"name": "sender",
				"type": "bytes32"
			}
		],
		"name": "OnlyPeer",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "OnlySelf",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			}
		],
		"name": "SafeERC20FailedOperation",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "bytes",
				"name": "result",
				"type": "bytes"
			}
		],
		"name": "SimulationResult",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountLD",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "minAmountLD",
				"type": "uint256"
			}
		],
		"name": "SlippageExceeded",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint32",
						"name": "eid",
						"type": "uint32"
					},
					{
						"internalType": "uint16",
						"name": "msgType",
						"type": "uint16"
					},
					{
						"internalType": "bytes",
						"name": "options",
						"type": "bytes"
					}
				],
				"indexed": false,
				"internalType": "struct EnforcedOptionParam[]",
				"name": "_enforcedOptions",
				"type": "tuple[]"
			}
		],
		"name": "EnforcedOptionSet",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "inspector",
				"type": "address"
			}
		],
		"name": "MsgInspectorSet",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "guid",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "uint32",
				"name": "srcEid",
				"type": "uint32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "toAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amountReceivedLD",
				"type": "uint256"
			}
		],
		"name": "OFTReceived",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "guid",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "uint32",
				"name": "dstEid",
				"type": "uint32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "fromAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amountSentLD",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amountReceivedLD",
				"type": "uint256"
			}
		],
		"name": "OFTSent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint32",
				"name": "eid",
				"type": "uint32"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "peer",
				"type": "bytes32"
			}
		],
		"name": "PeerSet",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "preCrimeAddress",
				"type": "address"
			}
		],
		"name": "PreCrimeSet",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "SEND",
		"outputs": [
			{
				"internalType": "uint16",
				"name": "",
				"type": "uint16"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "SEND_AND_CALL",
		"outputs": [
			{
				"internalType": "uint16",
				"name": "",
				"type": "uint16"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint32",
						"name": "srcEid",
						"type": "uint32"
					},
					{
						"internalType": "bytes32",
						"name": "sender",
						"type": "bytes32"
					},
					{
						"internalType": "uint64",
						"name": "nonce",
						"type": "uint64"
					}
				],
				"internalType": "struct Origin",
				"name": "origin",
				"type": "tuple"
			}
		],
		"name": "allowInitializePath",
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
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "approvalRequired",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint32",
				"name": "_eid",
				"type": "uint32"
			},
			{
				"internalType": "uint16",
				"name": "_msgType",
				"type": "uint16"
			},
			{
				"internalType": "bytes",
				"name": "_extraOptions",
				"type": "bytes"
			}
		],
		"name": "combineOptions",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimalConversionRate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "endpoint",
		"outputs": [
			{
				"internalType": "contract ILayerZeroEndpointV2",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint32",
				"name": "eid",
				"type": "uint32"
			},
			{
				"internalType": "uint16",
				"name": "msgType",
				"type": "uint16"
			}
		],
		"name": "enforcedOptions",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "enforcedOption",
				"type": "bytes"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint32",
						"name": "srcEid",
						"type": "uint32"
					},
					{
						"internalType": "bytes32",
						"name": "sender",
						"type": "bytes32"
					},
					{
						"internalType": "uint64",
						"name": "nonce",
						"type": "uint64"
					}
				],
				"internalType": "struct Origin",
				"name": "",
				"type": "tuple"
			},
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			},
			{
				"internalType": "address",
				"name": "_sender",
				"type": "address"
			}
		],
		"name": "isComposeMsgSender",
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
				"internalType": "uint32",
				"name": "_eid",
				"type": "uint32"
			},
			{
				"internalType": "bytes32",
				"name": "_peer",
				"type": "bytes32"
			}
		],
		"name": "isPeer",
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
				"components": [
					{
						"internalType": "uint32",
						"name": "srcEid",
						"type": "uint32"
					},
					{
						"internalType": "bytes32",
						"name": "sender",
						"type": "bytes32"
					},
					{
						"internalType": "uint64",
						"name": "nonce",
						"type": "uint64"
					}
				],
				"internalType": "struct Origin",
				"name": "_origin",
				"type": "tuple"
			},
			{
				"internalType": "bytes32",
				"name": "_guid",
				"type": "bytes32"
			},
			{
				"internalType": "bytes",
				"name": "_message",
				"type": "bytes"
			},
			{
				"internalType": "address",
				"name": "_executor",
				"type": "address"
			},
			{
				"internalType": "bytes",
				"name": "_extraData",
				"type": "bytes"
			}
		],
		"name": "lzReceive",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"components": [
							{
								"internalType": "uint32",
								"name": "srcEid",
								"type": "uint32"
							},
							{
								"internalType": "bytes32",
								"name": "sender",
								"type": "bytes32"
							},
							{
								"internalType": "uint64",
								"name": "nonce",
								"type": "uint64"
							}
						],
						"internalType": "struct Origin",
						"name": "origin",
						"type": "tuple"
					},
					{
						"internalType": "uint32",
						"name": "dstEid",
						"type": "uint32"
					},
					{
						"internalType": "address",
						"name": "receiver",
						"type": "address"
					},
					{
						"internalType": "bytes32",
						"name": "guid",
						"type": "bytes32"
					},
					{
						"internalType": "uint256",
						"name": "value",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "executor",
						"type": "address"
					},
					{
						"internalType": "bytes",
						"name": "message",
						"type": "bytes"
					},
					{
						"internalType": "bytes",
						"name": "extraData",
						"type": "bytes"
					}
				],
				"internalType": "struct InboundPacket[]",
				"name": "_packets",
				"type": "tuple[]"
			}
		],
		"name": "lzReceiveAndRevert",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint32",
						"name": "srcEid",
						"type": "uint32"
					},
					{
						"internalType": "bytes32",
						"name": "sender",
						"type": "bytes32"
					},
					{
						"internalType": "uint64",
						"name": "nonce",
						"type": "uint64"
					}
				],
				"internalType": "struct Origin",
				"name": "_origin",
				"type": "tuple"
			},
			{
				"internalType": "bytes32",
				"name": "_guid",
				"type": "bytes32"
			},
			{
				"internalType": "bytes",
				"name": "_message",
				"type": "bytes"
			},
			{
				"internalType": "address",
				"name": "_executor",
				"type": "address"
			},
			{
				"internalType": "bytes",
				"name": "_extraData",
				"type": "bytes"
			}
		],
		"name": "lzReceiveSimulate",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "msgInspector",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			},
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "nextNonce",
		"outputs": [
			{
				"internalType": "uint64",
				"name": "nonce",
				"type": "uint64"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "oApp",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "oAppVersion",
		"outputs": [
			{
				"internalType": "uint64",
				"name": "senderVersion",
				"type": "uint64"
			},
			{
				"internalType": "uint64",
				"name": "receiverVersion",
				"type": "uint64"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "oftVersion",
		"outputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			},
			{
				"internalType": "uint64",
				"name": "version",
				"type": "uint64"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint32",
				"name": "eid",
				"type": "uint32"
			}
		],
		"name": "peers",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "peer",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "preCrime",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint32",
						"name": "dstEid",
						"type": "uint32"
					},
					{
						"internalType": "bytes32",
						"name": "to",
						"type": "bytes32"
					},
					{
						"internalType": "uint256",
						"name": "amountLD",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "minAmountLD",
						"type": "uint256"
					},
					{
						"internalType": "bytes",
						"name": "extraOptions",
						"type": "bytes"
					},
					{
						"internalType": "bytes",
						"name": "composeMsg",
						"type": "bytes"
					},
					{
						"internalType": "bytes",
						"name": "oftCmd",
						"type": "bytes"
					}
				],
				"internalType": "struct SendParam",
				"name": "_sendParam",
				"type": "tuple"
			}
		],
		"name": "quoteOFT",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "minAmountLD",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "maxAmountLD",
						"type": "uint256"
					}
				],
				"internalType": "struct OFTLimit",
				"name": "oftLimit",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "int256",
						"name": "feeAmountLD",
						"type": "int256"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					}
				],
				"internalType": "struct OFTFeeDetail[]",
				"name": "oftFeeDetails",
				"type": "tuple[]"
			},
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "amountSentLD",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "amountReceivedLD",
						"type": "uint256"
					}
				],
				"internalType": "struct OFTReceipt",
				"name": "oftReceipt",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint32",
						"name": "dstEid",
						"type": "uint32"
					},
					{
						"internalType": "bytes32",
						"name": "to",
						"type": "bytes32"
					},
					{
						"internalType": "uint256",
						"name": "amountLD",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "minAmountLD",
						"type": "uint256"
					},
					{
						"internalType": "bytes",
						"name": "extraOptions",
						"type": "bytes"
					},
					{
						"internalType": "bytes",
						"name": "composeMsg",
						"type": "bytes"
					},
					{
						"internalType": "bytes",
						"name": "oftCmd",
						"type": "bytes"
					}
				],
				"internalType": "struct SendParam",
				"name": "_sendParam",
				"type": "tuple"
			},
			{
				"internalType": "bool",
				"name": "_payInLzToken",
				"type": "bool"
			}
		],
		"name": "quoteSend",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "nativeFee",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "lzTokenFee",
						"type": "uint256"
					}
				],
				"internalType": "struct MessagingFee",
				"name": "msgFee",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint32",
						"name": "dstEid",
						"type": "uint32"
					},
					{
						"internalType": "bytes32",
						"name": "to",
						"type": "bytes32"
					},
					{
						"internalType": "uint256",
						"name": "amountLD",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "minAmountLD",
						"type": "uint256"
					},
					{
						"internalType": "bytes",
						"name": "extraOptions",
						"type": "bytes"
					},
					{
						"internalType": "bytes",
						"name": "composeMsg",
						"type": "bytes"
					},
					{
						"internalType": "bytes",
						"name": "oftCmd",
						"type": "bytes"
					}
				],
				"internalType": "struct SendParam",
				"name": "_sendParam",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "nativeFee",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "lzTokenFee",
						"type": "uint256"
					}
				],
				"internalType": "struct MessagingFee",
				"name": "_fee",
				"type": "tuple"
			},
			{
				"internalType": "address",
				"name": "_refundAddress",
				"type": "address"
			}
		],
		"name": "send",
		"outputs": [
			{
				"components": [
					{
						"internalType": "bytes32",
						"name": "guid",
						"type": "bytes32"
					},
					{
						"internalType": "uint64",
						"name": "nonce",
						"type": "uint64"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "nativeFee",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "lzTokenFee",
								"type": "uint256"
							}
						],
						"internalType": "struct MessagingFee",
						"name": "fee",
						"type": "tuple"
					}
				],
				"internalType": "struct MessagingReceipt",
				"name": "msgReceipt",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "amountSentLD",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "amountReceivedLD",
						"type": "uint256"
					}
				],
				"internalType": "struct OFTReceipt",
				"name": "oftReceipt",
				"type": "tuple"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_delegate",
				"type": "address"
			}
		],
		"name": "setDelegate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint32",
						"name": "eid",
						"type": "uint32"
					},
					{
						"internalType": "uint16",
						"name": "msgType",
						"type": "uint16"
					},
					{
						"internalType": "bytes",
						"name": "options",
						"type": "bytes"
					}
				],
				"internalType": "struct EnforcedOptionParam[]",
				"name": "_enforcedOptions",
				"type": "tuple[]"
			}
		],
		"name": "setEnforcedOptions",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_msgInspector",
				"type": "address"
			}
		],
		"name": "setMsgInspector",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint32",
				"name": "_eid",
				"type": "uint32"
			},
			{
				"internalType": "bytes32",
				"name": "_peer",
				"type": "bytes32"
			}
		],
		"name": "setPeer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_preCrime",
				"type": "address"
			}
		],
		"name": "setPreCrime",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sharedDecimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "token",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

export const OFTBYTECODE="60c060405234801561000f575f80fd5b50604051615c62380380615c62833981810160405281019061003191906104f4565b83838383838361004561027c60201b60201c565b8484818181818d5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100bc575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016100b3919061059f565b60405180910390fd5b6100cb8161028460201b60201c565b508173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610165576040517fb586360400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60805173ffffffffffffffffffffffffffffffffffffffff1663ca5eb5e1826040518263ffffffff1660e01b81526004016101a0919061059f565b5f604051808303815f87803b1580156101b7575f80fd5b505af11580156101c9573d5f803e3d5ffd5b50505050505050506101df61034560201b60201c565b60ff168360ff16101561021e576040517f1e9714b000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61022c61034560201b60201c565b8361023791906105f1565b600a610243919061075d565b60a08181525050505050816008908161025c91906109ab565b50806009908161026c91906109ab565b5050505050505050505050610a7a565b5f6012905090565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f6006905090565b5f604051905090565b5f80fd5b5f80fd5b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6103ac82610366565b810181811067ffffffffffffffff821117156103cb576103ca610376565b5b80604052505050565b5f6103dd61034d565b90506103e982826103a3565b919050565b5f67ffffffffffffffff82111561040857610407610376565b5b61041182610366565b9050602081019050919050565b8281835e5f83830152505050565b5f61043e610439846103ee565b6103d4565b90508281526020810184848401111561045a57610459610362565b5b61046584828561041e565b509392505050565b5f82601f8301126104815761048061035e565b5b815161049184826020860161042c565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6104c38261049a565b9050919050565b6104d3816104b9565b81146104dd575f80fd5b50565b5f815190506104ee816104ca565b92915050565b5f805f806080858703121561050c5761050b610356565b5b5f85015167ffffffffffffffff8111156105295761052861035a565b5b6105358782880161046d565b945050602085015167ffffffffffffffff8111156105565761055561035a565b5b6105628782880161046d565b9350506040610573878288016104e0565b9250506060610584878288016104e0565b91505092959194509250565b610599816104b9565b82525050565b5f6020820190506105b25f830184610590565b92915050565b5f60ff82169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6105fb826105b8565b9150610606836105b8565b9250828203905060ff81111561061f5761061e6105c4565b5b92915050565b5f8160011c9050919050565b5f808291508390505b600185111561067a57808604811115610656576106556105c4565b5b60018516156106655780820291505b808102905061067385610625565b945061063a565b94509492505050565b5f82610692576001905061074d565b8161069f575f905061074d565b81600181146106b557600281146106bf576106ee565b600191505061074d565b60ff8411156106d1576106d06105c4565b5b8360020a9150848211156106e8576106e76105c4565b5b5061074d565b5060208310610133831016604e8410600b84101617156107235782820a90508381111561071e5761071d6105c4565b5b61074d565b6107308484846001610631565b92509050818404811115610747576107466105c4565b5b81810290505b9392505050565b5f819050919050565b5f61076782610754565b9150610772836105b8565b925061079f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484610683565b905092915050565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806107f557607f821691505b602082108103610808576108076107b1565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f6008830261086a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261082f565b610874868361082f565b95508019841693508086168417925050509392505050565b5f819050919050565b5f6108af6108aa6108a584610754565b61088c565b610754565b9050919050565b5f819050919050565b6108c883610895565b6108dc6108d4826108b6565b84845461083b565b825550505050565b5f90565b6108f06108e4565b6108fb8184846108bf565b505050565b5b8181101561091e576109135f826108e8565b600181019050610901565b5050565b601f821115610963576109348161080e565b61093d84610820565b8101602085101561094c578190505b61096061095885610820565b830182610900565b50505b505050565b5f82821c905092915050565b5f6109835f1984600802610968565b1980831691505092915050565b5f61099b8383610974565b9150826002028217905092915050565b6109b4826107a7565b67ffffffffffffffff8111156109cd576109cc610376565b5b6109d782546107de565b6109e2828285610922565b5f60209050601f831160018114610a13575f8415610a01578287015190505b610a0b8582610990565b865550610a72565b601f198416610a218661080e565b5f5b82811015610a4857848901518255600182019150602085019450602081019050610a23565b86831015610a655784890151610a61601f891682610974565b8355505b6001600288020188555050505b505050505050565b60805160a05161517a610ae85f395f818161109f01528181612593015281816125b40152818161265801526129a701525f8181610bbf01528181610ea00152818161161f01528181611a6901528181611f65015281816122c601528181612b150152612c0d015261517a5ff3fe608060405260043610610250575f3560e01c80637d25a05e11610138578063bb0b6a53116100b5578063d045a0dc11610079578063d045a0dc146108e7578063d424388514610903578063dd62ed3e1461092b578063f2fde38b14610967578063fc0c546a1461098f578063ff7bd03d146109b957610250565b8063bb0b6a53146107fa578063bc70b35414610836578063bd815db014610872578063c7c7f5b31461088e578063ca5eb5e1146108bf57610250565b8063963efcaa116100fc578063963efcaa146107185780639f68b96414610742578063a9059cbb1461076c578063b731ea0a146107a8578063b98bd070146107d257610250565b80637d25a05e1461062257806382413eac1461065e578063857749b01461069a5780638da5cb5b146106c457806395d89b41146106ee57610250565b806323b872dd116101d15780635535d461116101955780635535d461146105065780635a0dfe4d146105425780635e280f111461057e5780636fc1b31e146105a857806370a08231146105d0578063715018a61461060c57610250565b806323b872dd14610412578063313ce5671461044e5780633400288b146104785780633b6f743b146104a057806352ae2879146104dc57610250565b8063134d4f2511610218578063134d4f251461033e578063156a0d0f1461036857806317442b701461039357806318160ddd146103be5780631f5e1334146103e857610250565b806306fdde0314610254578063095ea7b31461027e5780630d35b415146102ba578063111ecdad146102f857806313137d6514610322575b5f80fd5b34801561025f575f80fd5b506102686109f5565b60405161027591906130c1565b60405180910390f35b348015610289575f80fd5b506102a4600480360381019061029f919061317f565b610a85565b6040516102b191906131d7565b60405180910390f35b3480156102c5575f80fd5b506102e060048036038101906102db9190613212565b610aa7565b6040516102ef93929190613417565b60405180910390f35b348015610303575f80fd5b5061030c610b81565b6040516103199190613462565b60405180910390f35b61033c6004803603810190610337919061352d565b610ba6565b005b348015610349575f80fd5b50610352610cc6565b60405161035f9190613600565b60405180910390f35b348015610373575f80fd5b5061037c610ccb565b60405161038a929190613675565b60405180910390f35b34801561039e575f80fd5b506103a7610cf8565b6040516103b592919061369c565b60405180910390f35b3480156103c9575f80fd5b506103d2610d06565b6040516103df91906136d2565b60405180910390f35b3480156103f3575f80fd5b506103fc610d0f565b6040516104099190613600565b60405180910390f35b34801561041d575f80fd5b50610438600480360381019061043391906136eb565b610d14565b60405161044591906131d7565b60405180910390f35b348015610459575f80fd5b50610462610d42565b60405161046f9190613756565b60405180910390f35b348015610483575f80fd5b5061049e600480360381019061049991906137a8565b610d4a565b005b3480156104ab575f80fd5b506104c660048036038101906104c19190613810565b610d60565b6040516104d39190613897565b60405180910390f35b3480156104e7575f80fd5b506104f0610dc8565b6040516104fd9190613462565b60405180910390f35b348015610511575f80fd5b5061052c600480360381019061052791906138da565b610dcf565b604051610539919061396a565b60405180910390f35b34801561054d575f80fd5b50610568600480360381019061056391906137a8565b610e75565b60405161057591906131d7565b60405180910390f35b348015610589575f80fd5b50610592610e9e565b60405161059f91906139e5565b60405180910390f35b3480156105b3575f80fd5b506105ce60048036038101906105c991906139fe565b610ec2565b005b3480156105db575f80fd5b506105f660048036038101906105f191906139fe565b610f44565b60405161060391906136d2565b60405180910390f35b348015610617575f80fd5b50610620610f8a565b005b34801561062d575f80fd5b50610648600480360381019061064391906137a8565b610f9d565b6040516106559190613a29565b60405180910390f35b348015610669575f80fd5b50610684600480360381019061067f9190613a42565b610fa4565b60405161069191906131d7565b60405180910390f35b3480156106a5575f80fd5b506106ae610fde565b6040516106bb9190613756565b60405180910390f35b3480156106cf575f80fd5b506106d8610fe6565b6040516106e59190613462565b60405180910390f35b3480156106f9575f80fd5b5061070261100d565b60405161070f91906130c1565b60405180910390f35b348015610723575f80fd5b5061072c61109d565b60405161073991906136d2565b60405180910390f35b34801561074d575f80fd5b506107566110c1565b60405161076391906131d7565b60405180910390f35b348015610777575f80fd5b50610792600480360381019061078d919061317f565b6110c5565b60405161079f91906131d7565b60405180910390f35b3480156107b3575f80fd5b506107bc6110e7565b6040516107c99190613462565b60405180910390f35b3480156107dd575f80fd5b506107f860048036038101906107f39190613b08565b61110c565b005b348015610805575f80fd5b50610820600480360381019061081b9190613b53565b61112d565b60405161082d9190613b8d565b60405180910390f35b348015610841575f80fd5b5061085c60048036038101906108579190613ba6565b611142565b604051610869919061396a565b60405180910390f35b61088c60048036038101906108879190613c6c565b611344565b005b6108a860048036038101906108a39190613cd5565b611510565b6040516108b6929190613dcc565b60405180910390f35b3480156108ca575f80fd5b506108e560048036038101906108e091906139fe565b611615565b005b61090160048036038101906108fc919061352d565b6116a6565b005b34801561090e575f80fd5b50610929600480360381019061092491906139fe565b611723565b005b348015610936575f80fd5b50610951600480360381019061094c9190613df3565b6117a5565b60405161095e91906136d2565b60405180910390f35b348015610972575f80fd5b5061098d600480360381019061098891906139fe565b611827565b005b34801561099a575f80fd5b506109a36118ab565b6040516109b09190613462565b60405180910390f35b3480156109c4575f80fd5b506109df60048036038101906109da9190613e31565b6118b2565b6040516109ec91906131d7565b60405180910390f35b606060088054610a0490613e89565b80601f0160208091040260200160405190810160405280929190818152602001828054610a3090613e89565b8015610a7b5780601f10610a5257610100808354040283529160200191610a7b565b820191905f5260205f20905b815481529060010190602001808311610a5e57829003601f168201915b5050505050905090565b5f80610a8f6118ef565b9050610a9c8185856118f6565b600191505092915050565b610aaf612fbe565b6060610ab9612fd6565b5f8067ffffffffffffffff8016905060405180604001604052808381526020018281525094505f67ffffffffffffffff811115610af957610af8613eb9565b5b604051908082528060200260200182016040528015610b3257816020015b610b1f612fee565b815260200190600190039081610b175790505b5093505f80610b5b886040013589606001358a5f016020810190610b569190613b53565b611908565b915091506040518060400160405280838152602001828152509450505050509193909250565b60045f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b3373ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1614610c3657336040517f91ac5e4f000000000000000000000000000000000000000000000000000000008152600401610c2d9190613462565b60405180910390fd5b8660200135610c55885f016020810190610c509190613b53565b611967565b14610cae57865f016020810190610c6c9190613b53565b87602001356040517fc26bebcc000000000000000000000000000000000000000000000000000000008152600401610ca5929190613ef5565b60405180910390fd5b610cbd878787878787876119d8565b50505050505050565b600281565b5f807f02e49c2c000000000000000000000000000000000000000000000000000000006001915091509091565b5f8060016002915091509091565b5f600754905090565b600181565b5f80610d1e6118ef565b9050610d2b858285611b62565b610d36858585611bf4565b60019150509392505050565b5f6012905090565b610d52611ce4565b610d5c8282611d6b565b5050565b610d68613007565b5f610d8d84604001358560600135865f016020810190610d889190613b53565b611908565b9150505f80610d9c8684611dca565b91509150610dbd865f016020810190610db59190613b53565b838388611f5b565b935050505092915050565b5f30905090565b6003602052815f5260405f20602052805f5260405f205f91509150508054610df690613e89565b80601f0160208091040260200160405190810160405280929190818152602001828054610e2290613e89565b8015610e6d5780601f10610e4457610100808354040283529160200191610e6d565b820191905f5260205f20905b815481529060010190602001808311610e5057829003601f168201915b505050505081565b5f8160015f8563ffffffff1663ffffffff1681526020019081526020015f205414905092915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b610eca611ce4565b8060045f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507ff0be4f1e87349231d80c36b33f9e8639658eeaf474014dee15a3e6a4d441419781604051610f399190613462565b60405180910390a150565b5f60055f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b610f92611ce4565b610f9b5f61203c565b565b5f92915050565b5f3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050949350505050565b5f6006905090565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606009805461101c90613e89565b80601f016020809104026020016040519081016040528092919081815260200182805461104890613e89565b80156110935780601f1061106a57610100808354040283529160200191611093565b820191905f5260205f20905b81548152906001019060200180831161107657829003601f168201915b5050505050905090565b7f000000000000000000000000000000000000000000000000000000000000000081565b5f90565b5f806110cf6118ef565b90506110dc818585611bf4565b600191505092915050565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b611114611ce4565b611129828290611124919061414d565b6120fd565b5050565b6001602052805f5260405f205f915090505481565b60605f60035f8763ffffffff1663ffffffff1681526020019081526020015f205f8661ffff1661ffff1681526020019081526020015f20805461118490613e89565b80601f01602080910402602001604051908101604052809291908181526020018280546111b090613e89565b80156111fb5780601f106111d2576101008083540402835291602001916111fb565b820191905f5260205f20905b8154815290600101906020018083116111de57829003601f168201915b505050505090505f8151036112565783838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f8201169050808301925050505050505091505061133c565b5f8484905003611269578091505061133c565b600284849050106112fd576112c084848080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f82011690508083019250505050505050612212565b80848460029080926112d493929190614169565b6040516020016112e693929190614201565b60405160208183030381529060405291505061133c565b83836040517f9a6d49cd000000000000000000000000000000000000000000000000000000008152600401611333929190614252565b60405180910390fd5b949350505050565b5f5b82829050811015611463573683838381811061136557611364614274565b5b905060200281019061137791906142ad565b905061139c815f015f0160208101906113909190613b53565b825f0160200135610e75565b6113a65750611456565b3073ffffffffffffffffffffffffffffffffffffffff1663d045a0dc8260c00135835f018460a00135858061010001906113e091906142d5565b8760e00160208101906113f391906139fe565b8880610120019061140491906142d5565b6040518963ffffffff1660e01b8152600401611426979695949392919061440a565b5f604051808303818588803b15801561143d575f80fd5b505af115801561144f573d5f803e3d5ffd5b5050505050505b8080600101915050611346565b503373ffffffffffffffffffffffffffffffffffffffff16638e9e70996040518163ffffffff1660e01b81526004015f60405180830381865afa1580156114ac573d5f803e3d5ffd5b505050506040513d5f823e3d601f19601f820116820180604052508101906114d491906144db565b6040517f8351eea7000000000000000000000000000000000000000000000000000000008152600401611507919061396a565b60405180910390fd5b61151861301f565b611520612fd6565b5f8061154733886040013589606001358a5f0160208101906115429190613b53565b61226b565b915091505f806115578984611dca565b91509150611589895f0160208101906115709190613b53565b83838b803603810190611583919061456f565b8b612293565b955060405180604001604052808581526020018481525094503373ffffffffffffffffffffffffffffffffffffffff16865f01517f85496b760a4b7f8d66384b9df21b381f5d1b1e79f229a47aaf4c232edc2fe59a8b5f0160208101906115f09190613b53565b87876040516116019392919061459a565b60405180910390a350505050935093915050565b61161d611ce4565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ca5eb5e1826040518263ffffffff1660e01b81526004016116769190613462565b5f604051808303815f87803b15801561168d575f80fd5b505af115801561169f573d5f803e3d5ffd5b5050505050565b3073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461170b576040517f14d4a4e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61171a878787878787876123a9565b50505050505050565b61172b611ce4565b8060025f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fd48d879cef83a1c0bdda516f27b13ddb1b3f8bbac1c9e1511bb2a659c24277608160405161179a9190613462565b60405180910390a150565b5f60065f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b61182f611ce4565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361189f575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016118969190613462565b60405180910390fd5b6118a88161203c565b50565b5f30905090565b5f816020013560015f845f0160208101906118cd9190613b53565b63ffffffff1663ffffffff1681526020019081526020015f2054149050919050565b5f33905090565b61190383838360016123c1565b505050565b5f8061191385612590565b91508190508381101561195f5780846040517f71c4efed0000000000000000000000000000000000000000000000000000000081526004016119569291906145cf565b60405180910390fd5b935093915050565b5f8060015f8463ffffffff1663ffffffff1681526020019081526020015f205490505f801b81036119cf57826040517ff6ff4fb70000000000000000000000000000000000000000000000000000000081526004016119c691906145f6565b60405180910390fd5b80915050919050565b5f6119eb6119e687876125ef565b612619565b90505f611a1b82611a046119ff8a8a612624565b612655565b8b5f016020810190611a169190613b53565b612693565b9050611a2787876126e1565b15611af5575f611a658a6040016020810190611a43919061460f565b8b5f016020810190611a559190613b53565b84611a608c8c6126f4565b612756565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637cb59012848b5f856040518563ffffffff1660e01b8152600401611ac69493929190614673565b5f604051808303815f87803b158015611add575f80fd5b505af1158015611aef573d5f803e3d5ffd5b50505050505b8173ffffffffffffffffffffffffffffffffffffffff16887fefed6d3500546b29533b128a29e3a94d70788727f0507505ac12eaf2e578fd9c8b5f016020810190611b409190613b53565b84604051611b4f9291906146bd565b60405180910390a3505050505050505050565b5f611b6d84846117a5565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114611bee5781811015611bdf578281836040517ffb8f41b2000000000000000000000000000000000000000000000000000000008152600401611bd6939291906146e4565b60405180910390fd5b611bed84848484035f6123c1565b5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611c64575f6040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401611c5b9190613462565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611cd4575f6040517fec442f05000000000000000000000000000000000000000000000000000000008152600401611ccb9190613462565b60405180910390fd5b611cdf838383612788565b505050565b611cec6118ef565b73ffffffffffffffffffffffffffffffffffffffff16611d0a610fe6565b73ffffffffffffffffffffffffffffffffffffffff1614611d6957611d2d6118ef565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401611d609190613462565b60405180910390fd5b565b8060015f8463ffffffff1663ffffffff1681526020019081526020015f20819055507f238399d427b947898edb290f5ff0f9109849b1c3ba196a42e35f00c50a54b98b8282604051611dbe929190613ef5565b60405180910390a15050565b6060805f611e368560200135611ddf866129a4565b878060a00190611def91906142d5565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f820116905080830192505050505050506129d8565b80925081945050505f81611e4b576001611e4e565b60025b9050611e7b865f016020810190611e659190613b53565b82888060800190611e7691906142d5565b611142565b92505f60045f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611f51578073ffffffffffffffffffffffffffffffffffffffff1663043a78eb86866040518363ffffffff1660e01b8152600401611f10929190614719565b602060405180830381865afa158015611f2b573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611f4f9190614762565b505b5050509250929050565b611f63613007565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ddc28c586040518060a001604052808863ffffffff168152602001611fbf89611967565b8152602001878152602001868152602001851515815250306040518363ffffffff1660e01b8152600401611ff492919061485e565b6040805180830381865afa15801561200e573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061203291906148ed565b9050949350505050565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f5b81518110156121d75761212f82828151811061211e5761211d614274565b5b602002602001015160400151612212565b81818151811061214257612141614274565b5b60200260200101516040015160035f84848151811061216457612163614274565b5b60200260200101515f015163ffffffff1663ffffffff1681526020019081526020015f205f84848151811061219c5761219b614274565b5b60200260200101516020015161ffff1661ffff1681526020019081526020015f2090816121c99190614aac565b5080806001019150506120ff565b507fbe4864a8e820971c0247f5992e2da559595f7bf076a21cb5928d443d2a13b674816040516122079190614c92565b60405180910390a150565b5f60028201519050600361ffff168161ffff161461226757816040517f9a6d49cd00000000000000000000000000000000000000000000000000000000815260040161225e919061396a565b60405180910390fd5b5050565b5f80612278858585611908565b809250819350505061228a8683612a46565b94509492505050565b61229b61301f565b5f6122a8845f0151612ac5565b90505f846020015111156122c4576122c38460200151612b12565b5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632637a450826040518060a001604052808b63ffffffff1681526020016123218c611967565b81526020018a81526020018981526020015f8960200151111515815250866040518463ffffffff1660e01b815260040161235c92919061485e565b60806040518083038185885af1158015612378573d5f803e3d5ffd5b50505050506040513d601f19601f8201168201806040525081019061239d9190614d3b565b91505095945050505050565b6123b8878787878787876119d8565b50505050505050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603612431575f6040517fe602df050000000000000000000000000000000000000000000000000000000081526004016124289190613462565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036124a1575f6040517f94280d620000000000000000000000000000000000000000000000000000000081526004016124989190613462565b60405180910390fd5b8160065f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550801561258a578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161258191906136d2565b60405180910390a35b50505050565b5f7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000836125de9190614dc0565b6125e89190614df0565b9050919050565b5f82825f90602060ff169261260693929190614169565b906126119190614e3b565b905092915050565b5f815f1c9050919050565b5f8282602060ff1690602860ff169261263f93929190614169565b9061264a9190614ec4565b60c01c905092915050565b5f7f00000000000000000000000000000000000000000000000000000000000000008267ffffffffffffffff1661268c9190614df0565b9050919050565b5f8073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036126cd5761dead93505b6126d78484612c58565b8290509392505050565b5f602860ff168383905011905092915050565b60608282602860ff1690809261270c93929190614169565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f82011690508083019250505050505050905092915050565b60608484848460405160200161276f9493929190614faa565b6040516020818303038152906040529050949350505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036127d8578060075f8282546127cc9190614ff3565b925050819055506128a8565b5f60055f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905081811015612862578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401612859939291906146e4565b60405180910390fd5b81810360055f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036128ef578060075f828254039250508190555061293a565b8060055f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161299791906136d2565b60405180910390a3505050565b5f7f0000000000000000000000000000000000000000000000000000000000000000826129d19190614dc0565b9050919050565b60605f80835111905080612a0d5784846040516020016129f9929190615046565b604051602081830303815290604052612a3c565b8484612a1833612cd7565b85604051602001612a2c9493929190615071565b6040516020818303038152906040525b9150935093915050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612ab6575f6040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401612aad9190613462565b60405180910390fd5b612ac1825f83612788565b5050565b5f813414612b0a57346040517f9f704120000000000000000000000000000000000000000000000000000000008152600401612b0191906136d2565b60405180910390fd5b819050919050565b5f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e4fe1d946040518163ffffffff1660e01b8152600401602060405180830381865afa158015612b7c573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612ba091906150ce565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603612c07576040517f5373352a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b612c54337f0000000000000000000000000000000000000000000000000000000000000000848473ffffffffffffffffffffffffffffffffffffffff16612cf8909392919063ffffffff16565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612cc8575f6040517fec442f05000000000000000000000000000000000000000000000000000000008152600401612cbf9190613462565b60405180910390fd5b612cd35f8383612788565b5050565b5f8173ffffffffffffffffffffffffffffffffffffffff165f1b9050919050565b612d74848573ffffffffffffffffffffffffffffffffffffffff166323b872dd868686604051602401612d2d939291906150f9565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050612d7a565b50505050565b5f612da4828473ffffffffffffffffffffffffffffffffffffffff16612e0f90919063ffffffff16565b90505f815114158015612dc8575080806020019051810190612dc69190614762565b155b15612e0a57826040517f5274afe7000000000000000000000000000000000000000000000000000000008152600401612e019190613462565b60405180910390fd5b505050565b6060612e1c83835f612e24565b905092915050565b606081471015612e6b57306040517fcd786059000000000000000000000000000000000000000000000000000000008152600401612e629190613462565b60405180910390fd5b5f808573ffffffffffffffffffffffffffffffffffffffff168486604051612e93919061512e565b5f6040518083038185875af1925050503d805f8114612ecd576040519150601f19603f3d011682016040523d82523d5f602084013e612ed2565b606091505b5091509150612ee2868383612eed565b925050509392505050565b606082612f0257612efd82612f7a565b612f72565b5f8251148015612f2857505f8473ffffffffffffffffffffffffffffffffffffffff163b145b15612f6a57836040517f9996b315000000000000000000000000000000000000000000000000000000008152600401612f619190613462565b60405180910390fd5b819050612f73565b5b9392505050565b5f81511115612f8c5780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405180604001604052805f81526020015f81525090565b60405180604001604052805f81526020015f81525090565b60405180604001604052805f8152602001606081525090565b60405180604001604052805f81526020015f81525090565b60405180606001604052805f80191681526020015f67ffffffffffffffff16815260200161304b613007565b81525090565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f61309382613051565b61309d818561305b565b93506130ad81856020860161306b565b6130b681613079565b840191505092915050565b5f6020820190508181035f8301526130d98184613089565b905092915050565b5f604051905090565b5f80fd5b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61311b826130f2565b9050919050565b61312b81613111565b8114613135575f80fd5b50565b5f8135905061314681613122565b92915050565b5f819050919050565b61315e8161314c565b8114613168575f80fd5b50565b5f8135905061317981613155565b92915050565b5f8060408385031215613195576131946130ea565b5b5f6131a285828601613138565b92505060206131b38582860161316b565b9150509250929050565b5f8115159050919050565b6131d1816131bd565b82525050565b5f6020820190506131ea5f8301846131c8565b92915050565b5f80fd5b5f60e08284031215613209576132086131f0565b5b81905092915050565b5f60208284031215613227576132266130ea565b5b5f82013567ffffffffffffffff811115613244576132436130ee565b5b613250848285016131f4565b91505092915050565b6132628161314c565b82525050565b604082015f82015161327c5f850182613259565b50602082015161328f6020850182613259565b50505050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b5f819050919050565b6132d0816132be565b82525050565b5f82825260208201905092915050565b5f6132f082613051565b6132fa81856132d6565b935061330a81856020860161306b565b61331381613079565b840191505092915050565b5f604083015f8301516133335f8601826132c7565b506020830151848203602086015261334b82826132e6565b9150508091505092915050565b5f613363838361331e565b905092915050565b5f602082019050919050565b5f61338182613295565b61338b818561329f565b93508360208202850161339d856132af565b805f5b858110156133d857848403895281516133b98582613358565b94506133c48361336b565b925060208a019950506001810190506133a0565b50829750879550505050505092915050565b604082015f8201516133fe5f850182613259565b5060208201516134116020850182613259565b50505050565b5f60a08201905061342a5f830186613268565b818103604083015261343c8185613377565b905061344b60608301846133ea565b949350505050565b61345c81613111565b82525050565b5f6020820190506134755f830184613453565b92915050565b5f606082840312156134905761348f6131f0565b5b81905092915050565b5f819050919050565b6134ab81613499565b81146134b5575f80fd5b50565b5f813590506134c6816134a2565b92915050565b5f80fd5b5f80fd5b5f80fd5b5f8083601f8401126134ed576134ec6134cc565b5b8235905067ffffffffffffffff81111561350a576135096134d0565b5b602083019150836001820283011115613526576135256134d4565b5b9250929050565b5f805f805f805f60e0888a031215613548576135476130ea565b5b5f6135558a828b0161347b565b97505060606135668a828b016134b8565b965050608088013567ffffffffffffffff811115613587576135866130ee565b5b6135938a828b016134d8565b955095505060a06135a68a828b01613138565b93505060c088013567ffffffffffffffff8111156135c7576135c66130ee565b5b6135d38a828b016134d8565b925092505092959891949750929550565b5f61ffff82169050919050565b6135fa816135e4565b82525050565b5f6020820190506136135f8301846135f1565b92915050565b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61364d81613619565b82525050565b5f67ffffffffffffffff82169050919050565b61366f81613653565b82525050565b5f6040820190506136885f830185613644565b6136956020830184613666565b9392505050565b5f6040820190506136af5f830185613666565b6136bc6020830184613666565b9392505050565b6136cc8161314c565b82525050565b5f6020820190506136e55f8301846136c3565b92915050565b5f805f60608486031215613702576137016130ea565b5b5f61370f86828701613138565b935050602061372086828701613138565b92505060406137318682870161316b565b9150509250925092565b5f60ff82169050919050565b6137508161373b565b82525050565b5f6020820190506137695f830184613747565b92915050565b5f63ffffffff82169050919050565b6137878161376f565b8114613791575f80fd5b50565b5f813590506137a28161377e565b92915050565b5f80604083850312156137be576137bd6130ea565b5b5f6137cb85828601613794565b92505060206137dc858286016134b8565b9150509250929050565b6137ef816131bd565b81146137f9575f80fd5b50565b5f8135905061380a816137e6565b92915050565b5f8060408385031215613826576138256130ea565b5b5f83013567ffffffffffffffff811115613843576138426130ee565b5b61384f858286016131f4565b9250506020613860858286016137fc565b9150509250929050565b604082015f82015161387e5f850182613259565b5060208201516138916020850182613259565b50505050565b5f6040820190506138aa5f83018461386a565b92915050565b6138b9816135e4565b81146138c3575f80fd5b50565b5f813590506138d4816138b0565b92915050565b5f80604083850312156138f0576138ef6130ea565b5b5f6138fd85828601613794565b925050602061390e858286016138c6565b9150509250929050565b5f81519050919050565b5f82825260208201905092915050565b5f61393c82613918565b6139468185613922565b935061395681856020860161306b565b61395f81613079565b840191505092915050565b5f6020820190508181035f8301526139828184613932565b905092915050565b5f819050919050565b5f6139ad6139a86139a3846130f2565b61398a565b6130f2565b9050919050565b5f6139be82613993565b9050919050565b5f6139cf826139b4565b9050919050565b6139df816139c5565b82525050565b5f6020820190506139f85f8301846139d6565b92915050565b5f60208284031215613a1357613a126130ea565b5b5f613a2084828501613138565b91505092915050565b5f602082019050613a3c5f830184613666565b92915050565b5f805f8060a08587031215613a5a57613a596130ea565b5b5f613a678782880161347b565b945050606085013567ffffffffffffffff811115613a8857613a876130ee565b5b613a94878288016134d8565b93509350506080613aa787828801613138565b91505092959194509250565b5f8083601f840112613ac857613ac76134cc565b5b8235905067ffffffffffffffff811115613ae557613ae46134d0565b5b602083019150836020820283011115613b0157613b006134d4565b5b9250929050565b5f8060208385031215613b1e57613b1d6130ea565b5b5f83013567ffffffffffffffff811115613b3b57613b3a6130ee565b5b613b4785828601613ab3565b92509250509250929050565b5f60208284031215613b6857613b676130ea565b5b5f613b7584828501613794565b91505092915050565b613b8781613499565b82525050565b5f602082019050613ba05f830184613b7e565b92915050565b5f805f8060608587031215613bbe57613bbd6130ea565b5b5f613bcb87828801613794565b9450506020613bdc878288016138c6565b935050604085013567ffffffffffffffff811115613bfd57613bfc6130ee565b5b613c09878288016134d8565b925092505092959194509250565b5f8083601f840112613c2c57613c2b6134cc565b5b8235905067ffffffffffffffff811115613c4957613c486134d0565b5b602083019150836020820283011115613c6557613c646134d4565b5b9250929050565b5f8060208385031215613c8257613c816130ea565b5b5f83013567ffffffffffffffff811115613c9f57613c9e6130ee565b5b613cab85828601613c17565b92509250509250929050565b5f60408284031215613ccc57613ccb6131f0565b5b81905092915050565b5f805f60808486031215613cec57613ceb6130ea565b5b5f84013567ffffffffffffffff811115613d0957613d086130ee565b5b613d15868287016131f4565b9350506020613d2686828701613cb7565b9250506060613d3786828701613138565b9150509250925092565b613d4a81613499565b82525050565b613d5981613653565b82525050565b604082015f820151613d735f850182613259565b506020820151613d866020850182613259565b50505050565b608082015f820151613da05f850182613d41565b506020820151613db36020850182613d50565b506040820151613dc66040850182613d5f565b50505050565b5f60c082019050613ddf5f830185613d8c565b613dec60808301846133ea565b9392505050565b5f8060408385031215613e0957613e086130ea565b5b5f613e1685828601613138565b9250506020613e2785828601613138565b9150509250929050565b5f60608284031215613e4657613e456130ea565b5b5f613e538482850161347b565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680613ea057607f821691505b602082108103613eb357613eb2613e5c565b5b50919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b613eef8161376f565b82525050565b5f604082019050613f085f830185613ee6565b613f156020830184613b7e565b9392505050565b613f2582613079565b810181811067ffffffffffffffff82111715613f4457613f43613eb9565b5b80604052505050565b5f613f566130e1565b9050613f628282613f1c565b919050565b5f67ffffffffffffffff821115613f8157613f80613eb9565b5b602082029050602081019050919050565b5f80fd5b5f80fd5b5f80fd5b5f67ffffffffffffffff821115613fb857613fb7613eb9565b5b613fc182613079565b9050602081019050919050565b828183375f83830152505050565b5f613fee613fe984613f9e565b613f4d565b90508281526020810184848401111561400a57614009613f9a565b5b614015848285613fce565b509392505050565b5f82601f830112614031576140306134cc565b5b8135614041848260208601613fdc565b91505092915050565b5f6060828403121561405f5761405e613f92565b5b6140696060613f4d565b90505f61407884828501613794565b5f83015250602061408b848285016138c6565b602083015250604082013567ffffffffffffffff8111156140af576140ae613f96565b5b6140bb8482850161401d565b60408301525092915050565b5f6140d96140d484613f67565b613f4d565b905080838252602082019050602084028301858111156140fc576140fb6134d4565b5b835b8181101561414357803567ffffffffffffffff811115614121576141206134cc565b5b80860161412e898261404a565b855260208501945050506020810190506140fe565b5050509392505050565b5f6141593684846140c7565b905092915050565b5f80fd5b5f80fd5b5f808585111561417c5761417b614161565b5b8386111561418d5761418c614165565b5b6001850283019150848603905094509492505050565b5f81905092915050565b5f6141b782613918565b6141c181856141a3565b93506141d181856020860161306b565b80840191505092915050565b5f6141e883856141a3565b93506141f5838584613fce565b82840190509392505050565b5f61420c82866141ad565b91506142198284866141dd565b9150819050949350505050565b5f6142318385613922565b935061423e838584613fce565b61424783613079565b840190509392505050565b5f6020820190508181035f83015261426b818486614226565b90509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f80fd5b5f80fd5b5f80fd5b5f82356001610140038336030381126142c9576142c86142a1565b5b80830191505092915050565b5f80833560016020038436030381126142f1576142f06142a1565b5b80840192508235915067ffffffffffffffff821115614313576143126142a5565b5b60208301925060018202360383131561432f5761432e6142a9565b5b509250929050565b5f6143456020840184613794565b905092915050565b6143568161376f565b82525050565b5f61436a60208401846134b8565b905092915050565b61437b81613653565b8114614385575f80fd5b50565b5f8135905061439681614372565b92915050565b5f6143aa6020840184614388565b905092915050565b606082016143c25f830183614337565b6143ce5f85018261434d565b506143dc602083018361435c565b6143e96020850182613d41565b506143f7604083018361439c565b6144046040850182613d50565b50505050565b5f60e08201905061441d5f83018a6143b2565b61442a6060830189613b7e565b818103608083015261443d818789614226565b905061444c60a0830186613453565b81810360c083015261445f818486614226565b905098975050505050505050565b5f61447f61447a84613f9e565b613f4d565b90508281526020810184848401111561449b5761449a613f9a565b5b6144a684828561306b565b509392505050565b5f82601f8301126144c2576144c16134cc565b5b81516144d284826020860161446d565b91505092915050565b5f602082840312156144f0576144ef6130ea565b5b5f82015167ffffffffffffffff81111561450d5761450c6130ee565b5b614519848285016144ae565b91505092915050565b5f6040828403121561453757614536613f92565b5b6145416040613f4d565b90505f6145508482850161316b565b5f8301525060206145638482850161316b565b60208301525092915050565b5f60408284031215614584576145836130ea565b5b5f61459184828501614522565b91505092915050565b5f6060820190506145ad5f830186613ee6565b6145ba60208301856136c3565b6145c760408301846136c3565b949350505050565b5f6040820190506145e25f8301856136c3565b6145ef60208301846136c3565b9392505050565b5f6020820190506146095f830184613ee6565b92915050565b5f60208284031215614624576146236130ea565b5b5f61463184828501614388565b91505092915050565b5f819050919050565b5f61465d6146586146538461463a565b61398a565b6135e4565b9050919050565b61466d81614643565b82525050565b5f6080820190506146865f830187613453565b6146936020830186613b7e565b6146a06040830185614664565b81810360608301526146b28184613932565b905095945050505050565b5f6040820190506146d05f830185613ee6565b6146dd60208301846136c3565b9392505050565b5f6060820190506146f75f830186613453565b61470460208301856136c3565b61471160408301846136c3565b949350505050565b5f6040820190508181035f8301526147318185613932565b905081810360208301526147458184613932565b90509392505050565b5f8151905061475c816137e6565b92915050565b5f60208284031215614777576147766130ea565b5b5f6147848482850161474e565b91505092915050565b5f82825260208201905092915050565b5f6147a782613918565b6147b1818561478d565b93506147c181856020860161306b565b6147ca81613079565b840191505092915050565b6147de816131bd565b82525050565b5f60a083015f8301516147f95f86018261434d565b50602083015161480c6020860182613d41565b5060408301518482036040860152614824828261479d565b9150506060830151848203606086015261483e828261479d565b915050608083015161485360808601826147d5565b508091505092915050565b5f6040820190508181035f83015261487681856147e4565b90506148856020830184613453565b9392505050565b5f8151905061489a81613155565b92915050565b5f604082840312156148b5576148b4613f92565b5b6148bf6040613f4d565b90505f6148ce8482850161488c565b5f8301525060206148e18482850161488c565b60208301525092915050565b5f60408284031215614902576149016130ea565b5b5f61490f848285016148a0565b91505092915050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026149747fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82614939565b61497e8683614939565b95508019841693508086168417925050509392505050565b5f6149b06149ab6149a68461314c565b61398a565b61314c565b9050919050565b5f819050919050565b6149c983614996565b6149dd6149d5826149b7565b848454614945565b825550505050565b5f90565b6149f16149e5565b6149fc8184846149c0565b505050565b5b81811015614a1f57614a145f826149e9565b600181019050614a02565b5050565b601f821115614a6457614a3581614918565b614a3e8461492a565b81016020851015614a4d578190505b614a61614a598561492a565b830182614a01565b50505b505050565b5f82821c905092915050565b5f614a845f1984600802614a69565b1980831691505092915050565b5f614a9c8383614a75565b9150826002028217905092915050565b614ab582613918565b67ffffffffffffffff811115614ace57614acd613eb9565b5b614ad88254613e89565b614ae3828285614a23565b5f60209050601f831160018114614b14575f8415614b02578287015190505b614b0c8582614a91565b865550614b73565b601f198416614b2286614918565b5f5b82811015614b4957848901518255600182019150602085019450602081019050614b24565b86831015614b665784890151614b62601f891682614a75565b8355505b6001600288020188555050505b505050505050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b614bad816135e4565b82525050565b5f606083015f830151614bc85f86018261434d565b506020830151614bdb6020860182614ba4565b5060408301518482036040860152614bf3828261479d565b9150508091505092915050565b5f614c0b8383614bb3565b905092915050565b5f602082019050919050565b5f614c2982614b7b565b614c338185614b85565b935083602082028501614c4585614b95565b805f5b85811015614c805784840389528151614c618582614c00565b9450614c6c83614c13565b925060208a01995050600181019050614c48565b50829750879550505050505092915050565b5f6020820190508181035f830152614caa8184614c1f565b905092915050565b5f81519050614cc0816134a2565b92915050565b5f81519050614cd481614372565b92915050565b5f60808284031215614cef57614cee613f92565b5b614cf96060613f4d565b90505f614d0884828501614cb2565b5f830152506020614d1b84828501614cc6565b6020830152506040614d2f848285016148a0565b60408301525092915050565b5f60808284031215614d5057614d4f6130ea565b5b5f614d5d84828501614cda565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f614dca8261314c565b9150614dd58361314c565b925082614de557614de4614d66565b5b828204905092915050565b5f614dfa8261314c565b9150614e058361314c565b9250828202614e138161314c565b91508282048414831517614e2a57614e29614d93565b5b5092915050565b5f82905092915050565b5f614e468383614e31565b82614e518135613499565b92506020821015614e9157614e8c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83602003600802614939565b831692505b505092915050565b5f7fffffffffffffffff00000000000000000000000000000000000000000000000082169050919050565b5f614ecf8383614e31565b82614eda8135614e99565b92506008821015614f1a57614f157fffffffffffffffff00000000000000000000000000000000000000000000000083600803600802614939565b831692505b505092915050565b5f8160c01b9050919050565b5f614f3882614f22565b9050919050565b614f50614f4b82613653565b614f2e565b82525050565b5f8160e01b9050919050565b5f614f6c82614f56565b9050919050565b614f84614f7f8261376f565b614f62565b82525050565b5f819050919050565b614fa4614f9f8261314c565b614f8a565b82525050565b5f614fb58287614f3f565b600882019150614fc58286614f73565b600482019150614fd58285614f93565b602082019150614fe582846141ad565b915081905095945050505050565b5f614ffd8261314c565b91506150088361314c565b92508282019050808211156150205761501f614d93565b5b92915050565b5f819050919050565b61504061503b82613499565b615026565b82525050565b5f615051828561502f565b6020820191506150618284614f3f565b6008820191508190509392505050565b5f61507c828761502f565b60208201915061508c8286614f3f565b60088201915061509c828561502f565b6020820191506150ac82846141ad565b915081905095945050505050565b5f815190506150c881613122565b92915050565b5f602082840312156150e3576150e26130ea565b5b5f6150f0848285016150ba565b91505092915050565b5f60608201905061510c5f830186613453565b6151196020830185613453565b61512660408301846136c3565b949350505050565b5f61513982846141ad565b91508190509291505056fea26469706673582212208cdcf8f4bd83b9ce3caf43e194d655480b2d807b615a783cbdd0f4b83e9af23664736f6c634300081a0033"