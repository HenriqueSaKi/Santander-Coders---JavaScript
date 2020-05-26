function maisMenos(array){
  var positivos = 0;
  var zero = 0;
  var negativos = 0;
  for(var i = 0;i < array.length; i++){
    if(array[i]>0){
      positivos = positivos + 1;
    }
    else if(array[i]<0){
      negativos = negativos + 1;
    }
    else{
      zero = zero + 1;
    }
  }
  return [(positivos/array.length),(zero/array.length),(negativos/array.length)];
}
