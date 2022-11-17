const api = {
    key: '4da134120ecaba25b6013a2f220327d3',
    url: `https://api.openweathermap.org/data/2.5/weather`
}
const card = document.getElementById('card')

const city = document.getElementById('city');
const date = document.getElementById('date');
const tempImg = document.getElementById('temp-img');
const temp = document.getElementById('temp');
const weather = document.getElementById('weather');
const range = document.getElementById('range');

function updateImage(data){
    const temp = toCelsius(data.main.temp);
    let src = '../assets/img/temp-mid.png';
    if (temp > 26){
        src = '../assets/img/temp-high.png'
    } else if (temp < 20){
        src = '../assets/img/temp-low.png'
    }
    tempImg.src = src;
}

async function search(query){
    try{
        const response = await fetch(`${api.url}?q=${query}&appid=${api.key}&lang=es`);
        const data = await response.json();
        
        city.innerHTML = `${data.name}, ${data.sys.country}`;
        date.innerHTML = (new Date()).toLocaleDateString();
        temp.innerHTML = `${toCelsius(data.main.temp)}c`;
        weather.innerHTML = data.weather[0].description;
        range.innerHTML = `${toCelsius(data.main.temp_min)}c / ${toCelsius(data.main.temp_max)}c`;
        updateImage(data);
    }catch(err){
        console.log(err);
        alert('Hubo un error')
    }
}

function onSubmit(event)
{
    event.preventDefault();
    search(searchbox.value);
}

function toCelsius(kelvin){
    return Math.round(kelvin - 273.15);
}

const searchform = document.getElementById('search-form');
const searchbox = document.getElementById('searchbox');
searchform.addEventListener('submit', onSubmit, true);