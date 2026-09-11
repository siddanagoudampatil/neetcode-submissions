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
        const arr = [];

        let temp = head;

        while (temp !== null) {
            arr.push(temp.val);
            temp = temp.next;
        }

        let l = 0, r = arr.length - 1;

        temp = head

        while (l < r) {
            temp.val = arr[l];
            temp = temp.next;
            temp.val = arr[r];
            temp = temp.next;
            l++;
            r--;
        }

        if (l === r) temp.val = arr[l];
    }
}
