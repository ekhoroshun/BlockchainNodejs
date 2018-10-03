let hash = require('object-hash');

class BlockChain{

    constructor(){

        //create the chain

        this.chain = [];
        //transaction
        this.curr_transaction =[];

    }

    addNewBlock(prevHash) {

        let block = {
            index: this.chain.length + 1,
            timestamp: Date.now(),
            transactions: this.curr_transaction,
            prevHash: prevHash
        };
        //put hash
        this.hash = hash(block);

        //add to chain
        this.chain.push(block);
        this.curr_transaction = [];
        return block;
    }

    addNewTransaction( sender, recipient, amount) {
        this.curr_transaction.push({ sender, recipient, amount})
    }

    lastBlock(){
        return this.chain.slice(-1)[0];
    }

    isEmpty(){
        return this.chain.length == 0;
    }
}

module.exports = BlockChain;