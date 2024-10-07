const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

const firstTwo = returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);
console.log(firstTwo);

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}
 const lastTwo = returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);
 console.log(lastTwo);


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, selectFunction) {
    return selectFunction(drivers);
};

