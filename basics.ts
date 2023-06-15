//primitives: number, string, boolean
//More complex types:arrays, objects
//Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string | string[];

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["sports", "cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Max",
  age: 32,
};

let people: Person[];

// Type inference

let course: string | number = "React- The Complete Guide";

course = 12345;

// Fuctions & types

function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}
