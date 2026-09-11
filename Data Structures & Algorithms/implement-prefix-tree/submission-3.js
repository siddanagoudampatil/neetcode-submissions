class TrieNode {
    constructor() {
        this.eow = false;
        this.children = new Array(26).fill(null);
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root;

        for (const char of word) {
            const i = char.charCodeAt(0) - 97;
            if (curr.children[i] === null) {
                curr.children[i] = new TrieNode();
            }
            curr = curr.children[i];
        }

        curr.eow = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root;

        for (const char of word) {
            const i = char.charCodeAt(0) - 97;
            if (curr.children[i] === null) {
                return false;
            }
            curr = curr.children[i];
        }

        return curr.eow;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root;

        for (const char of prefix) {
            const i = char.charCodeAt(0) - 97;
            if (curr.children[i] === null) {
                return false;
            }
            curr = curr.children[i];
        }

        return true;
    }
}
