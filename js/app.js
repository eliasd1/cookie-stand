
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