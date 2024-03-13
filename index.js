//? CARA COMMENT / UNCOMMENT CEPAT DI JS
// CTRL + /

i = 3

i /= 3
i = i + 1

// increment
// penambahan 1
// i ++

// decrement
// pengurangan 1
// i --

//? cari angka prima
console.time('executionTime')
console.log(2)
console.log(3)
for (let i = 0; i < 5; i++) {
    //? NESTED LOOP
    if (i % 2 === 0) continue

    let putaran = Math.ceil(i / 2)
    for (let angkaSebelumnya = 2; angkaSebelumnya < putaran; angkaSebelumnya++) {
        if (i % angkaSebelumnya === 0) break;
        if (angkaSebelumnya === putaran - 1) {
            console.log(i);
        }
    }
}

console.timeEnd('executionTime')


//? CONTINUE AND BREAK
//* continue : skip loop
//* break : akan hancurin sebuah loop
// for (let i = 0; i < 10; i++) {
//     console.log('loop ke 1', 'ke', i)

//     if (i % 2 === 0) continue
//     //? nested loop
//     for (let j = 0; j < 10; j++) {
//         console.log('loop ke 2', 'ke', j)
//         if (j === 7) break
//     }
// }

//TODO: problem solving, menyelesaikan masalah dengan efisien

//? buletin angka di js
// console.log(Math.floor(4.99));