class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        for (const num of nums2) {
            nums1.push(num);
        }

        nums1.sort((a, b) => a - b);
        const n = nums1.length;
        if (n % 2 !== 0) return nums1[Math.floor(n / 2)];
        else {
            return (nums1[n / 2] + nums1[(n / 2 - 1)]) / 2;
        }
    }
}
