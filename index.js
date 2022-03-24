
function toggleText(id){
    const index = id.slice(2)
    const state = id.slice(1, 2)
    const currentRM = document.getElementById(`rm${index}`)
    const currentRL = document.getElementById(`rl${index}`)
    const currentLand = document.getElementById(`si-land${index}`)
    const currentPort = document.getElementById(`si-port${index}`)
    const hiddenText = document.getElementById(`text${index}`)
 
     if (state === 'm'){
         currentRM.style.display = 'none'
         currentRL.style.display = 'initial'
         currentLand.style.display = 'none'
         currentPort.style.display = 'initial'
         hiddenText.style.display = 'initial'
     }
    else{
     currentRM.style.display = 'initial'
     currentRL.style.display = 'none'
     currentLand.style.display = 'initial'
     currentPort.style.display = 'none'
     hiddenText.style.display = 'none' 
    }
 }
 
 
 async function getWeather(){
     let response = await fetch('http://api.openweathermap.org/data/2.5/weather?lat=42.3918&lon=-71.0328&appid=96e6d2a5614684172ea97d9cd6f33700&units=imperial')
     let data = await response.json()
     console.log(data)
     return [data.main.temp, data.weather[0].id]
 
 }
 
 async function renderWeather(){
     const tempElem = document.getElementById('current-temp')
     const cloudSVG = document.getElementById('wi-cloud')
     const rainSVG = document.getElementById('wi-rain')
     const sunSVG = document.getElementById('wi-sun')
     const snowSVG = document.getElementById('wi-snow')
 
     const response = await getWeather();
     console.log(response)
     const tempResponse = await response[0]
     const weatherResponse = await response[1]
 
     tempElem.innerText = Math.round(tempResponse)
 
     if(weatherResponse < 600){
         rainSVG.style.display = 'initial';
         console.log('rain')
     }
     else if(weatherResponse < 700){
         snowSVG.style.display = 'initial';
         console.log('snow')
     }
     else if(weatherResponse === 800 || weatherResponse === 801){
         sunSVG.style.display = 'initial';
         console.log('sun')
     }
     else{
         cloudSVG.style.display = 'initial';
         console.log('cloud')
     }
 
 
 
 }
 
 renderWeather()