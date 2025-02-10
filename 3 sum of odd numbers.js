

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/

var i = 81; //initialize i to 81
var sum = 0; //initialize sum to 0

while (i <= 131) { //while i is less than or equal to 131
    if (i % 2 === 0) { //if i is even
        i++; //increment i
        continue; //skip the rest of the loop
    }
    sum += i; //add i to sum
    i++; //increment i
}

console.log(sum); //print sum

var i = 206; //initialize i to 206
sum = 0; //initialize sum to 0

while (i <= 311) { //while i is less than or equal to 311
    if (i % 2 !== 0) { //if i is odd
        i++; //increment i
        continue; //skip the rest of the loop
    }
    sum += i; //add i to sum
    i++; //increment i
}

console.log(sum); //print sum
