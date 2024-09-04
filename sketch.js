//disgraçaveia || tela inicial
let telainicial = 0;
let tela1jogador = 1;
let tela2jogador = 2;
let telaatual = 0;
let xdoicone = 235;
let ydoicone1jogador = 239;
let ydoicone2jogador = 264;
let ydoicone = ydoicone1jogador;

//disgraçaveia0 || x, y e "z" da minha bela ball
let Xdaminhaball = 320;
let Ydaminhaball = 240;
let velocidadedoXdaminhaballainicial = 4;
let velocidadedoXdaminhaball = velocidadedoXdaminhaballainicial;
let velocidadedoYdaminhaball = 4;
let tamanhodaminhaball = 25;
let raio = tamanhodaminhaball / 2 ;

//disgraçaveia1 || x, y e talvez "z" do player1
let Xdoplayer1 = 20;
let Ydoplayer1 = 180;
let player1cumprimento = 18;
let player1altura = 100;

//digraçaveia2 || x, y e talvez "z" do player2
let Xdoplayer2 = 600;
let Ydoplayer2 = 180;

//disgraçaveia3 || mostra os pontaolegal
let pontosdoplayer1 = 0;
let pontosdoplayer2 = 0;

//disgraçaveia4 || sons ultra mega irados hyper cools legais
let Coin;
let raquetada1;
let raquetada2;
let raquetada3;
let raquetada4;
let raquetada5;

//não vou colocar uma trilha sonora porque acho que não combina com o pong.

function preload(){
  Coin = loadSound("Coin.wav")
  raquetada1 = loadSound("raquetada1.wav")
  raquetada2 = loadSound("raquetada2.wav")
  raquetada3 = loadSound("raquetada3.wav")
  raquetada4 = loadSound("raquetada4.wav")
  
  if (velocidadedoXdaminhaball >2 || velocidadedoYdaminhaball >2){
  raquetada5 = loadSound("raquetada3.wav")
}else{
  raquetada5 = loadSound("raquetada4.wav")
}
} 

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(0);
   if(telaatual === telainicial) {
    TitleScreen();
    TitleScreenComand();
  } else {
  bolairada();
  movimentosdaminhaball();
  //limitedevelocidade();
  colisaodaparedecomaminhaball();
  player1();
  player2();
  colisaodoplayer1comminhaball();
  colisaodoplayer2comminhaball();
  pontosdosplayers();
  
    if (telaatual === tela1jogador) {
      movimentosdoplayer1hihihi();
      movimentosdoplayer2hihihi();
    } else {
     movimentosdoplayer1hihihiquandojogarde2();
  movimentosdoplayer2hihihiquandojogarde2();
    }
  }
}

  function TitleScreen() {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  fill(255);
  circle(xdoicone, ydoicone, 14);

  stroke(255);
  textAlign(CENTER);
  textSize(30);
  fill(color(255, 140, 0));
  fill(255);
  text("(ping) PONG", 300, 200);

  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  fill(255);
  text("1 Player", 280, 245);

  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  fill(255);
  text("2 Player", 280, 270);
}

function TitleScreenComand() {
  if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
    ydoicone = ydoicone1jogador;
  }
  else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
    ydoicone = ydoicone2jogador;
  }
  else if (keyIsDown(ENTER)) {
    if (ydoicone === ydoicone1jogador) {
      telaatual = tela1jogador;
    } else {
      telaatual = tela2jogador;
    }
  }
}

function bolairada(){
  circle(Xdaminhaball, Ydaminhaball, tamanhodaminhaball);
}

function movimentosdaminhaball(){
  Xdaminhaball += velocidadedoXdaminhaball;
  Ydaminhaball += velocidadedoYdaminhaball;
}

function colisaodaparedecomaminhaball(){
  if (Xdaminhaball + raio> width){
    //velocidadedoXdaminhaball *= -1
    velocidadedoXdaminhaball = velocidadedoXdaminhaballainicial *-1;
    Xdaminhaball = 320;
    Ydaminhaball = 240;
    pontosdoplayer1 += 1;
    Coin.play();
  }
  if (Xdaminhaball - raio< 0){
    velocidadedoXdaminhaball = velocidadedoXdaminhaballainicial;
    Xdaminhaball = 320;
    Ydaminhaball = 240;
    pontosdoplayer2 += 1;
    Coin.play();
  }
   
  if (Ydaminhaball + raio> height || Ydaminhaball - raio< 0){
   raquetada5.play();
    velocidadedoYdaminhaball *= -1;
}
}

function player1(){
  stroke(color(255,99,71))
  fill(color(255,99,71))
  rect(Xdoplayer1, Ydoplayer1, player1cumprimento, player1altura)
}

function player2(){
  stroke(color(0,191,255))
  fill(color(0,191,255))
  rect(Xdoplayer2, Ydoplayer2, player1cumprimento, player1altura)
}


