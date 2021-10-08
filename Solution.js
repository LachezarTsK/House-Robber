

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    this.n = nums.length;
    this.dp = Array(n).fill(0);
    this.visited = Array(n).fill(false);
    return maximumSum(nums, 0);
};


/**
 * @param {number[]} nums
 * @param {number} index
 * @return {number}
 */
function maximumSum(nums, index) {
    if (index >= this.n) {
        return 0;
    }

    if (this.visited[index]) {
        return  this.dp[index];
    }

    visited[index] = true;
    this.dp[index] = Math.max(maximumSum(nums, index + 2) + nums[index], maximumSum(nums, index + 1));

    return dp[index];
}
