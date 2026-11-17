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
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let second = slow.next;
        let prev = (slow.next = null);

        while (second) {
            const temp = second.next;
            second.next = prev;
            prev = second;
            second = temp;
        }

        let head1 = head;
        let head2 = prev;

        while (head2) {
            const tmp1 = head1.next;
            const tmp2 = head2.next;

            head1.next = head2;
            head2.next = tmp1;
            head1 = tmp1;
            head2 = tmp2;
        }

        return head;
    }
}
