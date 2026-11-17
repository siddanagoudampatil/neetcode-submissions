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
        const tempArr = [];
        let temp = head;

        while (temp) {
            tempArr.push(temp);
            temp = temp.next;
        }

        let i = 0, j = tempArr.length - 1;

        while (i < j) {
            tempArr[i].next = tempArr[j];
            i++;

            if (i >= j) {
                break;
            }

            tempArr[j].next = tempArr[i];
            j--;
        }

        tempArr[i].next = null;
    }
}
