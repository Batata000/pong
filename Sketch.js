 //Variáveis da bolinha
 let XBolinha=200
 let YBolinha=200
 let Diâmetro=25
 let Raio=Diâmetro/2

//Velocidade
 let XVelocidade=10
 let YVelocidade=10

//Variáveis da minha Raquete
 let XRaquete=5
 let YRaquete=150
 let LRaquete=5
 let HRaquete=100

//Váriáveis da raquete do oponente
 let XRaqueteOP=590
 let YRaqueteOP=380
 let VelocidadeYOP;
 let Colidiu=false
 
//Placar
 let MeusPontos=0
 let PontosOP=0

 function setup(){
 createCanvas(600, 400);
   
}

 function draw(){ 
 background(0);
  
 CriaBolinha();
 MovimentoBolinha();
 ColisãoRaquete();
 MinhaRaquete();
 MovimentaRaquete(); 
 ColisãoBorda();
 RaqueteOP();
 MovimentoRaqueteOP();
 ColisãoBolinhaRaquete();
 CriaPlacar();
 MarcaPonto();
 
}

 function CriaBolinha(){ 
 circle(XBolinha,YBolinha, Diâmetro)
   
}
   
 function MovimentoBolinha(){ 
 XBolinha+=XVelocidade
 YBolinha+=YVelocidade
   
}

 function ColisãoBorda(){ 
 if(XBolinha + Raio > width||XBolinha - Raio <0)
 XVelocidade*=-1 
 if(YBolinha > height||YBolinha - Raio <0)
 YVelocidade*=-1
   
}
   
 function MinhaRaquete(){
 rect(XRaquete,YRaquete,LRaquete,HRaquete)

}
                           
 function MovimentaRaquete(){
 if(keyIsDown(UP_ARROW))
  YRaquete -= 10
 if(keyIsDown(DOWN_ARROW))
  YRaquete += 10

}


 function ColisãoRaquete(){ 
 if(XBolinha - Raio < XRaquete + LRaquete &&                           YBolinha - Raio < YRaquete + HRaquete &&YBolinha + Raio >           YRaquete)
   XVelocidade*=-1} 
  
 function RaqueteOP(){
 rect(XRaqueteOP,YRaqueteOP,LRaquete,HRaquete) 

}

 function MovimentoRaqueteOP(){
 VelocidadeYOP=YBolinha-YRaqueteOP-LRaquete/2-170 
 YRaqueteOP+=VelocidadeYOP
  
}

 function ColisãoBolinhaRaquete(){
 colidiu=collideRectCircle
 (XRaqueteOP, YRaqueteOP, LRaquete, HRaquete,                         XBolinha,YBolinha,Diâmetro)
 if (colidiu)
 XVelocidade*=-1
}
  
 function CriaPlacar(){ 
  stroke(0)
  fill(color( 90, 22, 90))
  rect(200, 1, 40, 30)
  rect(360, 1, 40, 30)
  textAlign(CENTER)
  textSize(20)
  fill(255)
  text(MeusPontos,220,20)
  text(PontosOP, 380,20)
}
  
 function MarcaPonto(){
 if (XBolinha < 15)
     PontosOP += 1
 if (XBolinha > 585)
     MeusPontos +=1
     
 } 
  




