# 📘 JavaScript Interview Theory Notes

This file contains core JavaScript concepts in brief, focused on theory only. Ideal for quick revision before interviews.

---

## 🟡 JavaScript Basics

- **console.log()**: Used to display output in the browser's console.
- **Comments**: Used to explain code. Single-line (`//`) and multi-line (`/* */`).

---

## 🟡 Variables

- `var`: Function-scoped, can be redeclared and updated.
- `let`: Block-scoped, can be updated but not redeclared in the same scope.
- `const`: Block-scoped, cannot be updated or redeclared.

---

## 🟡 Data Types

- **Primitive Types**: String, Number, Boolean, Undefined, Null, Symbol, BigInt
- **Non-Primitive**: Object, Array, Function

---

## 🟡 Operators

- **Arithmetic**: +, -, *, /, %
- **Assignment**: =, +=, -=, etc.
- **Comparison**: ==, ===, !=, !==, >, <, >=, <=
- **Logical**: &&, ||, !

---

## 🟡 Conditional Statements

- `if`, `else if`, `else`: For decision-making.
- `switch`: For multiple value comparison.

---

## 🟡 Loops

- `for`: Repeats a block a specific number of times.
- `while`: Runs while a condition is true.
- `do...while`: Executes once before checking the condition.

---

## 🟡 Strings

- Strings are sequences of characters.
- String methods: `length`, `toUpperCase()`, `toLowerCase()`, `slice()`, `replace()`, `charAt()`, etc.

---

## 🟡 Arrays

- Arrays are list-like objects used to store multiple values.
- Common methods:
  - `push()`, `pop()`, `shift()`, `unshift()`, `concat()`
  - `map()`, `filter()`, `reduce()`, `forEach()`

---

## 🟡 Functions

- A block of reusable code.
- Can be declared using function keyword or as arrow functions.
- Functions can take parameters and return values.

---

## 🟡 Arrow Functions

- Shorter syntax for writing functions.
- Do not have their own `this` binding.

---

## 🟡 Window Object

- Represents the browser window.
- Global object in the browser environment.
- Includes properties like `innerWidth`, `alert()`, `confirm()`, etc.

---

## 🟡 Linking JavaScript with HTML

- Use the `<script>` tag to include JS in HTML.
- Best practice: Place script at the end of `<body>` or use `defer` in `<head>`.

---

## 🟡 DOM (Document Object Model)

- A tree-like structure representing the HTML elements.
- Allows dynamic manipulation of content, structure, and style.

### DOM Element Selection

- `getElementById()`
- `getElementsByClassName()`
- `getElementsByTagName()`
- `querySelector()`
- `querySelectorAll()`

### DOM Attributes and Properties

- **Attributes**: `getAttribute()`, `setAttribute()`, `.attributes`
- **Content Properties**:
  - `innerText`: Human-readable text
  - `innerHTML`: HTML markup inside the element
  - `textContent`: All text, including hidden content

---

## ✅ Next Topics to Prepare

- Events and Event Listeners
- DOM Traversal
- Local Storage & Session Storage
- JavaScript ES6+ Features
- Async JS: Callbacks, Promises, Async/Await

