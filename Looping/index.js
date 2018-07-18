var toDos = [
  'clean room', 
  'brush teeth', 
  'excercise',
  'study javascript',
  'eat healthy'
];

var footBallTeams = [
  'Denver Broncos',
  'Cleveland Browns',
  'Greenbay Packers'
]

// for(var i=0; i < toDos.length; i++){
//   toDos[i] = toDos[i] + '!';
//   console.log(toDos[i]);
// }

// var counterOne = 10;
// while(counterOne > 0){
//   console.log(counterOne);
//   counterOne--
// }

// var counterTwo = 10;
// do {
//   console.log(counterTwo);
//   counterTwo--;
// } while (counterTwo > 0);

toDos.forEach(logList);

footBallTeams.forEach(logList);

function logList(listItem) {
  console.log(listItem);
}