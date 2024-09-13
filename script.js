document.addEventListener("DOMContentLoaded", () => {
    const yearInput = document.getElementById("yearValue");
    const form = document.getElementById("leapYearForm");
    const yesLeap = document.querySelector(".yesLeap");
    const noLeap = document.querySelector(".NoLeap");

    // Function to check leap year and update display
    function isItLeapYear(year) {
        let titleText;
        if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
            titleText = `${year} is a leap year`;
            yesLeap.classList.add("itisleapyear");
            noLeap.classList.add("itisnotleapyear");
        } else {
            titleText = `${year} is not a leap year`;
            noLeap.classList.add("itisleapyear");
            yesLeap.classList.add("itisnotleapyear");
        }

        // Update the page title
        document.title = titleText;
    }

    // Event listener for form submit
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const yearValue = yearInput.value;
        isItLeapYear(yearValue);
    });

    // Optionally, you can handle input changes if you want to update the title live
    yearInput.addEventListener("input", function() {
        const yearValue = yearInput.value;
        isItLeapYear(yearValue);
    });
});
