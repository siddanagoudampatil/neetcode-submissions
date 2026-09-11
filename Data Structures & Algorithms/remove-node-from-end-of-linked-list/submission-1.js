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

        temp = head;

        if (arr.length - n - 1 < 0) {
            if (head.next) {
                return head.next;
            } else {
                return null;
            }
        }

        for (let i = 0; i < arr.length - n - 1; i++) {
            temp = temp.next;
        }

        temp.next = temp.next.next;

        return head;
    }
}
