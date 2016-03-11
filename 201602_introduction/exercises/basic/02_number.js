// Build a small calculator function
// BONUS: Learn how to round/up down decimals
// HINT: Learn how to use the switch,case
Calc(sign,arg1,arg2){
  switch(sign){
    case +:
      console.log(arg1+arg2)
      break;
      
    case -:
      console.log(arg1-arg2)
      break;
    case *:
      console.log(arg1*arg2)
      break;
    case /:
      if(arg2 !=0){
      console.log(arg1/arg2)
      }else{
        console.log("Can't divdide by zero")
        break;
      }
    default:
      console.log("awesome calculator function")
      
  }
}
