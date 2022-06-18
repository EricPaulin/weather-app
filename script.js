let weather = {
    apiKey: "f94bdaed3a502db763af194b361553e5",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city 
            + "&units=metric&appid=" 
            + this.apiKey
        )
            // Grabbing Data from API
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    // Displaying Data Grabbed
    displayWeather: function(data) {
        const {name} = data;
        // Array in Data, so grab first position for description
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;

        console.log(name,icon,description,temp,humidity,speed);
        
        // Swapping Current Weather with Searched City Data
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/hr";
    },
};