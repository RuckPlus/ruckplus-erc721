import { ethers } from "hardhat";

import dayjs from "dayjs";
dayjs.extend(require('dayjs/plugin/timezone'));
dayjs.extend(require('dayjs/plugin/utc'));

async function main() {
  // const now = dayjs();

  const stageZeroStartTime = 0;
  const stageFirstStartTime = 0;
  const stageSecondStartTime = 0;
  const stageThirdStartTime = 0;

  const RuckNFT = await ethers.getContractFactory("RuckNFT");
  const contract = await RuckNFT.deploy(
    stageZeroStartTime,
    stageFirstStartTime,
    stageSecondStartTime,
    stageThirdStartTime
  );

  await contract.deployed();

  console.log(`Deployed to ${contract.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
