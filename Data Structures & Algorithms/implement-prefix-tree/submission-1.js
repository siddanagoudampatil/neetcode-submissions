class PrefixTree {
    constructor() {
        this.root = new Node();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        if (!word) return null;

        let currNode = this.root;
        for (const char of word) {
            if (!currNode.children.has(char)) {
                currNode.children.set(char, new Node(char));
            }
            currNode = currNode.children.get(char);
        }

        currNode.endOfWord = true;

        return null;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        if (!word) return false;

        let currNode = this.root;
        for (const char of word) {
            if (!currNode.children.has(char)) return false;
            currNode = currNode.children.get(char);
        }

        return currNode.endOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        if (!prefix) return false;

        let currNode = this.root;
        for (const char of prefix) {
            if (!currNode.children.has(char)) return false;
            currNode = currNode.children.get(char);
        }

        return true;
    }
}

class Node {
    constructor() {
        this.children = new Map();
        this.endOfWord = false;
    }
}
