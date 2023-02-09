//https://leetcode.com/problems/naming-a-company/ 
//Date 9-2-23
var distinctNames = function(ideas) {
    const groupByFirstChar = [];//This line creates an empty array called groupByFirstChar which will be used to store sets of names grouped by their first character.

ideas.forEach((curr) => {//This code iterates over the elements in the ideas array, which are assumed to be strings. For each element, it calculates the character code of its first character using the charCodeAt method and subtracts 97 from it to get an index in the range 0 to 25. This is because the ASCII code for 'a' is 97 and the ASCII code for 'z' is 122.

//If the set for the corresponding index in the groupByFirstChar array is not yet created, a new set is created using new Set(). The name (excluding its first character) is then added to this set using the add method.
  if (!groupByFirstChar[curr.charCodeAt(0) - 97]) {
    groupByFirstChar[curr.charCodeAt(0) - 97] = new Set();
  }
  groupByFirstChar[curr.charCodeAt(0) - 97].add(curr.substring(1));
});

let result = 0;//This line declares and initializes a variable result to 0, which will be used to store the final result

for (let i = 0; i < 25; i++) {
  const setA = groupByFirstChar[i];
  if (!setA) continue;
  
  for (let j = i + 1; j < 26; j++) {
    const setB = groupByFirstChar[j];
    if (!setB) continue;
    
    const common = new Set([...setB]);
    
    common.forEach((elem) => {
      if (!setA.has(elem)) {
        common.delete(elem);
      }
    });
    
    result += 2 * (setA.size - common.size) * (setB.size - common.size);
    //This code uses two nested for loops to compare every pair of sets in the groupByFirstChar array. The outer loop iterates over the indices i from 0 to 24, and the inner loop iterates over the indices j from i + 1 to 25. This ensures that each pair of sets is compared only once.

//For each pair of sets, the code creates a new set common containing the elements of set B. Then, it iterates over the elements in common and removes those elements that are not present in set A using the delete method.

//Finally, the code increments the result variable by 2 times the product of the sizes of the complement of the sets A and B with respect to the common set. The reason for multiplying by 2 is because each pair of unique names is counted twice (once for each name).
  }
}

return result;//This line returns the final result stored in the result variable.
};

/*//The time complexity of this code is O(n^2), where n is the number of elements in the ideas array.
 This is because the code uses two nested for loops to compare every pair of sets in the groupByFirstChar array.

//The space complexity of this code is also O(n), where n is the number of elements in the ideas array. 
This is because the code uses a set for each group of names starting with a different character, 
and the total number of sets is equal to the number of unique characters in the names. 
Additionally, the code uses a constant amount of space for the result variable, the groupByFirstChar array, and the common set.

//Note that this analysis assumes that the time and space complexity of the operations performed on sets (e.g., add, delete, has, size) is constant.*/