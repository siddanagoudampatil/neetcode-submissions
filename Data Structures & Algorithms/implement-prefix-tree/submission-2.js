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
            const idx = char.charCodeAt(0) - 97;
            if (curr.children[idx] === null) {
                curr.children[idx] = new TrieNode();
            }
            curr = curr.children[idx];
        }

        curr.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root;
        
        for (const char of word) {
            const idx = char.charCodeAt(0) - 97;
            if (curr.children[idx] === null) {
                return false;
            }
            curr = curr.children[idx];
        }

        return curr.endOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root;

        for (const char of prefix) {
            const idx = char.charCodeAt(0) - 97;
            if (curr.children[idx] === null) {
                return false;
            }
            curr = curr.children[idx];
        }

        return true;
    }
}

class TrieNode {
    constructor() {
        this.children = new Array(26).fill(null);
        this.endOfWord = false;
    }
}
