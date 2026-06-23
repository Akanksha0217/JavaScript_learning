# Shadowing and Illegal Shadowing

## What is Shadowing?

**Shadowing** occurs when a variable declared inside an inner scope has the **same name** as a variable declared in an outer scope. The inner variable **hides (shadows)** the outer variable within its scope.

### Example

```javascript
let name = "Akanksha";

function display() {
    let name = "React";
    console.log(name);
}

display();
console.log(name);
```

### Output

```text
React
Akanksha
```

### Explanation

* Global variable: `name = "Akanksha"`
* Function variable: `name = "React"`
* Inside the function, the local variable is used.
* Outside the function, the global variable remains unchanged.

---

# Scope Hierarchy

```text
Global Scope
│
├── Function Scope
│   └── Block Scope
```

JavaScript always searches for variables from the **nearest scope** to the outer scope.

---

# Shadowing with Block Scope

```javascript
let x = 100;

{
    let x = 50;
    console.log(x);
}

console.log(x);
```

### Output

```text
50
100
```

The block variable hides the global variable.

---

# Shadowing using `var`

```javascript
var a = 10;

function test() {
    var a = 20;
    console.log(a);
}

test();
console.log(a);
```

### Output

```text
20
10
```

`var` has **function scope**, so the local variable shadows the global variable.

---

# Shadowing using `let`

```javascript
let a = 10;

function test() {
    let a = 20;
    console.log(a);
}

test();
console.log(a);
```

### Output

```text
20
10
```

`let` is **block scoped**, but it also supports shadowing.

---

# Shadowing using `const`

```javascript
const a = 10;

{
    const a = 20;
    console.log(a);
}

console.log(a);
```

### Output

```text
20
10
```

`const` is also block scoped and supports shadowing.

---

# Mixed Shadowing

```javascript
let city = "Pune";

function show() {
    const city = "Mumbai";
    console.log(city);
}

show();
console.log(city);
```

### Output

```text
Mumbai
Pune
```

---

# Illegal Shadowing

Illegal shadowing happens when JavaScript **does not allow** a variable declaration because it violates scope rules.

## Rule

A **`var` cannot shadow a `let` or `const`** if both belong to the **same function/global scope**.

---

## Example 1 (Illegal)

```javascript
let a = 10;

{
    var a = 20;
}
```

### Error

```text
SyntaxError: Identifier 'a' has already been declared
```

### Why?

* `var` is **function scoped**, not block scoped.
* Even though it is written inside `{}`, JavaScript moves it to the surrounding function/global scope.
* Since `let a` already exists there, JavaScript throws a `SyntaxError`.

---

## Example 2 (Illegal)

```javascript
const age = 25;

{
    var age = 30;
}
```

### Error

```text
SyntaxError: Identifier 'age' has already been declared
```

---

# Legal Shadowing

## `let` shadows `var`

```javascript
var a = 10;

{
    let a = 20;
    console.log(a);
}

console.log(a);
```

### Output

```text
20
10
```

---

## `const` shadows `var`

```javascript
var a = 10;

{
    const a = 50;
    console.log(a);
}

console.log(a);
```

### Output

```text
50
10
```

---

## `let` shadows `let`

```javascript
let a = 10;

{
    let a = 20;
    console.log(a);
}

console.log(a);
```

### Output

```text
20
10
```

---

## `const` shadows `const`

```javascript
const a = 10;

{
    const a = 30;
    console.log(a);
}

console.log(a);
```

### Output

```text
30
10
```

---

# Why is `var` Illegal Here?

```javascript
let a = 10;

{
    var a = 20;
}
```

JavaScript treats it as:

```javascript
let a = 10;

var a = 20;
```

Now both variables exist in the **same scope**, which is not allowed.

---

# Memory Visualization

## Legal Shadowing

```javascript
let a = 10;

{
    let a = 20;
}
```

```text
Global Memory
-------------
a → 10

Block Memory
------------
a → 20
```

---

## Illegal Shadowing

```javascript
let a = 10;

{
    var a = 20;
}
```

```text
Global Memory

a → 10
a → 20   ❌ Duplicate declaration
```

Result:

```text
SyntaxError
```

---

# Interview Examples

## Example 1

```javascript
let a = 10;

function test() {
    let a = 20;
    console.log(a);
}

test();
console.log(a);
```

**Output**

```text
20
10
```

---

## Example 2

```javascript
var a = 10;

{
    let a = 20;
}

console.log(a);
```

**Output**

```text
10
```

---

## Example 3

```javascript
let a = 10;

{
    var a = 20;
}
```

**Output**

```text
SyntaxError
```

---

## Example 4

```javascript
var a = 10;

function test() {
    var a = 30;
    console.log(a);
}

test();
console.log(a);
```

**Output**

```text
30
10
```

---

## Example 5

```javascript
const a = 5;

{
    const a = 15;
    console.log(a);
}

console.log(a);
```

**Output**

```text
15
5
```

---

# Quick Comparison Table

| Situation                          | Allowed? | Reason                                          |
| ---------------------------------- | -------- | ----------------------------------------------- |
| `let` → `let`                      | ✅ Yes    | Different block scopes                          |
| `const` → `const`                  | ✅ Yes    | Different block scopes                          |
| `let` → `const`                    | ✅ Yes    | Different block scopes                          |
| `const` → `let`                    | ✅ Yes    | Different block scopes                          |
| `var` → `var` (different function) | ✅ Yes    | Function scope                                  |
| `let` shadows `var`                | ✅ Yes    | `let` is block scoped                           |
| `const` shadows `var`              | ✅ Yes    | `const` is block scoped                         |
| `var` shadows `let`                | ❌ No     | `var` belongs to the same function/global scope |
| `var` shadows `const`              | ❌ No     | Same reason                                     |

---

# Key Points

* Shadowing means an inner variable hides an outer variable.
* `let` and `const` are **block scoped**.
* `var` is **function scoped**.
* `let` and `const` can legally shadow `var`.
* `var` **cannot** shadow `let` or `const` in the same function/global scope.
* JavaScript always resolves variables from the **nearest scope** (Lexical Scope).

---

# Interview Definition

### Shadowing

> Shadowing is the process where a variable declared in an inner scope has the same name as a variable in an outer scope, causing the inner variable to temporarily hide the outer variable within its scope.

### Illegal Shadowing

> Illegal shadowing occurs when a `var` declaration attempts to redeclare a `let` or `const` variable in the same function or global scope, resulting in a `SyntaxError`.
