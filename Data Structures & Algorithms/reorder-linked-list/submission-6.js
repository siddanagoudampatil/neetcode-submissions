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
        const rec = (root, curr) => {
            if (curr === null) {
                return root;
            }

            root = rec(root, curr.next);

            if (root === null) {
                return null;
            }

            let tmp = null;

            if (root === curr || root.next === curr) {
                curr.next = null;
            } else {
                tmp = root.next;
                root.next = curr;
                curr.next = tmp;
            }

            return tmp;
        }

        return rec(head, head.next);
    }
}
