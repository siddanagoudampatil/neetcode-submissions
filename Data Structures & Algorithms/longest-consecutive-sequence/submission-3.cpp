class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        unordered_set<int> s;
        for(int i =0; i<nums.size(); i++){
            s.insert(nums[i]);
        }
        int longest = 0;
        for(int i =0; i<nums.size(); i++){
            if(s.find(nums[i]-1) == s.end()){
                int length =0;
                while(s.find(nums[i]+length) != s.end()){
                    length++;
                }
                longest = max(longest, length);
            }
        }
        return longest;
  
    }
};
