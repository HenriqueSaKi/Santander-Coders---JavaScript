function escada(altura){
  var array = [];
  for(var i = 1; i <= altura; i++){
      var degrau = " ".repeat(altura-i) +"#".repeat(i);
      array.push(degrau);
  }
  return array;
}
