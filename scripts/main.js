// ***************************************************************************************************************************************
// 										Анимация инфографики
// ***************************************************************************************************************************************

const points = document.getElementsByClassName('point')
const usernameForm = document.getElementsByClassName('form-input')
const formItems = document.getElementsByClassName('form-item')
const formBlock = document.getElementById('infographics-block')
function changePoint(id) {
	let i = 0;
	for(let point of points){
		if(id === i){
			points[i].style.borderColor = '#40C781'
		}
		else{
			points[i].style.borderColor = 'black'
		}
		i++;
	}
}
let open = -1;

// ***************************************************************************************************************************************
// 										Проверка валидации
// ***************************************************************************************************************************************

const fromItemsLength = formItems.length
for(let i = 0; i < fromItemsLength; i++){
	usernameForm[i].onblur = function (){
		if(this.value.length <= 0){
			formItems[i].classList.add('error-validation');
		}
		else{
			formItems[i].classList.remove('error-validation');
		}
	}
	usernameForm[i].onfocus = function () {
		if(i === 0 ){
			if(i > open){
				formBlock.style.marginTop = '26px'
				open = i
			}
			else{
				changePoint(i)
			}
		}
		else{
			if(i > open){
				let sum = 26 + i * 94;
				formBlock.style.marginTop = `${sum}px`;
				open = i
			}
			changePoint(i)
		}
		formItems[i].classList.remove('error-validation');
	}
}

// ***************************************************************************************************************************************
// 										Кнопки + и - для выбора количества участников
// ***************************************************************************************************************************************

const counterMinus = document.getElementById('counter-minus')
const counterPlus = document.getElementById('counter-plus')
const counterNum = document.getElementById('counter-num')

counterMinus.onclick = function () {
	if(counterNum.innerHTML > 1){
		counterNum.innerHTML = parseInt(counterNum.innerHTML)  - 1
	}
	
}
counterPlus.onclick = function () {
	if(counterNum.innerHTML < 1000)
	counterNum.innerHTML = parseInt(counterNum.innerHTML)  + 1
}

// ***************************************************************************************************************************************
// 										Выпадающее меню:     Выбора региона 
// ***************************************************************************************************************************************

const regionSelectText = document.getElementById('region-select-text');
const regionSelectInputs = document.getElementsByName('region-select');
const regionSelectBtn = document.getElementById('region-select');
const regionImg = document.getElementById('region-select-img');
let regionLabelsBlock = document.getElementById('region-labels-block')
let regionSelectTarget = 'rus';
// function regionSetBorder (){
// 	for(let i = 0; i < regionSelectInputs.length; i++){
// 		if(regionSelectInputs[i].id === regionSelectTarget){
// 			document.getElementById(`${regionSelectInputs[i].id}-label`).style.borderColor = '#40C781'
// 		}
// 		else{
// 			document.getElementById(`${regionSelectInputs[i].id}-label`).style.borderColor = 'white'
// 		}
// 	}
// }
function closeRegion() {
	regionLabelsBlock.classList.remove('open')
	regionImg.style.transform = 'rotate(0deg)'
	document.removeEventListener('click', leaveRegionSelect);
}
function openRegion() {
	regionImg.style.transform = 'rotate(180deg)'
	regionLabelsBlock.classList.add('open')
	document.addEventListener('click', leaveRegionSelect);
}
function leaveRegionSelect(event) {
	const el = document.getElementById('region');
	if (event.target === el || el.contains(event.target)){
		return
	}
	else{
		closeRegion()
	}
}
document.getElementById('region-select').onclick = function () {
	if(regionLabelsBlock.classList.contains('open')){
		closeRegion()
	}
	else{
		openRegion()
		// regionSetBorder ();
	}
	
}
for(let item of regionSelectInputs){
	item.onclick = function () {
		if(item.id === 'rus'){
			regionSelectText.innerHTML = 'Россия'
			regionSelectTarget = item.id
		}
		if(item.id === 'usa'){
			regionSelectText.innerHTML = 'Америка'
			regionSelectTarget = item.id
		}
		if(item.id === 'sweden'){
			regionSelectText.innerHTML = 'Швейцария'
			regionSelectTarget = item.id
		}
		if(item.id === 'kz'){
			regionSelectText.innerHTML = 'Казахстан'
			regionSelectTarget = item.id
		}
		closeRegion()
		// regionSetBorder ();
	}
}

