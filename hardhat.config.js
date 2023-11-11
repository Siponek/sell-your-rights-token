// require("@nomicfoundation/hardhat-toolbox");
// require('@openzeppelin/hardhat-upgrades');
// require("@openzeppelin/contracts")
// require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-ethers")
require('@openzeppelin/hardhat-upgrades');
require("@nomicfoundation/hardhat-verify");
require("dotenv").config();

const { API_URL, PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: API_URL, // Your API URL from a service like Infura or Alchemy
      accounts: [PRIVATE_KEY] // Your private key from MetaMask
      
    }
  }
};