function movimentosdoplayer1hihihi(){
  if (keyIsDown(UP_ARROW) || keyIsDown(87)){
    Ydoplayer1 -= 10;
  }
  if (keyIsDown(DOWN_ARROW) || keyIsDown(83)){
    Ydoplayer1 += 10;
  }
}

function movimentosdoplayer1hihihiquandojogarde2(){
  if (keyIsDown(87)){
    Ydoplayer1 -= 10;
  }
  if (keyIsDown(83)){
    Ydoplayer1 += 10;
  }
}

function movimentosdoplayer2hihihiquandojogarde2(){
  if (keyIsDown(UP_ARROW)){
    Ydoplayer2 -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    Ydoplayer2 += 10;
}
}

//function movimentosdoplayer2hihihi(){
  //if (Xdaminhaball > 320){
  //if (Ydaminhaball < Ydoplayer2){
    //Ydoplayer2 -= 10;
  //}
  //if (Ydaminhaball > Ydoplayer2){
    //Ydoplayer2 += 10;
  //}
 //}
//}

function movimentosdoplayer2hihihi() {
  // Calcula o centro vertical do player 2
  let centroYPlayer2 = Ydoplayer2 + player1altura / 2;

  // Calcula o centro vertical da bola
  let centroYBola = Ydaminhaball;

  // Define uma margem de erro para centralização (pode ajustar conforme necessário)
  let margemDeErro = 10;

  // Move o player 2 em direção ao centro vertical da bola
  if (Xdaminhaball > 320){
  if (centroYBola < centroYPlayer2 - margemDeErro) {
    Ydoplayer2 -= 10;
  } else if (centroYBola > centroYPlayer2 + margemDeErro) {
    Ydoplayer2 += 10;
  }
}
}

function colisaodoplayer1comminhaball(){
  if (Xdaminhaball - raio < Xdoplayer1 + player1cumprimento
       && Xdaminhaball - velocidadedoXdaminhaball - raio >= Xdoplayer1 + player1cumprimento // Adicionado
      && Ydaminhaball - raio < Ydoplayer1 + player1altura
      && Ydaminhaball + raio > Ydoplayer1){
   velocidadedoXdaminhaball = (velocidadedoXdaminhaball *-1) *1.05;
    velocidadedoYdaminhaball *1.05;
    raquetada2.play();
  }
}

function colisaodoplayer2comminhaball(){
  // Calcula as bordas do jogador 2
 let leftEdge = Xdoplayer2;
  let rightEdge = Xdoplayer2 + player1cumprimento;
  let topEdge = Ydoplayer2;
  let bottomEdge = Ydoplayer2 + player1altura;
 
  // Verifica se houve colisão entre a bola e o jogador 2
 if (Xdaminhaball + raio > leftEdge &&
     Xdaminhaball - raio < rightEdge &&
      Ydaminhaball + raio > topEdge &&
      Ydaminhaball - raio < bottomEdge) {
   Xdaminhaball = leftEdge - raio;
    velocidadedoXdaminhaball = (velocidadedoXdaminhaball *-1) *1.05;
    velocidadedoYdaminhaball *1.05;
    raquetada2.play();
  }
}



//function limitedevelocidade(){
 // if (velocidadedoXdaminhaball >10 || velocidadedoYdaminhaball >10){
 //   velocidadedoXdaminhaball = 9
 //   velocidadedoYdaminhaball = 9
 // }
//}

function limitedevelocidade() {
  let velocidadeMaxima = 7; // Defina o limite de velocidade aqui

  // Verifica se a velocidade em X está acima do limite
  if (Math.abs(velocidadedoXdaminhaball) > velocidadeMaxima) {
    velocidadedoXdaminhaball = velocidadeMaxima * Math.sign(velocidadedoXdaminhaball);
  }

  // Verifica se a velocidade em Y está acima do limite
  if (Math.abs(velocidadedoYdaminhaball) > velocidadeMaxima) {
    velocidadedoYdaminhaball = velocidadeMaxima * Math.sign(velocidadedoYdaminhaball);
  }
}

function pontosdosplayers(){
  stroke(255)
  fill(color(230,34,34))
  rect(128, 18, 45, 33);
  fill(color(30,144,255))
  rect(428, 18, 45, 33);
  fill(255);
  textSize(32);
  textAlign(CENTER, TOP);
  //text(pontosdoplayer1,width / 4, 20);
  text(pontosdoplayer1,150, 20);
  //text(pontosdoplayer2, ( 3 * width) / 4, 20);
  text(pontosdoplayer2,450, 20);
 }


function bolinhaNaoFicaPresa(){
    if (Xdaminhaball - raio < 0){
    Xdaminhaball = 23
    }
}

function bolinhaNaoFicaPresa2(){
   if (Xdaminhaball + raio < 0){
    console.log('bolinha ficou presa');
    Xdaminhaball = 300;
   }
}

  
    