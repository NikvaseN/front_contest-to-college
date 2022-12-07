// ***************************************************************************************************************************************
// 										Анимация плавного спуска к блоку
// ***************************************************************************************************************************************
let neededTop = 0
const links = document.querySelectorAll('.navbar-link')
for (let link of links ){
	link.addEventListener('click', function (e){
		let id = link.getAttribute('hrev').substring(1)
		let el = document.getElementById(id)
		neededTop = el.offsetTop;
		linkScroll()
	})
}
// let currentNeededScroll
function linkScroll(){
	let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
	// if(currentNeededScroll === undefined){
	// 	currentNeededScroll = neededTop
	// }
    if (currentScroll + 30 < neededTop && currentScroll + window.screen.availHeight < document.documentElement.scrollHeight) {
        window.requestAnimationFrame(linkScroll);
		// currentNeededScroll = (currentNeededScroll / 2)
		window.scrollTo (0 , currentScroll + 30);
		
    }
	// else{
	// 	currentNeededScroll = undefined
	// }
}

// ***************************************************************************************************************************************
// 										Анимация плавного поднятия страницы вверх
// ***************************************************************************************************************************************

function smoothscroll(){
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
         window.requestAnimationFrame(smoothscroll);
         window.scrollTo (0,currentScroll - (currentScroll/5));
    }
}

let previousPosition
window.onscroll = function() {
	let currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
	let btn = document.getElementById('document-up') 
	if (previousPosition > currentPosition && document.documentElement.scrollTop !== 0) {
	  btn.style.display = "block";
	  
	} else {
	  btn.style.display = "none"; 
	}
	previousPosition = currentPosition;
  };