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
        map.set(null, null);
        let temp = head;

        while (temp) {
            if (!map.has(temp)) {
                map.set(temp, new Node(0));
            }
            map.get(temp).val = temp.val;

            if (!map.has(temp.next)) {
                map.set(temp.next, new Node(0));
            }
            map.get(temp).next = map.get(temp.next);

            if (!map.has(temp.random)) {
                map.set(temp.random, new Node(0));
            }
            map.get(temp).random = map.get(temp.random);

            temp = temp.next;
        }

        return map.get(head);
    }
}
