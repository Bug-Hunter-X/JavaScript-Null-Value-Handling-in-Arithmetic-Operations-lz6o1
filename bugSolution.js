function foo(a, b) {
  // Explicitly handle null values using the ?? operator
  a = a ?? 0; 
  b = b ?? 0; 
  return a + b; // Now handles null values safely
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10
console.log(foo(null, null)); //Output: 0