let age = 33;
let userName = "Chuner";
let hobbies = ["Sports", "Cooking", "Reading"];
let job = { title: "Developer", place: "Nansha", salary: 900000 };

let totalAdultYears;

function calculateAdultYears(userAge) {
  return userAge - 18;
}

totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);

age = 45;
totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);

let person = {
  name: "CHun",
  greet() {
    console.log("Helo!");
  },
};

person.greet();
