<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>I didn't decalared anything like greetign . Without declaring if i want to console the value of the element that it will throw a reference Error. It will give me reference error because it can't find the reference or declartion of the vairable</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Here i had given a = 1 , and it is a number. And i had given b = "2" . That seems number but it is a string because of the "". So, if I try to add a number with a string. Than ultimately my value will be a string. So, that's why 1 converted to "1" because i was adding it with a string "2".So, the answer came "1" + "2" = "12"</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>First of all, I took the first element of my array and put it into a object as a value. So,I put only one data that's why it stores the data. And I changed the data in the 3rd line. And it will not make any effect on the food variable. Because i am not holding the references form there. I just copied one value item from there.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>I called a function. But i didn't give the value of the parameter. That means i didn't defined the value of the parameter. So, if the function return the value of the undefined parameter value.Than simply it will return undefined</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>We are using a forEach method that iterates over the nums variable.Inside the forEach method we check if the num value is truthy value than add 1 with count. But we can see the first element of the nums array is 0. And 0 is a falsy value. That's why in the first iteration it will not add 1 with the count.That's why it will be 3. </i>

</p>
</details>
