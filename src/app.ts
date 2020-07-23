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

enum Axiom {
  CNC,
  AIC,
  BCC,
  IOT
};

console.log(Axiom.AIC);

function greet(name: string){
  return "Hello" + name
};

greet("bilal");