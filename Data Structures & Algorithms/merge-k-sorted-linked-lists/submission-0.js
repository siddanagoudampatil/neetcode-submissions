/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        const res = [];

        for (let i = 0; i < lists.length; i++) {
            let temp = lists[i];
            while (temp) {
                res.push(temp.val);
                temp = temp.next;
            }
        }

        res.sort((a, b) => a - b);

        const dummy = new ListNode(0);
        let temp = dummy;

        for (const num of res) {
            temp.next = new ListNode(num);
            temp = temp.next;
        }
        
        return dummy.next;
    }
}
