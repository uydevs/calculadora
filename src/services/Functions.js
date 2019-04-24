export const calculate = (number1, number2, operation) => {
  switch(operation){
    case "+" : return number1+number2
    break;
    case "-": return number1-number2
    break;
    case "*": return number1*number2
    break;
    case "/": return number1/number2
    break;
    default: return 0

  }
}