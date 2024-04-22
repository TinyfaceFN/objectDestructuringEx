//      Q1: 
//  console.log(8) , console.log(1846)

//  
//      Q2:
//  yearNeptuneDiscovered: 1846,
//  yearMarsDiscovered: 1659

//       Q3:
// getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ? - `Your name is Alejandro and you like purple;
// getUserData({firstName: "Melissa"}) // ? `Your name is Melissa and you like green;
// getUserData({}) // ? `Your name is undefined and you like green

// Array Destructuring 1
//console.log(first); // ?  Manya
// console.log(second); // ? Marissa
// console.log(third); // ? Chi

// Array Destructuring 2

// console.log(raindrops); // ?  "Raindrops on roses"
// console.log(whiskers); // ? "whiskers on kittens"
// console.log(aFewOfMyFavoriteThings); // ? ["Bright copper kettles",
//   "warm woolen mittens",
//   "Brown paper packages tied up with strings"]


// Array Destructuring 3
// console.log(numbers) // ? [10,30,20]

// let { a, b } = {
//     numbers: {
//         a: 1,
//         b: 2
//     }
// };

const obj = {
    numbers: {
        a: 1,
        b: 2
    }
}
const { a, b } = obj.numbers

let arr = [55, 24];
[arr[1], arr[0]] = [arr[0], arr[1]];
console.log(arr)

let raceResults = (arr) => {
    let [first, second, third, ...rest] = arr
    return { first, second, third, rest }
}