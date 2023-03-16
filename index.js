  //1
 //Mutation in context of JavaScript arrays is basically changing the array itself while non-mutation returns a whole new array which has all the Changes. 
 //JavaScript offers a lot of ways to add, remove or delete  items in an array, some of them mutate  the array i.e changes the original array whereas some create a new array (non mutating).
 //Examples of Mutating array methods: array.push, array.unshift, array.pop, array.shift, array.splice.
 //Examples of Non-mutating array methods: array.concat(), array.filter(), array.join(), array.map (), ...array (spread operator)

 //2
 let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
 languages.push('Kotlin')
 console.log (languages); // ['C#', 'JavaScript', 'Ruby', 'Python', 'Kotlin']

 languages.splice (3, 0, 'Java');
 console.log(languages); //['C#', 'JavaScript', 'Ruby', 'Java', 'PHP', 'Python', 'Kotlin']

 languages.splice (0, 0, 'Scala','Swift');
 console.log (languages); // ['Scala', 'Swift', 'C#', 'JavaScript', 'Ruby', 'Java'. 'PHP', 'Python' 'Kotlin']

 languages.splice (6, 1, 'Go', 'Rust');
 console.log (languages); // ['scala', 'Swift', 'C#',  'JavaScript", 'Ruby', 'Java', 'Go', 'Rust', 'Python', 'Kotlin']

 //3
 let fruit = ['apple', 'mango', 'banana'];
 function changeFruit (fruit){
    fruit[2] = "orange";
    return fruit;
 }
 console.log (changeFruit(fruit)); // ['apple', 'mango' 'orange']

 //4
 let numberOfArray = [4, 5, 10, -2]
 function maximumValue (numberOfArray) {
 return Math.max.apply(null, numberOfArray);
 }
 console.log("The max. value is " + maximumValue(numberOfArray)); // The max. value is 10

 //5




