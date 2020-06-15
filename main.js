const sampleArray = 
[469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];


//Print array from 1...20
let kata1_heading = document.createElement('h1')
let kata1_text = document.createTextNode("Kata 1: ")
kata1_heading.appendChild(kata1_text)
document.body.append(kata1_heading)

let kata1_list = []

for (let i = 1; i <= 20; i++) {
    kata1_list.push(i)
}

let kata1_answer = document.createElement('p')
let kata1_answer_text = document.createTextNode(kata1_list)
kata1_answer.appendChild(kata1_answer_text)
document.body.append(kata1_answer)

//Display even numbers from 2...20
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


// Display the square numbers from 1 up to 100. (1, 4, 9, …, 81, 100)
let kata5_heading = document.createElement('h1')
let kata5_text = document.createTextNode("Kata 5: ")
kata5_heading.appendChild(kata5_text)
document.body.append(kata5_heading)

let kata5_list = []

for (let i = 1; i <= 10; i++) {
    kata5_list.push(i * i)
}

let kata5_answer = document.createElement('p')
let kata5_answer_text = document.createTextNode(kata5_list)
kata5_answer.appendChild(kata5_answer_text)
document.body.append(kata5_answer)

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

// Display the even numbers counting backwards from 20 to 1. (20, 18, 16, …, 4, 2)
let kata7_heading = document.createElement('h1')
let kata7_text = document.createTextNode("Kata 7: ")
kata7_heading.appendChild(kata7_text)
document.body.append(kata7_heading)

let kata7_list = []

for (let i = 20; i >= 1; i = i - 2) {
    kata7_list.push(i)
}

let kata7_answer = document.createElement('p')
let kata7_answer_text = document.createTextNode(kata7_list)
kata7_answer.appendChild(kata7_answer_text)
document.body.append(kata7_answer)

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

// Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472)
let kata11_heading = document.createElement('h1')
let kata11_text = document.createTextNode("Kata 11: ")
kata11_heading.appendChild(kata11_text)
document.body.append(kata11_heading)

let kata11_answer = document.createElement('p')
let kata11_answer_text = document.createTextNode(sampleArray)
kata11_answer.appendChild(kata11_answer_text)
document.body.append(kata11_answer)

// Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)
let kata12_heading = document.createElement('h1')
let kata12_text = document.createTextNode("Kata 12: ")
kata12_heading.appendChild(kata12_text)
document.body.append(kata12_heading)

let kata12_list = []

sampleArray.forEach(value => {
    if(value % 2 == 0) 
        kata12_list.push(value)
})

let kata12_answer = document.createElement('p')
let kata12_answer_text = document.createTextNode(kata12_list)
kata12_answer.appendChild(kata12_answer_text)
document.body.append(kata12_answer)

// Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)
// Display the square of each element in sampleArray. (219961, 570025, …, 222784)
// Display the sum of all the numbers from 1 to 20.
// Display the sum of all the elements in sampleArray.
// Display the smallest element in sampleArray.
// Display the largest element in sampleArray.



