class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        if (!wordList.includes(endWord) || beginWord === endWord) {
            return 0;
        }

        const n = wordList.length;
        const m = wordList[0].length;
        const adj = Array.from({ length: n }, () => []);
        const mp = new Map();

        for (let i = 0; i < n; i++) {
            mp.set(wordList[i], i);
            for (let j = i + 1; j < n; j++) {
                let cnt = 0;
                for (let k = 0; k < m; k++) {
                    if (wordList[i][k] !== wordList[j][k]) {
                        cnt++;
                    }
                }

                if (cnt === 1) {
                    adj[i].push(j);
                    adj[j].push(i);
                }
            }
        }

        const queue = [];
        const visited = new Set();
        let res = 1;

        for (let i = 0; i < m; i++) {
            for (let c = 97; c < 123; c++) {
                if (String.fromCharCode(c) === beginWord[i]) {
                    continue;
                }

                const word =
                    beginWord.slice(0, i) + String.fromCharCode(c) + beginWord.slice(i + 1);

                if (mp.has(word) && !visited.has(mp.get(word))) {
                    visited.add(mp.get(word));
                    queue.push(mp.get(word));
                }
            }
        }

        while (queue.length) {
            res++;
            const size = queue.length;
            for (let i = 0; i < size; i++) {
                const node = queue.shift();

                if (wordList[node] === endWord) {
                    return res;
                }

                for (const nei of adj[node]) {
                    if (!visited.has(nei)) {
                        visited.add(nei);
                        queue.push(nei);
                    }
                }
            }
        }

        return 0;
    }
}
