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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let arr = [];

        let temp = head;

        while (temp !== null) {
            arr.push(temp);
            temp = temp.next;
        }

        const idx = arr.length - n;

        if (idx === 0) return head.next;

        arr[idx - 1].next = arr[idx].next;
        return head;
    }
}
