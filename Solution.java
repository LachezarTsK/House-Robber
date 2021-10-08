
public class Solution {

    int n;
    int[] dp;
    boolean[] visited;

    public int rob(int[] nums) {
        n = nums.length;
        visited = new boolean[n];
        dp = new int[n];
        return maximumSum(nums, 0);
    }

    public int maximumSum(int[] nums, int index) {
        if (index >= n) {
            return 0;
        }

        if (visited[index]) {
            return dp[index];
        }

        visited[index] = true;
        dp[index] = Math.max(maximumSum(nums, index + 2) + nums[index], maximumSum(nums, index + 1));
        return dp[index];
    }
}
