# 📘 JavaScript Interview Notes 

These are core JavaScript concepts I’ve learned so far, explained clearly for quick interview preparation and revision.

---

## 🟨 1. What is JavaScript?

JavaScript is a lightweight, high-level, interpreted programming language.  
It’s used mainly to **add interactivity** and **dynamism** to websites.  
It runs in the browser and can interact with the HTML and CSS via the **DOM**.

---

## 🟨 2. console.log()

Used to **print values** or messages to the browser's console for debugging.
```js
console.log("Hello World");
```
## 🟨 3.Comments
- Single-line: // This is a comment
- Multi-line: /* This is a multi-line comment */
  
## 🟨 4. Variables
Three types of declarations:
- var: Function-scoped, can be redeclared.
- let: Block-scoped, cannot be redeclared.
- const: Block-scoped, cannot be updated or redeclared.

## 🟨 5. Data Types
- 🟢 Primitive Types:
String, Number, Boolean, Null, Undefined, Symbol, BigInt

-🟢 Non-Primitive:
Object, Array, Function

Use typeof to check the type of a variable.

## 🟨 6. Operators
- Arithmetic: +, -, *, /, %
- Assignment: =, +=, -=
- Comparison: ==, ===, !=, !==, <, >
- Logical: &&, ||, !

## 🟨 7. Conditional Statements
Used for decision making:
- if, else if, else
- switch

Note: === is strict comparison (checks type + value).

## 🟨 8. Loops
Used for repetitive tasks:
 - for — standard loop with index
 - while — runs while a condition is true
 - do...while — runs at least once before checking condition
 - 
## 🟨 9. Strings
Strings are sequences of characters.
###🔹 Common String Methods:
- .length
- .toUpperCase(), .toLowerCase()
- .slice(), .substring()
- .replace(), .includes()
- .charAt(), .indexOf()

## 🟨 10. Arrays
Used to store multiple values in a single variable.
- 🔹 Common Array Methods:
     - .push() — add to end
     - .pop() — remove from end
     - .shift() — remove from start
     - .unshift() — add to start
     - .concat() — merge arrays
     - .includes(), .indexOf()
