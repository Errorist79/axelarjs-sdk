export const mainnet = {
  uusdc: {
    common_key: {
      devnet: "uusdc",
      testnet: "uusdc",
      mainnet: "uusdc",
    },
    native_chain: "ethereum",
    fully_supported: true,
    decimals: 6,
    chain_aliases: {
      axelar: {
        assetSymbol: "USDC",
        assetName: "USDC",
        minDepositAmt: 0.5,
        ibcDenom: "uusdc",
        fullDenomPath: "uusdc",
        tokenAddress: "uusdc",
      },
      moonbeam: {
        assetSymbol: "axlUSDC",
        assetName: "axlUSDC",
        minDepositAmt: 1,
        ibcDenom: "uusdc",
        fullDenomPath: "uusdc",
        tokenAddress: "0xCa01a1D0993565291051daFF390892518ACfAD3A",
      },
      fantom: {
        assetSymbol: "axlUSDC",
        assetName: "axlUSDC",
        minDepositAmt: 1,
        ibcDenom: "uusdc",
        fullDenomPath: "uusdc",
        tokenAddress: "0x1B6382DBDEa11d97f24495C9A90b7c88469134a4",
      },
      ethereum: {
        assetSymbol: "USDC",
        assetName: "USDC",
        minDepositAmt: 20,
        ibcDenom: "uusdc",
        fullDenomPath: "uusdc",
        tokenAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      },
      avalanche: {
        assetSymbol: "axlUSDC",
        assetName: "axlUSDC",
        minDepositAmt: 1,
        ibcDenom: "uusdc",
        fullDenomPath: "uusdc",
        tokenAddress: "0xfaB550568C688d5D8A52C7d794cb93Edc26eC0eC",
      },
      polygon: {
        assetSymbol: "axlUSDC",
        assetName: "axlUSDC",
        minDepositAmt: 1,
        ibcDenom: "uusdc",
        fullDenomPath: "uusdc",
        tokenAddress: "0x750e4C4984a9e0f12978eA6742Bc1c5D248f40ed",
      },
      cosmoshub: {
        assetSymbol: "axlUSDC",
        assetName: "axlUSDC",
        minDepositAmt: 0.5,
        ibcDenom:
          "ibc/932D6003DA334ECBC5B23A071B4287D0A5CC97331197FE9F1C0689BA002A8421",
        fullDenomPath: "transfer/channel-293/uusdc",
        tokenAddress: "uusdc",
      },
      osmosis: {
        assetSymbol: "axlUSDC",
        assetName: "axlUSDC",
        minDepositAmt: 0.5,
        ibcDenom:
          "ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858",
        fullDenomPath: "transfer/channel-208/uusdc",
        tokenAddress: "uusdc",
      },
      juno: {
        assetSymbol: "axlUSDC",
        assetName: "axlUSDC",
        minDepositAmt: 0.5,
        ibcDenom:
          "ibc/EAC38D55372F38F1AFD68DF7FE9EF762DCF69F26520643CF3F9D292A738D8034",
        fullDenomPath: "transfer/channel-71/uusdc",
        tokenAddress: "uusdc",
      },
      crescent: {
        assetSymbol: "axlUSDC",
        assetName: "axlUSDC",
        minDepositAmt: 0.5,
        ibcDenom:
          "ibc/BFF0D3805B50D93E2FA5C0B2DDF7E0B30A631076CD80BC12A48C0E95404B4A41",
        fullDenomPath: "transfer/channel-4/uusdc",
        tokenAddress: "uusdc",
      },
    },
  },
  "weth-wei": {
    common_key: {
      devnet: "weth-wei",
      testnet: "weth-wei",
      mainnet: "weth-wei",
    },
    native_chain: "ethereum",
    fully_supported: true,
    decimals: 18,
    chain_aliases: {
      axelar: {
        assetSymbol: "WETH",
        assetName: "WETH",
        minDepositAmt: 0.0002,
        ibcDenom: "weth-wei",
        fullDenomPath: "weth-wei",
        tokenAddress: "weth-wei",
      },
      ethereum: {
        assetSymbol: "WETH",
        assetName: "WETH",
        minDepositAmt: 0.01,
        ibcDenom: "weth-wei",
        fullDenomPath: "weth-wei",
        tokenAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      },
      osmosis: {
        assetSymbol: "axlWETH",
        assetName: "axlWETH",
        minDepositAmt: 0.0002,
        ibcDenom:
          "ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5",
        fullDenomPath: "transfer/channel-208/weth-wei",
        tokenAddress: "weth-wei",
      },
      juno: {
        assetSymbol: "axlWETH",
        assetName: "axlWETH",
        minDepositAmt: 0.0002,
        ibcDenom:
          "ibc/95A45A81521EAFDBEDAEEB6DA975C02E55B414C95AD3CE50709272366A90CA17",
        fullDenomPath: "transfer/channel-71/weth-wei",
        tokenAddress: "weth-wei",
      },
      crescent: {
        assetSymbol: "axlWETH",
        assetName: "axlWETH",
        minDepositAmt: 0.0002,
        ibcDenom:
          "ibc/F1806958CA98757B91C3FA1573ECECD24F6FA3804F074A6977658914A49E65A3",
        fullDenomPath: "transfer/channel-4/weth-wei",
        tokenAddress: "weth-wei",
      },
    },
  },
  "dai-wei": {
    common_key: {
      devnet: "dai-wei",
      testnet: "dai-wei",
      mainnet: "dai-wei",
    },
    native_chain: "ethereum",
    fully_supported: true,
    decimals: 18,
    chain_aliases: {
      axelar: {
        assetSymbol: "DAI",
        assetName: "DAI",
        minDepositAmt: 0.5,
        ibcDenom: "dai-wei",
        fullDenomPath: "dai-wei",
        tokenAddress: "dai-wei",
      },
      moonbeam: {
        assetSymbol: "axlDAI",
        assetName: "axlDAI",
        minDepositAmt: 1,
        ibcDenom: "dai-wei",
        fullDenomPath: "dai-wei",
        tokenAddress: "0x14dF360966a1c4582d2b18EDbdae432EA0A27575",
      },
      fantom: {
        assetSymbol: "axlDAI",
        assetName: "axlDAI",
        minDepositAmt: 1,
        ibcDenom: "dai-wei",
        fullDenomPath: "dai-wei",
        tokenAddress: "0xD5d5350F42CB484036A1C1aF5F2DF77eAFadcAFF",
      },
      ethereum: {
        assetSymbol: "DAI",
        assetName: "DAI",
        minDepositAmt: 20,
        ibcDenom: "dai-wei",
        fullDenomPath: "dai-wei",
        tokenAddress: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      },
      avalanche: {
        assetSymbol: "axlDAI",
        assetName: "axlDAI",
        minDepositAmt: 1,
        ibcDenom: "dai-wei",
        fullDenomPath: "dai-wei",
        tokenAddress: "0xC5Fa5669E326DA8B2C35540257cD48811F40a36B",
      },
      polygon: {
        assetSymbol: "axlDAI",
        assetName: "axlDAI",
        minDepositAmt: 1,
        ibcDenom: "dai-wei",
        fullDenomPath: "dai-wei",
        tokenAddress: "0xDDc9E2891FA11a4CC5C223145e8d14B44f3077c9",
      },
      cosmoshub: {
        assetSymbol: "axlDAI",
        assetName: "axlDAI",
        minDepositAmt: 0.5,
        ibcDenom:
          "ibc/4A98C8AC2C35498162346F28EEBF3206CBEF81F44725FE62A3DB0CC10E88E695",
        fullDenomPath: "transfer/channel-293/dai-wei",
        tokenAddress: "dai-wei",
      },
      osmosis: {
        assetSymbol: "axlDAI",
        assetName: "axlDAI",
        minDepositAmt: 0.5,
        ibcDenom:
          "ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7",
        fullDenomPath: "transfer/channel-208/dai-wei",
        tokenAddress: "dai-wei",
      },
      juno: {
        assetSymbol: "axlDAI",
        assetName: "axlDAI",
        minDepositAmt: 0.5,
        ibcDenom:
          "ibc/171E8F6687D290D378678310F9F15D367DCD245BF06184532B703A92054A8A4F",
        fullDenomPath: "transfer/channel-71/dai-wei",
        tokenAddress: "dai-wei",
      },
    },
  },
  "dot-planck": {
    common_key: {
      devnet: "dot-planck",
      testnet: "dot-planck",
      mainnet: "dot-planck",
    },
    native_chain: "moonbeam",
    fully_supported: true,
    decimals: 10,
    chain_aliases: {
      axelar: {
        assetSymbol: "DOT",
        assetName: "DOT",
        minDepositAmt: 0.05,
        ibcDenom: "dot-planck",
        fullDenomPath: "dot-planck",
        tokenAddress: "dot-planck",
      },
      moonbeam: {
        assetSymbol: "DOT",
        assetName: "DOT",
        minDepositAmt: 0.1,
        ibcDenom: "dot-planck",
        fullDenomPath: "dot-planck",
        tokenAddress: "0xFfFFfFff1FcaCBd218EDc0EbA20Fc2308C778080",
      },
      osmosis: {
        assetSymbol: "axlDOT",
        assetName: "axlDOT",
        minDepositAmt: 0.05,
        ibcDenom:
          "ibc/3FF92D26B407FD61AE95D975712A7C319CDE28DE4D80BDC9978D935932B991D7",
        fullDenomPath: "transfer/channel-208/dot-planck",
        tokenAddress: "dot-planck",
      },
    },
  },
  "wmatic-wei": {
    common_key: {
      devnet: "wmatic-wei",
      testnet: "wmatic-wei",
      mainnet: "wmatic-wei",
    },
    native_chain: "polygon",
    fully_supported: true,
    decimals: 18,
    chain_aliases: {
      axelar: {
        assetSymbol: "WMATIC",
        assetName: "WMATIC",
        minDepositAmt: 0.8,
        ibcDenom: "wmatic-wei",
        fullDenomPath: "wmatic-wei",
        tokenAddress: "wmatic-wei",
      },
      polygon: {
        assetSymbol: "WMATIC",
        assetName: "WMATIC",
        minDepositAmt: 2,
        ibcDenom: "wmatic-wei",
        fullDenomPath: "wmatic-wei",
        tokenAddress: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
      },
      osmosis: {
        assetSymbol: "axlWMATIC",
        assetName: "axlWMATIC",
        minDepositAmt: 0.8,
        ibcDenom:
          "ibc/AB589511ED0DD5FA56171A39978AFBF1371DB986EC1C3526CE138A16377E39BB",
        fullDenomPath: "transfer/channel-208/wmatic-wei",
        tokenAddress: "wmatic-wei",
      },
    },
  },
  "wbtc-satoshi": {
    common_key: {
      devnet: "wbtc-satoshi",
      testnet: "wbtc-satoshi",
      mainnet: "wbtc-satoshi",
    },
    native_chain: "ethereum",
    fully_supported: true,
    decimals: 8,
    chain_aliases: {
      axelar: {
        assetSymbol: "WBTC",
        assetName: "WBTC",
        minDepositAmt: 0.00002,
        ibcDenom: "wbtc-satoshi",
        fullDenomPath: "wbtc-satoshi",
        tokenAddress: "wbtc-satoshi",
      },
      ethereum: {
        assetSymbol: "WBTC",
        assetName: "WBTC",
        minDepositAmt: 0.0007,
        ibcDenom: "wbtc-satoshi",
        fullDenomPath: "wbtc-satoshi",
        tokenAddress: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
      },
      osmosis: {
        assetSymbol: "axlWBTC",
        assetName: "axlWBTC",
        minDepositAmt: 0.00002,
        ibcDenom:
          "ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F",
        fullDenomPath: "transfer/channel-208/wbtc-satoshi",
        tokenAddress: "wbtc-satoshi",
      },
      juno: {
        assetSymbol: "axlWBTC",
        assetName: "axlWBTC",
        minDepositAmt: 0.00002,
        ibcDenom:
          "ibc/5EF597EA4E863132BFD3E051AC6BAA0175F00913D3256A41F11DC425C39527D6",
        fullDenomPath: "transfer/channel-71/wbtc-satoshi",
        tokenAddress: "wbtc-satoshi",
      },
    },
  },
  uatom: {
    common_key: {
      devnet: "uatom",
      testnet: "uatom",
      mainnet: "uatom",
    },
    native_chain: "cosmoshub",
    fully_supported: true,
    decimals: 6,
    chain_aliases: {
      axelar: {
        assetSymbol: "ATOM",
        assetName: "ATOM",
        minDepositAmt: 0.05,
        ibcDenom:
          "ibc/9117A26BA81E29FA4F78F57DC2BD90CD3D26848101BA880445F119B22A1E254E",
        fullDenomPath: "transfer/channel-2/uatom",
        tokenAddress: "uatom",
      },
      moonbeam: {
        assetSymbol: "axlATOM",
        assetName: "axlATOM",
        minDepositAmt: 0.1,
        ibcDenom: "uatom",
        fullDenomPath: "uatom",
        tokenAddress: "0x27292cf0016E5dF1d8b37306B2A98588aCbD6fCA",
      },
      fantom: {
        assetSymbol: "axlATOM",
        assetName: "axlATOM",
        minDepositAmt: 0.1,
        ibcDenom: "uatom",
        fullDenomPath: "uatom",
        tokenAddress: "0x3bB68cb55Fc9C22511467c18E42D14E8c959c4dA",
      },
      ethereum: {
        assetSymbol: "axlATOM",
        assetName: "axlATOM",
        minDepositAmt: 2,
        ibcDenom: "uatom",
        fullDenomPath: "uatom",
        tokenAddress: "0x27292cf0016E5dF1d8b37306B2A98588aCbD6fCA",
      },
      avalanche: {
        assetSymbol: "axlATOM",
        assetName: "axlATOM",
        minDepositAmt: 0.1,
        ibcDenom: "uatom",
        fullDenomPath: "uatom",
        tokenAddress: "0x80D18b1c9Ab0c9B5D6A6d5173575417457d00a12",
      },
      polygon: {
        assetSymbol: "axlATOM",
        assetName: "axlATOM",
        minDepositAmt: 0.1,
        ibcDenom: "uatom",
        fullDenomPath: "uatom",
        tokenAddress: "0x33F8a5029264BcFB66e39157aF3FeA3E2a8a5067",
      },
      cosmoshub: {
        assetSymbol: "ATOM",
        assetName: "ATOM",
        minDepositAmt: 0.05,
        ibcDenom: "uatom",
        fullDenomPath: "uatom",
        tokenAddress: "uatom",
      },
    },
  },
  uusdt: {
    common_key: {
      devnet: "uusdt",
      testnet: "uusdt",
      mainnet: "uusdt",
    },
    native_chain: "ethereum",
    fully_supported: true,
    decimals: 6,
    chain_aliases: {
      axelar: {
        assetSymbol: "USDT",
        assetName: "USDT",
        minDepositAmt: 0.5,
        ibcDenom: "uusdt",
        fullDenomPath: "uusdt",
        tokenAddress: "uusdt",
      },
      moonbeam: {
        assetSymbol: "axlUSDT",
        assetName: "axlUSDT",
        minDepositAmt: 1,
        ibcDenom: "uusdt",
        fullDenomPath: "uusdt",
        tokenAddress: "0xDFd74aF792bC6D45D1803F425CE62Dd16f8Ae038",
      },
      fantom: {
        assetSymbol: "axlUSDT",
        assetName: "axlUSDT",
        minDepositAmt: 1,
        ibcDenom: "uusdt",
        fullDenomPath: "uusdt",
        tokenAddress: "0xd226392C23fb3476274ED6759D4a478db3197d82",
      },
      ethereum: {
        assetSymbol: "USDT",
        assetName: "USDT",
        minDepositAmt: 20,
        ibcDenom: "uusdt",
        fullDenomPath: "uusdt",
        tokenAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      },
      avalanche: {
        assetSymbol: "axlUSDT",
        assetName: "axlUSDT",
        minDepositAmt: 1,
        ibcDenom: "uusdt",
        fullDenomPath: "uusdt",
        tokenAddress: "0xF976ba91b6bb3468C91E4f02E68B37bc64a57e66",
      },
      polygon: {
        assetSymbol: "axlUSDT",
        assetName: "axlUSDT",
        minDepositAmt: 1,
        ibcDenom: "uusdt",
        fullDenomPath: "uusdt",
        tokenAddress: "0xCeED2671d8634e3ee65000EDbbEe66139b132fBf",
      },
      cosmoshub: {
        assetSymbol: "axlUSDT",
        assetName: "axlUSDT",
        minDepositAmt: 0.5,
        ibcDenom:
          "ibc/5662412372381F56C5F83A0404DC7209E5143ABD32EF67B5705DBE8D9C2BF001",
        fullDenomPath: "transfer/channel-293/uusdt",
        tokenAddress: "uusdt",
      },
      osmosis: {
        assetSymbol: "axlUSDT",
        assetName: "axlUSDT",
        minDepositAmt: 0.5,
        ibcDenom:
          "ibc/8242AD24008032E457D2E12D46588FD39FB54FB29680C6C7663D296B383C37C4",
        fullDenomPath: "transfer/channel-208/uusdt",
        tokenAddress: "uusdt",
      },
      juno: {
        assetSymbol: "axlUSDT",
        assetName: "axlUSDT",
        minDepositAmt: 0.5,
        ibcDenom:
          "ibc/B22D08F0E3D08968FB3CBEE2C1E993581A99AAAA60D0490C1AF7DCE567D5FDDA",
        fullDenomPath: "transfer/channel-71/uusdt",
        tokenAddress: "uusdt",
      },
    },
  },
  ungm: {
    common_key: {
      devnet: "ungm",
      testnet: "ungm",
      mainnet: "ungm",
    },
    native_chain: "e-money",
    fully_supported: true,
    decimals: 6,
    chain_aliases: {
      axelar: {
        assetSymbol: "NGM",
        assetName: "NGM",
        minDepositAmt: 0.5,
        ibcDenom:
          "ibc/ACD9A665DB6C19EC1D057A43D468E324CA9FB9C5ABF82235815F7B7745A15B80",
        fullDenomPath: "transfer/channel-6/ungm",
        tokenAddress: "ungm",
      },
      moonbeam: {
        assetSymbol: "NGM",
        assetName: "NGM",
        minDepositAmt: 1,
        ibcDenom: "ungm",
        fullDenomPath: "ungm",
        tokenAddress: "0x08fe7A0db575c2a08d76EEcA71763E48C6e60F45",
      },
      fantom: {
        assetSymbol: "NGM",
        assetName: "NGM",
        minDepositAmt: 1,
        ibcDenom: "ungm",
        fullDenomPath: "ungm",
        tokenAddress: "0xE549Caf5f0c3e80b8738CB03ae4fBb4c15b0DD86",
      },
      ethereum: {
        assetSymbol: "NGM",
        assetName: "NGM",
        minDepositAmt: 20,
        ibcDenom: "ungm",
        fullDenomPath: "ungm",
        tokenAddress: "0x08fe7A0db575c2a08d76EEcA71763E48C6e60F45",
      },
      avalanche: {
        assetSymbol: "NGM",
        assetName: "NGM",
        minDepositAmt: 1,
        ibcDenom: "ungm",
        fullDenomPath: "ungm",
        tokenAddress: "0x5A44422beaAA38031f57720d88697105be6970BE",
      },
      polygon: {
        assetSymbol: "NGM",
        assetName: "NGM",
        minDepositAmt: 1,
        ibcDenom: "ungm",
        fullDenomPath: "ungm",
        tokenAddress: "0xC8d5A4E04387EBdaa2c0FBB6858F246116431e9f",
      },
      "e-money": {
        assetSymbol: "NGM",
        assetName: "NGM",
        minDepositAmt: 0.5,
        ibcDenom: "ungm",
        fullDenomPath: "ungm",
        tokenAddress: "ungm",
      },
    },
  },
  eeur: {
    common_key: {
      devnet: "eeur",
      testnet: "eeur",
      mainnet: "eeur",
    },
    native_chain: "e-money",
    fully_supported: true,
    decimals: 6,
    chain_aliases: {
      axelar: {
        assetSymbol: "EEUR",
        assetName: "EEUR",
        minDepositAmt: 0.5,
        ibcDenom:
          "ibc/373EF14936B38AC8F8A7E7024C0FB7099369FDDFDA3CDA9EFA73684B16249B64",
        fullDenomPath: "transfer/channel-6/eeur",
        tokenAddress: "eeur",
      },
      moonbeam: {
        assetSymbol: "EEUR",
        assetName: "EEUR",
        minDepositAmt: 1,
        ibcDenom: "eeur",
        fullDenomPath: "eeur",
        tokenAddress: "0xDd26a5c8Ae5b60Bb14aEcED892A052CA48A2e915",
      },
      fantom: {
        assetSymbol: "EEUR",
        assetName: "EEUR",
        minDepositAmt: 1,
        ibcDenom: "eeur",
        fullDenomPath: "eeur",
        tokenAddress: "0x4000aB030f3615d1616b4C71E7129BbE3f1f9C55",
      },
      ethereum: {
        assetSymbol: "EEUR",
        assetName: "EEUR",
        minDepositAmt: 20,
        ibcDenom: "eeur",
        fullDenomPath: "eeur",
        tokenAddress: "0xDd26a5c8Ae5b60Bb14aEcED892A052CA48A2e915",
      },
      avalanche: {
        assetSymbol: "EEUR",
        assetName: "EEUR",
        minDepositAmt: 1,
        ibcDenom: "eeur",
        fullDenomPath: "eeur",
        tokenAddress: "0xE1d70994Be12b73E76889412b284A8F19b0DE56d",
      },
      polygon: {
        assetSymbol: "EEUR",
        assetName: "EEUR",
        minDepositAmt: 1,
        ibcDenom: "eeur",
        fullDenomPath: "eeur",
        tokenAddress: "0x8CD51880C0a5dbde37dDdFce8d5B772Fc9007495",
      },
      "e-money": {
        assetSymbol: "EEUR",
        assetName: "EEUR",
        minDepositAmt: 0.5,
        ibcDenom: "eeur",
        fullDenomPath: "eeur",
        tokenAddress: "eeur",
      },
    },
  },
  "rai-wei": {
    common_key: {
      devnet: "rai-wei",
      testnet: "rai-wei",
      mainnet: "rai-wei",
    },
    native_chain: "ethereum",
    fully_supported: true,
    decimals: 18,
    chain_aliases: {
      axelar: {
        assetSymbol: "RAI",
        assetName: "RAI",
        minDepositAmt: 0.2,
        ibcDenom: "rai-wei",
        fullDenomPath: "rai-wei",
        tokenAddress: "rai-wei",
      },
      ethereum: {
        assetSymbol: "RAI",
        assetName: "RAI",
        minDepositAmt: 7,
        ibcDenom: "rai-wei",
        fullDenomPath: "rai-wei",
        tokenAddress: "0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919",
      },
      osmosis: {
        assetSymbol: "axlRAI",
        assetName: "axlRAI",
        minDepositAmt: 0.2,
        ibcDenom:
          "ibc/BD796662F8825327D41C96355DF62045A5BA225BAE31C0A86289B9D88ED3F44E",
        fullDenomPath: "transfer/channel-208/rai-wei",
        tokenAddress: "rai-wei",
      },
    },
  },
  "link-wei": {
    common_key: {
      devnet: "link-wei",
      testnet: "link-wei",
      mainnet: "link-wei",
    },
    native_chain: "ethereum",
    fully_supported: true,
    decimals: 18,
    chain_aliases: {
      axelar: {
        assetSymbol: "LINK",
        assetName: "LINK",
        minDepositAmt: 0.07,
        ibcDenom: "link-wei",
        fullDenomPath: "link-wei",
        tokenAddress: "link-wei",
      },
      ethereum: {
        assetSymbol: "LINK",
        assetName: "LINK",
        minDepositAmt: 3,
        ibcDenom: "link-wei",
        fullDenomPath: "link-wei",
        tokenAddress: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
      },
      osmosis: {
        assetSymbol: "axlLINK",
        assetName: "axlLINK",
        minDepositAmt: 0.07,
        ibcDenom:
          "ibc/D3327A763C23F01EC43D1F0DB3CEFEC390C362569B6FD191F40A5192F8960049",
        fullDenomPath: "transfer/channel-208/link-wei",
        tokenAddress: "link-wei",
      },
    },
  },
  "aave-wei": {
    common_key: {
      devnet: "aave-wei",
      testnet: "aave-wei",
      mainnet: "aave-wei",
    },
    native_chain: "ethereum",
    fully_supported: true,
    decimals: 18,
    chain_aliases: {
      axelar: {
        assetSymbol: "AAVE",
        assetName: "AAVE",
        minDepositAmt: 0.005,
        ibcDenom: "aave-wei",
        fullDenomPath: "aave-wei",
        tokenAddress: "aave-wei",
      },
      ethereum: {
        assetSymbol: "AAVE",
        assetName: "AAVE",
        minDepositAmt: 0.2,
        ibcDenom: "aave-wei",
        fullDenomPath: "aave-wei",
        tokenAddress: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
      },
      osmosis: {
        assetSymbol: "axlAAVE",
        assetName: "axlAAVE",
        minDepositAmt: 0.005,
        ibcDenom:
          "ibc/384E5DD50BDE042E1AAF51F312B55F08F95BC985C503880189258B4D9374CBBE",
        fullDenomPath: "transfer/channel-208/aave-wei",
        tokenAddress: "aave-wei",
      },
    },
  },
  "steth-wei": {
    common_key: {
      devnet: "steth-wei",
      testnet: "steth-wei",
      mainnet: "steth-wei",
    },
    native_chain: "ethereum",
    fully_supported: true,
    decimals: 18,
    chain_aliases: {
      axelar: {
        assetSymbol: "stETH",
        assetName: "stETH",
        minDepositAmt: 0.0002,
        ibcDenom: "steth-wei",
        fullDenomPath: "steth-wei",
        tokenAddress: "steth-wei",
      },
      ethereum: {
        assetSymbol: "stETH",
        assetName: "stETH",
        minDepositAmt: 0.01,
        ibcDenom: "steth-wei",
        fullDenomPath: "steth-wei",
        tokenAddress: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
      },
      osmosis: {
        assetSymbol: "axlstETH",
        assetName: "axlstETH",
        minDepositAmt: 0.0002,
        ibcDenom:
          "ibc/129F401C84FCD5B0183472ED83745193B0B3A69855635A56B9056EEF8D3C241C",
        fullDenomPath: "transfer/channel-208/steth-wei",
        tokenAddress: "steth-wei",
      },
    },
  },
  "frax-wei": {
    common_key: {
      devnet: "frax-wei",
      testnet: "frax-wei",
      mainnet: "frax-wei",
    },
    native_chain: "ethereum",
    fully_supported: true,
    decimals: 18,
    chain_aliases: {
      axelar: {
        assetSymbol: "FRAX",
        assetName: "FRAX",
        minDepositAmt: 0.5,
        ibcDenom: "frax-wei",
        fullDenomPath: "frax-wei",
        tokenAddress: "frax-wei",
      },
      moonbeam: {
        assetSymbol: "axlFRAX",
        assetName: "axlFRAX",
        minDepositAmt: 1,
        ibcDenom: "frax-wei",
        fullDenomPath: "frax-wei",
        tokenAddress: "0x61C82805453a989E99B544DFB7031902e9bac448",
      },
      fantom: {
        assetSymbol: "axlFRAX",
        assetName: "axlFRAX",
        minDepositAmt: 1,
        ibcDenom: "frax-wei",
        fullDenomPath: "frax-wei",
        tokenAddress: "0xbE71e68fB36d14565F523C9c36ab2A8Be0c26D55",
      },
      ethereum: {
        assetSymbol: "FRAX",
        assetName: "FRAX",
        minDepositAmt: 20,
        ibcDenom: "frax-wei",
        fullDenomPath: "frax-wei",
        tokenAddress: "0x853d955aCEf822Db058eb8505911ED77F175b99e",
      },
      avalanche: {
        assetSymbol: "axlFRAX",
        assetName: "axlFRAX",
        minDepositAmt: 1,
        ibcDenom: "frax-wei",
        fullDenomPath: "frax-wei",
        tokenAddress: "0x4914886dBb8aAd7A7456D471EAab10b06d42348D",
      },
      polygon: {
        assetSymbol: "axlFRAX",
        assetName: "axlFRAX",
        minDepositAmt: 1,
        ibcDenom: "frax-wei",
        fullDenomPath: "frax-wei",
        tokenAddress: "0x53Adc464b488bE8C5d7269B9ABBCe8bA74195C3a",
      },
      cosmoshub: {
        assetSymbol: "axlFRAX",
        assetName: "axlFRAX",
        minDepositAmt: 0.5,
        ibcDenom:
          "ibc/3792246C7C422C037C603C955F8383B4E32E7555D693344F9A029A67FE221C57",
        fullDenomPath: "transfer/channel-293/frax-wei",
        tokenAddress: "frax-wei",
      },
      osmosis: {
        assetSymbol: "axlFRAX",
        assetName: "axlFRAX",
        minDepositAmt: 0.5,
        ibcDenom:
          "ibc/0E43EDE2E2A3AFA36D0CD38BDDC0B49FECA64FA426A82E102F304E430ECF46EE",
        fullDenomPath: "transfer/channel-208/frax-wei",
        tokenAddress: "frax-wei",
      },
      juno: {
        assetSymbol: "axlFRAX",
        assetName: "axlFRAX",
        minDepositAmt: 0.5,
        ibcDenom:
          "ibc/1CE15165C83F70C7DB18B19C417321B02512A85BCB9FB8E553FC10070D122036",
        fullDenomPath: "transfer/channel-71/frax-wei",
        tokenAddress: "frax-wei",
      },
    },
  },
  "ape-wei": {
    common_key: {
      devnet: "ape-wei",
      testnet: "ape-wei",
      mainnet: "ape-wei",
    },
    native_chain: "ethereum",
    fully_supported: true,
    decimals: 18,
    chain_aliases: {
      axelar: {
        assetSymbol: "APE",
        assetName: "APE",
        minDepositAmt: 0.07,
        ibcDenom: "ape-wei",
        fullDenomPath: "ape-wei",
        tokenAddress: "ape-wei",
      },
      ethereum: {
        assetSymbol: "APE",
        assetName: "APE",
        minDepositAmt: 3,
        ibcDenom: "ape-wei",
        fullDenomPath: "ape-wei",
        tokenAddress: "0x4d224452801ACEd8B2F0aebE155379bb5D594381",
      },
      osmosis: {
        assetSymbol: "axlAPE",
        assetName: "axlAPE",
        minDepositAmt: 0.07,
        ibcDenom:
          "ibc/F83CC6471DA4D4B508F437244F10B9E4C68975344E551A2DEB6B8617AB08F0D4",
        fullDenomPath: "transfer/channel-208/ape-wei",
        tokenAddress: "ape-wei",
      },
    },
  },
  "uni-wei": {
    common_key: {
      devnet: "uni-wei",
      testnet: "uni-wei",
      mainnet: "uni-wei",
    },
    native_chain: "ethereum",
    fully_supported: true,
    decimals: 18,
    chain_aliases: {
      axelar: {
        assetSymbol: "UNI",
        assetName: "UNI",
        minDepositAmt: 0.09,
        ibcDenom: "uni-wei",
        fullDenomPath: "uni-wei",
        tokenAddress: "uni-wei",
      },
      ethereum: {
        assetSymbol: "UNI",
        assetName: "UNI",
        minDepositAmt: 4,
        ibcDenom: "uni-wei",
        fullDenomPath: "uni-wei",
        tokenAddress: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
      },
      osmosis: {
        assetSymbol: "axlUNI",
        assetName: "axlUNI",
        minDepositAmt: 0.09,
        ibcDenom:
          "ibc/AE2719773D6FCDD05AC17B1ED63F672F5F9D84144A61965F348C86C2A83AD161",
        fullDenomPath: "transfer/channel-208/uni-wei",
        tokenAddress: "uni-wei",
      },
    },
  },
  "shib-wei": {
    common_key: {
      devnet: "shib-wei",
      testnet: "shib-wei",
      mainnet: "shib-wei",
    },
    native_chain: "ethereum",
    fully_supported: true,
    decimals: 18,
    chain_aliases: {
      axelar: {
        assetSymbol: "SHIB",
        assetName: "SHIB",
        minDepositAmt: 40000,
        ibcDenom: "shib-wei",
        fullDenomPath: "shib-wei",
        tokenAddress: "shib-wei",
      },
      ethereum: {
        assetSymbol: "SHIB",
        assetName: "SHIB",
        minDepositAmt: 1000000,
        ibcDenom: "shib-wei",
        fullDenomPath: "shib-wei",
        tokenAddress: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
      },
      osmosis: {
        assetSymbol: "axlSHIB",
        assetName: "axlSHIB",
        minDepositAmt: 40000,
        ibcDenom:
          "ibc/19305E20681911F14D1FB275E538CDE524C3BF88CF9AE5D5F78F4D4DA05E85B2",
        fullDenomPath: "transfer/channel-208/shib-wei",
        tokenAddress: "shib-wei",
      },
    },
  },
  "axs-wei": {
    common_key: {
      devnet: "axs-wei",
      testnet: "axs-wei",
      mainnet: "axs-wei",
    },
    native_chain: "ethereum",
    fully_supported: true,
    decimals: 18,
    chain_aliases: {
      axelar: {
        assetSymbol: "AXS",
        assetName: "AXS",
        minDepositAmt: 0.02,
        ibcDenom: "axs-wei",
        fullDenomPath: "axs-wei",
        tokenAddress: "axs-wei",
      },
      ethereum: {
        assetSymbol: "AXS",
        assetName: "AXS",
        minDepositAmt: 0.8,
        ibcDenom: "axs-wei",
        fullDenomPath: "axs-wei",
        tokenAddress: "0xBB0E17EF65F82Ab018d8EDd776e8DD940327B28b",
      },
      osmosis: {
        assetSymbol: "axlAXS",
        assetName: "axlAXS",
        minDepositAmt: 0.02,
        ibcDenom:
          "ibc/6C0CB8653012DC2BC1820FD0B6B3AFF8A07D18630BDAEE066FEFB2D92F477C24",
        fullDenomPath: "transfer/channel-208/axs-wei",
        tokenAddress: "axs-wei",
      },
    },
  },
  "xcn-wei": {
    common_key: {
      devnet: "xcn-wei",
      testnet: "xcn-wei",
      mainnet: "xcn-wei",
    },
    native_chain: "ethereum",
    fully_supported: true,
    decimals: 18,
    chain_aliases: {
      axelar: {
        assetSymbol: "XCN",
        assetName: "XCN",
        minDepositAmt: 3,
        ibcDenom: "xcn-wei",
        fullDenomPath: "xcn-wei",
        tokenAddress: "xcn-wei",
      },
      ethereum: {
        assetSymbol: "XCN",
        assetName: "XCN",
        minDepositAmt: 100,
        ibcDenom: "xcn-wei",
        fullDenomPath: "xcn-wei",
        tokenAddress: "0xA2cd3D43c775978A96BdBf12d733D5A1ED94fb18",
      },
      osmosis: {
        assetSymbol: "axlXCN",
        assetName: "axlXCN",
        minDepositAmt: 3,
        ibcDenom:
          "ibc/B901BEC1B71D0573E6EE874FEC39E2DF4C2BDB1DB74CB3DA0A9CACC4A435B0EC",
        fullDenomPath: "transfer/channel-208/xcn-wei",
        tokenAddress: "xcn-wei",
      },
    },
  },
  "mkr-wei": {
    common_key: {
      devnet: "mkr-wei",
      testnet: "mkr-wei",
      mainnet: "mkr-wei",
    },
    native_chain: "ethereum",
    fully_supported: true,
    decimals: 18,
    chain_aliases: {
      axelar: {
        assetSymbol: "MKR",
        assetName: "MKR",
        minDepositAmt: 0.0004,
        ibcDenom: "mkr-wei",
        fullDenomPath: "mkr-wei",
        tokenAddress: "mkr-wei",
      },
      ethereum: {
        assetSymbol: "MKR",
        assetName: "MKR",
        minDepositAmt: 0.02,
        ibcDenom: "mkr-wei",
        fullDenomPath: "mkr-wei",
        tokenAddress: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
      },
      osmosis: {
        assetSymbol: "axlMKR",
        assetName: "axlMKR",
        minDepositAmt: 0.0004,
        ibcDenom:
          "ibc/D27DDDF34BB47E5D5A570742CC667DE53277867116CCCA341F27785E899A70F3",
        fullDenomPath: "transfer/channel-208/mkr-wei",
        tokenAddress: "mkr-wei",
      },
    },
  },
};
