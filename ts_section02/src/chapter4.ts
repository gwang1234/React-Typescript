/**
 * 합집합 - Union 타입
 */
let a: string | number;
a = 1;
a = "hello";

let arr: (number | string)[] = [1, "hello"];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// let union4: Union1 = {
//   // 오류가 출력
//   name: "",
// };

/**
 * 교집합 - Intersection 타입
 */
let variable: number & string;

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};
