import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-verify";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.26",
  networks: {
    hardhat: {
    },
    // Add other networks as needed
    hoodi: {
      url: "https://rpc.hoodi.ethpandaops.io",
      accounts: [process.env.PRIVATE_KEY ?? ""],
      chainId: 560048,
      timeout: 60000
    },
    sepolia: {
      url: "https://ethereum-sepolia-rpc.publicnode.com",
      accounts: [process.env.PRIVATE_KEY ?? ""],
      chainId: 11155111,
    }
  },
  sourcify: {
    // Disabled by default
    // Doesn't need an API key
    enabled: true
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.ETHERSCAN_API_KEY ?? "",
    },
    enabled: true,
  },
};

export default config; 