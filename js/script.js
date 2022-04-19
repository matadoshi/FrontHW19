fetch('http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=3f5cbd6bbfeb676ae438e746de18ac07')
	.then(response => response.json())
	.then(data=>{
        var x='';
        data.forEach(loc => {
            x+=`
            <div class="col-md-8 col-lg-6 col-xl-4 g-4">
      
              <div class="card" style="color: #4B515D; border-radius: 35px;">
                <div class="card-body p-4">
      
                  <div class="d-flex">
                    <h6 class="flex-grow-1">${loc.name}</h6>
                    <h6>15:07</h6>
                  </div>
      
                  <div class="d-flex flex-column text-center mt-5 mb-4">
                    <h6 class="display-4 mb-0 font-weight-bold" style="color: #1C2331;"> 13°C </h6>
                    <span class="small" style="color: #868B94">slam</span>
                  </div>
      
                  <div class="d-flex align-items-center">
                    <div class="flex-grow-1" style="font-size: 1rem;">
                      <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1"> 40 km/h </span></div>
                      <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span class="ms-1"> 84% </span></div>
                      <div><i class="fas fa-sun fa-fw" style="color: #868B94;"></i> <span class="ms-1"> 0.2h </span></div>
                    </div>
                    <div>
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp" width="100px">
                    </div>
                  </div>
      
                </div>
              </div>
      
            </div>`

        })
        document.getElementById('weather').innerHTML=x;
    })
	.catch(err => console.error(err));

    // {
    //     "cod": "200",
    //     "message": 0.0179,
    //     "cnt": 96,
    //     "list": [
    //      {
    //        "dt": 1596632400,
    //        "main": {
    //          "temp": 289.16,
    //          "feels_like": 288.41,
    //          "temp_min": 289.16,
    //          "temp_max": 289.16,
    //          "pressure": 1013,
    //          "sea_level": 1013,
    //          "grnd_level": 1010,
    //          "humidity": 78,
    //          "temp_kf": 0
    //        },
    //        "weather": [
    //          {
    //            "id": 804,
    //            "main": "Clouds",
    //            "description": "overcast clouds",
    //            "icon": "04n"
    //          }
    //        ],
    //        "clouds": {
    //          "all": 100
    //        },
    //        "wind": {
    //          "speed": 2.03,
    //          "deg": 252,
    //          "gust":5.46
    //        },
    //        "visibility": 10000,
    //        "pop": 0.04,
    //        "sys": {
    //          "pod": "n"
    //        },
    //        "dt_txt": "2020-08-05 13:00:00"
    //      },
    //      .....
    //          ],
    //     "city": {
    //      "id": 2643743,
    //      "name": "London",
    //      "coord": {
    //        "lat": 51.5085,
    //        "lon": -0.1258
    //      },
    //      "country": "GB",
    //      "timezone": 0,
    //      "sunrise": 1568958164,
    //      "sunset": 1569002733
    //     }
    //   }
                           
