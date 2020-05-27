function alturaArvoceUtopica(ciclo){
  var altura = 1;
  if(ciclo == 0){
    return altura;
  }
  else{
    for(var i = 1; i <= ciclo; i++){
      if(i%2!=0){ //Dobra altura
  	    altura = altura * 2;
      }
      else{ //Cresce 1 m
        altura = altura + 1;
      }
    }
    return altura;
  }
}
