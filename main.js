"use strict";
// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var vehicleType;
(function (vehicleType) {
    vehicleType[vehicleType["Car"] = 0] = "Car";
    vehicleType[vehicleType["Truck"] = 1] = "Truck";
    vehicleType[vehicleType["Motorcycle"] = 2] = "Motorcycle";
})(vehicleType || (vehicleType = {}));
console.log(vehicleType.Car);
console.log("\n");
let Student = {
    name: "Zohaib",
    age: 39,
    courses: ["TypeScript", "JavaScript", "Python"]
};
console.log(Student);
console.log("\n");
let circle = {
    kind: "circle",
    radius: 5
};
let rectangle = {
    kind: "rectangle",
    width: 10,
    height: 20
};
console.log(circle);
console.log(rectangle);
