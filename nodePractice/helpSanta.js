const fs = require('fs');

fs.readFile('./helpSanta.txt', (err, data) => {
    if (err) throw err;
    let upAndDown = data.toString();
    let floor = 0;
    basementFound = false;

    for(let i=0; i < upAndDown.length; i++)  {
        if(upAndDown.charAt(i) === '(') {
            floor++;
        } else {
            floor--;
        }
        if(basementFound === false) {
            if (floor === -1) {
                basementFound = true;
                console.log(`Santa enters the basement at character position ` + (i+1));
            }
        }
    }
    console.log(`Santa ends up on floor #` + floor);    
})