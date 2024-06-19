# https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/description/?envType=daily-question&envId=2024-06-19

class Solution:
    def minDays(self, bloom_days: List[int], m: int, k: int) -> int:
        if m * k > len(bloom_days): return -1
        # Step 1: Check the input proposed day-th is able to make m bouquets or not
        def is_valid(day_number) -> bool:
            cur_bloom = 0
            cur_bouquets = 0
            for i in range(len(bloom_days)):
                if day_number < bloom_days[i]:
                    cur_bloom = 0 # flower not bloom
                else:
                    cur_bloom += 1 # flower already bloom
                    if cur_bloom == k:
                        cur_bloom = 0
                        cur_bouquets += 1
                        if cur_bouquets >= m: return True
            return False
        # Step 2: Binary search on result
        # timers: list of sorted distinct days
        timers = sorted(list(Counter(bloom_days).keys()))
        left, right = 0, len(timers) - 1
        optimal_day = 0
        while left <= right:
            mid = left + (right-left)//2
            if is_valid(timers[mid]):
                optimal_day = mid
                right = mid - 1
            else:
                left = mid + 1
        return timers[optimal_day]