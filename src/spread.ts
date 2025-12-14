const friends = ["arman", "tanvir", "samiya"];
const schoolFriends = ["hamim", "tushar"];
const collageFriends = ["jisan", "rayhan"]

friends.push(...schoolFriends, ...collageFriends)

// console.log(friends)




// Spread operator ব্যবহার করে ওই array-এর exact copy বানাও। 
const numbers = [1, 2, 3, 4];
const newNumber = [...numbers]
newNumber.push(5)


// console.log(numbers)
// console.log(newNumber)



// Spread operator ব্যবহার করে দুইটাকে merge করো। 
const frontEnd = ["HTML", "CSS"];
const backEnd = ["Node", "Express"];
frontEnd.push(...backEnd)
// console.log(frontEnd)




// Spread operator ব্যবহার করে শুরুতে আর শেষে element যোগ করো। 
const fruits = ["apple", "banana"];
const totalFruits = ["mango", ...fruits, "orange"]
// console.log(totalFruits)




// Spread operator দিয়ে copy বানাও এবং নতুন object-এ role add করো।

const user: { name: string, age: number } = {
    name: "Arman",
    age: 21
};

const role: { role: string } = {
    ...user,
    role: "developer"
}

// console.log(role)



// Spread operator ব্যবহার করে merge করো। 
const personal = { name: "Arman", age: 21 };
const professional = { skill: "Frontend", experience: "1 year" };

const result = {...personal, ...professional}
// console.log(result)


// Spread operator ব্যবহার করে age update করো, original object change করা যাবে না। 
const student = {
  name: "Rafi",
  age: 20
};
// console.log(student)

const newData = {...student}
newData.age=22;
// console.log(newData)







