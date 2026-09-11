class Solution {
public:
    int trap(vector<int>& height) {
        int n = height.size();
    if (n == 0) return 0;

    int left = 0, right = n - 1;
    int leftMax = 0, rightMax = 0;
    int totalWater = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            // Water is limited by the left side
            if (height[left] >= leftMax) {
                leftMax = height[left]; // New wall found
            } else {
                totalWater += leftMax - height[left]; // Trap water
            }
            left++;
        } else {
            // Water is limited by the right side
            if (height[right] >= rightMax) {
                rightMax = height[right]; // New wall found
            } else {
                totalWater += rightMax - height[right]; // Trap water
            }
            right--;
        }
    }
    return totalWater;
    }
};
