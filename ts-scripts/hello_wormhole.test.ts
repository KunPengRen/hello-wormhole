import {describe, expect, test} from "@jest/globals";
import { ethers } from "ethers";
import {
    getHelloWormhole,
    getChain
} from "./utils"
import {
    getStatus
} from "./getStatus"
import {
    CHAIN_ID_TO_NAME
} from "@certusone/wormhole-sdk"

const sourceChain = 2;
const targetChain = 4;

// describe("Hello Wormhole Integration Tests on Testnet", () => {
//     test("Tests the sending of a random greeting", async () => {
        
//         const arbitraryGreeting = `Hello Wormhole ${new Date().getTime()}`;
//         const sourceHelloWormholeContract = getHelloWormhole(sourceChain);
//         const targetHelloWormholeContract = getHelloWormhole(targetChain);
//         console.log(`Reading greeting`);
//         const readGreeting1 = await targetHelloWormholeContract.latestGreeting();
//         console.log(`Latest greeting: ${readGreeting1}`);
        
//         // const cost = await sourceHelloWormholeContract.quoteCrossChainGreeting(targetChain);
//         // console.log(`Cost of sending the greeting gas: ${cost}`);
//         // console.log(`Cost of sending the greeting: ${ethers.utils.formatEther(cost)} testnet ETH`);
//          const cost = ethers.utils.parseEther("0.12");
//         console.log(`Sending greeting: ${arbitraryGreeting}`);
//         const tx = await sourceHelloWormholeContract.sendCrossChainGreeting(targetChain, targetHelloWormholeContract.address, arbitraryGreeting, {value: cost});
//         console.log(`targetHelloWormholeContract.address: ${targetHelloWormholeContract.address}`);
//         console.log(`Transaction hash: ${tx.hash}`);
//         await tx.wait();
//         await new Promise(resolve => setTimeout(resolve, 1000*5));


//         console.log(`Reading greeting`);
//         const readGreeting = await targetHelloWormholeContract.latestGreeting();
//         console.log(`Latest greeting: ${readGreeting}`);
//         expect(readGreeting).toBe(arbitraryGreeting);

//     }, 60*1000) // timeout
// })

describe("Check greeting on target chain", () => {
    test("Tests the reading of a greeting", async () => {
        const targetHelloWormholeContract = getHelloWormhole(targetChain);
        console.log(`Reading greeting`);
        const readGreeting = await targetHelloWormholeContract.latestGreeting();
        console.log(`Latest greeting: ${readGreeting}`);
    }, 60*1000) // timeout
})