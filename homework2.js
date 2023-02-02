//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
};

function displayFavorites(person) {
    for (let [key, value] of Object.entries(person)) {
      if (Array.isArray(value)) {
        console.log(`${key}:`);
        value.forEach(dish => {
          if (typeof dish === 'object') {
            for (let [shake, flavor] of Object.entries(dish)) {
              console.log(`  ${shake}: ${flavor}`);
            }
          } else {
            console.log(`  ${dish}`);
          }
        });
      } else {
        console.log(`${key}: ${value}`);
      }
    }
  }
  
  displayFavorites(person3);


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
    addAge(years) {
        this.age += years;
    }
}
  
  
  
const person1 = new Person("John", 30);
const person2 = new Person("Jane", 25);
  
person1.printInfo();
person2.printInfo();
  
person1.addAge(3);
person1.printInfo();
  

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const checkStringLength = (str) => {
    return new Promise((resolve, reject) => {
        if (str.length > 10) {
            resolve ("Big word");
        } else {
            reject("Small Number");
        }
    });
};

checkStringLength("My name is Eric")
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
