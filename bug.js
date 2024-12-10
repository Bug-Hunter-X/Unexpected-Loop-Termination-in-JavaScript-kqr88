function myFunc() {
  let i = 0;
  while (i < 10) {
    console.log(i);
    if (i === 5) {
      break; // Exit the loop
    }
    i++;
  }
}

myFunc();

//The bug here is that the loop will only print numbers from 0 to 5 and not the remaining numbers from 6 to 9.