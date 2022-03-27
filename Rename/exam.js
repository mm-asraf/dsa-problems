function createValue() {
    a = 2;
}

createValue()
console.log(a)

//here the output will be 2 because bydefault js use global declaration
//and it attaches to global scope. that why you are able to access
//outside of function. by default it add var in the variable dec.


const person = {
    name: "Tommy"
}

const personTwo = Object.create(person)
console.log(personTwo.hasOwnProperty(person))

// here prototype and inheritance concept in picture
// personTwo is inheriting the property of person
// it hasnot have their own property; thatswhy you get false;