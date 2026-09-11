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
        let N = 0;
        let temp = head;

        while (temp) {
            N++;
            temp = temp.next;
        }

        const idx = N - n;

        if (idx === 0) return head.next;

        let i = 0;

        temp = head;
        while (i < idx - 1) {
            temp = temp.next;
            i++;
        }

        temp.next = temp.next.next;

        return head;
    }
}
