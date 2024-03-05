//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizzas:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_creams:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for (const [key, value] of Object.entries(person3)) {
    console.log(`${key}: ${value}`);
    console.log(Array.isArray(value));
    console.log(`My favorite ${key} are ${value}`)
}



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

function Person(name, age) {
    this.name = name;
    this.age = age;
    
    this.printInfo = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
    
    this.incrementAge = () => {
        this.age++;
    }
}

const person1 = new Person('Alice', 25);
const person2 = new Person('Bob', 30);

person1.printInfo();
person2.printInfo();

person1.incrementAge();
person1.incrementAge();
person1.incrementAge();

person1.printInfo();
person2.printInfo();

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
function wordLength(inputString) {
    return new Promise((resolve, reject) => {
        if (inputString.length > 10) {
            resolve("Big word");
        } else {
            reject("Small Number");
        }
    });
}

// Example usage
wordLength("Hello World!")
    .then(result => console.log(result))
