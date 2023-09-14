const key = "a0b0f3cc7e4921e31d8649b9d19bc000";

function clickButton() {
    const city = document.querySelector(".input-city").value;
    console.log(city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temperature").innerHTML = `${Math.floor(data.main.temp)}°C`;
            document.querySelector(".text-forecast").innerHTML = data.weather[0].description;
            document.querySelector(".humidity").innerHTML = `Umidade: ${data.main.humidity}%`;
            document.querySelector(".img-forecast").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            document.querySelector(".img-forecast").style.display = "block";
        })
        .catch(error => {
            alert("Cidade não encontrada!"),
            document.querySelector(".city").innerHTML = " ";
            document.querySelector(".temperature").innerHTML = " ";
            document.querySelector(".text-forecast").innerHTML = " ";
            document.querySelector(".humidity").innerHTML = " ";
            document.querySelector(".img-forecast").style.display = "none";
            document.querySelector(".input-city").value = " ";
        });
}   