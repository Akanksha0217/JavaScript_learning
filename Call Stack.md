# Call Stack in JavaScript

## What is Call Stack?

The Call Stack is a data structure used by JavaScript to keep track of function calls.

It works on the principle of:

```text
LIFO (Last In First Out)
```

The last function added to the stack is executed first and removed first.

---

# Why is Call Stack Important?

The call stack helps JavaScript:

- Track function execution
- Manage execution order
- Know which function is currently running
- Return control after function execution

---

# How Call Stack Works

When a function is called:

1. It is pushed into the stack
2. JavaScript executes the function
3. After execution, it is removed (popped) from the stack

---

# Example

```javascript
function first() {
    console.log("First Function");
    second();
}

function second() {
    console.log("Second Function");
}

first();
```

---

# Execution Flow

## Step 1

Global Execution Context enters the stack.

```text
| Global |
```

---

## Step 2

`first()` is called.

```text
| first  |
| Global |
```

---

## Step 3

Inside `first()`, `second()` is called.

```text
| second |
| first  |
| Global |
```

---

## Step 4

`second()` execution completes and is removed.

```text
| first  |
| Global |
```

---

## Step 5

`first()` execution completes and is removed.

```text
| Global |
```

---

# Final Output

```text
First Function
Second Function
```

---

# Important Points

- JavaScript is single-threaded
- It executes one task at a time
- Call stack manages execution order
- Stack overflow occurs if too many function calls happen

---

# Stack Overflow Example

```javascript
function demo() {
    demo();
}

demo();
```

This causes:

```text
Maximum call stack size exceeded
```

because the function keeps calling itself infinitely.

---

# Real Life Analogy

Think of plates stacked one above another.

- Last plate added → removed first
- Same concept works in Call Stack

---

# Conclusion

The Call Stack is one of the core concepts in JavaScript.

It helps JavaScript manage:
- function execution
- execution order
- memory tracking
- synchronous behavior

Understanding call stack is important for learning:
- Execution Context
- Event Loop
- Asynchronous JavaScript
- Closures
- Recursion
