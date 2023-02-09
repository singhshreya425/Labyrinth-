//https://practice.geeksforgeeks.org/problems/9a88fe7ada1c49c2b3da7a67b43875e4a76aface/1
 //date 9-2-23
 function maxBipartiteMatching(graph) {
  const N = graph.length;
  const match = Array(N).fill(-1);
  let result = 0;

  function dfs(u) {
    for (let v = 0; v < N; v++) {
      if (graph[u][v] && match[v] === -1) {
        match[v] = u;
        if (match[v] === -1 || dfs(match[v])) {
          return true;
        }
      }
    }
    return false;
  }

  for (let u = 0; u < N; u++) {
    if (dfs(u)) {
      result++;
    }
  }

  return result;
}
const graphh = [
    [false, true, false, true],
    [true, false, true, false],
    [false, true, false, true],
    [true, false, true, false]
  ];
  
  console.log(maxBipartiteMatching(graphh));
  
/*The input to the function is a two-dimensional boolean array graph where graph[i][j] is true if there is an edge between nodes i and j, and false otherwise. The function returns the size of the maximum matching, which is the number of edges in the maximum matching.

The function uses DFS to find augmenting paths in the graph, which are paths that start and end at unmatched vertices and alternate between matched and unmatched edges. The function starts by initializing an array match that keeps track of the matching for each vertex, with a value of -1 indicating that the vertex is unmatched. The dfs function is then called for each unmatched vertex, and if it returns true, it means that an augmenting path has been found, and the matching size is increased by 1.

The time complexity of this algorithm is O(n * m), where n is the number of vertices and m is the number of edges in the graph. This is because each call to the dfs function takes O(m) time, and it is called n times in the outer loop. The space complexity is O(n), as the match array has n elements.*/