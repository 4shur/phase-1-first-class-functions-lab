// Code your solution in this file!
const returnFirstTwoDrivers = (array) => array.slice(0,2)
const returnLastTwoDrivers = (array) => array.slice(-2)
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
function createFareMultiplier(fare){
    return function(){
        return fare*5
    }
}
const fareDoubler = fare => fare*2
const fareTripler = fare => fare*3
function selectDifferentDrivers(driver,array){
    return array(driver)
}