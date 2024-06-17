# https://leetcode.com/problems/sum-of-square-numbers/description/?envType=daily-question&envId=2024-06-17

class Solution:
    def judgeSquareSum(self, c: int) -> bool:
        s, e = 0, int(math.sqrt(c))
        
        while s <= e:
            sum_of_squares = s * s + e * e
            if sum_of_squares == c:
                return True
            elif sum_of_squares > c:
                e -= 1
            else:
                s += 1
                
        return False