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
        if (!head || !head.next) return head;

        let slow = head;
        let fast = head.next;

        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let head2 = this.reverseList(slow.next);
        slow.next = null;

        const dummy = new ListNode();
        let curr = dummy;
        while (head && head2) {
            curr.next = head;
            head = head.next;
            curr.next.next = head2;
            head2 = head2.next;
            curr = curr.next.next;
        }

        if (head) {
            curr.next = head;
        } else {
            curr.next = head2;
        }

        return dummy.next;
    }

    reverseList(node) {
        let curr = null;
        while (node) {
            const temp = node.next;
            node.next = curr;
            curr = node;
            node = temp;
        }

        return curr;
    }
}
