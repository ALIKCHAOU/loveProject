function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomPosition(element) {
	/*var x = document.body.offsetHeight-element.clientHeight;
	var y = document.body.offsetWidth-element.clientWidth;*/
	var randomX = Math.floor(Math.random()*700);
	var randomY = Math.floor(Math.random()*1100);
	
 
  return [randomX,randomY];
}
 window.onload = async function() {
	for(let i=0;i<50;i++)
  {var img = document.createElement('img');
	
	img.setAttribute("src", "http://www.emoji.co.uk/files/twitter-emojis/smileys-people-twitter/10497-smiling-face-with-heart-shaped-eyes.png");
   	img.setAttribute("id", "img");
	document.body.appendChild(img);
	var xy = getRandomPosition(img);
	
	img.style.top = xy[0] + 'px';
	img.style.left = xy[1] + 'px';
    await sleep( Math.floor(Math.random()*2000));
  var img = document.createElement('img');
	
	img.setAttribute("src", "https://cdn.iconscout.com/public/images/icon/free/png-512/love-heart-social-media-facebook-emoticons-reactions-35be565224846ce6-512x512.png");
   img.setAttribute("id", "img");
   
	document.body.appendChild(img);
	var xy = getRandomPosition(img);
	img.style.top = xy[0] + 'px';
	img.style.left = xy[1] + 'px';
    await sleep( Math.floor(Math.random()*2000));
  var img = document.createElement('img');
	
	img.setAttribute("src", "https://www.viidakkorumpu.fi/wp-content/uploads/2015/02/syd%C3%A4n.png");
   img.setAttribute("id", "img");
	document.body.appendChild(img);
	var xy = getRandomPosition(img);
	img.style.top = xy[0] + 'px';
	img.style.left = xy[1] + 'px';}
  await sleep( Math.floor(Math.random()*2000));


}
function splitWords() {
  let quote = document.querySelector("p").innerText.replace(/(<([^>]+)>)/ig,"");
 
  quotewords = quote.innerText.split(" "),
  wordCount = quotewords.length;
  quote.innerHTML = "";
  for (let i=0; i < wordCount; i++) {
    quote.innerHTML += "<span>"+quotewords[i]+"</span>";
    if (i < quotewords.length - 1) {
      quote.innerHTML += " ";
    }
  }
  quotewords = document.querySelectorAll("blockquote > p > span");
  fadeWords(quotewords);
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function fadeWords(quotewords) {
  Array.prototype.forEach.call(quotewords, function(word) {
    let animate = word.animate([{
      opacity: 0,
      filter: "blur("+getRandom(2,5)+"px)"
    }, {
      opacity: 1,
      filter: "blur(0px)"
    }], 
    { 
      duration: 1000,
      delay: getRandom(500,3300),
      fill: 'forwards'
    } 
   )
  })
}


splitWords();
