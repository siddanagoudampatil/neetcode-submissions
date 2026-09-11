class TrieNode {
    constructor() {
        this.children = new Array(26).fill(null);
        this.eow = false;
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

        for (const c of word) {
            const idx = c.charCodeAt(0) - 97;
            if (!curr.children[idx]) {
                curr.children[idx] = new TrieNode();
            } 
            curr = curr.children[idx];
        }

        curr.eow = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root;

        for (const c of word) {
            const idx = c.charCodeAt(0) - 97;
            if (!curr.children[idx]) {
                return false;
            }
            curr = curr.children[idx];
        }

        return curr.eow;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root;

        for (const c of prefix) {
            const idx = c.charCodeAt(0) - 97;
            if (!curr.children[idx]) {
                return false;
            }
            curr = curr.children[idx];
        }

        return true;
    }
}
