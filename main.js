const sampleArray = 
[469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

// ################# KATA 1 ####################
//Print array from 1...20

/*
Create h1 element, create a textNode
APPEND textNode to h1 element
 --- the browser will see it as <h1>textNode</h1>
APPEND the h1 element to the document.body
*/
let kata1_heading = document.createElement('h1')
let kata1_text = document.createTextNode("Kata 1: ")
kata1_heading.appendChild(kata1_text)
document.body.append(kata1_heading)

// Create a list to work with
let kata1_list = []

/*
We want to LOOP over the values 1,2 ... 19,20
let i = 1 --- we start at 1
i <= 20 --- we want to go up to and include 20
i++ --- increasing i by 1 each time, this is the same thing as ' i = i + 1 ', just shorter
*/
for (let i = 1; i <= 20; i++) {
    //Push each i value to the list
    kata1_list.push(i)
}

// Same thing as above, we create a 'p' element, create a textNode, stick them together
let kata1_answer = document.createElement('p')
let kata1_answer_text = document.createTextNode(kata1_list)
kata1_answer.appendChild(kata1_answer_text)
document.body.append(kata1_answer)

// ################# KATA 2 ####################
//Display even numbers from 2...20
//This is essentially the same as 1, just changing the for loop 
let kata2_heading = document.createElement('h1')
let kata2_text = document.createTextNode("Kata 2: ")
kata2_heading.appendChild(kata2_text)
document.body.append(kata2_heading)

let kata2_list = []

for (let i = 2; i <= 20; i = i+2) {
    kata2_list.push(i)
}

let kata2_answer = document.createElement('p')
let kata2_answer_text = document.createTextNode(kata2_list)
kata2_answer.appendChild(kata2_answer_text)
document.body.append(kata2_answer)

// ################# KATA 3 ####################
//Display odd numbers from 1...19
let kata3_heading = document.createElement('h1')
let kata3_text = document.createTextNode("Kata 3: ")
kata3_heading.appendChild(kata3_text)
document.body.append(kata3_heading)

let kata3_list = []

for (let i = 1; i <= 19; i = i+2) {
    kata3_list.push(i)
}

let kata3_answer = document.createElement('p')
let kata3_answer_text = document.createTextNode(kata3_list)
kata3_answer.appendChild(kata3_answer_text)
document.body.append(kata3_answer)

// ################# KATA 4 ####################
// Display the multiples of 5 up to 100. (5, 10, 15, …, 95, 100)
let kata4_heading = document.createElement('h1')
let kata4_text = document.createTextNode("Kata 4: ")
kata4_heading.appendChild(kata4_text)
document.body.append(kata4_heading)

let kata4_list = []

for (let i = 5; i <= 100; i = i+5) {
    kata4_list.push(i)
}

let kata4_answer = document.createElement('p')
let kata4_answer_text = document.createTextNode(kata4_list)
kata4_answer.appendChild(kata4_answer_text)
document.body.append(kata4_answer)

// ################# KATA 5 ####################
// Display the square numbers from 1 up to 100. (1, 4, 9, …, 81, 100)
let kata5_heading = document.createElement('h1')
let kata5_text = document.createTextNode("Kata 5: ")
kata5_heading.appendChild(kata5_text)
document.body.append(kata5_heading)

let kata5_list = []
// Here we are seperating the parts of our program,
// we use the FOR LOOP to travel across each element of the array
// and we use the push(i * i) to actually perform the logic
for (let i = 1; i <= 10; i++) {
    kata5_list.push(i * i)
}

let kata5_answer = document.createElement('p')
let kata5_answer_text = document.createTextNode(kata5_list)
kata5_answer.appendChild(kata5_answer_text)
document.body.append(kata5_answer)

// ################# KATA 6 ####################
// Display the numbers counting backwards from 20 to 1. (20, 19, 18, …, 2, 1)
let kata6_heading = document.createElement('h1')
let kata6_text = document.createTextNode("Kata 6: ")
kata6_heading.appendChild(kata6_text)
document.body.append(kata6_heading)

let kata6_list = []

for (let i = 20; i >= 1; i--) {
    kata6_list.push(i)
}

let kata6_answer = document.createElement('p')
let kata6_answer_text = document.createTextNode(kata6_list)
kata6_answer.appendChild(kata6_answer_text)
document.body.append(kata6_answer)

// ################# KATA 7 ####################
// Display the even numbers counting backwards from 20 to 1. (20, 18, 16, …, 4, 2)
// We are just doing the reverse of the earliest KATAs
let kata7_heading = document.createElement('h1')
let kata7_text = document.createTextNode("Kata 7: ")
kata7_heading.appendChild(kata7_text)
document.body.append(kata7_heading)

let kata7_list = []

// Note that we start high (i = 20) and end low, using the 'i = i - 2' to decrement
for (let i = 20; i >= 1; i = i - 2) {
    kata7_list.push(i)
}

let kata7_answer = document.createElement('p')
let kata7_answer_text = document.createTextNode(kata7_list)
kata7_answer.appendChild(kata7_answer_text)
document.body.append(kata7_answer)

// ################# KATA 8 ####################
// Display the odd numbers from 20 to 1, counting backwards. (19, 17, 15, …, 3, 1)
let kata8_heading = document.createElement('h1')
let kata8_text = document.createTextNode("Kata 8: ")
kata8_heading.appendChild(kata8_text)
document.body.append(kata8_heading)

let kata8_list = []

for (let i = 19; i >= 1; i = i - 2) {
    kata8_list.push(i)
}

let kata8_answer = document.createElement('p')
let kata8_answer_text = document.createTextNode(kata8_list)
kata8_answer.appendChild(kata8_answer_text)
document.body.append(kata8_answer)

// ################# KATA 9 ####################
// Display the multiples of 5, counting down from 100 to 1. (100, 95, 90, …, 10, 5)
let kata9_heading = document.createElement('h1')
let kata9_text = document.createTextNode("Kata 9: ")
kata9_heading.appendChild(kata9_text)
document.body.append(kata9_heading)

let kata9_list = []

for (let i = 100; i >= 1; i = i - 5) {
    kata9_list.push(i)
}

let kata9_answer = document.createElement('p')
let kata9_answer_text = document.createTextNode(kata9_list)
kata9_answer.appendChild(kata9_answer_text)
document.body.append(kata9_answer)

// ################# KATA 10 ####################
// Display the square numbers, counting down from 100. (100, 81, 64, …, 4, 1)
let kata10_heading = document.createElement('h1')
let kata10_text = document.createTextNode("Kata 10: ")
kata10_heading.appendChild(kata10_text)
document.body.append(kata10_heading)

let kata10_list = []

for (let i = 10; i >= 1; i--) {
    kata10_list.push(i * i)
}

let kata10_answer = document.createElement('p')
let kata10_answer_text = document.createTextNode(kata10_list)
kata10_answer.appendChild(kata10_answer_text)
document.body.append(kata10_answer)

// ################# KATA 11 ####################
// Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472)
let kata11_heading = document.createElement('h1')
let kata11_text = document.createTextNode("Kata 11: ")
kata11_heading.appendChild(kata11_text)
document.body.append(kata11_heading)

let kata11_answer = document.createElement('p')
let kata11_answer_text = document.createTextNode(sampleArray)
kata11_answer.appendChild(kata11_answer_text)
document.body.append(kata11_answer)

// ################# KATA 12 ####################
// Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)
let kata12_heading = document.createElement('h1')
let kata12_text = document.createTextNode("Kata 12: ")
kata12_heading.appendChild(kata12_text)
document.body.append(kata12_heading)

let kata12_list = []

/* Here we use the forEach method
    since it is a method, we have to call it on an object (sampleArray.forEach(*))
        within the forEach we define a temporary variable named value - this variable will become each value of the array in turn
        we use arrow function notation (=>) to create a function
        and within that function we perform our actions.
    So the basic logic here is -
        for each value of sampleArray, perform some function
        www.mdn.io/foreach
        */

sampleArray.forEach(value => {
    // We use the MODULUS operator here to test if the value is EVEN
    // https://youtu.be/MrTtsX2Wg9Q == a decent video on the modulo
    if(value % 2 == 0) 
        kata12_list.push(value)
})

let kata12_answer = document.createElement('p')
let kata12_answer_text = document.createTextNode(kata12_list)
kata12_answer.appendChild(kata12_answer_text)
document.body.append(kata12_answer)

// ################# KATA 13 ####################
// Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)
let kata13_heading = document.createElement('h1')
let kata13_text = document.createTextNode("Kata 13: ")
kata13_heading.appendChild(kata13_text)
document.body.append(kata13_heading)

let kata13_list = []

for (let i = 0; i < sampleArray.length; i++) {
    if(sampleArray[i] % 2 == 1) 
        kata13_list.push(sampleArray[i])
}

let kata13_answer = document.createElement('p')
let kata13_answer_text = document.createTextNode(kata13_list)
kata13_answer.appendChild(kata13_answer_text)
document.body.append(kata13_answer)

// ################# KATA 14 ####################
// Display the square of each element in sampleArray. (219961, 570025, …, 222784)
let kata14_heading = document.createElement('h1')
let kata14_text = document.createTextNode("Kata 13: ")
kata14_heading.appendChild(kata14_text)
document.body.append(kata14_heading)

let kata14_list = []

for (let i = 0; i < sampleArray.length; i++) { 
    kata14_list.push(sampleArray[i] * sampleArray[i])
}

let kata14_answer = document.createElement('p')
let kata14_answer_text = document.createTextNode(kata14_list)
kata14_answer.appendChild(kata14_answer_text)
document.body.append(kata14_answer)

// ################# KATA 15 ####################
// Display the sum of all the numbers from 1 to 20.
let kata15_heading = document.createElement('h1')
let kata15_text = document.createTextNode("Kata 15: ")
kata15_heading.appendChild(kata15_text)
document.body.append(kata15_heading)

// we create a variable to hold the sum....
let kata15_sum = 0

for(let i = 1; i <= 20; i++) {
    // .... and then just add each value to that sum variable
    kata15_sum += i
}

let kata15_answer = document.createElement('p')
let kata15_answer_text = document.createTextNode(kata15_sum)
kata15_answer.appendChild(kata15_answer_text)
document.body.append(kata15_answer)

// ################# KATA 16 ####################
// Display the sum of all the elements in sampleArray
let kata16_heading = document.createElement('h1')
let kata16_text = document.createTextNode("Kata 16: ")
kata16_heading.appendChild(kata16_text)
document.body.append(kata16_heading)

let kata16_sum = 0

// Same as the KATA before, but we use the FOR LOOP to go over the sampleArray
for (let i = 0; i < sampleArray.length; i++) { 
    // ... then we add each element to the variable
    kata16_sum += sampleArray[i]
}

let kata16_answer = document.createElement('p')
let kata16_answer_text = document.createTextNode(kata16_sum)
kata16_answer.appendChild(kata16_answer_text)
document.body.append(kata16_answer)

// ################# KATA 17 ####################
// Display the smallest element in sampleArray.
let kata17_heading = document.createElement('h1')
let kata17_text = document.createTextNode("Kata 17: ")
kata17_heading.appendChild(kata17_text)
document.body.append(kata17_heading)

// To get the minimum value I'm using the Math.min function
// Math.min() only takes a set of parameter
//          ex; Math.min(1,2,3) -- NOT AN ARRAY
// so we have to use (...Array) notation to turn our array into a list of parameters
// this is a little more complex than that so it might be worth looking up Math.min() and (...Array) notation
let minValue = Math.min(...sampleArray)

let kata17_answer = document.createElement('p')
let kata17_answer_text = document.createTextNode(minValue)
kata17_answer.appendChild(kata17_answer_text)
document.body.append(kata17_answer)

// ################# KATA 18 ####################
// Display the largest element in sampleArray.
let kata18_heading = document.createElement('h1')
let kata18_text = document.createTextNode("Kata 18: ")
kata18_heading.appendChild(kata18_text)
document.body.append(kata18_heading)

//Same as before but we are using Math.max()
let maxValue = Math.max(...sampleArray)

let kata18_answer = document.createElement('p')
let kata18_answer_text = document.createTextNode(maxValue)
kata18_answer.appendChild(kata18_answer_text)
document.body.append(kata18_answer)