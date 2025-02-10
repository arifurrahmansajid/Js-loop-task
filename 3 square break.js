/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

var i = 1; //initialize i to 1    
while (i <= 100) { //while i is less than or equal to 100
    if (Math.sqrt(i) % 1 === 0 && i !== 1) { //if i is a square number and not 1
        break; //exit the loop
    }
    console.log(i); //print i
    i++; //increment i
}
// Output: 1, 2, 3