// Easy: Exercise of the Day
function exerciseOfTheDay() {
    const exercises = ["Running", "Swimming", "Dancing", "Fencing", "Lifting Weights", "Yoga", "Basketball"];
    const dayOfWeek = new Date().getDay(); // 0 (Sunday) to 6 (Saturday)
    const todayExercise = exercises[dayOfWeek];

    return function() {
        console.log("Today's exercise:", todayExercise);
        document.getElementById("exercise-of-the-day").textContent = `Today's exercise: ${todayExercise}`;
    };
}

const generateExercise = exerciseOfTheDay();
document.getElementById("generate-exercise").addEventListener("click", generateExercise);
document.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        generateExercise();
    }
});

// Medium: Pizza Portion Calculator
function sharePizza() {
    const totalSlices = parseFloat(document.getElementById("total-slices").value);
    const totalPeople = parseFloat(document.getElementById("total-people").value);
    const pizzaType = document.getElementById("pizza-type").value;

    if (isNaN(totalSlices) || isNaN(totalPeople) || totalPeople === 0) {
        document.getElementById("pizza-slices-result").textContent = "Please enter valid numbers.";
        return;
    }

    const slicesPerPerson = totalSlices / totalPeople;
    const formattedSlices = slicesPerPerson.toFixed(2);
    const result = `Each person gets ${formattedSlices} slices of ${pizzaType} from our ${totalSlices}-slice pizza.`;

    console.log(result);
    document.getElementById("pizza-slices-result").textContent = result;
}

document.getElementById("calculate-slices").addEventListener("click", sharePizza);
document.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        sharePizza();
    }
});

// Hard: Personal Information
function createPII(name, ssn, gymClass) {
    const PII = {
        name: name,
        SSN: ssn,
        gymClass: gymClass
    };

    return {
        getName: function() {
            return PII.name;
        },
        getClass: function() {
            return PII.gymClass;
        }
    };
}

function displayPII() {
    const name = document.getElementById("name").value.trim();
    const ssn = document.getElementById("ssn").value.trim();
    const gymClass = document.getElementById("gym-classes").value;

    if (!name || !ssn || !gymClass) {
        alert("Please enter your name, SSN, and select a class.");
        return;
    }

    if (!/^\d{3}-\d{2}-\d{4}$/.test(ssn)) {
        alert('SSN must be in the format XXX-XX-XXXX');
        return;
    }

    const personInfo = createPII(name, ssn, gymClass);
    console.log("Name:", personInfo.getName());
    console.log("SSN:", ssn);

    document.getElementById("person-name").textContent = personInfo.getName();
    document.getElementById("person-ssn").textContent = ssn.replace(/./g, "*");
    document.getElementById("person-class").textContent = personInfo.getClass();

    alert('Sign up successful!');
}

document.getElementById("show-info").addEventListener("click", displayPII);
document.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        displayPII();
    }
});


//Very Hard: Programmer
class Person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }

    exercise() {
        console.log(`${this.name} says: Ready to hit the exercise of the day after work!`);
    }

    fetchJob() {
        console.log(`${this.name} is a ${this.job}`);
    }
}

class Programmer extends Person {
    constructor(name, job, age, languages) {
        super(name, job, age);
        this.languages = languages;
        this.busy = true;
    }

    completeTask() {
        this.busy = false;
        console.log(`${this.name} has completed a task. Busy: ${this.busy}`);
    }

    acceptNewTask() {
        this.busy = true;
        console.log(`${this.name} has accepted a new task. Busy: ${this.busy}`);
    }

    offerNewTask() {
        if (this.busy) {
            console.log(`${this.name} can't accept any new tasks right now.`);
        } else {
            console.log(`${this.name} would love to take on a new responsibility.`);
        }
    }

    learnLanguage(newLanguage) {
        this.languages.push(newLanguage);
    }

    listLanguages() {
        console.log(`${this.name} knows ${this.languages.join(', ')}.`);
    }
}

const programmer1 = new Programmer("Noe", "Front-end Developer", 26, ["HTML", "CSS", "JavaScript"]);
const programmer2 = new Programmer("Noah", "Back-end Developer", 30, ["Python", "Nodejs", "SQL"]);

function displayProgrammerDetails() {
    const personDetails = document.getElementById("person-details");
    personDetails.innerHTML = `
        <p>${programmer1.name} is a ${programmer1.job} and knows ${programmer1.languages.join(', ')}. Busy: ${programmer1.busy}</p>
        <p>${programmer2.name} is a ${programmer2.job} and knows ${programmer2.languages.join(', ')}. Busy: ${programmer2.busy}</p>
    `;
}

document.getElementById("show-programmer-details").addEventListener("click", displayProgrammerDetails);

document.getElementById("programmer1-complete-task").addEventListener("click", () => {
    programmer1.completeTask();
    displayProgrammerDetails();
});

document.getElementById("programmer1-accept-new-task").addEventListener("click", () => {
    programmer1.acceptNewTask();
    displayProgrammerDetails();
});

document.getElementById("programmer1-fetch-job").addEventListener("click", () => {
    programmer1.fetchJob();
});

document.getElementById("programmer1-offer-new-task").addEventListener("click", () => {
    programmer1.offerNewTask();
});

document.getElementById("programmer1-exercise").addEventListener("click", () => {
    programmer1.exercise();
});

document.getElementById("programmer2-complete-task").addEventListener("click", () => {
    programmer2.completeTask();
    displayProgrammerDetails();
});

document.getElementById("programmer2-accept-new-task").addEventListener("click", () => {
    programmer2.acceptNewTask();
    displayProgrammerDetails();
});

document.getElementById("programmer2-fetch-job").addEventListener("click", () => {
    programmer2.fetchJob();
});

document.getElementById("programmer2-offer-new-task").addEventListener("click", () => {
    programmer2.offerNewTask();
});

document.getElementById("programmer2-exercise").addEventListener("click", () => {
    programmer2.exercise();
});
