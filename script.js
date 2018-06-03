const card = document.getElementById('info-card');
const imgLocation = 'images/';
const img = document.createElement('img');

const h1 = document.createElement('h1');
const infoCard = document.createElement('div');

const controls = document.createElement('div');
  const previous = document.createElement('button');
  const next = document.createElement('button');

controls.appendChild(previous);
controls.appendChild(next);

card.appendChild(controls);
card.appendChild(img);
card.appendChild(h1);
card.appendChild(infoCard);

previous.innerText= '<';
next.innerText = '>';

let index = 0;

previous.onclick = function (){
  index -= 1;
if (index < 0) {
  index = 0;
}
  console.log(index);
  renderElement(photosInfo);
  return index;
};

next.onclick = function (){
  index += 1;
  console.log(index);
  renderElement(photosInfo);
  return index;
};

// let index = 0;

function renderElement(photosInfo){
  // console.log(photosInfo[index]);
  const element = photosInfo[index];
  const firstName = element.firstName;
  const lastName = element.lastName;
  const fullName = firstName + ' ' +lastName;
  h1.innerHTML = fullName;
  const title = element.title;
  const nationality = element.nationality;
  const src = element.src;
  img.src = imgLocation + src;
  const skills = element.skills;
  const whySofterDeveloper = element.whySofterDeveloper;
  const longTermVision = element.longTermVision;
  const motivatesMe = element.motivatesMe;
  const favoriteQuote = element.favoriteQuote;
  const joinedOn = element.joinedOn;


  infoCard.innerHTML = title + '<br><br>- ' + nationality + '<br><br>- ' + skills + '<br><br>- ' + whySofterDeveloper + '<br><br>- ' + longTermVision + '<br><br>- ' + motivatesMe + '<br><br>- ' + favoriteQuote + '<br><br>- ' + joinedOn + '<br><br>- ' ;

  card.classList.add('info-card');
  // index = index < photosInfo.length ? index + 1 : 0;
  index = index < photosInfo.length -1 ? index : 0;
  // (card, index);
}
renderElement(photosInfo);

let timer;

function startTimer() {
  timer = setInterval(() => {
    index += 1;
    renderElement(photosInfo);
  }, 2000)
}

function stopTimer() {
  clearTimeout(timer);
}

let bgImages = ["group1.jpg", "group2.jpg"],
base = "images/slideshow/",
secs = 4;
bgImages.forEach(function(img){
    new Image().src = base + img; 
});

function backgroundSequence() {
	window.clearTimeout();
	var j = 0;
	for (i = 0; i < bgImages.length; i++) {
		setTimeout(function(){ 
			document.documentElement.style.background = "url(" + base + bgImages[j] + ") no-repeat center center fixed";
			document.documentElement.style.backgroundSize ="cover";
		if ((j + 1) === bgImages.length) { setTimeout(function() { backgroundSequence() }, (secs * 1000))} else { j++; }			
		}, (secs * 1000) * i)	
	}
}
backgroundSequence();