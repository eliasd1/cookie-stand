'use strict'

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