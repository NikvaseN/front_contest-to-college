// ***************************************************************************************************************************************
// 										Получаем и используем данные из localstorage
// ***************************************************************************************************************************************
const neededTour = JSON.parse (localStorage.getItem ('search'))
console.log(neededTour[0].region)

for(let i = 0; i < neededTour.length; i++){
	let titleTour = document.getElementById('tour-title')
		if(neededTour[i].region === 'rus'){
			titleTour.innerHTML = 'Россия'
			document.getElementById('tour-name').innerHTML = 'Байкал'
			document.getElementById('tour-img').src = './imges/baikal winter.webp'
		}
		if(neededTour[i].region=== 'usa'){
			titleTour.innerHTML = 'Америка'
			document.getElementById('tour-name').innerHTML = 'Глен-Каньон'
			document.getElementById('tour-img').src = './imges/usa.jpg'
		}
		if(neededTour[i].region=== 'sweden'){
			titleTour.innerHTML = 'Швейцария'
			document.getElementById('tour-name').innerHTML = 'Альпы'
			document.getElementById('tour-img').src = './imges/sweden.jpg'
		}
		if(neededTour[i].region=== 'kz'){
			titleTour.innerHTML = 'Казахстан'
			document.getElementById('tour-name').innerHTML = 'Бурабай'
			document.getElementById('tour-img').src = './imges/kz.jpg'
		}
	let difficulty = document.getElementById('tour-difficulty')
		if(neededTour[i].skill === 'beginner'){
			difficulty.innerHTML = 'Начинающие'
		}
		if(neededTour[i].skill === 'amateurs'){
			difficulty.innerHTML = 'Любители'
		}
		if(neededTour[i].skill === 'experienced'){
			difficulty.innerHTML = 'Опытные'
		}
		if(neededTour[i].skill === 'professionals'){
			difficulty.innerHTML = 'Профессионалы'
		}
	let hashDate = neededTour[i].date
		document.getElementById('tour-date').innerHTML = hashDate[1] + hashDate[2] + '.' + hashDate[4] + hashDate[5]+ '.20' + hashDate[7] + hashDate[8]
	
}