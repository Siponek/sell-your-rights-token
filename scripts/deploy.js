async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const TokenFactory = await ethers.getContractFactory("Selling_Your_Rights_Token");
  const token = await TokenFactory.deploy(deployer.address); // Passing the deployer's address as the initial owner

  console.log("Token address:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
