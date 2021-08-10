// Code your solution in this file!
function returnFirstTwoDrivers(a){
    const inner = function() {
        let drivers = a.slice(0,2);
        return drivers;
    }
    return inner();
}

function returnLastTwoDrivers(a){
    const inner = function() {
        let drivers = a.slice(-2);
        return drivers;
    }
    return inner();
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    const output = function(fare){
        return fare*int;
    }
    return output;
}

function fareDoubler(fare){
    return createFareMultiplier(2)(fare);
}

function fareTripler(fare){
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(arrayOfDrivers, func){
    switch(true){
        case func ===returnFirstTwoDrivers:
            return returnFirstTwoDrivers(arrayOfDrivers);
        case func === returnLastTwoDrivers:
            return returnLastTwoDrivers(arrayOfDrivers);
    }
}