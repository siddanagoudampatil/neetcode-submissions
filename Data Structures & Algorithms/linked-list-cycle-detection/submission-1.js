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
     * @return {boolean}
     */
    hasCycle(head) {
        let slowPtr = head;
        if (!slowPtr) return false;

        let fastPtr = head.next;
        if (!fastPtr) return false;

        while (slowPtr.next && fastPtr.next && fastPtr.next.next) {
            if (slowPtr === fastPtr) return true;
            slowPtr = slowPtr.next;
            fastPtr = fastPtr.next.next;
        }

        return false;
    }
}
