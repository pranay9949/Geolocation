let btn=document.getElementById("fetchBtn");
let details=document.getElementsByClassName("container");
let cont2=document.getElementById("cont2");
let cont3=document.getElementById("cont3")
let fetchDetails=()=>{
    details[0].style.display="none";
    function getgeoLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(showPosition);
        }
        else{
            cont2.innerText="Geoloaction is not Supported by this browser"
        }   
    }
    function showPosition(position) {
        // cont2.style.display="block";
        // let h1=document.createElement("h1");
        // h1.innerText="Welcome To The Whether App";
        // h1.classList.add("head");
        // let p=document.createElement("p");
        // p.innerText="Here is your Location";
        // p.classList.add("para");
        
        // cont2.append(h1);
        // cont2.append(p);

        // cont2.innerHTML = "Latitude: " + position.coords.latitude +
        // "<br>Longitude: " + position.coords.longitude;
      cont2.style.display="block"
      let div=` <h1 class="head">Welcome To The Whether App</h1>
      <p class="para">Here is your Location</p>
      <div class="latNum">
          <div class="lat">
            <h3>Lat:${ position.coords.latitude}</h3>
          </div>
          <div class="long">
              <h3>long: ${ position.coords.longitude}</h3>
          </div>
      </div>
      <iframe src="https://maps.google.com/maps?q=${ position.coords.latitude}, ${ position.coords.longitude}&z=15&output=embed" width="600" height="370" frameborder="0" style="border:0;margin-top:20px" ></iframe>`
      cont2.innerHTML=div;
    }
      
      const apiKey = "69b80a9561dc0a457e54053756a234e0";

        
      const latitude =17.410074; 
      const longitude = 78.588598;
 
 
 
 const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,daily&appid=${apiKey}`;
    let getDetails=async ()=>{
        try{
        let a=await fetch(apiUrl);
        let b=await a.json();
        console.log(b);
        addDetails(b)
        }
        
        catch(err){
          console.log(err)
        }
    
    }
    getDetails();
    getgeoLocation();
  
   
}
btn.addEventListener("click",fetchDetails);
function windDirection(degree){
    if(degree == 0){
        return "North";
    }
    if(degree == 90){
        return "East";
    }
    if(degree == 180){
        return "South";
    }
    if(degree == 270){
        return "West";
    }
    if(degree > 0 && degree < 90){
        return "North-East";
    }
    if(degree > 90 && degree < 180){
        return "South-East";
    }
    if(degree > 180 && degree < 270){
        return "South-West";
    }
    if(degree > 180 && degree < 360){
        return "North-West";
    }
}

function addDetails(data){
    let a=`<div class="bottom">
    <h2 class="bottom-head">Your Weather Data</h2>
    <div class="rows">
      <div class="lat1">
          <p class="inner">Location: ${data.name}</p>
      </div>
      <div class="lat1">
           <p class="inner">Wind speed: ${data.wind.speed}</p>
      </div>
      <div class="lat1">
      <p class="inner">Humidity: ${data.main.humidity}</p>
      </div>
      <div class="lat1">
      <p class="inner">TimeZone:  ${data.timezone}</p>
      </div>
      <div class="lat1">
      <p class="inner">Pressure: ${data.main.pressure}</p>
      </div>
      <div class="lat1">
      <p class="inner">Wind Direction:${windDirection(data.wind.deg)}</p>
      </div>
      <div class="lat1">
      <p class="inner">UV Index: 1</p>
      </div>
      <div class="lat1">
      <p class="inner">Feels Like: ${data.main.feels_like}</p>
      </div>
    </div>
 </div>`;
 cont3.innerHTML=a;
   
   
}