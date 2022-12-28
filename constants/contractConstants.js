import { ethers } from "ethers";
import lensAbi from "../lensAbi.json";

export const networkConfig = {
  137: {
    freeCollectModule: "0x23b9467334bEb345aAa6fd1545538F3d54436e96",
    patrickProfileId: "34460",
    followerOnlyReferenceModule: "0x17317F96f0C7a845FFe78c60B10aB15789b57Aaa",
    lensProtocol: "0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d",
  },
};

export const stablecoinArticleURI =
  "ipfs://QmSoEgRJX3o4t8MzBYKyGa3v1WwgqyPswU14FDPoDjn85u";
export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export const TRUE_BYTES =
  "0x0000000000000000000000000000000000000000000000000000000000000001";

// // We could do some stuff to get the correct address based on the network... but later
// export const lensHub = new ethers.Contract(
//   NetworkConfig[137].lensProtocol,
//   lensAbi
// );

// cast abi-encode "post((uint256,string,address,bytes,address,bytes))" "(34460,ipfs://QmSoEgRJX3o4t8MzBYKyGa3v1WwgqyPswU14FDPoDjn85u,0x23b9467334bEb345aAa6fd1545538F3d54436e96,0x0000000000000000000000000000000000000000000000000000000000000001,0x17317F96f0C7a845FFe78c60B10aB15789b57Aaa,0x0000000000000000000000000000000000000000000000000000000000000001)"

//{"profileId":"34460","contentURI":"ipfs://QmRzruXWYVWRVjhYVpwnmHNKonp6a3HYhqvLvvZceeicUY","collectModule":"0x23b9467334bEb345aAa6fd1545538F3d54436e96","collectModuleInitData":"0x0000000000000000000000000000000000000000000000000000000000000001","referenceModule":"0x17317F96f0C7a845FFe78c60B10aB15789b57Aaa","referenceModuleInitData":"0x0000000000000000000000000000000000000000000000000000000000000001"}

// This will give you the data encoded in hex for calling the lens protocol contract

// 0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000869c00000000000000000000000000000000000000000000000000000000000000c000000000000000000000000023b9467334beb345aaa6fd1545538f3d54436e96000000000000000000000000000000000000000000000000000000000000012000000000000000000000000017317f96f0c7a845ffe78c60b10ab15789b57aaa00000000000000000000000000000000000000000000000000000000000001600000000000000000000000000000000000000000000000000000000000000035697066733a2f2f516d536f4567524a58336f3474384d7a42594b79476133763157776771795073775531344644506f446a6e38357500000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000
// 0x963ff1410000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000869c00000000000000000000000000000000000000000000000000000000000000c000000000000000000000000023b9467334beb345aaa6fd1545538f3d54436e96000000000000000000000000000000000000000000000000000000000000012000000000000000000000000017317f96f0c7a845ffe78c60b10ab15789b57aaa00000000000000000000000000000000000000000000000000000000000001600000000000000000000000000000000000000000000000000000000000000035697066733a2f2f516d536f4567524a58336f3474384d7a42594b79476133763157776771795073775531344644506f446a6e38357500000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000

//raw input
//0x963ff1410000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000869c00000000000000000000000000000000000000000000000000000000000000c000000000000000000000000023b9467334beb345aaa6fd1545538f3d54436e960000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001600000000000000000000000000000000000000000000000000000000000000035697066733a2f2f516d536f4567524a58336f3474384d7a42594b79476133763157776771795073775531344644506f446a6e3835750000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000

//0x963ff1410000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000869c00000000000000000000000000000000000000000000000000000000000000c000000000000000000000000023b9467334beb345aaa6fd1545538f3d54436e96000000000000000000000000000000000000000000000000000000000000012000000000000000000000000017317f96f0c7a845ffe78c60b10ab15789b57aaa00000000000000000000000000000000000000000000000000000000000001600000000000000000000000000000000000000000000000000000000000000035697066733a2f2f516d536f4567524a58336f3474384d7a42594b79476133763157776771795073775531344644506f446a6e38357500000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000001
