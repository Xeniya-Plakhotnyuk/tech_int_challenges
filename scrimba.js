/* 
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palindrome, return true. If it isn't, return false.

Example input: "motorbike"
Example output: false

Example input: "rotator" 
Example output: true
*/

// function isPalindrome(str){
// let str1 = str.toLowerCase().split("")
// let str2 = str.toLowerCase().split("").reverse()
// return str1.join("") === str2.join("")

// }


// // Test your function
// console.log(isPalindrome("abba"));
// console.log(isPalindrome("civic"));
// console.log(isPalindrome("octopus"));
// console.log(isPalindrome("pumpkins"));
// console.log(isPalindrome("madam"));

// const password = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23"; 
 
// function removeDupeChars(chars){
//     const uniqueChars = new Set(chars);
//     return [...uniqueChars].join('');

// }

// console.log(removeDupeChars(password));

// Example input: "Peggy Porth"
// Example output: {p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1}

// Your function should NOT count spaces and should not be case sensitive (a
// lowercase t and a capital T should be considered the same character).

// */ 

// function countChars(str){
//    const myName = str.toLowerCase().split(" ").join('')
//    let count ={}

//    for(let i = 0; i < myName.length; i++){
//     if(!count[myName[i]]){
//         count[myName[i]] = 1; 
//     } else {
//       // if the character is already in the object, increment that char's value
//       count[myName[i]] += 1;
//     }
// }
// return count

//    }

  

// console.log(countChars("Xeniya Plakhotnyuk"));


// Only unique elements

// const eggScrambleRecipe = [
//     "🥓 bacon",
//     "🥓 bacon", 
//     "🍳 eggs",
//     "🫑 green peppers",
//     "🧀 cheese",
//     "🌶️ hot sauce",
//     "🥓 bacon",
//     "🥦 broccoli", 
//     "🧀 cheese",
//     "🥦 broccoli", 
//     "🌶️ hot sauce"
// ]

// function removeDupesFromArray(arr){
//     let uniqueChars = [...new Set(arr)]
//     return uniqueChars.join(',')
// }

// console.log(removeDupesFromArray(eggScrambleRecipe));


// Flatten the array
// const kittyScores = [
//     [39, 99, 76], 89, 98, [87, 56, 90], 
//     [96, 95], 40, 78, 50, [63]
// ];

// const kittyPrizes = [
//     ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
//     ["🐟","💐", "💐"], "💵", "💵", ["🐟"], "🐟"
// ];

// function flatten(arr){
//  const newArr = arr.flat()
//  return newArr
// }

// console.log(flatten(kittyPrizes));
// console.log(flatten(kittyScores));


// Sum of all the elements in the aray
// const studentCount = [50,53,61,67,60,70,78,80,80,81,90,110];

// function sumArray(arr){
// return arr.reduce((acc, student) => 
//     acc + student
//    )

// }

// console.log(sumArray(studentCount));

// const studentCount = [50,53,61,67,60,70,78,80,80,81,90,110];

// function sumArray(arr){
// let sum = 0
// arr.forEach(element =>{
//     sum +=element
// })
//    return sum 
//     }
  

// console.log(sumArray(studentCount));

// const gameNightFood = {
//     "🍕 pizza": 3, 
//     "🌮 tacos": 10, 
//     "🥗 salads": 17,
//     "🍝 pasta": 5
// }

// function findTheWinner(obj){
// let winnerVotes = 0
// let winnerValue = ''

// for (let food in obj){
//     if(obj[food] > winnerVotes){
//         winnerVotes = obj[food]
//         winnerValue = food
//     }
// }
// return `The winner is ${winnerValue} with the ${winnerVotes} votes`
// }

// console.log(findTheWinner(gameNightFood));


const userData = [
    {
       "name":{
          "title":"Mr",
          "first":"Levent",
          "last":"Busser"
       },
       "dob":{
          "date":"1971-08-21T01:08:00.099Z",
          "age":51
       }
    },
    {
       "name":{
          "title":"Mr",
          "first":"Kornelius",
          "last":"Hamnes"
       },
       "dob":{
          "date":"1961-09-23T13:13:49.283Z",
          "age":61
       }
    },
    {
       "name":{
          "title":"Mademoiselle",
          "first":"Ute",
          "last":"Henry"
       },
       "dob":{
          "date":"1956-06-30T11:33:42.549Z",
          "age":66
       }
    },
    {
       "name":{
          "title":"Mr",
          "first":"Estéfano",
          "last":"Monteiro"
       },
       "dob":{
          "date":"1945-07-16T19:48:22.796Z",
          "age":77
       }
    },
    {
       "name":{
          "title":"Mr",
          "first":"Oğuzhan",
          "last":"Beşerler"
       },
       "dob":{
          "date":"1947-09-28T10:12:30.102Z",
          "age":75
       }
    },
    {
       "name":{
          "title":"Mrs",
          "first":"Susanna",
          "last":"Burke"
       },
       "dob":{
          "date":"1961-06-13T21:41:24.455Z",
          "age":61
       }
    },
    {
       "name":{
          "title":"Mrs",
          "first":"Haritya",
          "last":"Starickiy"
       },
       "dob":{
          "date":"1945-12-14T21:29:22.822Z",
          "age":76
       }
    },
    {
       "name":{
          "title":"Miss",
          "first":"Nadja",
          "last":"Branković"
       },
       "dob":{
          "date":"1993-05-24T11:22:50.967Z",
          "age":29
       }
    },
    {
       "name":{
          "title":"Ms",
          "first":"Sonja",
          "last":"Lenzen"
       },
       "dob":{
          "date":"1945-03-21T04:33:04.759Z",
          "age":77
       }
    },
    {
       "name":{
          "title":"Ms",
          "first":"Shubhangi",
          "last":"Chatterjee"
       },
       "dob":{
          "date":"1956-12-25T18:50:29.484Z",
          "age":65
       }
    }
 ]

 function transformData(data){
    // use map to loop through the data
    return data.map(({name, dob})=> {
              
        return {
            fullName: `${name.first} ${name.last}` ,
            birthday: new Date(dob.date).toDateString()
        }
      
    })
}

console.log(transformData(userData));