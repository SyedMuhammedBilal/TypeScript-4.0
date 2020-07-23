console.log('Hello from TS');
//let a = 1
//a = true
//a = [1, 2, 3]
//let std = {}
//console.log(std.name)
//function a(b) {
//  return b / 2
//};
//a("2"); 
//let firstName: string = "Syed";
//let lastName: string = "Bilal";
//let age: number = 18;
//let isActive: boolean = true;
//let courses: string[] = ["TS", "JS", "REACT"];
//type Student = {
//  name: string;
//  age: number;
//  courses: string[];
//};
//
//const std1: Student = {
//  name: "Bilal",
//  age: 18,
//  courses: ["Ai", "CNC", "BC"]
//};
//const arr: [boolean, number, ...string[]] = [
//  true, 1, "Bilal", "areeb"
//];
//const availableCourses: readonly string[] = [
//  "Ai",
//  "CNC",
//  "BCC"
//];
//availableCourses[1] = "iOT"
var Axiom;
(function (Axiom) {
    Axiom[Axiom["CNC"] = 0] = "CNC";
    Axiom[Axiom["AIC"] = 1] = "AIC";
    Axiom[Axiom["BCC"] = 2] = "BCC";
    Axiom[Axiom["IOT"] = 3] = "IOT";
})(Axiom || (Axiom = {}));
;
console.log(Axiom.AIC);
function greet(name) {
    return "Hello" + name;
}
;
greet("bilal");
