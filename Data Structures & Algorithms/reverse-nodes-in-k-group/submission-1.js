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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let curr = head;
        let n = 0;
         
        while (curr && n < k) {
            curr = curr.next;
            n++;
        }

        if (n === k) {
            curr = this.reverseKGroup(curr, k);

            while (n > 0) {
                const temp = head.next;
                head.next = curr;
                curr = head;
                head = temp;
                n--;
            }

            head = curr;
        }

        return head;
    }
}
