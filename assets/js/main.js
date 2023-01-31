/* 
Frage

Array numberArray mit 5 bis 10

*/

const numberArray = [];
console.log(numberArray);

// am Ende einfügen 
numberArray.push(10);
numberArray.push(5);
numberArray.push(6);
numberArray.push(7);
numberArray.push(8);
numberArray.push(9);
numberArray.push(10);

// Am Anfang einfügen
numberArray.unshift(5);
numberArray.unshift(9);

console.log(numberArray.length); //9   
console.log(numberArray); //  Reihenfolge    9, 5, 10, 5, 6, 7, 8, 9, 10

// suche 9
console.log(numberArray.indexOf(9));   // 0
// lösche Index 0
numberArray.splice(0,1);            // löscht von Index 0 beginnend     genau 1 Element raus
console.log(numberArray); //  Reihenfolge     5, 10, 5, 6, 7, 8, 9, 10
console.log(numberArray.length);      // 8

// löschen 
numberArray.splice(0,2);          // löscht von Index 0 beginnend     genau 2 Element raus  
console.log(numberArray); //  Reihenfolge     5, 6, 7, 8, 9, 10
console.log(numberArray.length);      // 6


console.log(numberArray);
