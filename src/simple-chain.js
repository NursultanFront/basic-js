const CustomError = require("../extensions/custom-error");

const chainMaker = {
    // getLength() {
    //   throw new CustomError('Not implemented');
    //   // remove line with error and write your code here
    // },
    // addLink(value) {
    //   throw new CustomError('Not implemented');
    //   // remove line with error and write your code here
    // },
    // removeLink(position) {
    //   throw new CustomError('Not implemented');
    //   // remove line with error and write your code here
    // },
    // reverseChain() {
    //   throw new CustomError('Not implemented');
    //   // remove line with error and write your code here
    // },
    // finishChain() {
    //   throw new CustomError('Not implemented');
    //   // remove line with error and write your code here
    // }
    array: [],
    getLength() {
        return this.array.length;
    },
    addLink(value) {
        this.array.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        if (typeof position != "number") {
            this.array = [];
            throw Error();
        }
        if (position >= this.array.length || position <= 0) {
            this.array = [];
            throw Error();
        }
        this.array.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.array.reverse();
        return this;
    },
    finishChain() {
        let chain = this.array.join("~~");
        this.array = [];
        return chain;
    },
};

module.exports = chainMaker;
