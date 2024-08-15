import { Keypair } from "@solana/web3.js";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

import dotenv from "dotenv";
dotenv.config();
const keypair = Keypair.generate();

// making the keypair
// console.log(`The public key is: `, keypair.publicKey.toBase58());
// console.log(`The secret key is: `, keypair.secretKey);
// console.log(`✅ Finished!`);
console.log(process.env.NAME);

// getting the keys from .env
console.log(process.env.SECRET_KEY);
const generatedkeypair = Keypair.fromSecretKey(
  Uint8Array.from(JSON.parse(process.env.SECRET_KEY!)),
);

console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`,
  generatedkeypair,
);
