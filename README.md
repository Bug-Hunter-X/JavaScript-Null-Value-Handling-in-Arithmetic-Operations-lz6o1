# JavaScript Null Value Handling in Arithmetic Operations

This repository demonstrates a common error in JavaScript where null values are not explicitly handled in arithmetic operations. The program `bug.js` shows the buggy code, and `bugSolution.js` provides a robust solution.

The core issue lies in the implicit coercion of null values during addition. In JavaScript, null is considered a falsy value, which can lead to unexpected results. The solution provided improves the handling of null values, enhancing the reliability of the code.

## Bug Description
The `foo` function intends to add two numbers, `a` and `b`. However, it fails to explicitly handle null values as inputs. This leads to incorrect results when either `a` or `b` is null, resulting in 0 being returned.