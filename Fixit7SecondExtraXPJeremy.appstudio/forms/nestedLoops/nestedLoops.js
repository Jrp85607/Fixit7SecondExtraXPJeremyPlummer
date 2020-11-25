
/*
Create a new project named fixit7SecondExtraXPYourName.
Uses 2 nested loops
Output is a shape that shows asterisks in the number of columns and rows given by the user. 
Output is to the webpage itself using using document.write() for output. 
Runs without errors
Upload to GitHub
*/

let rows = Number(prompt("Insert the number of rows:"))
let columns = Number(prompt("Insert the number of columns:"))

for (i = 0; i < rows; i++) { 
  document.write(`<br />`)
  for (j = 0; j < columns; j++) { 
    document.write("*")
  }
}

//Test