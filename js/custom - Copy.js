//global statistics
$(document).ready(function() {

    fetch('https://api.covid19api.com/summary')
    .then(function(res){
         return res.json()         
         })
    .then(function(data){
        console.log(data);
        let output = `
        <div class="inner mb-5"><p class="text-white">Total Deaths</p>
        <p class="">118,854</p></div>
        <h2 class="text-white text-center">Global Statistics</h2>`;
     let input = data.Global;
         output += ` 
        <ul class="ulbackground">        
        <li><span class="red">New Confirmed</span> ${input.NewConfirmed}</li>
        <hr>
        <li><span class="red">Total Confirmed</span> ${input.TotalConfirmed}</li>
        <hr>
        <li><span class="red">New Deaths</span> ${input.NewDeaths}</li>
        <hr>
        <li><span class="red">Total Deaths</span> ${input.TotalDeaths}</li>
        <hr>
        <li><span class="red">New Recovered</span> ${input.NewRecovered}</li>
        <hr>
        <li><span class="red">New Recovered</span> ${input.TotalRecovered}</li> 
        <hr>       
        </ul>        `
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
        //  
         data.Countries.forEach(function(input){
     output +=  `
     <select class="container">     
     <option><span class="red">Country </span>${input.Country}</option>
     <option><span class="red">Slug </span>${input.Slug}</option>    
     <option><span class="red">New Deaths </span>${input.NewDeaths}</option>
     <option><span class="red">Total Deaths </span>${input.TotalDeaths}</option>
     <option><span class="red">New Recovered </span>${input.NewRecovered}</option>
     <option><span class="red">Total Recovered </span>${input.TotalRecovered}</option>
     <option><span class="red">New confirmed </span>${input.NewConfirmed}</option>
     <option><span class="red">Total Confirmed </span><h3 class="white">${input.TotalConfirmed}</h3></option>
     <option><span class="red">Date </span>${input.Date}</option>
     </select>
   
        `   

        })  
        document.getElementById("countries").innerHTML= output;
        output = singleCountry;
    })      
  






        

        // <li><span class="red">Country Code: </span>${input.CountryCode}</li>
        // <hr>
        // <li><span class="red">Slug</span> ${input.Slug}</li>
        // <hr>
        // <li><span class="red">New Confirmed</span> ${input.NewConfirmed}</li>
        // <hr>
        // <li><span class="red">Total Confirmed</span> ${input.TotalConfirmed}</li>
        // <hr>     
        // <li><span class="red">Date</span> ${input.Date}</li>
        // <hr> 
   





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
            <ul class="ulbackground">        
            <li><span class="red">New Confirmed</span> ${input.Country}</li>
            <hr>
            <li><span class="red">Total Confirmed</span> ${input.Confirmed}</li>
            <hr>
            <li><span class="red">New Deaths</span> ${input.Deaths}</li>
            <hr>
            <li><span class="red">Total Deaths</span> ${input.Recovered}</li>
            <hr>
            <li><span class="red">New Recovered</span> ${input.Active}</li>
            <hr>
            <li><span class="red">New Recovered</span> ${input.Date}</li> 
            <hr>       
            </ul>        
        `
        document.getElementById("Nigeria").innerHTML=output;
    })

    
})
setTimeout(() => {
    console.log(countries);
}, 200);

