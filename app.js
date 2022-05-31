const tempreature = document.querySelector(".temp h1");
const city_title = document.querySelector(".city");
const search = document.querySelector("input");
const condition = document.querySelector(".weather");
const wind_km=document.querySelector(".wind");
const max=document.querySelector(".max");
const min=document.querySelector(".min");


search.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    const citydata = search.value;
    getdata(citydata);
    search.value = "";
  }
});

const getdata = async function (city) {
  try {
    const Api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=cc9dc069ea20e84d0ac5bbd68238a672`;
    const result = await fetch(Api_url);
    const res = await result.json();
    const { temp } = res.main;
    tempreature.innerHTML = temp + "°C";
    city_title.innerHTML = res.name;
    condition.innerHTML = res.weather[0].main;
    wind_km.innerHTML=res.wind.speed+"Km";
    max.innerHTML="Max_temp="+res.main.temp_max;
    min.innerHTML="Min_temp="+res.main.temp_min;


  } catch (err) {
 alert('somthing went wrong please entre valid name')
  }
};