// ***************************************************************************************************************************************
// 										Выпадающее меню:     Выбора уровня подготовки
// ***************************************************************************************************************************************



const skillSelectText = document.getElementById('skill-select-text');
const skillSelectInputs = document.getElementsByName('skill-select');
const skillSelectBtn = document.getElementById('skill-select');
let skillLabelsBlock = document.getElementById('skill-labels-block')
skillSelectBtn.onclick = function () {
	if(skillLabelsBlock.classList.contains('open')){
		closeSkill()
	}
	else{
		document.getElementById('skill-select-img').style.transform = 'rotate(180deg)'
		skillLabelsBlock.classList.add('open')
		document.addEventListener('click', leaveSkillSelect);
	}
}
function leaveSkillSelect(event) {
	const el = document.getElementById('skill');
	if (event.target === el || el.contains(event.target)){
		return
	}
	else{
		closeSkill()
	}
}
function closeSkill() {
	skillLabelsBlock.classList.remove('open')
	document.getElementById('skill-select-img').style.transform = 'rotate(0deg)'
	document.removeEventListener('click', leaveSkillSelect);
}
let skillSelectTarget = 'beginner';
for(let item of skillSelectInputs){
	item.onclick = function () {
		if(item.id === 'beginner'){
			skillSelectText.innerHTML = 'Начинающие'
			skillSelectTarget = item.id
		}
		if(item.id === 'amateurs'){
			skillSelectText.innerHTML = 'Любители'
			skillSelectTarget = item.id
		}
		if(item.id === 'experienced'){
			skillSelectText.innerHTML = 'Опытные'
			skillSelectTarget = item.id
		}
		if(item.id === 'professionals'){
			skillSelectText.innerHTML = 'Профессионалы'
			skillSelectTarget = item.id
		}
		closeSkill()
	}
}

// ***************************************************************************************************************************************
// 										Выпадающее меню:     Выбора даты
// ***************************************************************************************************************************************



const dateSelectText = document.getElementById('date-select-text');
const dateSelectInputs = document.getElementsByName('date-select');
const dateSelectBtn = document.getElementById('date-select');
let dateLabelsBlock = document.getElementById('date-labels-block')
dateSelectBtn.onclick = function () {
	if(dateLabelsBlock.classList.contains('open')){
		closeDate()
	}
	else{
		document.getElementById('date-select-img').style.transform = 'rotate(180deg)'
		dateLabelsBlock.classList.add('open')
		document.addEventListener('click', leaveDateSelect);
	}
}
function leaveDateSelect(event) {
	const el = document.getElementById('search-date');
	if (event.target === el || el.contains(event.target)){
		return
	}
	else{
		closeDate()
	}
}
function closeDate() {
	dateLabelsBlock.classList.remove('open')
	document.getElementById('date-select-img').style.transform = 'rotate(0deg)'
	document.removeEventListener('click', leaveDateSelect);
}
let dateSelectTarget = 'd11m12y22';
for(let item of dateSelectInputs){
	item.onclick = function () {
		let hashDate = item.id
		let date = hashDate[1] + hashDate[2] + '.' + hashDate[4] + hashDate[5]+ '.' + hashDate[7] + hashDate[8]
		// if(item.id === 'd11m12y22'){
		// 	dateSelectText.innerHTML = 'Начинающие'
		// 	dateSelectTarget = item.id
		// }
		// if(item.id === 'd18m12y22'){
		// 	dateSelectText.innerHTML = 'Любители'
		// 	dateSelectTarget = item.id
		// }
		// if(item.id === 'd25m12y22'){
		// 	dateSelectText.innerHTML = 'Опытные'
		// 	dateSelectTarget = item.id
		// }
		// if(item.id === 'd01m01y23'){
		// 	dateSelectText.innerHTML = 'Профессионалы'
		// 	dateSelectTarget = item.id
		// }
		dateSelectText.innerHTML = date
		dateSelectTarget = item.id
		closeDate()
	}
}

// ***************************************************************************************************************************************
// 										Отправка данных для поиска
// ***************************************************************************************************************************************
function sendSearch (){
	let region = regionSelectTarget
	let quantityPeople = counterNum.innerHTML
	let skill = skillSelectTarget
	let date = dateSelectTarget
	let neededTour = [{region, quantityPeople , skill , date}]
	window.localStorage.setItem('search', JSON.stringify(neededTour))
	window.location.href = './tour.html';
}
