function miniMaxSum(arr) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Calculate the sum of all elements
  const sum = arr.reduce((acc, num) => acc + num, 0);

  // Calculate the minimum sum by excluding the last element
  const minSum = sum - arr[arr.length - 1];

  // Calculate the maximum sum by excluding the first element
  const maxSum = sum - arr[0];

  // Print the minimum and maximum sums
  console.log(minSum + " " + maxSum);
}

// Example usage:
const arr = [1, 3, 5, 7, 9];
miniMaxSum(arr);
