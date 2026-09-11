class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const set = [];

        const isPalindrome = (arr) => {
            let l = 0,
                r = arr.length - 1;

            while (l <= r) {
                if (arr[l] !== arr[r]) {
                    return false;
                }
                l++;
                r--;
            }

            return true;
        };

        const dfs = (i, arr) => {
            console.log(i, arr)
            if (i === s.length) {
                if (arr.length) {
                    set.push([...arr]);
                }

                return;
            }
            let temp = s[i];
            if (isPalindrome(temp)) {
                arr.push(temp);
                dfs(i + 1, arr);
                arr.pop();
            }

            for (let j = i + 1; j < s.length; j++) {
                temp += s[j];
                if (isPalindrome(temp)) {
                    arr.push(temp);
                    dfs(j + 1, arr);
                    arr.pop();
                }
            }
        };

        dfs(0, []);

        return set;
    }
}
