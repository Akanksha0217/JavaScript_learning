# Optional Chaining (`?.`) in JavaScript

## What is Optional Chaining?

Optional Chaining (`?.`) is a JavaScript operator that allows you to safely access properties or methods of an object without causing an error if the object is `null` or `undefined`.

Instead of throwing an error, it returns `undefined`.

---

# Why Do We Need Optional Chaining?

Sometimes an object or its properties may not exist.

Without optional chaining, JavaScript throws an error.

### Example (Without Optional Chaining)

```javascript
const user = null;

console.log(user.name);
```

### Output

```
TypeError: Cannot read properties of null
```

Reason:
- `user` is `null`
- JavaScript cannot read `name` from `null`

---

# Example With Optional Chaining

```javascript
const user = null;

console.log(user?.name);
```

### Output

```javascript
undefined
```

No error occurs.

---

# Syntax

```javascript
object?.property
```

Example

```javascript
user?.name
```

---

# Nested Object Example

```javascript
const employee = {
    name: "Akanksha",
    address: {
        city: "Pune"
    }
};

console.log(employee?.address?.city);
```

Output

```
Pune
```

---

## When Property Doesn't Exist

```javascript
const employee = {
    name: "Akanksha"
};

console.log(employee?.address?.city);
```

Output

```javascript
undefined
```

No error is thrown.

---

# Without Optional Chaining

```javascript
const employee = {
    name: "Akanksha"
};

console.log(employee.address.city);
```

Output

```
TypeError
```

Because `address` is undefined.

---

# Array Example

```javascript
const students = [
    { name: "Amit" },
    { name: "Priya" }
];

console.log(students?.[0]?.name);
```

Output

```
Amit
```

---

If the array is undefined

```javascript
const students = undefined;

console.log(students?.[0]?.name);
```

Output

```
undefined
```

---

# Function Example

```javascript
const person = {
    greet() {
        return "Hello";
    }
};

console.log(person.greet?.());
```

Output

```
Hello
```

---

If function doesn't exist

```javascript
const person = {};

console.log(person.greet?.());
```

Output

```
undefined
```

---

# Real React Example

Without Optional Chaining

```javascript
const userData = props.user;

return (
    <h1>{userData.name}</h1>
);
```

If `userData` is undefined,

```
Cannot read properties of undefined
```

---

With Optional Chaining

```javascript
const userData = props.user;

return (
    <h1>{userData?.name}</h1>
);
```

Output

Nothing is displayed, but the application does not crash.

---

# Example from API Response

Suppose the API returns

```javascript
const response = {
    data: {
        employee: {
            name: "Akanksha"
        }
    }
};
```

Accessing the name

```javascript
console.log(response?.data?.employee?.name);
```

Output

```
Akanksha
```

---

If employee is missing

```javascript
const response = {
    data: {}
};

console.log(response?.data?.employee?.name);
```

Output

```
undefined
```

# Optional Chaining + Nullish Coalescing

You can provide a default value.

```javascript
console.log(user?.name ?? "Guest");
```

If

```javascript
user = null
```

Output

```
Guest
```

---

# Optional Chaining vs AND (`&&`)

Using `&&`

```javascript
user &&
user.address &&
user.address.city
```

Using Optional Chaining

```javascript
user?.address?.city
```

Optional chaining is shorter, cleaner, and easier to read.

---

# Advantages

- Prevents runtime errors.
- Makes code cleaner and shorter.
- Safe for API responses.
- Commonly used in React applications.
- Easy to read and maintain.

---

# Limitations

Optional chaining only prevents errors caused by:

- `null`
- `undefined`

It does **not** handle other errors.

Example

```javascript
user?.name.toUpperCase();
```

If `name` is a number instead of a string, calling `toUpperCase()` will still throw an error.

---


## 1. What is Optional Chaining?

Optional Chaining (`?.`) safely accesses properties or methods of an object without throwing an error if the object is `null` or `undefined`.

---

## 2. What is the syntax?

```javascript
object?.property
```

---

## 3. What does Optional Chaining return if the property doesn't exist?

It returns:

```javascript
undefined
```

---

## 4. Can Optional Chaining be used with arrays?

Yes.

```javascript
students?.[0]?.name
```

---

## 5. Can Optional Chaining call functions?

Yes.

```javascript
person.greet?.();
```

---

## 6. Why is Optional Chaining commonly used in React?

Because API data may not be available during the initial render. It prevents runtime errors while waiting for the data.

---

# Key Points

- Operator: `?.`
- Returns `undefined` instead of throwing an error.
- Works with objects, arrays, and function calls.
- Prevents errors when accessing nested properties.
- Frequently used with API responses in React.
- Can be combined with `??` to provide default values.
