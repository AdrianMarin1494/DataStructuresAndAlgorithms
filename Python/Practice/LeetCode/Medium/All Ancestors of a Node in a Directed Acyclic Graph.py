# https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/description/?envType=daily-question&envId=2024-06-29

class Solution:
    def getAncestors(self, n: int, edges: List[List[int]]) -> List[List[int]]:
        dNodes=defaultdict(set)
        dIncomming=defaultdict(int)
        for a,b in edges:
            dNodes[a].add(b)
            dIncomming[b]+=1
        res=[set() for i in range(n)]
        q=deque([])
        for i in range(n):
            if(dIncomming[i]==0):q.append(i)
        while(q):
            p=q.popleft()
            for j in dNodes[p]:
                res[j]=res[j].union(res[p])
                res[j].add(p)
                dIncomming[j]-=1
                if(dIncomming[j]==0):q.append(j)
        for i in range(len(res)):res[i]=sorted(list(res[i]))
        return res   