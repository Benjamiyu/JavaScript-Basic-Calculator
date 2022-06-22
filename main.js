
//  This code uses JavaScript only to calculate addition, subtraction, division and multiplication.
function calcOperation() {
  let a, b, result, calculate;
  a = prompt("Enter first number");
  b = prompt("Enter second number");
  calculate = prompt("Type an operator '+', '-', '/', '*' ");

  if (calculate == "+") {
    result = Number(a) + Number(b)
  }

  else if (calculate == "-" ) {
    result = Number(a) - Number(b)
  }

  else if (calculate == "/" ) {
    result = Number(a) / Number(b)
  }

  else if (calculate == "*" ) {
    result = Number(a) * Number(b)
  }

  else if(calculate =! null){
    result =" Error"
  }
  else if(a =! null){
    result = "Error"
  }
  else if(b =! null){
    result = "Error"
  }
  
  alert(result);
}


calcOperation();