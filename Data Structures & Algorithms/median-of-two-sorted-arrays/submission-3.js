class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const n1 = nums1.length, n2 = nums2.length;
        let i = 0, j = 0;

        let m1 = 0, m2 = 0;

        for (let k = 0; k < Math.floor((n1 + n2) / 2) + 1; k++) {
            m2 = m1;
            if (i < n1 && j < n2) {
                if (nums1[i] < nums2[j]) {
                    m1 = nums1[i];
                    i++;
                } else {
                    m1 = nums2[j];
                    j++;
                }
            } else if (i < n1) {
                m1 = nums1[i];
                i++;
            } else {
                m1 = nums2[j];
                j++;
            }
        }

        return (n1 + n2) % 2 === 0 ? (m1 + m2) / 2 : m1;
    }
}
