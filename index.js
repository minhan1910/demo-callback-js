

// Callback


// const arg1 = 1;
// const arg2 = 2;
// const arg3 = 3;


// // Argument - Đối số
// // print(arg3)

// // Higher order function -> fn accept function as parameter


// // Parameter - Tham Số
// function print(a) {
//     console.log(a);
// }

// function printDouble(a) {
//     console.log(a);
//     console.log(a);
// }

// function printAndShowMessage(a, message) {
//     console.log('Funciton: printAndShowMessage:')
//     console.log(a);
//     console.log(message);
// }

// /**
//  * 
//  * @param {Number} num1 
//  * @param {Number} num2 
//  * @param {Function} fnPrint - only one parameter
//  */
// function addAndPrint(num1, num2, fnPrint) {
//     const result = num1 + num2;    
//     fnPrint(result, 'Hello World');    
// }

// addAndPrint(1, 2, print);
// addAndPrint(1, 2, printDouble);
// // custom
// addAndPrint(1, 2, function(a) {
//     console.log(`Result: ${a}`);
// });
// addAndPrint(1, 2, printAndShowMessage);

// cơ chế hđ - flow

// lợi ích mà truyền function vào tham số của addAndPrint là gì ?

const people = [
    {
        name: 'An',
        age: 21,
    },
    {
        name: 'Di',
        age: 21,
    },
    {
        name: 'Hung',
        age: 12,
    },
    {
        name: 'Pnu',
        age: 100,
    },
];



// Hãy tìm những người có tuổi lớn hơn 10 ? 
// Hãy tìm những người có tuổi lớn hơn 40 ? 

function getPersonsGreaterThan20Ages(people) {
    const result = [];

    for (let i = 0; i <= 3; ++i) {
        const person = people[i];
    
        if (person.age > 20) {
            result.push(person);
        }
    }

    return result;
}

function getPersonsGreaterThan50Ages(people) {
    const result = [];

    for (let i = 0; i <= 3; ++i) {
        const person = people[i];
    
        if (person.age > 50) {
            result.push(person);
        }
    }

    return result;
}

// console.log(getPersonsGreaterThan50Ages(people))
// console.log(getPersonsGreaterThan20Ages(people))

// predicate - du doan
// generic hóa



// const personsGreaterThan20Ages = getPersonByCondition(people, function(age) {
//     if (age > 20) {
//         return true;
//     }
//     return false;
// });

// Hãy tìm những người có tuổi lớn hơn 20 ? 
// console.log(getPersonsGreaterThan20Ages(people));
// console.log(getPersonByCondition(people, age => age > 20));

// // Hãy tìm những người có tuổi lớn hơn 50 ? 
// console.log(getPersonsGreaterThan50Ages(people))
// console.log(getPersonByCondition(people, age => age > 50));


function ageGreaterThan10(age) {
    return age > 10;
}
// console.log(getPersonByCondition(people, ageGreaterThan10));

function getPersonByCondition(people, predicate) {
    const result = [];

    for (let i = 0; i < people.length; ++i) {
        const person = people[i];
    
        if (predicate(person)) {
            result.push(person);
        }
    }

    return result;
}
console.log(getPersonByCondition(people, person => person.age > 50));
console.log(people.filter(person => person.age > 50));


