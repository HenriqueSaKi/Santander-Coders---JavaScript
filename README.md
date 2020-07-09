<!DOCTYPE HTML5>
<h1><div align = "center">Santander Coders Java 2020 :computer:</div></h1>
<h3><div align = "center">2º Edição by Digital House</div></h3>
</br>
<h2><b><div align = "center">Introdução</div></b></h2>
<p>Em Maio de 2020, o grupo Santander, junto à Digital House, deram início à um processo seletivo bem interessante, que permitia que tanto as pessoas que já possuiam conhecimentos relacionados à programação quanto as pessoas que estavam em busca de se conhecer profissionalmente, pudessem participar e ter a chance de se destacar para fazer parte do grupo Santander como desenvolvedor JavaScript.</br>No entanto, as pessoas que realizassem o teste inicial de lógica básica já receberiam um curso online gratuito, para poderem se adentrar à esse mundo tecnológico.</p>
</br></br>
<h2><b><div align = "center">Objetivo</align></b></h2>
<p>Esse repositório irá guardar de forma bastante clara, todos os conceitos e conhecimentos adquiridos com o curso de JavaScript fornecido pela Digital House.</p>
</br></br>
<h2><b><div align = "center">Sequência cronológica do curso</div></b></h2>
:dart: Variáveis e tipos de dados </br>
:dart: Funções </br>
:dart: Condicionais </br>
:dart: Ciclos </br>
:dart: Arrays </br></br>
<h2><b><div align = "center">Variáveis e tipos de dados</div></b></h2>
<p>Assim como a maioria das linguagens de programação, devemos chamar a variável dentro do programa, para que ela possa estar sendo reservada para armazenar determinado tipo de valor.</br>No <b>JavaScript</b>, as variáveis podem ser declaradas de duas maneiras, sendo elas:</br><b>var</b> = variáveis globais</br><b>let</b> = variáveis locais</br>Veja abaixo, como elas podem ser chamadas dentro de um programa:</p>

```javascript
var primeiroValor; //Variável global
let segundoValor; //Variável local
```

</br></br>
<h2><b><div align = "center">Funções</div></b></h2>
<p>A função nada mais é do que um bloco de cógido que podemos invocar diversas vezes, ela pode ou não retornar um valor. Seu comando de escrita é o <b>function</b> e sua estrutura é basicamente como representado abaixo:</p>

```javascript
function nomeDaFuncao (value){
  return value;
}
```

</br></br>
<h2><b><div align = "center">Condicionais</div></b></h2>
<p>O uso de comandos condicionais, como o próprio nome já diz, determinam como o código deve se comportar de acordo com cada condição programada. Ele poderá ter 1, 2, 3 ou mais situações condicionais, e seus comandos são: <b>if</b>,<b>else</b> e/ou <b>else if.</b></br>Veja abaixo, um exemplo genérico de como isso pode estar sendo utilizado no seu programa.</p>

```javascript
if(condição){
  //condição se for verdadeiro
}
else{
  //condição se for falso
}
```

</br></br>
<h2><b><div align = "center">Ciclos</div></b></h2>
<p>É possível fazermos um programa realizar a mesma ação 'n' vezes, isso porque, no <b>JavaScript</b> temos o que chamamos de "Ciclos". Esses <b>Ciclos</b> podem ou não conter um intervalo determinado, o que diferencia é o comando que irá executar essa ação.</br>Veja abaixo, como e quando utilizar essa função de <b>loop</b> no seu programa</br>Quando sabemos a quantidade de vezes que o meu programa deve se repetir, significa que temos um intervalo pré-determinado, e se temos isso, sabemos quando o nosso laço irá começar e quando ele terminará. Nesse caso, podemos estar utilizando o comando <b>for</b> para executar essa ação. Segue abaixo seu modelo de escrita:</p>

```javascript
for(início; condição; modificador){
  //código que será executado em cada repetição
}
```

<p>Agora... Quando temos uma rotina que vai continuar sendo executada enquanto o resultado da condição estiver sendo verdadeira, utilizamos o comando <b>while</b>. Ele funcionará da seguinte maneira: </p>

```javascript
while(condição){
  //rotina
}
```

</br></br>
<h2><b><div align = "center">Arrays</div></b></h2>
<p>Um <b>Array</b> nos permite armazenar uma coleção de dados ordenados.</br>Sua estrutura é representada por dois colchetes '[ ]' que indicam respectivamente o início e o fim de um array. Para separar os valores dentro dele, utilizamos a vírgula ','.</br>Dentro de um array, podemos ter diversos tipos de dados, sejam elas em string, number, boolean e entre outros. A seguir, segue um exemplo da estrutura descrita:</p>

```javascript
let arrayNomes = ['Bárbara', 'Henrique', 'Peter'];
console.log("O nome dessa posição é: "+arrayNomes[2]); //O nome dessa posição é: Peter
```

</br></br>
<h1><b><div align = "center">Desafios Santander</div></b></h1>
<p><a href = "https://github.com/HenriqueSaKi/Santander_Coders-JavaScript/blob/master/Desafio-AlturaArvoreUtopica.js">:trophy: Desafio - Altura da Árvore Utópica :heavy_check_mark: </a></br><a href = "https://github.com/HenriqueSaKi/Santander_Coders-JavaScript/blob/master/Desafio-Escada.js">:trophy: Desafio - Escada :heavy_check_mark: </a></br><a href = "https://github.com/HenriqueSaKi/Santander_Coders-JavaScript/blob/master/Desafio-Fatorial.js">:trophy: Desafio - Fatorial :heavy_check_mark: </a></br><a href = "https://github.com/HenriqueSaKi/Santander_Coders-JavaScript/blob/master/Desafio-MaisMenos.js">:trophy: Desafio - Mais Menos :heavy_check_mark: </a></br><a href = "https://github.com/HenriqueSaKi/Santander_Coders-JavaScript/blob/master/Desafio-Produto.js">:trophy: Desafio - Produto :heavy_check_mark: </a></br><a href = "https://github.com/HenriqueSaKi/Santander_Coders-JavaScript/blob/master/Desafio-Professora-Furiosa.js">:trophy: Desafio - Professora Furiosa :heavy_check_mark: </a></p>
</br></br>
<p>Documento desenvolvido em HTML5 e Markdown por Henrique S. Kisaki</p>
