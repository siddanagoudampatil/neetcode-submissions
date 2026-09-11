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

        for (let i = 0; i < m; i++) {
            for (let j = 97; j < 123; j++) {
                if (String.fromCharCode(j) === beginWord[i]) {
                    continue;
                }

                const word = beginWord.slice(0, i) + String.fromCharCode(j) + beginWord.slice(i + 1);
                if (mp.has(word) && !visited.has(mp.get(word))) {
                    queue.push(mp.get(word));
                    visited.add(mp.get(word));
                }
            }
        }

        let res = 1;

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
                        queue.push(nei);
                        visited.add(nei);
                    }
                }
            }
        }

        return 0;
    }
}
 