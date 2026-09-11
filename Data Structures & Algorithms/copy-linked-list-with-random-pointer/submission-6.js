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
        if (!head) return null;
        let temp = head;

        while (temp) {
            const newNode = new Node(temp.val);
            newNode.next = temp.next;
            temp.next = newNode;
            temp = newNode.next;
        }

        temp = head;
        while (temp) {
            if (temp.random) {
                temp.next.random = temp.random.next;
            }
            temp = temp.next.next;
        }
        
        const newHead = head.next;
        temp = head;
        while (temp) {
            const newNode = temp.next;
            temp.next = newNode.next;
            if (newNode.next) {
                newNode.next = newNode.next.next;
            }
            temp = temp.next;
        }

        return newHead;
    }
}
