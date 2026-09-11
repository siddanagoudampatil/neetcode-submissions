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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let nums = [];
        while (l1) {
            nums.push(l1.val);
            l1 = l1.next;
        }

        let firstNum = 0;
        for (let i = 0; i < nums.length; i++) {
            firstNum += nums[i] * 10 ** i;
        }

        nums = [];
        while (l2) {
            nums.push(l2.val);
            l2 = l2.next;
        }

        let secondNum = 0;
        for (let i = 0; i < nums.length; i++) {
            secondNum += nums[i] * 10 ** i;
        }

        const res = (firstNum + secondNum).toString();

        const dummy = new ListNode(0);
        let temp = dummy;
        for (let i = res.length - 1; i >= 0; i--) {
            temp.next = new ListNode(Number(res[i]));
            temp = temp.next;
        }

        return dummy.next;
    }
}
