var locations = [];
var body = document.querySelector("body");
var table = document.createElement("table");
var tbody = document.createElement("tbody")

body.appendChild(table)
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
    var total = 0;
    this.results = []
    for(let i = 6; i< 20; i++){
        var calculatedAmount = Math.ceil(this.avgPerCust * this.randomNum())  
        this.results.push({
            time: getTime(i),
            amount: calculatedAmount
        })
        total += calculatedAmount;
    }
    this.results.totalAmount = total;
}
AddLocation.prototype.render = function(){
    var tr = document.createElement("tr")
    var td = document.createElement("td")
    td.textContent = this.locationName;
    tr.appendChild(td);
    for(let i = 0; i<this.results.length + 1; i++){
        var td = document.createElement("td");
        td.textContent = this.results[i] ? this.results[i].amount : this.results.totalAmount;
        tr.appendChild(td)
    }
    tbody.appendChild(tr)
}

var seattle = new AddLocation("Seattle", 23, 65, 6.3);
var tokyo = new AddLocation("Tokyo", 3, 24, 1.2);
var dubai = new AddLocation("Dubai", 11, 38, 3.7);
var paris = new AddLocation("Paris", 20, 38, 2.3);
var lima = new AddLocation("Lima", 2, 16, 4.6)
generateTable()
function generateTable(){
    createHeaders(6,20)
    createTableBody()
    createFooter()
}
function createHeaders(startingHour, endingHour){
    var thead = document.createElement("thead")
    var tr = document.createElement("tr")
    var th = document.createElement("th")
    th.textContent = "Location"
    tr.appendChild(th)
    for(let i = startingHour; i< endingHour; i++){
        var th = document.createElement("th")
        th.textContent = getTime(i)
        tr.appendChild(th)
    }
    var th = document.createElement("th")
    th.textContent = "Daily Location Total"
    th.setAttribute("width", "20px")
    tr.appendChild(th)
    thead.appendChild(tr)
    table.appendChild(thead)
}
function createTableBody(){
    seattle.render()
    tokyo.render()
    dubai.render()
    paris.render()
    lima.render()
    table.appendChild(tbody)
}
function createFooter(){
    var combinedTotals = 0;
    var tfoot = document.createElement("tfoot")
    var tr = document.createElement("tr")
    var td = document.createElement("td")
    td.textContent = "Totals"
    tr.appendChild(td)
    for(let i = 0; i<locations[0].results.length; i++){
        var total = 0;
        var td = document.createElement("td")
        for(let j = 0; j<locations.length; j++){
            total += locations[j].results[i].amount
        }
        combinedTotals += total;
        td.textContent = total;
        tr.appendChild(td)
    }
    var td = document.createElement("td")
    td.textContent = combinedTotals;
    tr.appendChild(td)
    tfoot.appendChild(tr)
    table.appendChild(tfoot)
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