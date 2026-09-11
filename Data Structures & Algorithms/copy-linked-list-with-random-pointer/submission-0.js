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
        const dummy = new Node();
        let temp = dummy;

        for (let cur = head; cur; cur = cur.next) {
            const node = new Node(cur.val);
            temp.next = node;
            temp = node;
            map.set(cur, node);
        }

        for (let cur = head; cur; cur = cur.next) {
            map.get(cur).random = cur.random ? map.get(cur.random) : null;
        }
        
        return dummy.next;
    }
}
