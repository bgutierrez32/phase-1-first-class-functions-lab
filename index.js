// Code your solution in this file!
const drivers = ['Sally', 'Bob','Freddy', 'Claudia'];
function returnFirstTwoDrivers(){
    return drivers.slice(0, 2);
}
function returnLastTwoDrivers(){
    return drivers.slice(2, 4);
}
    const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(Fare){
    return function(multi){
        return multi*Fare;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers();
}
function selectDifferentDrivers(drivers, returnLastTwoDrivers){
    return returnLastTwoDrivers();
}