const fs = require('fs');

//Read a file async
fs.readFile('./hello.txt', (err, data) => {
    if (err) {
        console.log('Error!');
    } else {
        console.log('Async', data.toString('utf8'));
    }
})


//Read a file in sync
const file = fs.readFileSync('./hello.txt');

console.log('Sync', file.toString());

//Add to a file
// fs.appendFile('./hello.txt', 'This is added programatically.', err => {
//     if(err) {
//         console.log(err);
//     }
// })

//Create a file
// fs.writeFile('goodbye.txt', 'Sad to see you go', (err) => {
//     if(err) {
//         console.log(err);
//     }
// })


//Delete a file
fs.unlink('./goodbye.txt', (err) => {
    if(err){
        console.log(err);
    }
}) 

console.log('Inception');