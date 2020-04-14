
$(document).ready(function() {

    fetch('https://api.covid19api.com/summary')
    .then(function(res){
         return res.json()         
         })
    .then(function(data){
        console.log(data);
        let output = `
        <div class="inner mb-5"><p>Total Deaths</p>
        <p class="">118,854</p></div>
        <h2 class="text-center">Global Statistics</h2>`;
     let input = data.Global;
         output += `           

        <table class="table table-bordered table-dark">
        <thead>

        <tr>
        <th scope="col">New Confirmed</th>
        <th scope="row">${input.NewConfirmed}</th>
        </tr>

        <tr>
        <th scope="col" class="total">Total Confirmed</th>
        <td>${input.TotalConfirmed}</td>
        </tr>

        <tr>
        <th scope="col">New Deaths</th>
        <td>${input.NewDeaths}</td>
        
        </tr>

        <tr>
        <th scope="col" class="total">Total Deaths</th>
        <td>${input.TotalDeaths}</td>
        </tr>

        <tr>
        <th scope="col">New Recovered</th>
        <td>${input.NewRecovered}</td>
        </tr>

        <tr>
        <th scope="col">Total Recovered</th>
        <td>${input.TotalRecovered}</td>
        </tr>

        </thead>
        </table>
        
        `
        document.getElementById("output").innerHTML=output;
    })

// statistics for countries
    fetch('https://api.covid19api.com/summary')
    .then(function(res){

         return res.json()
         
         })
    .then(function(data){

        console.log(data);
        let output = "";
         
         data.Countries.forEach(function(input){
     output +=  `

        
     
        <div class="col-md-4">
        <table class="table table-bordered table-dark">
        <thead>
        <tr class="header">
        <th scope="col">Country</th>
        <td scope="row">${input.Country}</td>
        </tr>

        <tr>
        <th scope="col">Country Code</th>
        <td>${input.CountryCode}</td>
        </tr>
        
        <tr>
        <th scope="col">Slug</th>
        <td>${input.Slug}</td>
        </tr>

        <tr>
        <th scope="col">New Confirmed</th>
        <td>${input.NewConfirmed}</td>
        </tr>
        
        <tr>
        <th scope="col">Total Confirmed</th>
        <td>${input.TotalConfirmed}</td>
        </tr>

        <tr>
        <th scope="col">NewDeaths</th>
        <td>${input.NewDeaths}</td>
        </tr>

        <tr>
        <th scope="col">TotalDeaths</th>
        <td>${input.TotalDeaths}</td>
        </tr>

        <tr>
        <th scope="col">NewRecovered</th>
        <td>${input.NewRecovered}</td>
        </tr>

        <tr>
        <th scope="col">TotalRecovered</th>
        <td>${input.TotalRecovered}</td>
        </tr>

        <tr>
        <th scope="col">Date</th>
        <td>${input.Date}</td>
        </tr>
        
        </table>
        </div>
        `
        })
                
            
        document.getElementById("countries").innerHTML=output;
    })

// fetch for Nigeria statistics

    fetch('https://api.covid19api.com/live/country/nigeria')
    .then(function(res){

         return res.json()
         
         })
    .then(function(data){

        console.log(data);
        let output = `
        <div class="inner mb-5"><p class="text-white">Total Confirmed</p>
        <p class="">1,901,407</p></div>
        <h2 class="text-white text-center">Nigerian Statistics</h2>`;
        let input = data[0];
         output += 
            `
           

            <table class="table table-bordered table-dark">
            <thead>
    
            <tr>
            <th scope="col">Country</th>
            <th scope="row">${input.Country}</th>
            </tr>
    
            <tr>
            <th scope="col">Confirmed</th>
            <td>${input.Confirmed}</td>
            </tr>
    
            <tr>
            <th scope="col">Deaths</th>
            <td>${input.Deaths}</td>
            </tr>
    
            <tr>
            <th scope="col">Recovered</th>
            <td>${input.Recovered}</td>
            </tr>
    
            <tr>
            <th scope="col">Active</th>
            <td>${input.Active}</td>
            </tr>
    
            <tr>
            <th scope="col">Date</th>
            <td>${input.Date}</td>
            </tr>
    
            </thead>
            </table>
        
        `
        document.getElementById("Nigeria").innerHTML=output;
    })


})