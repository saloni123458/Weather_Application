const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".middle_layer");

const APIKEY = "4aa19c9c5324cbb1178fa86528cbffc6";

const getInfo = async (event) => {
  event.preventDefault();
  let cityval = cityName.value;
  if (cityval === "") {
    city_name.innerText = `Write city name before search`;
    datahide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=${APIKEY}`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
      temp_real_val.innerText = `${arrData[0].main.temp}`;
      const tmepMood = arrData[0].weather[0].main;

      if (tmepMood == "Clear") {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color: #eccc68'></i>";
      } else if (tmepMood == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style='color: #f1f2f6'></i>";
      } else if (tmepMood == "Rain") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud-rain' style='color: #a4b0be'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style='color: #eccc68'></i>";
      }
      datahide.classList.remove("data_hide");
    } catch {
      city_name.innerText = `Write valid city name`;
      datahide.classList.add("data_hide");
    }
  }
};

submitBtn.addEventListener("click", getInfo);
