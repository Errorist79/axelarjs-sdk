import { AssetTransferObject } from "../../../src";
import { GetDepositAddressPayload } from "../../../src/libs/types";

export const getTransferPayload = (
  sig: string,
  publicAddress: string,
  destAddress: string
): AssetTransferObject => {
  return {
    signature: sig,
    publicAddr: publicAddress,
    sourceChainInfo: {
      chainSymbol: "Terra",
      chainName: "Terra",
      estimatedWaitTime: 5,
      fullySupported: true,
      txFeeInPercent: 0.1,
      module: "axelarnet",
      chainIdentifier: {
        devnet: "terra",
        testnet: "terra",
        mainnet: "terra",
      },
    },
    selectedSourceAsset: {
      assetSymbol: "UST",
      assetName: "UST",
      minDepositAmt: 0.05,
      common_key: "uusd",
      native_chain: "terra",
      decimals: 6,
      fullySupported: true,
    },
    destinationChainInfo: {
      chainSymbol: "AVAX",
      chainName: "Avalanche",
      estimatedWaitTime: 5,
      fullySupported: true,
      txFeeInPercent: 0.1,
      module: "evm",
      confirmLevel: 12,
      chainIdentifier: {
        devnet: "avalanche",
        testnet: "avalanche",
        mainnet: "avalanche",
      },
    },
    selectedDestinationAsset: {
      assetAddress: destAddress,
      assetSymbol: "UST",
      common_key: "uusd",
    },
    transactionTraceId: "0x",
  };
};

export const getDepositPayload = (
  destAddress: string
): GetDepositAddressPayload => {
  return {
    sourceChainInfo: {
      chainSymbol: "Terra",
      chainName: "Terra",
      estimatedWaitTime: 5,
      fullySupported: true,
      txFeeInPercent: 0.1,
      module: "axelarnet",
      chainIdentifier: {
        devnet: "terra",
        testnet: "terra",
        mainnet: "terra",
      },
    },
    selectedSourceAsset: {
      assetSymbol: "UST",
      assetName: "UST",
      minDepositAmt: 0.05,
      common_key: "uusd",
      native_chain: "terra",
      decimals: 6,
      fullySupported: true,
    },
    destinationChainInfo: {
      chainSymbol: "AVAX",
      chainName: "Avalanche",
      estimatedWaitTime: 5,
      fullySupported: true,
      txFeeInPercent: 0.1,
      module: "evm",
      confirmLevel: 12,
      chainIdentifier: {
        devnet: "avalanche",
        testnet: "avalanche",
        mainnet: "avalanche",
      },
    },
    selectedDestinationAsset: {
      assetAddress: destAddress,
      assetSymbol: "UST",
      common_key: "uusd",
    },
  };
};
