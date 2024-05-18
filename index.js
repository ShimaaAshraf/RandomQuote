var arr =[
   `<p class="fs-1">"You miss 100% of the shots you don't take."</p><p class="fs-1">--Wayne Gretzy</p>`,
    `<p class="fs-1">"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."</p><p class="fs-1">-Marilyn Monroe</p>`,
    `<p class="fs-1"> "So many books, so little time."</p><p class="fs-1"> ― Frank Zappa</p>`,
    `<p class="fs-1">"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."</p><p class="fs-1"> ― Albert Einstein</p>`,
    `<p class="fs-1">"A room without books is like a body without a soul."</p><p class="fs-1"> ― Marcus Tullius Cicero</p>`,
    `<p class="fs-1">"You only live once, but if you do it right, once is enough."</p><p class="fs-1"> ― Mae West</p>`,
    `<p class="fs-1">"Be the change that you wish to see in the world."</p><p class="fs-1"> ― Mahatma Gandhi</p>`,
    `<p class="fs-1"> "To live is the rarest thing in the world. Most people exist, that is all."</p><p class="fs-1"> ― Oscar Wilde</p>`,
    `<p class="fs-1">"It is better to be hated for what you are than to be loved for what you are not."</p><p class="fs-1"> ― Andre Gide, Autumn Leaves</p>`,
    `<p class="fs-1"> "Insanity is doing the same thing, over and over again, but expecting different results."</p><p class="fs-1">― Narcotics Anonymous </p>`,
    `<p class="fs-1">"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."</p><p class="fs-1">― Ralph Waldo Emerson</p>`
]

var old;
function randomQuotes()
{
   var box = '';
   var x =Math.round(Math.random()*10);
   if(x === old)
      {
         randomQuotes();  
      }
   else
   {
      console.log(x);
      box += arr[x];
      document.getElementById("demo").innerHTML = box;   
      old = x; 
   }   
   
   
}

