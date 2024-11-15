const apikey="dd6704a7f8dd5668c39380ece4c55d0c";
const apiurl="https://api.openweathermap.org/data/2.5/weather?q=London";






async function weather(){
    
    const response = await fetch(apiurl + '$appid=${apikey}');
    var data =await response.json();

    console.log(data);
}
  weather();