/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/

var i = 61; //initialize i to 61
while (i <= 100) { //while i is less than or equal to 100
    if (i % 2 === 0) { //if i is even
        i++; //increment i
        continue; //skip the rest of the loop
    }
    console.log(i); //print i
    i++; //increment i
}


var i = 78; //initialize i to 78
while (i <= 98) { //while i is less than or equal to 98
    if (i % 2 !== 0) { //if i is odd
        i++; //increment i
        continue; //skip the rest of the loop
    }
    console.log(i); //print i
    i++; //increment i
}
// Output:
// 61
// 63