const express = require('express');
let BlockChain = require('./blockchain');

let blockchain = new BlockChain();

let hash = require('object-hash');

let PROFF = 1560;

let validProof = (proof) => {
    let guessHash = hash(proof);
    console.log("Hashing ", guessHash);
    return guessHash == hash(PROFF);

}

let proofofWork = () => {
    let proof = 0;
    while(true){
        if (!validProof(proof)){
            proof++;
        } else {
            break;
        }
    }
    return proof;
}

if(proofofWork() == PROFF) {
    blockchain.addNewTransaction("elena", "misha", 200);
    let prevHash = blockchain.lastBlock() ? blockchain.lastBlock().hash : null;
    blockchain.addNewBlock(prevHash);
}

console.log("Blockchain", blockchain.chain)

const app = express();

const port = process.env.PORT || 5001;

app.listen(port, () => console.log("server running"))