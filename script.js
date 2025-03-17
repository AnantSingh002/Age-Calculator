let date = document.getElementById('date');
let button = document.getElementById('button');
let currDate = new Date();

let getAge = () => {
    let birthdate = date.value;
    if (!birthdate) {
        alert('Please enter a valid date.');
        return;
    }

    let [birthYear, birthMonth, birthDay] = birthdate.split('-').map(Number);

    // Current date details
    let currYear = currDate.getFullYear();
    let currMonth = currDate.getMonth() + 1;
    let currDay = currDate.getDate();

    let years = currYear - birthYear;
    if (currMonth < birthMonth || (currMonth === birthMonth && currDay < birthDay)) {
        years--;
    }

    let months = currMonth - birthMonth;
    if (months < 0) {
        months += 12;
    }

    let days = currDay - birthDay;
    if (days < 0) {
        months--;
        let daysInPreviousMonth = new Date(currYear, currMonth - 1, 0).getDate();
        days += daysInPreviousMonth;

        if (months < 0) {
            years--;
            months += 12;
        }
    }

    output(years, months, days);
};

let output = (years, months, days) => {
    document.getElementById('years').innerText = `${years}`;
    document.getElementById('months').innerText = `${months}`;
    document.getElementById('days').innerText = `${days}`;
}

button.addEventListener('click', getAge);