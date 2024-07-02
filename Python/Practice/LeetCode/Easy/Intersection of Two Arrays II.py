# https://leetcode.com/problems/intersection-of-two-arrays-ii/description/?envType=daily-question&envId=2024-07-02

class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        i,j=0,0
        ans=[]
        nums1.sort()
        nums2.sort()
        n1=len(nums1)
        n2=len(nums2)
        while i<n1 and j<n2:
            if nums1[i]<nums2[j]:
                i+=1
            elif nums1[i]>nums2[j]:
                j+=1
            else:
                ans.append(nums1[i])
                i+=1
                j+=1
        return ans   