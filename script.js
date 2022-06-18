let weather = {
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
            + city + "&units=metric&appid=f94bdaed3a502db763af194b361553e5"
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
        document.querySelector(".city").innerText = name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/hr";

        document.querySelector(".weather").classList.remove("loading");
        // Grabs Image using Searched City as keyword
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    // Grabs Search Bar Data
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

// Search Bar Functionality
document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});

// Works with Enter Key
document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key == "Enter") {
        weather.search();
    }
})

// Loads Data Upon Startup + Doesn't Display Incorrect Dummy Text
weather.fetchWeather("Sacramento");