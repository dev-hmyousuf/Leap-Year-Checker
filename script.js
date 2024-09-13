
let yesLeap = document.querySelector(".yesLeap");
let noLeap = document.querySelector(".NoLeap");

document.getElementById("leapYearForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let yearValue = document.getElementById("yearValue").value; 
    isItLeapYear(yearValue); 
});

function isItLeapYear(year) {
    yesLeap.classList.remove("itisleapyear", "itisnotleapyear");
    noLeap.classList.remove("itisleapyear", "itisnotleapyear");
    let titleText = document.title;

    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        titleText = `${year} is a leap year.`
        yesLeap.classList.add("itisleapyear"); 
        noLeap.classList.add("itisnotleapyear"); 
    } else {
        titleText = `${year} is not a leap year.`
        noLeap.classList.add("itisleapyear"); 
        yesLeap.classList.add("itisnotleapyear"); 
    }
}
