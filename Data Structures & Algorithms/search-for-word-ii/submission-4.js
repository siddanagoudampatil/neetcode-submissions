class TrieNode {
    constructor() {
        this.eow = false;
        this.children = {};
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    addWord(word) {
        let curr = this.root;

        for (const c of word) {
            if (!(c in curr.children)) {
                curr.children[c] = new TrieNode();
            }
            curr = curr.children[c];
        }

        curr.eow = true;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const trie = new Trie();

        for (const word of words) {
            trie.addWord(word);
        }

        const ROWS = board.length;
        const COLS = board[0].length;
        const res = new Set();

        const dfs = (r, c, node, word) => {
            if (
                r < 0 ||
                c < 0 ||
                r >= ROWS ||
                c >= COLS ||
                !(board[r][c] in node.children)
            ) {
                return;
            }

            node = node.children[board[r][c]];
            word += board[r][c];
            if (node.eow) {
                res.add(word);
            }

            const temp = board[r][c];
            board[r][c] = "*";

            dfs(r + 1, c, node, word);
            dfs(r - 1, c, node, word);
            dfs(r, c + 1, node, word);
            dfs(r, c - 1, node, word);

            board[r][c] = temp;
        };

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                dfs(r, c, trie.root, "");
            }
        }

        return Array.from(res);
    }
}
