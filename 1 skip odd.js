/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

var i = 1; //initialize i to 1
while (i <= 40) { //while i is less than or equal to 40
    if (i % 2 !== 0) { //if i is odd
        i++; //increment i
        continue; //skip the rest of the loop
    }
    console.log(i); //print i
    i++; //increment i
}