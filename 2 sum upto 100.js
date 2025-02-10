/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
var i = 1;  //initialize i to 1
var sum = 0; //initialize sum to 0
while (i <= 100) { //while i is less than or equal to 100
    sum += i; //add i to sum
    if (sum >= 100) { //if sum is greater than or equal to 100
        break; //exit the loop
    }
    i++; //increment i
}
console.log(sum); //print the sum
// Output: 105