// 타입 단언
type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "김민정";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
  - 값 as 단언 <- 단언식
  - A as B
  - A가 B의 슈퍼타입이거나
  - A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;
// let num3 = 10 as string;

/**
 * const 단언
 */

let num4 = 10 as const; // number literal type

let cat = {
  name: "야옹",
  color: "yellow",
} as const; // 객체의 모든 프로퍼티가 readonly 읽기 전용 프로퍼티로 추론됨

/**
 * Not Null
 */
type Post = {
  title: string;
  author?: string; // 선택적 프로퍼티
};

let post: Post = {
  title: "post1",
  author: "홍길동",
};

const len: number = post.author!.length;
