//primitives: number, string, boolean
//More complex types:arrays, objects
//Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string;

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["sports", "cooking"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Max",
  age: 32,
};

let people: {
  name: string;
  age: number;
}[];

// Type inference

let course = "React- The Complete Guide";

// course = 12345;
