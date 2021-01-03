var seattle = {
    locationName: "Seattle",
    minCust: 23,
    maxCust: 65,
    avgPerCust:6.3,
    randomNum: function(){
        var min = Math.ceil(this.minCust); 
        var max = Math.floor(this.maxCust); 
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    },
    simulatedAmount: function(){
        this.results = []
        for(let i = 6; i< 20; i++){
            this.results.push({
                time: getTime(i),
                amount: Math.ceil(this.avgPerCust * this.randomNum())
            })
        }
    },
    results: [],
}
var tokyo = {
    locationName: "Tokyo",
    minCust: 3,
    maxCust: 24,
    avgPerCust:1.2,
    randomNum: function(){
        var min = Math.ceil(this.minCust); 
        var max = Math.floor(this.maxCust); 
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    },
    simulatedAmount: function(){
        this.results = []
        for(let i = 6; i< 20; i++){
            this.results.push({
                time: getTime(i),
                amount: Math.ceil(this.avgPerCust * this.randomNum())
            })
        }
    },
    results: []
}
var dubai = {
    locationName: "Dubai",
    minCust: 11,
    maxCust: 38,
    avgPerCust:3.7,
    randomNum: function(){
        var min = Math.ceil(this.minCust); 
        var max = Math.floor(this.maxCust); 
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    },
    simulatedAmount: function(){
        this.results = []
        for(let i = 6; i< 20; i++){
            this.results.push({
                time: getTime(i),
                amount: Math.ceil(this.avgPerCust * this.randomNum())
            })
        }
    },
    results: [],
}
var paris = {
    locationName: "Paris",
    minCust: 20,
    maxCust: 38,
    avgPerCust: 2.3,
    randomNum: function(){
        var min = Math.ceil(this.minCust); 
        var max = Math.floor(this.maxCust); 
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    },
    simulatedAmount: function(){
        this.results = []
        for(let i = 6; i< 20; i++){
            this.results.push({
                time: getTime(i),
                amount: Math.ceil(this.avgPerCust * this.randomNum())
            })
        }
    },
    results: [],
}
var lima = {
    locationName: "Lima",
    minCust: 2,
    maxCust: 16,
    avgPerCust:4.6,
    randomNum: function(){
        var min = Math.ceil(this.minCust); 
        var max = Math.floor(this.maxCust); 
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    },
    simulatedAmount: function(){
        this.results = []
        for(let i = 6; i< 20; i++){
            this.results.push({
                time: getTime(i),
                amount: Math.ceil(this.avgPerCust * this.randomNum())
            })
        }
    },
    results: [],
}
var locations = [seattle, tokyo, dubai, paris, lima]
simulateAmount(locations);
var body = document.querySelector("body")
for (let i = 0; i < locations.length; i++){
    var total = 0;
    var ul = document.createElement("ul");
    var p = document.createElement("p")
    p.textContent = locations[i].locationName;
    body.appendChild(p)
    body.appendChild(ul);
    for(let j = 0; j<locations[i].results.length; j++){
        var li = document.createElement("li");
        li.textContent = locations[i].results[j].time + ": " + locations[i].results[j].amount + " cookies";
        total += locations[i].results[j].amount;
        ul.appendChild(li);
    }
    var li = document.createElement("li");
    li.textContent = "Total: " + total + " cookies"
    ul.appendChild(li)
}

function getTime(i){
    if(i === 12){
        return i + "pm"
    } else if(i < 13){
        return i + "am"
    } else{
        return (i-12) + "pm"
    }
}
function simulateAmount(locations){
    for(let i = 0; i<locations.length; i++){
        locations[i].simulatedAmount();
    }
}