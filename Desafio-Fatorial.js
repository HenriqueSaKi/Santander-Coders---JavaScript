function fatorial(num){
  var result = 0;
  if(num == 0){
    result = 1;
  }
  else{
    result = 1;
    for(var i = 1; i <= num; i++){
      result *= i;
    }
  }
  return result;
}
