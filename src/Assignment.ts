// problem-1 
const formatValue = <T>(value: T) => {
    if (typeof value === "string") {
        return value.toUpperCase()
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {
        return !value;
    }
}

// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));





// problem-2 
const getLength = (value: string | any[]) => {
    if (typeof value === "string") {
        return value.length
    }
    else if (Array.isArray(value)) {
        return value.length
    }
}

// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40]));




// problem-3 
class Person {
    public name: string;
    public age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`
    }
}

// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());




// problem-4 

type Item = {
    title: string;
    rating: number;
}
const filterByRating = (item: Item[]): Item[] => {
    return item.filter(item => item.rating >= 4)
}

const books = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
];

// console.log(filterByRating(books));




// problem-5 
type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
const filterActiveUsers = (user: User[]): User[] => {
    return user.filter(user => user.isActive === true)
}

const users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

// console.log(filterActiveUsers(users));



// problem-6 
interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Published:${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`)
}

const myBook: Book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
};

// printBookDetails(myBook);




// problem-7 
type Value = string | number;

function getUniqueValues(
  arr1: Value[],
  arr2: Value[]
): Value[] {
  const result: Value[] = [];

  // first array
  for (const item of arr1) {
    let exists = false;

    for (const r of result) {
      if (item === r) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      result.push(item);
    }
  }

  // second array
  for (const item of arr2) {
    let exists = false;

    for (const r of result) {
      if (item === r) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      result.push(item);
    }
  }

  return result;
}



const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
// console.log(getUniqueValues(array1, array2));





// problem-8 
// Product type definition
type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number; // optional (0–100)
};

// Function to calculate total price
function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) {
    return 0;
  }

  return products
    .map((product) => {
      const basePrice = product.price * product.quantity;

      if (product.discount !== undefined) {
        const discountAmount = (basePrice * product.discount) / 100;
        return basePrice - discountAmount;
      }

      return basePrice;
    })
    .reduce((total, current) => total + current, 0);
}


const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));

