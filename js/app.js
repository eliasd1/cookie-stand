var locations = [];
function AddLocation(locationName, minCust, maxCust, avgPerCust){
    this.locationName = locationName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgPerCust = avgPerCust
    this.results = [];
    this.simulateAmount();
    locations.push(this);
}
AddLocation.prototype.randomNum = function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust; 
}
AddLocation.prototype.simulateAmount = function(){
    this.results = []
    for(let i = 6; i< 20; i++){
        this.results.push({
            time: getTime(i),
            amount: Math.ceil(this.avgPerCust * this.randomNum())
        })
    }
}

var seattle = new AddLocation("Seattle", 23, 65, 6.3);
var tokyo = new AddLocation("Tokyo", 3, 24, 1.2);
var dubai = new AddLocation("Dubai", 11, 38, 3.7);
var paris = new AddLocation("Paris", 20, 38, 2.3);
var lima = new AddLocation("Lima", 2, 16, 4.6)


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