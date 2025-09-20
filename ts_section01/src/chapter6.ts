// any
// 특정 변수의 타입을 우리가 확실히 모를때
let anyVar: any = 10;
anyVar = "hello";

// 타입스크립트의 타입 검사를 다 통과하는 치트키
let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// any와 달리 모든 타입에 값을 집어넣을 수 없다
// any와 다르게 toUpperCase같은 메서드도 쓸 수 없다, 연산도 안됨
// num = unknownVar;

if (typeof unknownVar === "number") {
  num = unknownVar;
}
