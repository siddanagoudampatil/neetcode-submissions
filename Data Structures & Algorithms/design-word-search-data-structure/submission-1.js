class TrieNode {
    constructor() {
        this.eow = false;
        this.children = new Map();
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
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
        const dfs = (word, idx, root) => {
            let curr = root;

            for (let i = idx; i < word.length; i++) {
                if (word[i] === ".") {
                    for (const key of curr.children.keys()) {
                        if (
                            curr.children.get(key) !== null &&
                            dfs(word, i + 1, curr.children.get(key))
                        ) {
                            return true;
                        }
                    }
                    return false;
                } else {
                    if (!curr.children.has(word[i])) {
                        return false;
                    }
                    curr = curr.children.get(word[i]);
                }
            }

            return curr.eow;
        };

        return dfs(word, 0, this.root);
    }
}
