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
        if (lists.length <= 0) return null;

        for (let i = 0; i < lists.length; i++) {
            lists[i] = this.mergeList(lists[i], lists[i - 1]);
        }

        return lists[lists.length - 1];
    }

    mergeList(l1, l2) {
        const dummy = new ListNode(0);
        let temp = dummy;

        while (l1 && l2) {
            if (l1.val < l2.val) {
                temp.next = l1;
                l1 = l1.next;
            } else {
                temp.next = l2;
                l2 = l2.next;
            }
            temp = temp.next;
        }

        if (l1) temp.next = l1;
        if (l2) temp.next = l2;

        return dummy.next;
    }
}
