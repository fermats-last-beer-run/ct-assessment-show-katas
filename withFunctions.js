const sampleArray = 
[469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

let generateNodes = (type, text) => {
    let parent = document.createElement(type)
    let child = document.createTextNode(text)
    parent.appendChild(child)
    document.body.append(parent)
}


// ################# KATA 1 ####################
//Print array from 1...20
generateNodes('h1', 'Kata 1: ')

let kata1_list = []

for (let i = 1; i <= 20; i++) {
    kata1_list.push(i)
}

generateNodes('p', kata1_list)


// ################# KATA 2 ####################
//Display even numbers from 2...20
generateNodes('h1', 'Kata 2: ')

let kata2_list = []
for (let i = 2; i <= 20; i = i+2) { kata2_list.push(i) }

generateNodes('p', kata2_list)


// ################# KATA 3 ####################
//Display odd numbers from 1...19
generateNodes('h1', 'Kata 3: ')

let kata3_list = []
for (let i = 1; i <= 19; i = i+2) { kata3_list.push(i) }

generateNodes('p', kata3_list)


// ################# KATA 4 ####################
// Display the multiples of 5 up to 100. (5, 10, 15, …, 95, 100)
generateNodes('h1', 'Kata 4: ')

let kata4_list = []
for (let i = 5; i <= 100; i = i+5) { kata4_list.push(i) }

generateNodes('p', kata4_list)


// ################# KATA 5 ####################
// Display the square numbers from 1 up to 100. (1, 4, 9, …, 81, 100)
generateNodes('h1', 'Kata 5: ')

let kata5_list = []
for (let i = 1; i <= 10; i++) { kata5_list.push(i * i) }

generateNodes('p', kata5_list)


// ################# KATA 6 ####################
// Display the numbers counting backwards from 20 to 1. (20, 19, 18, …, 2, 1)
generateNodes('h1', 'Kata 6: ')

let kata6_list = []

for (let i = 20; i >= 1; i--) { kata6_list.push(i) }

generateNodes('p', kata6_list)


// ################# KATA 7 ####################
// Display the even numbers counting backwards from 20 to 1. (20, 18, 16, …, 4, 2)
generateNodes('h1', 'Kata 7: ')

let kata7_list = []

for (let i = 20; i >= 1; i = i - 2) { kata7_list.push(i) }

generateNodes('p', kata7_list)


// ################# KATA 8 ####################
// Display the odd numbers from 20 to 1, counting backwards. (19, 17, 15, …, 3, 1)
generateNodes('h1', 'Kata 8: ')

let kata8_list = []
for (let i = 19; i >= 1; i = i - 2) { kata8_list.push(i) }

generateNodes('p', kata8_list)


// ################# KATA 9 ####################
// Display the multiples of 5, counting down from 100 to 1. (100, 95, 90, …, 10, 5)
generateNodes('h1', 'Kata 9: ')

let kata9_list = []
for (let i = 100; i >= 1; i = i - 5) { kata9_list.push(i) }

generateNodes('p', kata9_list)


// ################# KATA 10 ####################
// Display the square numbers, counting down from 100. (100, 81, 64, …, 4, 1)
generateNodes('h1', 'Kata 10: ')

let kata10_list = []
for (let i = 10; i >= 1; i--) { kata10_list.push(i * i) }

generateNodes('p', kata10_list)


// ################# KATA 11 ####################
// Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472)
generateNodes('h1', 'Kata 11: ')

generateNodes('p', sampleArray)


// ################# KATA 12 ####################
// Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)
generateNodes('h1', 'Kata 12: ')

let kata12_list = []

sampleArray.forEach(value => {
    if(value % 2 == 0) 
        kata12_list.push(value)
})

generateNodes('p', kata12_list)


// ################# KATA 13 ####################
// Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)
generateNodes('h1', 'Kata 13: ')

let kata13_list = []

for (let i = 0; i < sampleArray.length; i++) {
    if(sampleArray[i] % 2 == 1) 
        kata13_list.push(sampleArray[i])
}

generateNodes('p', kata13_list)


// ################# KATA 14 ####################
// Display the square of each element in sampleArray. (219961, 570025, …, 222784)
generateNodes('h1', 'Kata 14: ')

let kata14_list = []

for (let i = 0; i < sampleArray.length; i++) { 
    kata14_list.push(sampleArray[i] * sampleArray[i])
}

generateNodes('p', kata14_list)


// ################# KATA 15 ####################
// Display the sum of all the numbers from 1 to 20.
generateNodes('h1', 'Kata 15: ')

let kata15_sum = 0

for(let i = 1; i <= 20; i++) {
    kata15_sum += i
}

generateNodes('p', kata15_sum)


// ################# KATA 16 ####################
// Display the sum of all the elements in sampleArray
generateNodes('h1', 'Kata 16: ')

let kata16_sum = 0

for (let i = 0; i < sampleArray.length; i++) { 
    kata16_sum += sampleArray[i]
}

generateNodes('p', kata16_sum)


// ################# KATA 17 ####################
// Display the smallest element in sampleArray.
generateNodes('h1', 'Kata 17: ')

let minValue = Math.min(...sampleArray)

generateNodes('p', minValue)


// ################# KATA 18 ####################
// Display the largest element in sampleArray.
generateNodes('h1', 'Kata 18: ')

let maxValue = Math.max(...sampleArray)

generateNodes('p', maxValue)



