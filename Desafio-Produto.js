var entrada = [1, 4, 5];
var result = 1;

function produto(entrada){
  for(var i = 0; i < entrada.length; i++){
    result = result*entrada[i];
  }
  return result;
}

produto(entrada);
console.log(result);
