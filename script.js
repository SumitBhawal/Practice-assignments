let color=["blue","yellow", "black","red","brown","orange"];
let today=new Date();
let time=today.getHours();
let button=document.getElementById('btn');
let output=document.getElementById('quote');
let ttl=document.getElementById('t1');
let quotes=[
  "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best. - Marilyn Monroe", "Be yourself; everyone else is already taken- Oscar Wilde", "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.- Albert Einstein", "So many books, so little time. - Frank Zappa", "A room without books is like a body without a soul. - Marcus Tullius Cicero", "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind. -Bernard M. Baruch", "You know you're in love when you can't fall asleep because reality is finally better than your dreams -Dr. Seuss", "You only live once, but if you do it right, once is enough.-Mae West", "Be the change that you wish to see in the world.- Mahatma Gandhi"
];
btn.addEventListener('click',function(){
  var randomQuote= quotes[Math.floor(Math.random()*quotes.length)]
  output.innerHTML=randomQuote;
  var state;
  if(time>=17&&time<=19){
    state="Evening";
  }
  else if(time>19&&time<0){
    state="Night";
  }
  else if(time>=12){
    state="Afternoon";
  }
  else{
    state="Day";
  }
  var titl="Lets start our "+state+" with a Quote";
  ttl.innerHTML=titl;
  var randomColor= color[Math.floor(Math.random()*quotes.length)];
  var body= document.getElementById('b');
  var para=document.getElementById('t1');
  body.style.background=randomColor;
  para.style.color=randomColor;
  output.style.color=randomColor;
  button.style.background=randomColor;
})