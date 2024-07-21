# https://leetcode.com/problems/build-a-matrix-with-conditions/description/?envType=daily-question&envId=2024-07-21

class Solution:
    def buildMatrix(self, k: int, rowConditions: List[List[int]], colConditions: List[List[int]]) -> List[List[int]]:

        def topologicalSort(condition):

            # indegree[i] := inflow traffic to the ith node
            indegree = {i: 0 for i in range(1, k + 1)}

            # build a directed graph for each pair of nodes in condition
            adj = defaultdict(list)
            for src, des in condition:
                adj[src] += [des]
                indegree[des] += 1

            # collect root nodes of the graph
            queue = []
            for i, degree in indegree.items():
                # add roots to the queue
                if degree == 0:
                    queue += [i]
            
            # run bfs 
            visited = []
            while queue:
                curr = queue.pop(0)
                visited += [curr]

                # search for neigh of curr
                for neigh in adj[curr]:
                    # update indegree
                    indegree[neigh] -= 1

                    # if 0, then add to queue
                    if indegree[neigh] == 0:
                        queue += [neigh]

            return visited

        # build right order for the numbers
        row_order = topologicalSort(rowConditions)
        col_order = topologicalSort(colConditions)

        # base; infeasible (cycle detection)
        if len(row_order) < k or len(col_order) < k:
            return []

        res = [[0 for _ in range(k)] for _ in range(k)]

        for i, row_val in enumerate(row_order):
            # find its index col_order
            j = col_order.index(row_val)
            res[i][j] = row_val

        return res 