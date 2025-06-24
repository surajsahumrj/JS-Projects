const btnEl = document.getElementById("btn");
const resultEl = document.getElementById("result");
const birthdayEl = document.getElementById("birthday");

function calculateAge() {
    const birthdayValue = birthdayEl.value;
    if (birthdayValue === "") {
        alert("Please enter your birthday");
    } else {
        const { years, months, days } = getAge(birthdayValue);
        resultEl.innerText = `Your age is ${years} years, ${months} months, and ${days} days.`;
    }
}

function getAge(birthdayValue) {
    const today = new Date();
    const birthDate = new Date(birthdayValue);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}

btnEl.addEventListener("click", calculateAge);

