class TrieNode {
    constructor() {
        this.eow = false;
        this.children = new Map();
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
            if (!curr.children.has(c)) {
                curr.children.set(c, new TrieNode());
            }
            curr = curr.children.get(c);
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
            if (!curr.children.has(c)) {
                return false;
            }
            curr = curr.children.get(c);
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
            if (!curr.children.has(c)) {
                return false;
            }
            curr = curr.children.get(c);
        }

        return true;
    }
}
