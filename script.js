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
  }, 1000)
}

function stopTimer() {
  clearTimeout(timer);
}

let rotate = false;
function setbackground(){
  window.setTimeout("setbackground()", 20000);

  let newImage = rotate ? "url('images/slideshow/group1.jpg')" : "url('images/slideshow/group2.jpg')";

  rotate = !rotate;

  document.getElementById('gallery-background').style.backgroundImage = newImage;
}

// Switch on background slideshow
setbackground();



// let prevpage = true;
// let nextpage = true;
// let post = '';



// previous.addEventListener('click', 

  
// function getPreviousPost(event) {
//   // Find the current post's index
//   let myPost = event.target.parentNode.parentNode.;
//   console.log(event.target.parentNode.parentNode);
//   // let index = photosInfo.findIndex(post => post.firstName = myPost.firstName );
  
//   // console.log(index);
//   // Previous index
//   let previousIndex = index-1;
//   // Next index
//   let nextIndex = index+1;
//   // if (previousIndex === 0){
//   //   // prevpage = false
//   // }
//   // if (nextIndex === photosInfo.length-1){
//   //   // nextpage = false
//   // }
//   // if (previousIndex > 0 && previousIndex < photosInfo.length-1){
//   //   // prevpage = true;
//   //   // nextpage = true;
//   // }
//   // Previous id
//       let previousId = photosInfo[previousIndex].index;
//       // Result of filterPosts el.id
//     return el.id == previousId;
  
//   post = photosInfo.filter(filterPosts);

//   return post;

// }
// );

// next.addEventListener('click',
//   function getNextPost(event) {
//     // Find the current post's index
//     let index = event.target.index;
//     console.log(index);

//     // Previous index
//     let previousIndex = index-1;
//     // Next index
//     let nextIndex = index+1;
//     // if first index don't show arrow left
//     // if (previousIndex === 0){
//     //   // prevpage = false
//     // }
//     // if (nextIndex === photosInfo.length-1){
//     //   // nextpage = false
//     // }
//     // if (nextIndex > 0 && nextIndex < photosInfo.length-1){
//     //   // prevpage = true;
//     //   // nextpage = true;
//     // }
//     let nextId = photosInfo[nextIndex].index;
//       return el.id == nextId;
    
//     post = photosInfo.filter(filterPosts);

//     return post;

//   }
// );



// Animations

// let target1 = document.getElementById('gallery-background');
// let anim1 = target1.animate([
//   {opacity: '1'},
//   {opacity: '0'}
// ], 1000);
// anim1.addEventListener('change', function() {
//   target1.style.opacity = '0';
// });

let target = document.getElementById('gallery-background');
target.addEventListener('change', function() {
  target.style.backgroundImage.transition = "all 2s";
});

// // console.log(photosInfo);


// // On click image
// function getProfile() {



// }

// // On click next button
// function getPreviousProfile() {



// }

// // On click previous button
// function getNextProfile() {



// }







// let controls = document.querySelectorAll('.controls');
// for(let i=0; i<controls.length; i++){
// 	controls[i].style.display = 'inline-block';
// }

// let slides = document.querySelectorAll('#slides .slide');
// let currentSlide = 0;
// let slideInterval = setInterval(nextSlide,2000);

// function nextSlide(){
// 	goToSlide(currentSlide+1);
// }

// function previousSlide(){
// 	goToSlide(currentSlide-1);
// }

// function goToSlide(n){
// 	slides[currentSlide].className = 'slide';
// 	currentSlide = (n+slides.length)%slides.length;
// 	slides[currentSlide].className = 'slide showing';
// }


// let playing = true;
// let pauseButton = document.getElementById('pause');

// function pauseSlideshow(){
// 	pauseButton.innerHTML = '&#9658;'; // play character
// 	playing = false;
// 	clearInterval(slideInterval);
// }

// function playSlideshow(){
// 	pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
// 	playing = true;
// 	slideInterval = setInterval(nextSlide,2000);
// }

// pauseButton.onclick = function(){
// 	if(playing){ pauseSlideshow(); }
// 	else{ playSlideshow(); }
// };

// let next = document.getElementById('next');
// let previous = document.getElementById('previous');

// next.onclick = function(){
// 	pauseSlideshow();
// 	nextSlide();
// };
// previous.onclick = function(){
// 	pauseSlideshow();
// 	previousSlide();
// };