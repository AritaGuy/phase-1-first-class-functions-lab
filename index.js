// Code your solution in this file!
const drivers = ['Jessy','Mitchel','Happy'];
const returnFirstTwoDrivers = function(d){
    return [d[0],d[1]]
}
returnFirstTwoDrivers(drivers)
const returnLastTwoDrivers =  function(d){
    return [d[d.length-2],d[d.length-1]]
}
returnLastTwoDrivers(drivers)
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
const createFareMultiplier = a =>{
     return function fareMultiplier(cost) 
       { 
        return  (cost * a) }
       
        
}

const doubleFare = createFareMultiplier(2)
function fareDoubler (ferrari){
       return doubleFare(ferrari) 
}
const triple = createFareMultiplier(3)
function fareTripler (ferrari){
    return triple(ferrari)
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);
}




