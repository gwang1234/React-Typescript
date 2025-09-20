/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/**
 * 객체 타입간의 호환성
 */
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "푸들",
};

animal = dog; // 에러가 일어나지 않습니다
// dog = animal;// 에러가 일어 납니다.

/***
 * 추가 예시
 */
type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라 먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook;

let book2: Book = {
  name: "한 입 크기로 잘라 먹는 리액트",
  price: 33000,
  //   skill: "reactjs", // 오류가 출력됩니다
};
