/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/


var i = 55; //initialize i to 55
while (i <= 85) { //while i is less than or equal to 85
    if (i % 2 === 0 || i % 5 === 0) { //if i is even or divisible by 5
        i++; //increment i
        continue; //skip the rest of the loop
    }
    console.log(i); //print i
    i++; //increment i
}