// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const map = new Map();
        let temp = head;
        let dummy = new Node(0);
        let newTemp = dummy;

        while (temp) {
            const newNode = new Node(temp.val);
            newTemp.next = newNode;
            newTemp = newTemp.next;
            map.set(temp, newNode);
            temp = temp.next;
        }

        temp = head;
        newTemp = dummy.next

        while (temp) {
            newTemp.random = temp.random ? map.get(temp.random) : null;
            newTemp = newTemp.next;
            temp = temp.next;
        }

        return dummy.next;
    }
}
