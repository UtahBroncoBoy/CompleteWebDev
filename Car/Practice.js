function checkDriverAge(age) {
  if (Number(age) < 18) {
    return "Sorry, you are too young to drive this car. Powering off";
  } else if (Number(age) > 18) {
    return "Powering On. Enjoy the ride!";
  } else if (Number(age) === 18) {
    return"Congratulations on your first year of driving. Enjoy the ride!";  
  }
}