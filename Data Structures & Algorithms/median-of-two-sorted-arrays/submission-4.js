class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let A, B;
        const total = nums1.length + nums2.length;
        const half = Math.floor(total / 2);
        if (nums1.length < nums2.length) {
            A = nums1;
            B = nums2;
        } else {
            A = nums2;
            B = nums1;
        }

        let l = 0, r = A.length - 1;

        while (true) {
            const m1 = l + Math.floor((r - l) / 2);
            const m2 = half - m1 - 2;

            let aLeft = -Infinity, bLeft = -Infinity;
            let aRight = Infinity, bRight = Infinity;

            if (m1 >= 0) aLeft = A[m1];
            if (m2 >= 0) bLeft = B[m2];
            if (m1 + 1 < A.length) aRight = A[m1 + 1];
            if (m2 + 1 < B.length) bRight = B[m2 + 1];

            if (aLeft <= bRight && bLeft <= aRight) {
                if (total % 2) return Math.min(aRight, bRight);
                else return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2;
            } else if (aLeft > bRight) {
                r = m1 - 1;
            } else {
                l = m1 + 1;
            }
        }

        return 0;
    }
}
